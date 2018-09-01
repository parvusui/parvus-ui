import pkg from './package.json';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import babel from 'rollup-plugin-babel';
import localResolve from 'rollup-plugin-local-resolve';
import resolve from 'rollup-plugin-node-resolve';
import commonJS from 'rollup-plugin-commonjs'
import filesize from 'rollup-plugin-filesize';

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
    'react-dom',
    'cxs',
    'create-react-context'
  ],
  plugins: [
    peerDepsExternal(),
    babel({
      exclude: 'node_modules/**'
    }),
    localResolve(),
    resolve(),
    commonJS(),
    filesize()
  ]
};
