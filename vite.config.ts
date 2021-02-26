import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import autoprefixer from 'autoprefixer'
import pxtoviewport from 'postcss-px-to-viewport'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment'
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
        pxtoviewport({
          viewportWidth: 375
        })
      ]
    }
  }
})
