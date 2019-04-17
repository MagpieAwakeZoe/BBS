import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home'
import Login from '@/page/login'
import Regist from '@/page/regist'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/regist',
    name: 'regist',
    component: Regist,
    meta: {
      requiresAuth: false
    }
  }
]

const router = new Router({
  routes: routes
})

router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('token')
  if (to.matched.some(record => record.meta.requiresAuth) && (!token || token === null)) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
})

export default router
