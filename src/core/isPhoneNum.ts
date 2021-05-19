/**
 * 判断是否为手机号
 * @category Validate
 * @param str
 */
function isPhoneNum (str: string): boolean {
  return /^(\+?0?86-?)?1[3456789]\d{9}$/.test(str)
}

export default isPhoneNum
