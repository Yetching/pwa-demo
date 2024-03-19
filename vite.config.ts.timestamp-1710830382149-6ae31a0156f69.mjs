// vite.config.ts
import { defineConfig } from "file:///D:/githubProjects/pwa-vite-demo/node_modules/.pnpm/vite@5.1.6/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/githubProjects/pwa-vite-demo/node_modules/.pnpm/@vitejs+plugin-vue@5.0.4_vite@5.1.6_vue@3.4.21/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { VitePWA } from "file:///D:/githubProjects/pwa-vite-demo/node_modules/.pnpm/vite-plugin-pwa@0.19.4_vite@5.1.6_workbox-build@7.0.0_workbox-window@7.0.0/node_modules/vite-plugin-pwa/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    VitePWA({
      // service register
      // 注册方式
      injectRegister: "inline",
      // 生成sw的策略
      strategies: "generateSW",
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
      registerType: "autoUpdate",
      devOptions: {
        enabled: true
      }
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxnaXRodWJQcm9qZWN0c1xcXFxwd2Etdml0ZS1kZW1vXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxnaXRodWJQcm9qZWN0c1xcXFxwd2Etdml0ZS1kZW1vXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9naXRodWJQcm9qZWN0cy9wd2Etdml0ZS1kZW1vL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSc7XG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSAndml0ZS1wbHVnaW4tcHdhJztcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoKSxcbiAgICBWaXRlUFdBKHtcbiAgICAgIC8vIHNlcnZpY2UgcmVnaXN0ZXJcbiAgICAgIC8vIFx1NkNFOFx1NTE4Q1x1NjVCOVx1NUYwRlxuICAgICAgaW5qZWN0UmVnaXN0ZXI6ICdpbmxpbmUnLFxuICAgICAgLy8gXHU3NTFGXHU2MjEwc3dcdTc2ODRcdTdCNTZcdTc1NjVcbiAgICAgIHN0cmF0ZWdpZXM6ICdnZW5lcmF0ZVNXJyxcbiAgICAgIC8vIFx1ODFFQVx1NTJBOFx1NzUxRlx1NjIxMFx1NzZGOFx1NTE3M1x1OTE0RFx1N0Y2RVxuICAgICAgd29ya2JveDoge30sXG5cbiAgICAgIC8vIG1hbmlmZXN0XG4gICAgICAvLyBtYW5pZmVzdDoge1xuICAgICAgLy8gICBuYW1lOiAnUFdBIERlbW8nLFxuICAgICAgLy8gICBzaG9ydF9uYW1lOiAnUFdBIERlbW8nLFxuICAgICAgLy8gICBkZXNjcmlwdGlvbjogJ0EgZGVzY3JpcHRpb24gZm9yIFBXQSBkZW1vJyxcbiAgICAgIC8vICAgdGhlbWVfY29sb3I6ICcjMDBjOGM4JyxcbiAgICAgIC8vICAgaWNvbnM6IFtcbiAgICAgIC8vICAgICB7XG4gICAgICAvLyAgICAgICBzcmM6ICdpY29ucy9hcHBsZS10b3VjaC1pY29uLTc2eDc2LTEucG5nJyxcbiAgICAgIC8vICAgICAgIHNpemVzOiAnNzZ4NzYnLFxuICAgICAgLy8gICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAvLyAgICAgfSxcbiAgICAgIC8vICAgICB7XG4gICAgICAvLyAgICAgICBzcmM6ICdpY29ucy9hcHBsZS10b3VjaC1pY29uLTE1MngxNTItMS5wbmcnLFxuICAgICAgLy8gICAgICAgc2l6ZXM6ICcxNTJ4MTUyJyxcbiAgICAgIC8vICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgLy8gICAgIH0sXG4gICAgICAvLyAgICAge1xuICAgICAgLy8gICAgICAgc3JjOiAnaWNvbnMvYXBwbGUtdG91Y2gtaWNvbi0xODB4MTgwLTEucG5nJyxcbiAgICAgIC8vICAgICAgIHNpemVzOiAnMTgweDE4MCcsXG4gICAgICAvLyAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgIC8vICAgICB9LFxuICAgICAgLy8gICBdLFxuICAgICAgLy8gfSxcbiAgICAgIG1hbmlmZXN0OiBmYWxzZSxcbiAgICAgIHJlZ2lzdGVyVHlwZTogJ2F1dG9VcGRhdGUnLFxuICAgICAgZGV2T3B0aW9uczoge1xuICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFxUixTQUFTLG9CQUFvQjtBQUNsVCxPQUFPLFNBQVM7QUFDaEIsU0FBUyxlQUFlO0FBR3hCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLFFBQVE7QUFBQTtBQUFBO0FBQUEsTUFHTixnQkFBZ0I7QUFBQTtBQUFBLE1BRWhCLFlBQVk7QUFBQTtBQUFBLE1BRVosU0FBUyxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUEwQlYsVUFBVTtBQUFBLE1BQ1YsY0FBYztBQUFBLE1BQ2QsWUFBWTtBQUFBLFFBQ1YsU0FBUztBQUFBLE1BQ1g7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
