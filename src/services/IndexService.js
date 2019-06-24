
import { apiHandler } from '@/api/index'

class IndexService {
  /**
   * 初始化实例变量
   */
  constructor (_this) {
    this._this = _this
  }

  /**
   * 该方法涉及到了异步回调，回调函数只需要关心回调的结果是视图层想要的
   */
  getGoods (callback) {
    this._this.$post(apiHandler('GetGoods'))
      .then((res) => {
        callback(res)
      })
  }
}

export default IndexService
