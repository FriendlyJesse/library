/**
 * 格式化时间戳
 * @category Formatter
 * @param 时间戳
 */
function formatTime (Timestamp: number): string {
  const date = new Date(Timestamp)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hours = date.getHours()
  const minu = date.getMinutes()
  const second = date.getSeconds()

  // 判断是否满10
  const arr = [month, day, hours, minu, second]
  arr.map(item => (
    item < 10 ? '0' + item : item
  ))
  return year + '-' + arr[0] + '-' + arr[1] + ' ' + arr[2] + ':' + arr[3] + ':' + arr[4]
}

export default formatTime
