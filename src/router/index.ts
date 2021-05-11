import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/bookMall'
  },
  {
    path: '/bookMall',
    name: 'BookMall',
    component: () => import('../views/book-mall/index'),
    meta: {
      showTabbar: true,
      title: '书城',
      keepAlive: true
    }
  },
  {
    path: '/bookrack',
    name: 'Bookrack',
    component: () => import('../views/bookrack/index'),
    meta: {
      showTabbar: true,
      title: '书架',
      keepAlive: true
    }
  },
  {
    path: '/community',
    name: 'Community',
    component: () => import('../views/community/index'),
    meta: {
      showTabbar: true,
      title: '社区',
      keepAlive: true
    }
  },
  {
    path: '/my',
    name: 'My',
    component: () => import('../views/my/index'),
    meta: {
      showTabbar: true,
      title: '我的',
      keepAlive: true
    }
  },
  // 404
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    redirect: '/'
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})


export default router