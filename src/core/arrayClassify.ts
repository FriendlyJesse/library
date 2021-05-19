/**
 * 根据`id`给数组分类
 * @category Array
 * @param arr
 * @param id
 */
function arrayClassify (arr: [], id: string | number): any[] {
  const mp: any = {}
  const ret: any[] = []
  arr.forEach(item => {
    if (typeof mp[id] === 'number') {
      ret[mp[id]].push(item)
    } else {
      mp[id] = ret.length
      ret.push([item])
    }
  })
  return ret
}

export default arrayClassify
