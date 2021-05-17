/**
 * 二进制转换
 * @module
 * @author Jesse <jessexinyu@foxmail.com>
 */
/**
 * ArrayBuffer转为字符串，参数为ArrayBuffer对象
 * @param {arraybuffer} u - arraybuffer
 * @param {function} f - callback
 */
function ab2str(u, f) {
    const b = new Blob([u]);
    const r = new FileReader();
    r.readAsText(b, 'utf-8');
    // eslint-disable-next-line no-useless-call
    r.onload = function () { if (f)
        f.call(null, r.result); };
}
/**
 * 字符串转为ArrayBuffer对象，参数为字符串
 * @param {string} u - string
 * @param {function} f - callback
 */
function str2ab(s, f) {
    const b = new Blob([s], { type: 'text/plain' });
    const r = new FileReader();
    r.readAsArrayBuffer(b);
    // eslint-disable-next-line no-useless-call
    r.onload = function () { if (f)
        f.call(null, r.result); };
}

var ab = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ab2str: ab2str,
  str2ab: str2ab
});

class EventBus {
    constructor() {
        this.event = {};
    }
    /**
    * 订阅事件
    * @param {string} name - 事件名
    * @param {function} callback - 回调
    */
    on(name, callback) {
        // 一个事件可能有多个监听者
        if (!this.event[name])
            this.event[name] = [];
        this.event[name].push(callback);
    }
    /**
    * 触发事件
    * @param {string} name - 事件名
    * @param {args} args - 参数
    */
    emit(name, ...args) {
        // 遍历要触发的事件对应的数组回调函数。依次调用数组当中的函数，并把参数传入每一个cb。
        this.event[name] && this.event[name].forEach(fn => {
            fn(...args);
        });
    }
    /**
    * 单次触发事件
    * @param {string} name - 事件名
    * @param {function} callback - 回调
    */
    once(name, callback) {
        const cb = (...args) => {
            // eslint-disable-next-line node/no-callback-literal
            callback(...args);
            this.off(name, callback);
        };
        this.on(name, cb);
    }
    /**
    * 取消事件
    * @param {string=} name - 事件名
    * @param {function=} callback - 事件
    * @todo 如果没有传入参数，则移除所有事件监听器
    * @todo 如果只提供了事件名（eventName），则移除该事件名对应的所有监听器
    * @todo 如果同时提供了事件与回调，则只移除这个事件回调的监听器
    */
    off(name, callback) {
        if (name === undefined) { // 没有传入参数，移除所有监听器
            this.event = {};
        }
        else if (this.event[name]) {
            if (!callback) { // 只提供事件名, 移除该事件名对应的所有的监听器
                delete this.event[name];
                return;
            }
            const index = this.event[name].findIndex(fn => callback === fn);
            // 通过索引删除掉对应回调数组中的回调函数。
            this.event[name].splice(index, 1);
            // 回调数组长度为0时，移除事件
            if (!this.event[name].length)
                delete this.event[name];
        }
        else {
            throw Error('不存在该事件!');
        }
    }
}

// import { version } from '../package.json'
var main = {
    eventBus: EventBus,
    ab
};

export default main;
//# sourceMappingURL=bundle.js.map
