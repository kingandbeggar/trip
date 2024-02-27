<template>
  <div class="house-item-v3">
    <div class="inner">
      <div class="cover">
        <img :src="itemData.image.url" alt="">
      </div>
      <div class="info">
        <div class="summary">{{ itemData.summaryText }}</div>
        <div class="name ellipsis">{{ itemData.houseName }}</div>
        <div class="bottom">
          <van-rate
            :model-value="commentScore"
            :size="10"
            color="#ffd21e"
            void-icon="star"
            void-color="#eee"
            allow-half
          />
          <div class="price">¥{{ itemData.finalPrice }}</div>
        </div>
      </div>
      <div class="pro">优选PRO</div>
      <div class="fav">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAABXCAMAAABGFileAAAA3lBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAQH///////+np6c0NDT////9/f2kpKQvLy/7+/v19fWxsbFra2v9/f39/f39/f3JyclYWFgAAAD29vbu7u7JycnFxcWbm5v4+Pj7+/v7+/vx8fHq6uo+Pj66urr09PTOzs7Gxsa3t7fl5eWCgoJJSUkfHx+bm5t1dXXp6enm5ubc3NzX19fU1NTCwsK9vb3e3t7i4uK+vr6ysrLr6+vi4uLf39/29vb09PTQ0NDu7u6SkpI4ODj29vbu7u7Y2NhwcHBcXFzx8fH////Wv1GMAAAASXRSTlMAAkAFDwoU+fwvF/bseknOroMg8+XcRhsZ5dOaQynr2NKbg049o6GXiXRnUUYwKcnDs6yolJBtaDU1zb26t6ijjG8fx4lhX1fYbGPfkgAAA+BJREFUWMPt2FlX4jAUB/AZxAAFCmWVTVbBBXHfdx117vf/QuPNrV5pEtI8dJ7888ChaX7cc0/aFH79z/x2SAIkJxGUkoRKSYClxFbX1tZ+Ow1Y2bWYscDuKGcFbFbd5Tjsevji8MEYsE5djxWdrGdZTUeiHiFZgU0sqyx8vOhNpU1wlCXUFlVmx8KKZq7buGoKkRbfISGaV41urilWw1E2VJsXW3XAZEqjffEt+6NSRg7Uty6aocwwu1o2N6wCJ3u//6XeZ4FTHeYUWHGZ9UZ5WE7+fEPmXBkYeQQrBatsrwRqhs8bG89DUFPqRWFyFXZSA2ps+2G7WOzcVsP5i0X4fdXbTrG4/dDO0MfaRIF1bq4AmM3ZOEXxO3Tk5UW+FTp+ODCebdKRnNFltjkAzDFNDoFr+Mr1OMXxjwEzaDKscWUXhrIFQWo5J5/sSWQgyMjm48ylgtmlcq/keUWeyDCx0RRlHVeyYMXlcst42jSl5hAHDjUDUxwoRwoml8ut4PpszTXT/TZA29cMzFu4jCtUsMm9gI9sp3SZB8FcO7CNcy5MLrch46ec4me4EUsut1f0AaCdckwbAPqCG6y6Ht5UjlzdI7w1eRqXrzX4yMzVneEsuuYMboMWr1toCXcTcidWN3B1A1sfqL+nru4pzqqwa1gPx67uMS56Xmea60IM8DJ2dfFCHqx2/8BH3tzYN5zzSK7p/tDFcx7c3CkvM6ObruH+tefC7lVxK0obXG6E65V8tNwGdpdvwAW82Hfjs7tZLDeyylRX7MjNOHYnxi08f0ewa9iPvb7cdeO6B/JJzdPtx5GCu3neyay5kbtm41u5qsudwNzEYW9huQuqSwUTvAWYA9+mzg8Bcy9Zclc+94kyYFrvloX7FzB3num5T+mER3DhaeUC2wxZoWHJVTrhUSuyHTN7Rk+TZU/pguoyLEZATR7rVf+Gxh8FsUq5Rvg1T4+rT9oetOgJ+VzDsquHJ3XqxVRlT6kHtQay3Fx2V8KVMsi03yPr4ICO3y3MrKYTDIsdqqv6pFkH2ZHgJhhdFaZe9Mk4YzbIcw9MrB1+3gKZztfyos/lioW1weK1KqEpsbPw15ywsOyqcghP6lzxKfWgG7L63/J2mOTFQGpn4RM01PdJJZZVZmPClZL0giCLb/2ejbXDoVyRFWeJXYSqlbXD6V4dwtR7FtYGUz7hXI3YWo7/cTCydpnhywKyhUtmSVVYZ7gEUNKxrDrB3OVej1BjD9xhogl1ZS1/01FW/RHnWjKFUUuxrjDHzrrLdtUOc1SUWXfYHGbdkwBLSYClJMBSkmApiagULfqTn7jlH28m9T/Z6t6KAAAAAElFTkSuQmCC" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  itemData:{
    type: Object,
    default: () => ({})
  }
})
const commentScore = computed(() => {
  return Number(props.itemData.commentScore)
})
</script>

<style lang="less" scoped>
.house-item-v3 {
  width: 50%;
  color: #fff;
  .inner {
    position: relative;
    margin: 5px;
    box-sizing: border-box;
    border-radius: 10px;
    overflow: hidden;
    background: #FFF;
    .pro {
      position: absolute;
      top: 10px;
      left: 10px;
      padding: 0 6px;
      height: 15px;
      line-height: 15px;
      font-family: PingFangSC-Regular;
      font-size: 10px;
      color: #3f4953;
      background: #fff;
      border-radius: 7px;
    }
    .fav {
      position: absolute;
      top: 4px;
      right: 6px;
      img {
        width: 30px;
        height: 30px;
      }
    }
    .cover {
      img {
        width: 100%;
      }
    }
    .info {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 10px;
      .summary {
        font-size: 10px;
      }
      .name {
        font-size: 14px;
        margin: 3px 0 5px;
      }
      .bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 16px;
      }
    }
  }
}
</style>
