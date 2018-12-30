
import Vue from 'vue'
import App from './App'

import 'babel-polyfill'
import 'amfe-flexible'

/*  引入mintui  */
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
/*  引入router路由  */
import router from './router'
/* axios数据交互库 */
import { post, get, patch, put } from './config/http'
/*  引入store数据中心  */
import store from './store/index.js'
/* 引入lockr.js */
import Lockr from 'lockr'
/* lodash.js */
import _ from 'lodash'
/* 引入自定义的math.js */
import './utils/math.js'
/* 引入样式 */
import './sass/index.scss'
// 全局注册组件
import vuescroll from 'vuescroll'
import 'vuescroll/dist/vuescroll.css'

// 全局引入自定义公用组件du-ui
import DuUi from './common/du-ui'
Vue.use(DuUi)

// 全局引入mintUI组件
Vue.use(MintUI)
Vue.use(vuescroll)

/* 定义全局变量 */
Vue.prototype.$post = post
Vue.prototype.$get = get
Vue.prototype.$patch = patch
Vue.prototype.$put = put
window.Lockr = Lockr
window._ = _

// 关闭生产模式下给出的提示
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  Vue.prototype.cancelAjax() // 中断请求
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
