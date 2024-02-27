import { ref, onMounted, onUnmounted } from "vue";
import _ from "underscore"
export default function usescroll() {
  const isbottom = ref(false)
  const scrollTop = ref(0)
  const scrollHeight = ref(0)

  const scrollhandler = _.throttle(() => {
    const clientHeight = document.documentElement.clientHeight
    scrollTop.value = document.documentElement.scrollTop
    scrollHeight.value = document.documentElement.scrollHeight
    // console.log(scrollTop.value) 
    if(clientHeight + scrollTop.value >= scrollHeight.value) {
      isbottom.value = true
    }
  }, 100)
  onMounted(() => {
    window.addEventListener("scroll", scrollhandler)
  })
  onUnmounted(() => {
    window.removeEventListener("scroll", scrollhandler)
  })

  return {isbottom, scrollTop, scrollHeight}
}