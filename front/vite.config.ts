import { defineConfig } from 'vite'
import {fileURLToPath} from "url";
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '_': fileURLToPath(new URL('./src', import.meta.url)),
      '_features': fileURLToPath(new URL('./src/features', import.meta.url)),
      '_section': fileURLToPath(new URL('./src/section', import.meta.url)),
      '_components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '_hooks': fileURLToPath(new URL('./src/hooks', import.meta.url)),
      '_styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
      '_configs': fileURLToPath(new URL('./src/configs', import.meta.url))
    }
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "./src/styles/_mixins.scss" as *; @use "./src/styles/_variables.scss" as *;',
      },
    },
  },

  build: {
    rollupOptions: {
      output: {
        assetFileNames: "assets/[hash:4].[ext]",
      }
    },
    minify: 'terser',
  },

  server: {
    port: 3001,
    host: '0.0.0.0',
  },
})
