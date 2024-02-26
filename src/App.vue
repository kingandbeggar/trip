<template>
  <div class="home">
    <router-view></router-view>
    <tabBar></tabBar>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import tabBar from './components/tab-bar/tab-bar.vue';
const checked = ref(true);
</script>

<style lang="less" scoped>

</style>
