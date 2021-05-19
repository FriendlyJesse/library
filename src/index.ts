// import { version } from '../package.json'

import eventBus from './core/eventBus'
import uniSocket from './core/uni-socket'
import str2ab from './core/str2ab'
import ab2str from './core/ab2str'
import getDeepJSON from './core/getDeepJSON'
import json2params from './core/json2params'

export {
  uniSocket,
  eventBus,
  getDeepJSON,
  json2params,
  str2ab,
  ab2str
}
