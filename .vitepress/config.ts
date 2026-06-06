import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',
  title: 'Sys-Designer 一体化设计平台',
  description: '一体化设计平台',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '安装教程', link: '/guide/install' },
      { text: 'API文档', link: '/guide/api' }
    ],
    sidebar: {
        '/guide/': [
          {
            text: '用户界面',
            collapsed: false,
            items: [
              { text: '操作说明', link: '/guide/page/introduction' },
            ]
          }
        ],
    },
  },
})
