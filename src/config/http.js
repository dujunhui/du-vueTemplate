/* ===============================================
 *                公 用 资 源 函 数
 *                 axios的二次封装
 * =============================================== */

import Vue from 'vue'
import axios from 'axios'
// import qs from 'qs'

import store from '@/store'
import { baseURL } from './env'

// axios 配置
axios.defaults.timeout = 10000

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.baseURL = baseURL

// 请求时拦截
axios.interceptors.request.use((config) => {
  // 发送请求之前做一些处理
  store.commit('mintVar/setLoadingOpen', {message: '加载中', spinnerType: 'snake'}) // 打开loading

  // 每次发送请求之前检测都vuex存有token,那么都要放在请求头发送给服务器
  config.headers.Authorization = `token 123`

  return config
}, (error) => {
  store.commit('mintVar/setLoadingClose') // 关闭loading
  // 当请求异常时做一些处理
  return Promise.reject(error)
})

// 响应时拦截
axios.interceptors.response.use((response) => {
  // 返回响应时做一些处理
  store.commit('mintVar/setLoadingClose')
  return response
}, (error) => {
  store.commit('mintVar/setLoadingClose')
  // 当响应异常时做一些处理
  return Promise.reject(error)
})

const CancelToken = axios.CancelToken
let cancel
let cancelAjaxText = '中断成功'

/**
 * 封装get方法
 * @param obj.url
 * @param obj.params
 * @returns {Promise}
 */
export function get (obj) {
  return new Promise((resolve, reject) => {
    axios.get(obj.url, {
      params: obj.params,
      cancelToken: new CancelToken(c => { // 强行中断请求要用到的
        cancel = c
      })
    })
      .then(response => {
        if (response.data.state === 'expired') {
          store.commit('mintVar/setToastMsg', {
            message: '没有登录',
            position: 'middle',
            duration: 3000
          })
          this.$router.replace('/')
        } else {
          resolve(response.data) // 异步请求成功
        }
      })
      .catch(error => {
        if (axios.isCancel(error)) {
          console.log('Request canceled', error.message)
        } else {
          reject(error) // 异步请求失败 报500的
          store.commit('mintVar/setToastMsg', {
            message: '请求超时，请检查网络',
            position: 'middle',
            duration: 3000
          })
        }
      })
  })
}

/**
 * 封装post请求
 * @param obj.url
 * @param obj.params
 * @returns {Promise}
 */
export function post (obj) {
  return new Promise((resolve, reject) => {
    axios.post(obj.url, obj.params, {
      cancelToken: new CancelToken(c => { // 强行中断请求要用到的
        cancel = c
      })
    })
      .then(response => {
        if (response.data.state === 'expired') {
          store.commit('mintVar/setToastMsg', {
            message: '没有登录',
            position: 'middle',
            duration: 3000
          })
          this.$router.replace('/')
        } else {
          resolve(response.data) // 异步请求成功
        }
      })
      .catch(error => {
        if (axios.isCancel(error)) {
          console.log('Request canceled', error.message)
        } else {
          reject(error) // 异步请求失败 报500的
          store.commit('mintVar/setToastMsg', {
            message: '请求超时，请检查网络',
            position: 'middle',
            duration: 3000
          })
        }
      })
  })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function patch (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data)
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
        store.commit('mintVar/setToastMsg', {
          message: '请求超时，请检查网络',
          position: 'middle',
          duration: 3000
        })
      })
  })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function put (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
        store.commit('mintVar/setToastMsg', {
          message: '请求超时，请检查网络',
          position: 'middle',
          duration: 3000
        })
      })
  })
}

// 切换页面强行中断请求 router.beforeEach中用到
Vue.prototype.cancelAjax = function () {
  if (cancel) {
    cancel(cancelAjaxText)
  }
}
