/**
 * json 转换
 * @module
 * @author Jesse <jessexinyu@foxmail.com>
 */

/**
 * 获取 json 的 keys 或 values
 * @param {Object} json - json
 * @param {type=} [type = 'values'] - 'keys' / 'values'
 * @returns {Array} 获取的 keys 或 values
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

/**
 * json 转 params
 * @param {Object} json - json
 * @param {string} slice - 分隔符
 * @returns {string} 转换后的 json
 */
function json2params (json: any, slice = '&') {
  return Object.keys(json).reduce((acc, item) => {
    return String(acc) + item + '=' + json[item] + slice
  }, '').slice(0, -1)
}

export {
  getDeepJSON,
  json2params
}
