/**
 * 获取 json 的 keys 或 values
 * @category json 转换
 * @param json - json
 * @param type - 'keys' / 'values'
 * @returns 获取的 keys 或 values
 */
function getDeepJSON (json: any, type = 'values'): any[] {
  let values: any[] = [];
  (Object as any)[type](json).forEach((item: string | Object) => {
    if (Object.prototype.toString.call(item) === '[object Object]') {
      values = values.concat(getDeepJSON(item))
    } else {
      values.push(item)
    }
  })
  return values
}

export default getDeepJSON
