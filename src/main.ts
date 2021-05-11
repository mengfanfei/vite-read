import { createApp } from 'vue'
// TypeScript error? Run VSCode command
// TypeScript: Select TypeScript version - > Use Workspace Version
import App from './App.vue'
import store, { key } from './store'
import router from './router'

import './styles/index.scss'
import './assets/iconfont/iconfont.css' // 导入iconfont

import '@/utils/permission'

const app = createApp(App)
app.use(store, key)
app.use(router)
router.isReady().then(() => app.mount('#app'))
