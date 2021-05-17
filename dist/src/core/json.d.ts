/**
 * json 转换
 * @module
 * @author Jesse <jessexinyu@foxmail.com>
 */
/**
 * 获取 json 的 keys 或 values
 * @param {Object} json - json
 * @param {type=} [type = 'values'] - 'keys' / 'values'
 * @returns {Array} 获取的 keys 或 values
 */
declare function getDeepJSON(json: any, type?: string): any[];
/**
 * json 转 params
 * @param {Object} json - json
 * @param {string} slice - 分隔符
 * @returns {string} 转换后的 json
 */
declare function json2params(json: any, slice?: string): string;
export { getDeepJSON, json2params };
