/**
 * ArrayBuffer转为字符串，参数为ArrayBuffer对象
 * @category ArrayBuffer
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

export default ab2str
