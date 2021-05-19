/**
 * json 转 params
 * @category json 转换
 * @param json - json
 * @param slice - 分隔符
 * @returns 转换后的 json
 */
function json2params (json: any, slice = '&') : string {
  return Object.keys(json).reduce((acc, item) => {
    return String(acc) + item + '=' + json[item] + slice
  }, '').slice(0, -1)
}

export default json2params
