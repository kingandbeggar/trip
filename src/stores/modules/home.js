import { defineStore } from "pinia";
import { getHotSuggest, getCategories, getHouseList } from "@/services/modules/home";
const useHome = defineStore("home", {
  state: () => ({
    suggests: [],
    categories: [],
    houseList: [],
    currentPage: 1
  }),
  actions: {
    async fetchSuggests() {
      const res = await getHotSuggest()
      console.log(res.data, "home-suggests热门建议")
      this.suggests = res.data
    },
    async fetchCategories() {
      const res = await getCategories()
      console.log(res.data, "home-categories分类")
      this.categories = res.data
    },
    async fetchHouseList() {
      const res = await getHouseList(this.currentPage++)
      console.log(res.data, "home-houseList房屋列表")
      this.houseList.push(...res.data)
    }
  }
})

export default useHome