// import { version } from '../package.json'

import eventBus from './core/eventBus'
import uniSocket from './core/uni-socket'

// Arraybuffer
import str2ab from './core/str2ab'
import ab2str from './core/ab2str'

// JSON
import getDeepJSON from './core/getDeepJSON'
import json2params from './core/json2params'

// Validate
import isUrl from './core/isUrl'
import isPhoneNum from './core/isPhoneNum'
import isEmail from './core/isEmail'
import isIdCard from './core/isIdCard'

export {
  uniSocket,
  eventBus,

  // Arraybuffer
  str2ab,
  ab2str,

  // JSON
  getDeepJSON,
  json2params,

  // Validate
  isUrl,
  isPhoneNum,
  isEmail,
  isIdCard
}
