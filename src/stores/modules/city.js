import { defineStore } from "pinia";
import {getCityAll} from "@/services/modules/city"
const useCity = defineStore("city", {
  state: () => ({
    cityData: {},
    currentcity: {
      cityName: "广州"
    }
  }),
  getters: {

  },
  actions: {
    async getCityData() {
      const res = await getCityAll()
      this.cityData = res.data
      console.log(res.data)
    }
  }
})

export default useCity