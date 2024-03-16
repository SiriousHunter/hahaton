import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

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
