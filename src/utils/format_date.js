import dayjs from "dayjs";

function formatMonthDay(date, format = "M月D日") {
  return dayjs(date).format(format)
}

function getdiffday(date1, date2) {
  return dayjs(date1).diff(date2, "day")
}

export {
  formatMonthDay,
  getdiffday
}