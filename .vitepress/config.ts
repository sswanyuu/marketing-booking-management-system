import { defineConfig } from 'vitepress';
import { resolve } from 'path';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "${resolve(__dirname, '../scss/_variables.scss')}"; @import "${resolve(__dirname, '../scss/base/typography.scss')}";`,
        },
      },
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
  },
});
