
interface Event {
  [name: string]: Function[]
}

interface Options {
  reconnectMax?: number
  reconnectTime?: number
  heartTimeout?: number
  logger?: Boolean
}

interface getUrlResolveReturn {
  path: string,
  params: string
}

export {
  Event,
  Options,
  getUrlResolveReturn
}
