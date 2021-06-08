/**
 * 判断是否为对象
 * @category Object
 * @param param
 * @returns 返回一个 boolean
 */
function isObject (param: any): boolean {
  return Object.prototype.toString.call(param) === '[object Object]'
}

export default isObject
