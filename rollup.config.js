import pkg from './package.json';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import commonJS from 'rollup-plugin-commonjs'

export default {
  input: 'src/index.js',
  output: [
    {
      format: 'iife',
      name: 'parvus',
      file: pkg.main
    },
    {
      format: 'es',
      file: pkg.module
    }
  ],
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers']
    }),
    commonJS()
  ]
}
