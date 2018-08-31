import pkg from './package.json';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import commonJS from 'rollup-plugin-commonjs'

const externals = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.devDependencies || {})
];

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
  external: externals,
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    commonJS()
  ]
}
