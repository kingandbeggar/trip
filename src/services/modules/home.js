import Request from "../request";

export function getHotSuggest() {
  return Request.request({
    url: "/home/hotSuggests"
  })
}

export function getCategories() {
  return Request.request({
    url: "/home/categories"
  })
}

export function getHouseList(page) {
  return Request.request({
    url: "/home/houselist",
    params: {
      page
    }
  })
}