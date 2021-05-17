/**
 * 订阅发布类
 * @author Jesse <jessexinyu@foxmail.com>
 */
import { Event } from '../../types';
declare class EventBus {
    event: Event;
    /**
    * 订阅事件
    * @param {string} name - 事件名
    * @param {function} callback - 回调
    */
    on(name: string, callback: Function): void;
    /**
    * 触发事件
    * @param {string} name - 事件名
    * @param {args} args - 参数
    */
    emit<T>(name: string, ...args: T[]): void;
    /**
    * 单次触发事件
    * @param {string} name - 事件名
    * @param {function} callback - 回调
    */
    once<T>(name: string, callback: (...args: T[]) => void): void;
    /**
    * 取消事件
    * @param {string=} name - 事件名
    * @param {function=} callback - 事件
    * @todo 如果没有传入参数，则移除所有事件监听器
    * @todo 如果只提供了事件名（eventName），则移除该事件名对应的所有监听器
    * @todo 如果同时提供了事件与回调，则只移除这个事件回调的监听器
    */
    off(name: string, callback: Function): void;
}
export default EventBus;
