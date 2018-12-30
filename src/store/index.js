import Vue from 'vue'
import Vuex from 'vuex'
import mintVar from './modules/mintVar'
import transition from './modules/transition'
import vScrollVar from './modules/vScrollVar'
Vue.use(Vuex)

/*
 * Vuex 状态管理 模块化管理模式
 * transition : 路由进出动画
 * mintVar : mintui中组件的变量
 * vScrollVar : vue-scroll组件的变量
 * ========================================================== */

export default new Vuex.Store({
  modules: {
    transition,
    mintVar,
    vScrollVar
  }
})
