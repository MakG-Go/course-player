import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePluginFonts } from 'vite-plugin-fonts';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  // base: '/webtutor/aaa-test-vue-2004/scormcontent/',
  root: './',
  assetsInclude: ['**/*.glb'],
  publicDir: path.resolve(__dirname, './src/Course_branch/Холодильники/assets'), /** Путь до статичесского контента конкретного курса img, video, и.т.д ...*/
  plugins: [
    vue(),
    VitePluginFonts({
      custom: {
        families: [{
          name: 'Nunito Sans',
          local: 'Nunito-Regular',
          src: '/fonts/NunitoSans_Regular.ttf'
        },
        {
          name: 'Nunito Sans',
          local: 'Nunito-Bold',
          src: '/fonts/NunitoSans_Bold.ttf'
        },
        {
          name: 'Nunito Sans',
          local: 'Nunito-SemiBold',
          src: '/fonts/NunitoSans_SemiBold.ttf'
        },
        ],
      },
    }),
    createSvgIconsPlugin({

      iconDirs: [path.resolve(__dirname, './src/Course_branch/Холодильники/assets/icons')], /** Путь до svg файлов для создания svg спрайта */

      symbolId: 'icon-[dir]-[name]',

      inject: 'body-last' | 'body-first',

      customDomId: '__svg__icons__dom__',
    }),
  ],
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '&': path.resolve(__dirname, './src/Course_branch/Холодильники') /** Путь до корня конкретного курса*/
    }
  },
  build: {
    assetsDir: '',
    outDir: "./packageFolder/scormcontent/",
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
