import isObject from '../core/isObject'

/**
 * json 转 params
 * @category JSON
 * @param json - json
 * @param slice - 分隔符
 * @returns 转换后的 json
 */
function json2params (json: any, slice = '&') : string {
  return Object.keys(json).reduce((acc, item) => {
    return String(acc) + encodeURIComponent(item) + '=' + encodeURIComponent(isObject(json[item]) ? JSON.stringify(json[item]) : json[item]) + slice
  }, '').slice(0, -1)
}

export default json2params
