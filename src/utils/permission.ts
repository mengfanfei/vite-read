import router from "@/router";
import store from "@/store";
import { Toast } from "vant";
import { getToken } from "./auth";

router.beforeEach(async(to, from, next) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title as string
  } else {
    document.title = '阅读'
  }
  const hasToken = getToken()
  if (hasToken) {
    const hasUserInfo = store.getters.getUid
      if (hasUserInfo) {
        next()
      } else {
        // 如果用户刷新了浏览器，那么需要重新请求基本信息塞到vuex中进行状态管理
        try {
          await store.dispatch('user/GET_INFO')
          next()
        } catch (error) {
          // 清空token
          await store.dispatch('user/SING_OUT')
          Toast.fail(error.message || '出错了')
          next({
            path: '/login',
            query: {
              redirect: to.fullPath // 将跳转的路由path作为参数，登录成功后跳转到该路由
            }
          })
        }
      }
  } else {
    if (to.meta.requireAuth) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath // 将跳转的路由path作为参数，登录成功后跳转到该路由
        }
      })
    } else {
      next()
    }
  }
})