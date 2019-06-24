import Vue from 'vue'
import Router from 'vue-router'

const index = resolve => require(['../views/index/index.vue'], resolve)
const login = resolve => require(['../views/login/login.vue'], resolve)
const page1 = resolve => require(['../views/page1/page1.vue'], resolve)

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', name: 'index', component: index },
    { path: '/login', name: 'login', component: login },
    { path: '/page1', name: 'page1', component: page1 }
  ]
})

router.beforeEach((to, from, next) => {
  Vue.prototype.cancelAjax() // 中断请求
  next()
})

export default router
