import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      app: '/src/app',
      assets: '/src/assets',
      components: '/src/components',
      hoc: '/src/hoc',
      hook: '/src/hook',
      layouts: '/src/layouts',
      locales: '/src/locales',
      pages: '/src/pages',
      store: '/src/store',
      router: '/src/router',
      shared: '/src/shared',
      test: '/src/test',
      utils: '/src/utils',
    },
  },
});
