import Vue from 'vue'
import Vuex from 'vuex'
import { Toast, Indicator } from 'mint-ui'
Vue.use(Vuex)

/*
 * Vuex 状态管理 模块化管理模式
 * transition : 路由进出动画
 * mintVar : mintui中组件的变量
 * ========================================================== */

export default new Vuex.Store({
  modules: {
    transition: {
      namespaced: true,
      state: {
        transitionName: '',
        action: []
      },
      mutations: {
        setTransition (state, transition) {
          state.transitionName = transition
        }
      }
    },
    mintVar: {
      namespaced: true,
      state: {
        toastObj: null // toast对象
      },
      mutations: {
        setToast (state, para) {
          if (state.toastObj) {
            state.toastObj.close()
          }
          state.toastObj = Toast({message: para.message, position: 'middle', duration: 3000})
        },
        setToastBack (state, para) {
          if (state.toastObj) {
            state.toastObj.close()
          }
          state.toastObj = Toast({message: para.message, position: 'middle'})
          setTimeout(() => {
            state.toastObj.close()
            para.backFun()
          }, 1500)
        },
        setToastSuccess (state, para) {
          if (state.toastObj) {
            state.toastObj.close()
          }
          state.toastObj = Toast({message: para.message, iconClass: 'mintui mintui-success', duration: 3000})
        },
        setToastSuccessBack (state, para) {
          if (state.toastObj) {
            state.toastObj.close()
          }
          state.toastObj = Toast({message: para.message, iconClass: 'mintui mintui-success'})
          setTimeout(() => {
            state.toastObj.close()
            para.backFun()
          }, 1500)
        },
        setToastError (state, para) {
          if (state.toastObj) {
            state.toastObj.close()
          }
          state.toastObj = Toast({message: para.message, iconClass: 'mintui mintui-field-error', duration: 3000})
        },
        setToastErrorBack (state, para) {
          if (state.toastObj) {
            state.toastObj.close()
          }
          state.toastObj = Toast({message: para.message, iconClass: 'mintui mintui-field-error'})
          setTimeout(() => {
            state.toastObj.close()
            para.backFun()
          }, 1500)
        },
        /**
         * @param state
         * @param para {message: '', spinnerType: 'snake'}
         */
        setLoadingOpen (state, para) {
          Indicator.open({
            text: para.message,
            spinnerType: para.spinnerType
          })
        },
        setLoadingClose () {
          Indicator.close()
        }
      }
    },
    vScrollVar: {
      namespaced: true,
      state: {
        ops: {
          bar: {
            background: 'rgb(222, 222, 222)'
          }
        }
      }
    }
  }
})
