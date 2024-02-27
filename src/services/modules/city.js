import Request from "../request";

export function getCityAll() {
  return Request.get({
    url: "/city/all"
  })
}