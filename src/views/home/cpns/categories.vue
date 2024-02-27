<template>
  <div class="categories">
    <template v-for="item in categories" :key="item.id">
      <div class="item">
        <img :src="item.pictureUrl" alt="">
        <span>{{ item.title }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
import useHome from '@/stores/modules/home';
import { storeToRefs } from 'pinia';
const homeStore = useHome()
const { categories } = storeToRefs(homeStore)
</script>

<style lang="less" scoped>
.categories {
  display: flex;
  text-align: center;
  font-size: 12px;
  padding: 0 20px;
  margin-top: 10px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 5px;
    img {
      width: 40px;
    }
    span {
      margin-top: 3px;
      white-space: nowrap;
    }
  }
}
</style>
