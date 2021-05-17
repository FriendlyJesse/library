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
declare function ab2str(u: ArrayBuffer, f: Function): void;
/**
 * 字符串转为ArrayBuffer对象，参数为字符串
 * @param {string} u - string
 * @param {function} f - callback
 */
declare function str2ab(s: string, f: Function): void;
export { ab2str, str2ab };
