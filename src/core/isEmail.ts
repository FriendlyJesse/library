/**
 * 判断是否为邮箱地址
 * @category Validate
 * @param str
 */
function isEmail (str: string): boolean {
  return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str)
}

export default isEmail
