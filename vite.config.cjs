import { resolve } from 'path'
import { defineConfig } from 'vite'
import viteImagemin from 'vite-plugin-imagemin'


  export default defineConfig ({
    root: 'src',
    build: {
      outDir: '../dist/',
      assetsDir: 'assets',
      rollupOptions: {
        input: {
          main: resolve(__dirname, './src/index.html'),
          remappingLago: resolve(__dirname, './src/remapping-lago.html'),
        },
        output: {
          
          assetFileNames: (assetInfo) => {
      
            let extType = assetInfo.name.split('.').at(1);

            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
              extType = 'img';
              return `assets/${extType}/[name][extname]`;
            };

            if(/css/i.test(extType)) {
              extType = 'css';
              return `assets/[name][extname]`;
            };

            if(/css/i.test(extType)) {
              extType = 'css';
              return `assets/[name][extname]`;
            };

            if(/woff|otf|woff2|ttf/i.test(extType)) {
              extType = 'fonts';
              return `assets/${extType}/[name][extname]`;
            };
          
            // default value
            // ref: https://rollupjs.org/guide/en/#outputassetfilenames
            return 'assets/[name][extname]';
          },
          entryFileNames: 'main.js',
          chunkFileNames: 'assets/main.js',
        }
      },
    },
    plugins: [
      viteImagemin({
        gifsicle: {
          optimizationLevel: 7,
          interlaced: false,
        },
        optipng: {
          optimizationLevel: 7,
        },
        mozjpeg: {
          quality: 20,
        },
        pngquant: {
          quality: [0.8, 0.9],
          speed: 4,
        },
        webp: {
          quality: [0.5],
        },
        svgo: {
          plugins: [
            {
              name: 'removeViewBox',
            },
            {
              name: 'removeEmptyAttrs',
              active: false,
            },
          ],
        },
      }),
    ],
  })