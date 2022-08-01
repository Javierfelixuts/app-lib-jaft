import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'form-lib-jaft',
      fileName: 'form-lib-jaft'
    },
    rollupOptions: {
      external: ['vue'],
      ouput: {
        globals:{
          vue: 'Vue'
        }
      }
    }
  },
  plugins: [vue()]
})
