import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import viteImagemin from 'vite-plugin-imagemin';

const enableImagemin = process.env.ENABLE_IMAGEMIN !== 'false'; // set to false in production if needed

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ...(enableImagemin
      ? [
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
              quality: [0.65, 0.8],
              speed: 4,
            },
            svgo: {
              plugins: [
                { name: 'removeViewBox' },
                { name: 'removeEmptyAttrs', active: false },
              ],
            },
          }),
        ]
      : []),
  ],
  assetsInclude: ['**/*.mp3', '**/*.MP3'],
  build: {
    sourcemap: false, // disable source maps to save memory during build
  },
});
