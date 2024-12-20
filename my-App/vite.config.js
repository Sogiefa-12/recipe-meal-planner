import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  entry:  './src/main.js',
  plugins: [
    vue()
  ]
});