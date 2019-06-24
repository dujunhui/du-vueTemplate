
import { apiHandler } from '@/api/index'

class IndexService {
  /**
   * 初始化实例变量
   */
  constructor (_this) {
    this._this = _this
  }

  /**
   * 业务逻辑层的方法
   * 视图层只需要知道调用该方法就行，至于该方法里面的代码是如何成功实现返回是不需要视图层关心的
   */
  sayHello () {
    console.log(this._this)
    return 'hello'
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
