<template>
  <!-- <div class="city-group">
    <template v-for="item, index in cityItem.cities">
      <div>{{ item.group }}</div>
      <template v-for="iten, indey in item.cities">
          <div>{{ iten.cityName }}</div>
      </template>
    </template>
  </div> -->
  <!-- <div class="city-group">
    <template v-for="item, index in cityItem.cities">
      <div>{{ item.group }}</div>
      <template v-for="iten, indey in item.cities">
          <div>{{ iten.cityName }}</div>
      </template>
    </template>
  </div> -->

  <van-index-bar highlight-color="#ff9854" :index-list="indexList">
    <van-index-anchor index="热门城市" />
    <div class="hotCitys">
      <template v-for="item in cityItem.hotCities">
        <div class="item" @click="cityClick(item)">{{ item.cityName }}</div>
      </template>
    </div>
    <template v-for="item, index in cityItem.cities">
      <van-index-anchor :index="item.group" />
      <template v-for="iten, indey in item.cities">
          <van-cell :title="iten.cityName" @click="cityClick(iten)"/>
      </template>
    </template>
  </van-index-bar>

</template>

<script setup>
import { computed } from 'vue';
import useCity from "@/stores/modules/city"
import { useRouter } from 'vue-router';
  const props = defineProps({
    cityItem: {
      type: Object,
      default:() => ({})
    }
  })

  const indexList = computed(() => {
    const arr = props.cityItem.cities.map(item => item.group)
    arr.unshift("#")
    return arr
  })
  const router = useRouter()
  const cityStore = useCity()
  const cityClick = (city) => {
    console.log(city)
    cityStore.currentcity = city
    router.back()

  }
</script>

<style lang="less" scoped>
.hotCitys {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 15px;
  .item {
    margin-top: 15px;
    margin-right: 9px;
    width: 70px;
    height: 28px;
    line-height: 28px;
    font-weight: 300;
    font-size: 12px;
    color: #333;
    text-align: center;
    background-color: #fff4ec;
    border-radius: 14px;
  }
}
</style>
