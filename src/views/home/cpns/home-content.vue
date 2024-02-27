<template>
  <div class="home-content">
    <p class="title">热门精选</p>
    <div class="lists">
      <template v-for="item in houseList" :key="item">
        <!-- <houseItemV3 :itemData="item.data"></houseItemV3> -->
        <!-- <houseItemV9 v-else :itemData="item.data"></houseItemV9> -->
        <houseItemV3 v-if="item.discoveryContentType === 9" :itemData="item.data"></houseItemV3>
        <houseItemV9 v-else :itemData="item.data"></houseItemV9>
        
      </template>
    </div>
  </div>
</template>

<script setup>
import useHome from '@/stores/modules/home';
import { storeToRefs } from 'pinia';
import houseItemV3 from "@/components/house-item-v3/house-item-v3.vue"
import houseItemV9 from '@/components/house-item-v9/house-item-v9.vue';
const homeStore = useHome()
const { houseList } = storeToRefs(homeStore)
</script>

<style lang="less" scoped>
.home-content {
  padding: 10px;
  background: #ccc;
  .title {
  font-size: 18px;  
  padding-left: 3px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAAwCAMAAADtsU7hAAAAclBMVEUAAAD/l0j/l0b/l0b/l0f/lkf/l0b/l0b/l0b/l0f/l0b/l0X/lkb/lkX/lkb/mUf/lkX/l0b/lkX/l0X/l0b/l0X/lkb/l0b/lkX/lkX/lkb/mEn/lkb/lkX/mUv/lkb/lkb/l0b/l0b/l1P/m0z/nk01eoyFAAAAJnRSTlMAMj9EOjZoT0kplI+BYpklhlSofIptWS6ddXEgpKEZX3itXAcTDG1j5z8AAAK1SURBVFjDxdYNdqowEIbhISgYEQHlT6KgJux/i3cKTTiY0CqE3ncBfc58qR5hXqJw/TwMc59QAX8W24VZlnlfhWHY5Jsa/iBBvApTMMrNMylaWDeWXy6XL3YMP/OcrHl21NzvGtz0cJ64A80ppVEf61uyCPXO92+40i5GOBlo7mIE22DbreM48/dg4RmTcGWEE58IDd4ugsXzcBhgtfUwdS/7vu9wixfz3QFTsHL1i7FdZO1i5x738PQbDxejTGorF9deHCv4nYuxjYWLSZxK2Dx1M4Z7efHFdZai+yMcrgG7KRabp87Mb7yT8IKp6yoI0o8v3i2G3TRAGHsPzi1NXVf7ADNPjbT39F3XT3R44dQk2CNsnBrl54Zx6OL11rf4z9V6+/0knBEBo4STdDBmuhh7F47So4Kx0dQhNf8osTG1fzxKOH25uIkm/yfcpVO3lyNmnNobWDMt3TkwDcoSYcPUlfP7r8D5U/sluqaLzy6HX+N0aupC/Dxzdetg/eJGvPl52BgvRpn9NFVwuxkvvhcffNG6xouLIpqcjJQ3M5y38EHcMV2MNJ1Yrbleryhr8Fme+8HRo4sVTGvT4xxOHVxiI7iR5350tGFqhCnT5mb7E8L61AcHZlWTl6k7WJc319PJdLEnz51xtBGOotFfzB8nCY8uJrAgpqYe4AgTIOOXxzd8wwb4zGBR7dZ0ccSkLNLHw3RxyGFhnJouZqzm3SLlQ8KjNyZgoRpdebK6uJedE7JqagXHDKzUOr1byKmVXKGqT521YClO9akxASi/XIxwAhZjCI+m7l2UB7iX9w5YTWhTC+jKxlOnNViuLdTHSbpKHuBLC9bjkXpjTIDKG964gVVi42+uQZawCysl5NQvD+l1cFnAarUmFwsRDhisGI8QRleXY2GZ0mV09VwOayfg//cP8g+H7R0Q1dgAAAAASUVORK5CYII=) no-repeat -5px center / 26% 80%;
  }
  .lists {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
