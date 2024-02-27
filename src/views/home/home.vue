<template>
  <div class="home">
    <homeNavBar></homeNavBar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <homeSearchBox></homeSearchBox>
    <categories></categories>
    <homeContent></homeContent>
    
    <!-- 回到顶部 -->
    <van-icon name="back-top" class="gotop" v-show="showgotop" @click="gotop"/>
    <!-- searchbar -->
    <div class="search-bar" v-show="showgotop">
      <searchBar></searchBar>
    </div>
  </div>
</template>

<script setup>
import useHome from "@/stores/modules/home"
import homeNavBar from './cpns/home-nav-bar.vue';
import homeSearchBox from './cpns/home-search-box.vue';
import categories from './cpns/categories.vue';
import homeContent from "./cpns/home-content.vue";
import usescroll from "@/hooks/usescroll";
import { computed, ref, watch } from "vue";
import searchBar from "@/components/search-bar/search-bar.vue";

const homeStore = useHome()
homeStore.fetchSuggests()
homeStore.fetchCategories()
homeStore.fetchHouseList()


const { isbottom, scrollTop, scrollHeight } = usescroll()
watch(isbottom, (newvalue,oldvalue) => {
  if(newvalue) {
    homeStore.fetchHouseList().then(res => {
      isbottom.value = false
    })
  }
})

const showgotop = computed(() => {
  return scrollTop.value >= 100
})
const gotop = () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}
</script>

<style lang="less" scoped>
.home {
  .banner {
    img {
      width: 100%;
    }
  }
  .gotop {
    position: fixed;
    bottom: 60px;
    right: 10px;
    border-radius: 50%;
    padding: 10px;
    background: #ff9854;
    z-index: 999;
    color: #fff;
    font-weight: 700;
  }
  .search-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 71px;
    padding: 16px 16px 10px;
    background: #fff;
    box-sizing: border-box; 
    animation: heightup 1s;
    overflow: hidden;
  }
  @keyframes heightup {
    from {
      height: 0;
    }
    to {
      height: 71px;
    }
  }
}
</style>
