import isArray from './isArray'

/**
 * 深拷贝
 * @category Object
 * @param obj
 * @returns 拷贝后的值
 */
function deepClone (obj: any) : any {
  // 对常见的“非”值，直接返回原来值
  if ([null, undefined, NaN, false].includes(obj)) return obj
  if (typeof obj !== 'object' && typeof obj !== 'function') {
    // 原始类型直接返回
    return obj
  }
  const o: any = isArray(obj) ? [] : {}
  for (const i in obj) {
    if (i in obj) {
      o[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i]
    }
  }
  return o
}

export default deepClone
