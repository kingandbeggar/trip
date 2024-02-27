<template>
  <div class="inner">
    <div class="left">
      <div class="live">住<span>{{ live }}</span></div>
      <div class="leave">离<span>{{ leave }}</span><i></i></div>
    </div>
    <div class="right">
      <span>关键字/位置/民宿名</span>
      <van-icon name="search" size="25"/>
    </div>
  </div>
</template>

<script setup>
import { formatMonthDay } from '@/utils/format_date';
import useMain from '@/stores/modules/main';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
const mainStore = useMain()
const { nowDate, leaveDate } = storeToRefs(mainStore)
const live = computed(() => {
  return formatMonthDay(nowDate.value, "MM.DD")
})
const leave = computed(() => {
  return formatMonthDay(leaveDate.value, "MM.DD")
})
</script>

<style lang="less" scoped>
.inner {
  display: flex;
  align-items: center;
  height: 45px;
  border-radius: 6px;
  color: #999;
  background: #f2f4f6;
  .left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding-left: 10px;
    border-right: 1px solid #fff;
    font-size: 10px;
    span {
      color: #333;
    }
    .leave {
      display: flex;

      i {
        position: relative;
        top: 3px;
        width: 0px;
        height: 0px;
        border: 3px solid #000;
        border-top-color: transparent;
        border-left-color: transparent;
        margin-left: 1px;
      }
    }
  }
  .right {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
  }
}
</style>
