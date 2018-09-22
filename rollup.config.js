import pkg from './package.json';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import babel from 'rollup-plugin-babel';
import localResolve from 'rollup-plugin-local-resolve';
import resolve from 'rollup-plugin-node-resolve';
import commonJS from 'rollup-plugin-commonjs';

const globals = {
  react: 'React',
  'create-react-context': 'createReactContext',
  'react-transition-group': 'ReactTransitionGroup',
  'prop-types': 'PropTypes',
  cxs: 'cxs',
};

export default {
  input: 'src/index.js',
  output: [
    {
      format: 'cjs',
      name: 'parvus',
      file: pkg.main,
      globals
    },
    {
      format: 'es',
      file: pkg.module,
      globals
    },
    {
      file: pkg.browser,
      format: 'umd',
      name: 'parvus',
      globals
    }
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ],
  plugins: [
    peerDepsExternal(),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers']
    }),
    localResolve(),
    resolve(),
    commonJS()
  ]
};
