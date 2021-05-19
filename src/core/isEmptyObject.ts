/**
 * 判断`obj`是否为空
 * @category Object
 * @param obj
 */
function isEmptyObject (obj: Object): boolean {
  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) { return false }
  return !Object.keys(obj).length
}

export default isEmptyObject
