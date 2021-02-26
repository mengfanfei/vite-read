import { createApp } from 'vue'
// TypeScript error? Run VSCode command
// TypeScript: Select TypeScript version - > Use Workspace Version
import App from './App'
import store from './store'
import router from './router'
// 导入vant样式文件（存在无用代码问题，等待官方解决方案）
import 'vant/lib/index.css'
import './styles/index.scss'
import './assets/iconfont/iconfont.css' // 导入iconfont


createApp(App).use(store).use(router).mount('#app')
