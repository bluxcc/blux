import postcss from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
// import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import tailwindcss from '@tailwindcss/postcss';

import pkg from './package.json' assert { type: 'json' };

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: false,
    },
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      sourcemap: false,
    },
  ],
  preserveEntrySignatures: 'strict',
  treeshake: true,
  plugins: [
    // peerDepsExternal(),
    terser({
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      format: {
        comments: false,
      },
    }),
    resolve({
      browser: true,
      preferBuiltins: false,
    }),
    commonjs(),
    postcss({
      extract: false,
      inject: true,
      minimize: true,
      plugins: [tailwindcss],
    }),
    typescript({
      tsconfig: './tsconfig.json',
      exclude: ['node_modules', 'motion'],
    }),
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
};
