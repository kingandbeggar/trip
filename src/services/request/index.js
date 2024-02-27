import axios from "axios"
import { baseURL, TIMEOUT } from "./config"

import useMain from "@/stores/modules/main"
const mainStore = useMain()

class Request {
  constructor(baseURL) {
    this.instance = axios.create({
      baseURL,
      TIMEOUT
    })
    this.instance.interceptors.request.use(config => {
      mainStore.showloading = true
      return config
    }, err => {
      return err
    })
    this.instance.interceptors.response.use(res => {
      mainStore.showloading = false
      return res
    }, err => {
      mainStore.showloading = false
      return err
    })
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance.request(config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }
  get(config) {
    return this.request({...config, method: "get"})
  }
  post(config) {
    return this.request({...config, method: "post"})
  }
}

// const instance1 = new request("xxx")

export default new Request(baseURL)
