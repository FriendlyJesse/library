// import { version } from '../package.json'

import EventBus from './core/EventBus'

// Object
import isEmptyObject from './core/isEmptyObject'

// Array
import arrayEqual from './core/arrayEqual'
import arrayClassify from './core/arrayClassify'

// Formatter
import formatTime from './core/formatTime'

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

// OS
import getExplore from './core/getExplore'
import getOS from './core/getOS'

// Coockie
import getCookie from './core/getCookie'
import setCookie from './core/setCookie'
import removeCookie from './core/removeCookie'

export {
  EventBus,

  // Object
  isEmptyObject,

  // Array
  arrayEqual,
  arrayClassify,

  // Formatter
  formatTime,

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
  isIdCard,

  // OS
  getExplore,
  getOS,

  // Cookie
  getCookie,
  setCookie,
  removeCookie
}
