<template>
  <div class="city">
      <div class="top">
        <van-search
        v-model="value"
        shape="round"
        show-action
        placeholder="城市/区域/位置"
        @clear="clearValue"
        @cancel="onCancel"
        />
        <van-tabs v-model:active="active" color="#ff9854" line-height="2px" swipeable>
          <template v-for="value,key,index in cityData" :key="value.title">
            <van-tab :title="value.title" :name="key">
            </van-tab>
          </template>
        </van-tabs>
      </div>

      <div class="content">
        <template v-for="value,key,index in cityData">
          <cityGroup v-show="key === active" :cityItem="value"></cityGroup>          
        </template>
      </div>

  </div>
</template>

<script setup>
import {computed, ref} from "vue"
import { useRouter } from "vue-router";
import {storeToRefs} from "pinia"
import useCity from "@/stores/modules/city"
import cityGroup from "./cpns/city-group.vue"
const value = ref("")
const router = useRouter()
//点击x
const clearValue = () => {
  value.value = ""
}
//点击取消
const onCancel = () => {
  router.back()
}
//网络请求都放到pinia里去
const active = ref('')
const cityStore = useCity()
cityStore.getCityData()
const {cityData} = storeToRefs(cityStore)
const cityItem = computed(() => {
  return cityData.value[active.value]
})
</script>

<style lang="less" scoped>
.city {
  --van-tabs-line-height: 35px !important;
  .top {
    position: relative;
    z-index: 9 !important;
  }
  .content {
    height: calc(100vh - 89px);
    overflow-y: auto;
  }
}
</style>
