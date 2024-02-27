import { defineStore } from "pinia";


const nowDate = new Date()
const leaveDate = new Date().setDate(nowDate.getDate() + 1)


const useMain = defineStore("main", {
  state: () => ({
    nowDate: nowDate,
    leaveDate: leaveDate,
    stay: 1,

    showloading: true
  })
})
export default useMain