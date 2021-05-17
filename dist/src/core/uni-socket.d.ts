import EventBus from './eventBus';
interface Options {
    reconnectMax?: number;
    reconnectTime?: number;
    heartTimeout?: number;
    logger?: Boolean;
}
/**
 * Socket 类
 * @author Jesse <jessexinyu@foxmail.com>
 * @extends EventBus
 */
declare class Socket extends EventBus {
    instance: any;
    status: string;
    reconnectMax: number;
    reconnectCount: number;
    reconnectTime: number;
    heartbeat: any;
    heartbeatShut: any;
    heartTimeout: number;
    logger: boolean;
    url: string;
    params: {};
    /**
     * 创建一个 socket 实例
     * @param {string} url - url
     * @param {object} params - params
     * @param {string} params.type - type
     * @param {string} params.token - token
     * @param {object=} options - 可配置项
     * @param {number} [options.reconnectMax = 10] - 最大重连数
     * @param {number} [options.reconnectTime = 3000] - 重连间隔
     * @param {number} [options.heartTimeout = 60000] - 心跳间隔
     * @param {boolean} [options.logger = true] - 是否开启日志
     */
    constructor(url: string, params: Object, options: Options);
    /**
     * 发送消息
     * @param {Object/ArrayBuffer} data - 需要发送的内容
     * @param {Function=} success - 接口调用成功的回调函数
     * @param {Function=} fail - 接口调用失败的回调函数
     * @param {Function=} complete - 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    send<T>(data: Object | ArrayBuffer, ...handlers: T[]): void;
    /**
     * 主动关闭 socket
     */
    shut(): void;
    init(): void;
    onOpen(): void;
    onClose(): void;
    onMessage(message: any): void;
    reconnect(): void;
    heartbeatCheck(): void;
    heartbeatReset(): void;
    complete(): void;
}
export default Socket;
