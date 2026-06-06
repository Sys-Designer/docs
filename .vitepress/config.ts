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
              { text: '操作说明', link: '/guide/page/introduction' },
            ]
          }
        ],
    },
  },
})
