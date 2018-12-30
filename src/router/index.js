import Vue from 'vue'
import Router from 'vue-router'

const index = resolve => require(['../components/index/index.vue'], resolve)
const page1 = resolve => require(['../components/page1/page1.vue'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'index', component: index },
    { path: '/page1', name: 'page1', component: page1 }
  ]
})
