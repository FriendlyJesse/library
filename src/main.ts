// src/main.js
import foo from './foo'
import { version } from '../package.json'

export default function () {
  console.log(version)
  console.log(foo)
}
