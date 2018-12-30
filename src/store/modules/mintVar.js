// 封装mint-ui的 Toast Indicator
import { Toast, Indicator } from 'mint-ui'
let mintVar = {
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
}
export default mintVar
