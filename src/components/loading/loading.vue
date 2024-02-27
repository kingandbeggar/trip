<template>
  <div class="loading" @click="clickLoading" v-show="showloading">
    <div class="bg">
      <img src="../../assets/img/home/full-screen-loading.gif" alt="">
    </div>
  </div>
</template>

<script setup>
import useMain from "@/stores/modules/main"
import { storeToRefs } from "pinia";
const mainStore = useMain()
const { showloading } = storeToRefs(mainStore)

const clickLoading = () => {
  showloading.value = false
}
</script>

<style lang="less" scoped>
.loading {
  position: fixed;
  z-index: 9999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  // margin: auto;
  background: rgba(0, 0, 0, .3);
  .bg {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 100px;
    transform: translate(-50%,-50%);
    background: url(../../assets/img/home/loading-bg.png) 0 0 / 100% 100%;
    img {
      width: 72%;
      height: 72%;
      margin-top: 10px;
      margin-left: 14px;
    }
  }
}
</style>
