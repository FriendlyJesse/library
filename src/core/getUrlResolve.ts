/**
 * 获取 url 的 path 和 params
 * @param url
 * @returns path 和 params
 */
function getUrlResolve (url: string): Object {
  let path
  const params: any = {}
  if (url.indexOf('?') > -1) {
    const str = url.split('?')
    path = str[0]
    const strs = str[1].split('&')
    for (let i = 0; i < strs.length; i++) {
      params[strs[i].split('=')[0]] = strs[i].split('=')[1]// 如果出现乱码的话，可以用decodeURI()进行解码
    }
  }
  return { path, params }
}

export default getUrlResolve
