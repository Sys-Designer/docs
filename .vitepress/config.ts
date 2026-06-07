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
            text:'快速开始',
            items: [
              { text: '第一个应用', link: '/guide/quickstart' },
              { text: '第一个函数', link: '/guide/page/quickstart-method' }
            ]
          },
          {
            text: '用户界面',
            collapsed: false,
            items: [
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
            text: 'AI协同',
            collapsed: false,
            items: [
              { text: '需求管理', link: '/guide/page/requirement.md' },
              { text: 'MCP', link: '/guide/page/mcp.md' },
              { text: '创建函数', link: '/guide/page/ai-function.md' },
              { text: '创建前端页面', link: '/guide/page/ai-page.md' },
            ]
          },
          {
            text:'开发',
            items: [
              {text:'函数开发',link:'/guide/page/function.md'},
              {text:'模型开发',link:'/guide/page/model.md'},
              {text:'应用管理',link:'/guide/page/app.md'},
              {text:'账号管理',link:'/guide/page/account.md'},
              {text:'数据源管理',link:'/guide/page/datasource.md'},
              {text:'测试',link:'/guide/page/test.md'},
              {text:'需求管理',link:'/guide/page/file.md'},
            ]
          },
          {
            text: '功能列表',
            items: [
              {text:'后端能力',link:'/guide/page/backend.md'},
              {text:'前端能力',link:'/guide/page/backend.md'},
              {text:'测试能力',link:'/guide/page/backend.md'},
              {text:'AI能力',link:'/guide/page/backend.md'},
            ]
          },
          {
            text: '其他',
            collapsed: false,
            items: [
              { text: 'FQA', link: '/guide/page/fqa' },
            ]
          }
        ],
    },
  },
})
