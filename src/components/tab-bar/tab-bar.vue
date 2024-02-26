<template>
  <div class="tabbar">
    <!-- <template v-for="item,index in tabbarData" :key="item">
      <div class="item" @click="changeitem(index)" :class="{active: currentIndex === index}">
        <img v-if="currentIndex !== index" :src="getAssetsUrl(item.url)" alt="">
        <img v-else :src="getAssetsUrl(item.activeUrl)" alt="">
        <span>{{ item.name }}</span>
      </div>
    </template> -->
    <van-tabbar v-model="currentIndex" active-color="#ff9854">
      <template v-for="item,index in tabbarData" :key="item">
        <van-tabbar-item :to="item.path">
          <!-- 相当于放到了默认插槽 
                  <tempalte #default>
                    <span>{{ item.name }}</span> 
                  </tempalte>
          -->
          <span>{{ item.name }}</span>   
          <template #icon="props">
            <!-- 两种写法 -->
            <!-- <img :src="props.active ? getAssetsUrl(item.activeUrl) : getAssetsUrl(item.url)" /> -->
            <img v-if="currentIndex !== index" :src="getAssetsUrl(item.url)" />
            <img v-else :src="getAssetsUrl(item.activeUrl)" />
          </template>
        </van-tabbar-item>
      </template>      
    </van-tabbar>


  </div>
</template>

<script setup>

import { ref } from "vue";
import tabbarData from "@/assets/data/tabbar"
import {getAssetsUrl} from "@/utils/load_assets"

const currentIndex = ref(0)

</script>

<style lang="less" scoped>
.tabbar {
  :deep(.van-tabbar-item__icon img) {
    height: 25px;
  }
}
</style>
