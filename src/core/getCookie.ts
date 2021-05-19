/**
 * 读取cookie
 * @category Cookie
 * @param name
 */
function getCookie (name: string): string {
  const arr = document.cookie.replace(/\s/g, '').split(';')
  for (let i = 0; i < arr.length; i++) {
    const tempArr = arr[i].split('=')
    if (tempArr[0] === name) {
      return decodeURIComponent(tempArr[1])
    }
  }
  return ''
}

export default getCookie
