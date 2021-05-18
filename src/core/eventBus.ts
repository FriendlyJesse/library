/**
 * 订阅发布类
 *
 * @author Jesse <jessexinyu@foxmail.com>
 */
import { Event } from '../../types'

class EventBus {
  /**
   * 订阅列表
   */
  private event: Event = {}

  /**
  * 订阅事件
  * @param name - 事件名
  * @param callback - 回调
  */
  public on (name: string, callback: Function) {
    // 一个事件可能有多个监听者
    if (!this.event[name]) this.event[name] = []
    this.event[name].push(callback)
  }

  /**
  * 触发事件
  * @param {string} name - 事件名
  * @param {args} args - 参数
  */
  public emit <T> (name: string, ...args: T[]) {
    // 遍历要触发的事件对应的数组回调函数。依次调用数组当中的函数，并把参数传入每一个cb。
    this.event[name] && this.event[name].forEach(fn => {
      fn(...args)
    })
  }

  /**
  * 单次触发事件
  * @param {string} name - 事件名
  * @param {function} callback - 回调
  */
  public once <T> (name: string, callback: (...args: T[]) => void) {
    const cb = (...args: T[]) => {
      // eslint-disable-next-line node/no-callback-literal
      callback(...args)
      this.off(name, callback)
    }
    this.on(name, cb)
  }

  /**
  * 取消事件
  * @param {string=} name - 事件名
  * @param {function=} callback - 事件
  * @todo 如果没有传入参数，则移除所有事件监听器
  * @todo 如果只提供了事件名（eventName），则移除该事件名对应的所有监听器
  * @todo 如果同时提供了事件与回调，则只移除这个事件回调的监听器
  */
  public off (name: string, callback: Function) {
    if (name === undefined) { // 没有传入参数，移除所有监听器
      this.event = {}
    } else if (this.event[name]) {
      if (!callback) { // 只提供事件名, 移除该事件名对应的所有的监听器
        delete this.event[name]
        return
      }
      const index = this.event[name].findIndex(fn => callback === fn)
      // 通过索引删除掉对应回调数组中的回调函数。
      this.event[name].splice(index, 1)
      // 回调数组长度为0时，移除事件
      if (!this.event[name].length) delete this.event[name]
    } else {
      throw Error('不存在该事件!')
    }
  }
}

export default EventBus
