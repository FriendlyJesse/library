/**
 * 判断是否为URL地址
 * @category Validate
 * @param str
 */
function isUrl (str: string): boolean {
  return /[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/i.test(str)
}

export default isUrl
