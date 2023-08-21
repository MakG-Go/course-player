import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  root: './',
  publicDir: './src/assets',
  plugins: [
    vue(),
  ],
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '&': path.resolve(__dirname, './src/Course_branch/Стиралки')
    }
  },
  build: {
    assetsDir: '',
    outDir: "./cource/",
    emptyOutDir: true,
    sourcemap: false,
    minify: true,
    rollupOptions: {
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
        assetFileNames: ({ name, extname }) => {

          if (/\.css$/.test(name ?? '')) {
            return 'style[extname]';
          }
          return 'assets/[name][extname]';
        },
      },
    },
  },


})
