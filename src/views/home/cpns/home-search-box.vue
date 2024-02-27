<template>
  <div class="home-search-box">
    <div class="location  section">
      <div class="city" @click="changeCity">{{ cityStore.currentcity.cityName }}</div>
      <div class="position" @click="positionClick">
        <span>我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
        <!-- <i></i> -->
      </div>
    </div>
    <!-- 日期 -->
    <div class="date-range section" @click="show = true">
      <div class="start">
        <span>入住</span>
        <div class="date">{{ start }}</div>
      </div>
      <div class="stay">共{{stay}}晚</div>
      <div class="end">
        <span>离店</span>
        <div class="date">{{ end }}</div>
      </div>
    </div>
    <van-calendar v-model:show="show" type="range" @confirm="onConfirm" :round="false" :show-confirm="true"/>
    <!-- 价格/人数 -->
    <div class="price-count section">
      <div class="price">价格不限</div>
      <div class="count">人数不限</div>
    </div>
    <!-- 关键字 -->
    <div class="keywords section">
      关键字/位置/民宿名
    </div>
    <!-- 建议景点 -->
    <div class="suggest section">
      <template v-for="item in suggests" :key="item.tagLink">
        <div class="suggest-item" :style="{background: item.tagText.background.color, color: item.tagText.color}">{{ item.tagText.text }}</div>
      </template>
    </div>
    <!-- 搜索 -->
    <div class="search scetion">
        <div class="btn" @click="gosearch">开始搜索</div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import useCity from "@/stores/modules/city.js"
import useHome from "@/stores/modules/home"
import { formatMonthDay, getdiffday } from '@/utils/format_date';
import { computed, ref } from 'vue';
import { storeToRefs } from 'pinia';
import useMain from '@/stores/modules/main';
const cityStore = useCity()
const homeStore = useHome()
const mainStore = useMain()
const { suggests } = storeToRefs(homeStore)
const router = useRouter()

//todo
const positionClick = () => {
  console.log("获取到的经纬度：")
}

const changeCity = () => {
  router.push("/city")
}

// const now = new Date()
// const leave = new Date().setDate(now.getDate() + 1)
// const start = ref(formatMonthDay(now))
// const end = ref(formatMonthDay(leave)) //传时间戳进去也行new Date().gettime() + 24 * 60 * 60 * 1000
const { nowDate, leaveDate, stay } = storeToRefs(mainStore)
const start = computed(() => {
  return formatMonthDay(nowDate.value)
})
const end = computed(() => {
  return formatMonthDay(leaveDate.value)
})
// const last = computed(() => {
//   return getdiffday(leaveDate.value, nowDate.value)
// })

const show = ref(false)
const onConfirm = (date) => {
  const selectstart = date[0]
  const selectend = date[1]
  show.value = false
  mainStore.nowDate = date[0]
  mainStore.leaveDate = date[1]
  // start.value = formatMonthDay(selectstart)
  // end.value = formatMonthDay(selectend) 
  mainStore.stay = getdiffday(date[1], date[0])
}

const gosearch = () => {
  router.push({
    path: "/search",
    query: {
      start: start.value,
      end: end.value,
      city: cityStore.currentcity.cityName
    }
  })
}
</script>

<style lang="less" scoped>
.home-search-box {
  --van-calendar-popup-height: 100%;
  .section {
    height: 40px;
    padding: 0 10px 0 20px;
    border-top: 1px solid #f8f9f9;
  }
  .location {
    display: flex;
    align-items: center;
    .city {
      flex: 1;
    }
    .position {
      display: flex;
      align-items: center;
      span {
        font-size: 12px;
        font-weight: 300;
        color: #666;
        margin-right: 4px;
      }
      img {
        width: 18px;
        height: 18px;
      }
      // i {
      //   width: 18px;
      //   height: 18px;
      //   background: url(@/assets/img/home/icon_location.png) left top / 100%;
      // }
    }
  }
  .date-range {
    display: flex;
    align-items: center;
    height: 44px;
    font-size: 15px;
    span {
      font-size: 10px;
      color: #999;
    }
    .stay {
      flex: 1;
      text-align: center;
      font-size: 12px;
      color: #666;
    }
    .end {
      width: 120px;
    }
  }
  .price-count {
    display: flex;
    align-items: center;
    color: #999;
    line-height: 40px;
    .price {
      flex: 1;
    }
    .count {
      width: 120px;
      padding-left: 20px;
      border-left: 1px solid #f8f9f9;
    }
  }
  .keywords {
    color: #999;
    line-height: 40px;
  }
    .suggest {
      display: flex;
      flex-wrap: wrap;
      padding-top: 10px;
      height: auto;
      .suggest-item {
        display: flex;
        align-items: center;
        font-weight: 400;
        font-size: 12px;
        color: #3f4954;
        background-color: rgb(241, 243, 245);
        border-radius: 14px;
        padding: 4px 8px;
        height: 22px;
        box-sizing: border-box;
        margin-right: 4px;
        margin-bottom: 4px;
      }
    }
    .search {
      display: flex;
      justify-content: center;
      border-top: 0 solid #000;
      margin-top: 5px;
      .btn {
        width: 342px;
        height: 38px;
        line-height: 38px;
        font-weight: 500;
        font-size: 18px;
        color: #fff;
        border-radius: 20px;
        background: var(--theme-linear-color);
        text-align: center;
      }
    }
}

</style>
