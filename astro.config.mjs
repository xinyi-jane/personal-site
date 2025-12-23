// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://xinyi-jane.github.io', // GitHub Pages 主站
  base: '/personal-site', // 如果仓库名不是 username.github.io，需要设置 base 路径
  integrations: [sitemap()],
});
