import vue from 'rollup-plugin-vue2'
import buble from 'rollup-plugin-buble'
import node from 'rollup-plugin-node-resolve'
import scss from 'rollup-plugin-scss'
import commonjs from 'rollup-plugin-commonjs'

export default {
  input: 'src/index.vue',
  output: {
    file: 'dist/index.js',
    name: 'VueCollapse',
    format: 'umd'
  },
  sourcemaps: true,
  plugins: [
    vue({
      scss: {
        indentedSyntax: true
      }
    }),
    scss({
      output: 'dist/index.css'
    }),
    buble(),
    node(),
    commonjs()
  ]
}
