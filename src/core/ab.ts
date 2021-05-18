/**
 * 二进制转换
 * @module
 * @author Jesse <jessexinyu@foxmail.com>
 */

/**
 * ArrayBuffer转为字符串，参数为ArrayBuffer对象
 * @param u - arraybuffer
 * @param f - callback
 */
function ab2str (u: ArrayBuffer, f: Function) {
  const b = new Blob([u])
  const r = new FileReader()
  r.readAsText(b, 'utf-8')
  // eslint-disable-next-line no-useless-call
  r.onload = function () { if (f) f.call(null, r.result) }
}

/**
 * 字符串转为ArrayBuffer对象，参数为字符串
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

export {
  ab2str,
  str2ab
}
