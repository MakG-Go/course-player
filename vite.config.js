import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  root: "./",
  publicDir: './src/Course_branch/Мвидео/public', /** Путь до статичесского контента конкретного курса img, video, и.т.д ...*/
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '&': path.resolve(__dirname, './src/Course_branch/Мвидео'), /** Путь до корня конкретного курса*/
    }
  },
  plugins: [
    vue(),
    createSvgIconsPlugin({

      iconDirs: [path.resolve(__dirname, './src/Course_branch/Мвидео/public/icons')], /** Путь до svg файлов для создания svg спрайта */

      symbolId: 'icon-[dir]-[name]',

      inject: 'body-last' | 'body-first',

      customDomId: '__svg__icons__dom__',
    }),
  ],
  build: {
    assetsDir: 'assets',
    outDir: "./packageFolder/scormcontent/",
    emptyOutDir: true,
    sourcemap: false,
    minify: false,
    rollupOptions: {
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
        assetFileNames: ({ name, extname }) => {

          if (/\.css$/.test(name ?? '')) {
            return 'assets/style[extname]';
          }
          return 'assets/[name][extname]';
        },
      },
    },
  },

})
