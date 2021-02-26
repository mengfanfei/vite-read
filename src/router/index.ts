import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/bookMall'
  },
  {
    path: '/bookMall',
    name: 'BookMall',
    component: () => import('../views/book-mall/index')
  },
  {
    path: '/bookrack',
    name: 'Bookrack',
    component: () => import('../views/bookrack/index')
  },
  {
    path: '/community',
    name: 'Community',
    component: () => import('../views/community/index')
  },
  {
    path: '/my',
    name: 'My',
    component: () => import('../views/my/index')
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router