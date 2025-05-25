import { defineConfig } from 'vite';
import string from 'vite-plugin-string';
import path from 'path';

export default defineConfig({
  server: {
    port: 3000
  },
  build: {
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, 'index.html'),
        register: path.resolve(__dirname, 'register.html'),
        404: path.resolve(__dirname, '404.html'),
        500: path.resolve(__dirname, '505.html'),
        dashboard: path.resolve(__dirname, 'dashboard.html'),
        profile: path.resolve(__dirname, 'profile.html'),
      }
    }
  },
  plugins: [
    string({
      include: '**/*.hbs',
    }),
  ],
});