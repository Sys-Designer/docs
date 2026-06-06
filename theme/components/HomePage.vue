<template>
<div class="home-wrap">
  <div class="bg-grid"></div>
  <div class="bg-glow"></div>

  <header class="top-nav">
    
    <div class="container nav-inner">
      <div class="logo">
        <img src="/logo.png" alt="idesign" style="height:36px;vertical-align:middle;margin-right:8px;">
        <span>Sys-Designer 一体化设计平台</span>
      </div>
      <nav class="nav-list">
        <a href="/">首页</a>
        <a href="/guide/install">安装教程</a>
        <a href="/guide/api">API文档</a>
      </nav>
    </div>
  </header>

  <section class="banner">
    <div class="container banner-content">
      <div class="banner-text">
        <div class="badge">MCP · AI协同 · 模型驱动</div>
        <h1>Sys-Designer <span class="highlight">一体化设计平台</span></h1>
        <p class="desc">一体化设计平台<br>快速构建企业级应用系统</p>
        <div class="btns">
          <a class="btn primary" href="/guide/home">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            帮助手册
          </a>
          <a class="btn" href="http://www.sys-designer.com" target="_blank">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
            官网
          </a>
        </div>
      </div>
      <div class="banner-visual">
        <img src="../../images/login.png" alt="Banner Visual">
      </div>
    </div>
  </section>

  <section class="stats container">
    <div class="stat-item" v-for="stat in stats" :key="stat.label">
      <div class="stat-value">{{ stat.value }}</div>
      <div class="stat-label">{{ stat.label }}</div>
    </div>
  </section>

  <section class="feature container">
    <div class="section-header">
      <h2>核心能力</h2>
      <p>强大的功能模块，支撑企业级应用开发</p>
    </div>
    <div class="feature-grid">
      <div class="feature-card" v-for="(item, index) in featureList" :key="index">
        <div class="feature-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <component :is="item.icon" />
          </svg>
        </div>
        <h3>{{ item.title }}</h3>
        <p>{{ item.desc }}</p>
        <div class="feature-tag">{{ item.tag }}</div>
      </div>
    </div>
  </section>

  <section class="architecture">
    <div class="container">
      <div class="section-header light">
        <h2>技术架构</h2>
        <p>现代化技术栈，高性能高可用</p>
      </div>
      <div class="arch-diagram">
        <div class="arch-layer" v-for="layer in architecture" :key="layer.name">
          <div class="layer-label">{{ layer.name }}</div>
          <div class="layer-items">
            <div class="arch-item" v-for="item in layer.items" :key="item">{{ item }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <div class="logo">
            <svg class="logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/>
            </svg>
            <span>Sys-Designer 一体化设计平台</span>
          </div>
          <p>企业级低代码设计平台</p>
        </div>
        <div class="footer-links">
          <div class="link-group">
            <h4>文档</h4>
            <a href="/guide/install">安装教程</a>
            <a href="/guide/api">API文档</a>
          </div>
          <div class="link-group">
            <h4>资源</h4>
            <a href="#">GitHub</a>
            <a href="#">更新日志</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">©2026 Sys-Designer Platform. All rights reserved.</div>
    </div>
  </footer>
</div>
</template>

<script setup>
const featureList = [
  { title: '可视化设计', desc: '拖拽式表单页面构建，支持丰富的组件库，零代码即可完成业务页面开发', tag: '低代码' },
  { title: '文件管理', desc: '类Kod网盘文件预览体验，支持多种文件格式在线预览与编辑', tag: '文件云' },
  { title: '权限管控', desc: '精细化数据权限控制，多维度角色配置，保障数据安全', tag: '安全' },
  { title: '插件扩展', desc: '模块化插件体系，灵活拓展业务功能，满足个性化需求', tag: '可扩展' }
]

const stats = [
  { value: '50+', label: '可视化组件' },
  { value: '10K+', label: '活跃用户' },
  { value: '99.9%', label: '服务可用性' },
  { value: '<50ms', label: '响应时间' }
]

const architecture = [
  { name: '应用层', items: ['Web', 'Mobile', 'API'] },
  { name: '服务层', items: ['REST API', 'WebSocket', 'GraphQL'] },
  { name: '业务层', items: ['表单引擎', '流程引擎', '权限引擎'] },
  { name: '数据层', items: ['MySQL', 'Redis', '对象存储'] }
]
</script>

<style scoped>
:root {
  --primary: #6366f1;
  --primary-dark: #4f46e5;
  --accent: #06b6d4;
  --accent-light: #22d3ee;
  --bg-dark: #0f172a;
  --bg-card: rgba(30, 41, 59, 0.8);
  --text-light: #f1f5f9;
  --text-muted: #94a3b8;
}

.container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }

.home-wrap {
  min-height: 100vh;
  background: var(--bg-dark);
  color: var(--text-light);
  position: relative;
  overflow-x: hidden;
}

/* 背景科技效果 */
.bg-grid {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image:
    linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  pointer-events: none;
  z-index: 0;
}

.bg-glow {
  position: fixed;
  top: -200px;
  right: -200px;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}

/* 导航 */
.top-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(99, 102, 241, 0.2);
  z-index: 100;
}

.nav-inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  font-weight: 700;
  color: var(--text-light);
}

.logo-icon {
  width: 28px;
  height: 28px;
  color: var(--primary);
}

.nav-list a {
  margin: 0 20px;
  color: var(--text-muted);
  text-decoration: none;
  font-size: 15px;
  transition: color 0.3s;
}

.nav-list a:hover {
  color: var(--accent);
}

/* Banner */
.banner {
  position: relative;
  min-height: 100vh;
  padding-top: 70px;
  display: flex;
  align-items: center;
  z-index: 1;
}

.banner-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  padding: 80px 0;
}

.banner-text .badge {
  display: inline-block;
  padding: 6px 16px;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 20px;
  animation: glow 2s ease-in-out infinite;
}

@keyframes glow {
  0%, 100% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.3); }
  50% { box-shadow: 0 0 30px rgba(99, 102, 241, 0.6); }
}

.banner-text h1 {
  font-size: 52px;
  font-weight: 800;
  line-height: 1.2;
  margin: 0 0 20px;
}

.banner-text h1 .highlight {
  background: linear-gradient(135deg, var(--primary), var(--accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.banner-text .desc {
  font-size: 18px;
  color: var(--text-muted);
  line-height: 1.8;
  margin: 0 0 30px;
}

.btns { display: flex; gap: 16px; }

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 15px;
  transition: all 0.3s;
}

.btn svg {
  width: 18px;
  height: 18px;
}

.btn.primary {
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);
}

.btn.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 30px rgba(99, 102, 241, 0.5);
}

.btn:not(.primary) {
  border: 1px solid rgba(99, 102, 241, 0.5);
  color: var(--text-light);
  background: var(--bg-card);
}

.btn:not(.primary):hover {
  border-color: var(--accent);
  color: var(--accent);
}

/* 可视化卡片 */
.banner-visual {
  position: relative;
}

.visual-card {
  background: var(--bg-card);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
}

.card-header {
  padding: 12px 16px;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  gap: 8px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dot.red { background: #ef4444; }
.dot.yellow { background: #f59e0b; }
.dot.green { background: #22c55e; }

.card-content {
  display: flex;
  height: 320px;
}

.mock-sidebar {
  width: 60px;
  background: rgba(0, 0, 0, 0.3);
  padding: 16px 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.mock-nav {
  height: 32px;
  background: rgba(99, 102, 241, 0.2);
  border-radius: 6px;
}

.mock-nav:nth-child(2) { background: rgba(99, 102, 241, 0.4); }

.mock-main {
  flex: 1;
  padding: 16px;
}

.mock-toolbar {
  height: 40px;
  background: linear-gradient(90deg, rgba(99, 102, 241, 0.2), rgba(6, 182, 212, 0.2));
  border-radius: 8px;
  margin-bottom: 16px;
}

.mock-canvas {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  height: calc(100% - 56px);
}

.mock-block {
  background: rgba(99, 102, 241, 0.15);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 8px;
}

.mock-block.b1 { background: linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(6, 182, 212, 0.2)); }
.mock-block.b2 { background: linear-gradient(135deg, rgba(6, 182, 212, 0.3), rgba(99, 102, 241, 0.2)); }
.mock-block.b3 { background: linear-gradient(135deg, rgba(34, 211, 238, 0.3), rgba(99, 102, 241, 0.2)); }
.mock-block.b4 { background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(34, 211, 238, 0.3)); }

/* 浮动元素 */
.float-element {
  position: absolute;
  border-radius: 50%;
  animation: float 6s ease-in-out infinite;
}

.f1 {
  width: 80px;
  height: 80px;
  background: radial-gradient(circle, var(--primary), transparent);
  top: -40px;
  right: -40px;
  opacity: 0.6;
}

.f2 {
  width: 60px;
  height: 60px;
  background: radial-gradient(circle, var(--accent), transparent);
  bottom: -30px;
  left: -30px;
  opacity: 0.5;
  animation-delay: -2s;
}

.f3 {
  width: 40px;
  height: 40px;
  background: radial-gradient(circle, var(--accent-light), transparent);
  top: 50%;
  right: -20px;
  opacity: 0.4;
  animation-delay: -4s;
}

@keyframes float {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-20px) scale(1.1); }
}

/* 统计 */
.stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  padding: 60px 0;
  position: relative;
  z-index: 1;
}

.stat-item {
  text-align: center;
  padding: 30px;
  background: var(--bg-card);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 16px;
}

.stat-value {
  font-size: 36px;
  font-weight: 800;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  color: var(--text-muted);
  margin-top: 8px;
  font-size: 14px;
}

/* 功能特性 */
.feature {
  padding: 80px 0;
  position: relative;
  z-index: 1;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-header h2 {
  font-size: 36px;
  font-weight: 700;
  margin: 0 0 12px;
}

.section-header p {
  color: var(--text-muted);
  font-size: 16px;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.feature-card {
  padding: 32px;
  background: var(--bg-card);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 16px;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--primary), var(--accent));
  transform: scaleX(0);
  transition: transform 0.3s;
}

.feature-card:hover {
  transform: translateY(-8px);
  border-color: var(--primary);
  box-shadow: 0 20px 40px rgba(99, 102, 241, 0.2);
}

.feature-card:hover::before {
  transform: scaleX(1);
}

.feature-icon {
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.feature-icon svg {
  width: 28px;
  height: 28px;
  color: #fff;
}

.feature-card h3 {
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 12px;
}

.feature-card p {
  color: var(--text-muted);
  font-size: 14px;
  line-height: 1.7;
  margin: 0 0 16px;
}

.feature-tag {
  display: inline-block;
  padding: 4px 12px;
  background: rgba(99, 102, 241, 0.2);
  border-radius: 20px;
  font-size: 12px;
  color: var(--accent);
}

/* 技术架构 */
.architecture {
  padding: 80px 0;
  background: rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1;
}

.architecture .section-header.light h2 {
  color: var(--text-light);
}

.architecture .section-header.light p {
  color: var(--text-muted);
}

.arch-diagram {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.arch-layer {
  display: flex;
  align-items: center;
  gap: 24px;
}

.layer-label {
  width: 100px;
  text-align: right;
  font-weight: 600;
  color: var(--accent);
}

.layer-items {
  flex: 1;
  display: flex;
  gap: 16px;
}

.arch-item {
  flex: 1;
  padding: 16px;
  background: var(--bg-card);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 8px;
  text-align: center;
  font-size: 14px;
}

/* 页脚 */
.footer {
  padding: 60px 0 30px;
  border-top: 1px solid rgba(99, 102, 241, 0.2);
  position: relative;
  z-index: 1;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
}

.footer-brand .logo {
  margin-bottom: 12px;
}

.footer-brand p {
  color: var(--text-muted);
  font-size: 14px;
}

.footer-links {
  display: flex;
  gap: 80px;
}

.link-group h4 {
  color: var(--text-light);
  margin: 0 0 16px;
  font-size: 14px;
}

.link-group a {
  display: block;
  color: var(--text-muted);
  text-decoration: none;
  margin-bottom: 10px;
  font-size: 14px;
  transition: color 0.3s;
}

.link-group a:hover {
  color: var(--accent);
}

.footer-bottom {
  text-align: center;
  color: var(--text-muted);
  font-size: 13px;
  padding-top: 30px;
  border-top: 1px solid rgba(99, 102, 241, 0.1);
}
</style>
