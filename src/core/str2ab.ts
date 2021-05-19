/**
 * 字符串转为ArrayBuffer对象，参数为字符串
 * @category ArrayBuffer
 * @param u - string
 * @param f - callback
 */
function str2ab (s: string, f: Function) {
  const b = new Blob([s], { type: 'text/plain' })
  const r = new FileReader()
  r.readAsArrayBuffer(b)
  // eslint-disable-next-line no-useless-call
  r.onload = function () { if (f) f.call(null, r.result) }
}

export default str2ab
