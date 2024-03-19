import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    VitePWA({
      // service register
      // 注册方式
      injectRegister: 'inline',
      // 生成sw的策略
      strategies: 'injectManifest',

      injectManifest: {
        injectionPoint: undefined,
      },

      // 自动生成相关配置
      workbox: {},

      // manifest
      // manifest: {
      //   name: 'PWA Demo',
      //   short_name: 'PWA Demo',
      //   description: 'A description for PWA demo',
      //   theme_color: '#00c8c8',
      //   icons: [
      //     {
      //       src: 'icons/apple-touch-icon-76x76-1.png',
      //       sizes: '76x76',
      //       type: 'image/png',
      //     },
      //     {
      //       src: 'icons/apple-touch-icon-152x152-1.png',
      //       sizes: '152x152',
      //       type: 'image/png',
      //     },
      //     {
      //       src: 'icons/apple-touch-icon-180x180-1.png',
      //       sizes: '180x180',
      //       type: 'image/png',
      //     },
      //   ],
      // },
      manifest: false,
      manifestFilename: 'manifest.json',
      registerType: 'prompt',
      devOptions: {
        enabled: true,
      },
    }),
  ],
});
