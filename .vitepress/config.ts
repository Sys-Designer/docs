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
      { text: '联系我们', link: '/guide/item' },
    ],
    sidebar: {
        '/guide/': [
          {
            text: '用户界面',
            collapsed: false,
            items: [
              { text: '快速开始', link: '/guide/quickstart' },
              { text: '界面布局', link: '/guide/page/page' },
              { text: '操作说明', link: '/guide/page/introduction' },
              { text: '目录树', link: '/guide/page/category-tree' },
            ]
          },
          {
            text: '数据安全',
            collapsed: false,
            items: [
              { text: '数据安全', link: '/guide/page/security.md' },
            ]
          },
          {
            text: '其他',
            collapsed: false,
            items: [
              { text: 'FQA', link: '/guide/fqa' },
            ]
          }
        ],
    },
  },
})
