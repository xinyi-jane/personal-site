# Personal Site (Astro)

一个基于 Astro 的个人网站，用于展示个人信息、项目和博客。仓库已设置 `base: '/personal-site'`，适用于 GitHub Pages 子路径部署。

## 项目结构

```
/public          静态资源（favicon 等）
/src
  /components    导航、页脚等可复用组件
  /layouts       通用页面布局
  /pages         页面路由：主页、项目、博客
    /blog        博客列表占位页
    /projects    项目列表页
  /data          站点与项目数据（site.ts, projects.ts）
  /styles        全局样式
/astro.config.mjs 配置 base 与 sitemap
/tsconfig.json    TypeScript 配置
```

主要页面：
- `/` 主页，展示个人介绍、精选项目入口
- `/projects/` 项目列表
- `/blog/` 博客占位页（可后续填充）

## 开发与构建

```bash
npm install          # 安装依赖
npm run dev          # 本地开发，默认 http://localhost:4321/personal-site
npm run build        # 产出静态文件到 dist/
npm run preview      # 预览构建结果
```

## 部署提示（GitHub Pages）
- `astro.config.mjs` 中 `site` 和 `base` 已配置为 `/personal-site`，保持与仓库名一致。
- 构建产物在 `dist/`，GitHub Pages 可直接指向该目录（Actions 或静态托管）。

## 数据与定制
- 站点信息：`src/data/site.ts`
- 项目数据：`src/data/projects.ts`
- 导航 / 页脚：`src/components/Nav.astro`，`src/components/Footer.astro`
- 全局样式：`src/styles/global.css`
