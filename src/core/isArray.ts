/**
 * 判断是否为数组
 * @category Array
 * @param arr
 * @returns 返回一个 boolean
 */
function isArray (arr: any): boolean {
  return Object.prototype.toString.call(arr) === '[object Array]'
}

export default isArray
