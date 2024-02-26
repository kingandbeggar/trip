<template>
  <div class="tabbar">
    <template v-for="item,index in tabbarData" :key="item">
      <div class="item" @click="changeitem(index)" :class="{active: currentIndex === index}">
        <img v-if="currentIndex !== index" :src="getAssetsUrl(item.url)" alt="">
        <img v-else :src="getAssetsUrl(item.activeUrl)" alt="">
        <span>{{ item.name }}</span>
      </div>
    </template>

  </div>
</template>

<script setup>

import { ref } from "vue";
import tabbarData from "@/assets/data/tabbar"
import {getAssetsUrl} from "@/utils/load_assets"
import { useRouter } from "vue-router";
const currentIndex = ref(0)
const router = useRouter()
function changeitem(index) {
  currentIndex.value = index
  router.push(tabbarData[index].path)
}


</script>

<style lang="less" scoped>
.tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 50px;
  padding-bottom: 4px;
  border-top: 1px solid #ccc;
  box-sizing: border-box;
  .item {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    flex: 1;
    &.active {
      color: var(--primary-color);
    }
    img {
      width: 30px;
    }
  }
}
</style>
