/**
 * 设置 Cookie
 * @category Cookie
 * @param name
 * @param value
 * @param days
 */
function setCookie (name: string, value: string, days: number) {
  const date = new Date()
  date.setDate(date.getDate() + days)
  document.cookie = name + '=' + value + ';expires=' + date
}

export default setCookie
