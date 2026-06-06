import DefaultTheme from 'vitepress/theme'
import './style.css'
import HomePage from './components/HomePage.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // 全局注册首页组件
    app.component('HomePage', HomePage)
  }
}