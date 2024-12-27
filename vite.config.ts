import checker from 'vite-plugin-checker';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: '/conlangiii',
  plugins: [
    vue(),
    checker({ typescript: true }),
  ],
});