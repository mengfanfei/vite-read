import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import autoprefixer from 'autoprefixer'
import pxtoviewport from 'postcss-px-to-viewport'

import styleImport from 'vite-plugin-style-import'

import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), styleImport({
    libs: [
      {
        libraryName: 'vant',
        esModule: true,
        resolveStyle: (name) => `vant/es/${name}/style`,
      }
    ]
  })],
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
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})
