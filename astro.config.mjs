// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://YOUR_USERNAME.github.io', // 替换为你的 GitHub 用户名
  base: '/personal-site', // 如果仓库名不是 username.github.io，需要设置 base 路径
  integrations: [sitemap()],
});
