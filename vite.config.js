import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  root: 'site',
  build: {
    outDir: '../dist/site',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'site/index.html')
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@site': resolve(__dirname, 'site')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "element-theme-default";`
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
});
