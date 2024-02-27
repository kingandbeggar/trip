<template>
  <div class="home">
    <loading></loading>
    <router-view></router-view>
    <tabBar v-if="!hideTabbar"></tabBar>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import tabBar from './components/tab-bar/tab-bar.vue';
import { useRoute } from 'vue-router';
import loading from "@/components/loading/loading.vue"

const route = useRoute()
const hideTabbar = computed(() => {
  return route.meta.hideTabbar
})



</script>

<style lang="less" scoped>

</style>
