import setCookie from './setCookie'

/**
 * 删除 cookie
 * @category Cookie
 * @param name
 */
function removeCookie (name: string) {
  // 设置已过期，系统会立刻删除cookie
  setCookie(name, '1', -1)
}

export default removeCookie
