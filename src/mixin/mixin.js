import {mapState, mapMutations} from 'vuex'
const myMixin = {
  methods: {
    // 将对象转化成json字符串，存入sessionStorage
    sessionStoragePut (key, value) {
      sessionStorage.setItem(key, JSON.stringify(value))
    },
    // 从sessionStorage中取出json字符串，然后将json字符串转化成对象,并返回.
    sessionStorageGet (key, isRemove) {
      let result = JSON.parse(sessionStorage.getItem(key))
      if (isRemove) {
        sessionStorage.removeItem(key)
      }
      return result
    },
    // 从sessionStorage移除
    sessionStorageRemove (key) {
      sessionStorage.removeItem(key)
    },
    // 清除sessionStorage
    sessionStorageClear () {
      sessionStorage.clear()
    },
    ...mapMutations({
      setToast: 'mintVar/setToast',
      setToastBack: 'mintVar/setToastBack',
      setToastSuccess: 'mintVar/setToastSuccess',
      setToastSuccessBack: 'mintVar/setToastSuccessBack',
      setToastError: 'mintVar/setToastError',
      setToastErrorBack: 'mintVar/setToastErrorBack',
      setLoadingOpen: 'mintVar/setLoadingOpen'
    })
  },
  // vue-scroll组件需要用到的数据
  computed: {
    ...mapState('vScrollVar', {ops: 'ops'})
  }
}
export default myMixin
