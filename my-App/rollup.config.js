import { rollup } from 'rollup';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: './src/main.js',
  output: {
    file: 'public/bundle.js',
    format: 'es',
  },
  plugins: [
    commonjs(),
  ],
};