import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'

export default {
  input: 'src/main.ts',
  output: {
    format: 'es',
    file: 'dist/bundle.js',
    name: 'utils',
    sourcemap: true
  },
  plugins: [
    json(),
    resolve(),
    typescript()
  ]
}
