import pkg from './package.json';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonJS from 'rollup-plugin-commonjs'

export default {
  input: 'src/index.js',
  output: [
    {
      format: 'cjs',
      name: 'parvus',
      file: pkg.main
    },
    {
      format: 'es',
      file: pkg.module
    }
  ],
  external: [
    'react', 
    'react-dom'
  ],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    commonJS()
  ]
};
