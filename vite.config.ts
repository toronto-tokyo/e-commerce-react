import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
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
    define: {
      'process.env.REACT_APP_CTP_PROJECT_KEY': JSON.stringify(env.REACT_APP_CTP_PROJECT_KEY),
      'process.env.REACT_APP_CTP_CLIENT_SECRET': JSON.stringify(env.REACT_APP_CTP_CLIENT_SECRET),
      'process.env.REACT_APP_CTP_CLIENT_ID': JSON.stringify(env.REACT_APP_CTP_CLIENT_ID),
      'process.env.REACT_APP_CTP_AUTH_URL': JSON.stringify(env.REACT_APP_CTP_AUTH_URL),
      'process.env.REACT_APP_CTP_API_URL': JSON.stringify(env.REACT_APP_CTP_API_URL),
      'process.env.REACT_APP_CTP_SCOPES': JSON.stringify(env.REACT_APP_CTP_SCOPES),
      'process.env.REACT_APP_PUBLIC_URL': JSON.stringify(env.REACT_APP_PUBLIC_URL),
    }
  }
});
