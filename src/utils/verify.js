/* ===============================================
 *                公 用 资 源 函 数
 *                      验证
 * =============================================== */

let verify = {
  /**
   *  非空 null、undefined、''
  */
  IsRequired (v) {
    return (window._.isNull(v) || window._.isUndefined(v) || v === '')
  },
  /**
   * 手机号验证 //以1开头的手机号
  */
  IsMobile (v) {
    return IsValid(/^1[0-9]{10}$/, v) // 以1开头的手机号
  },
  /**
   * 开头不能是0的正整数
   */
  IsIntNoZero (v) {
    return IsValid(/^[1-9]\d*$/, v)
  },
  /**
   * 微信号验证
  */
  IsWxId (v) {
    return IsValid(/[0-9A-Za-z]/, v)
  },
  /*
   日期格式验证
   正确格式 2018-01-02
   */
  IsDataStr (v) {
    let date = v
    let result = date.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/)
    if (result === null) {
      return false
    }
    if (parseInt(result[1]) > 2022) { // 设置年的上限
      return false
    }
    let d = new Date(result[1], result[3] - 1, result[4])
    return (d.getFullYear() === parseInt(result[1]) && (d.getMonth() + 1) === parseInt(result[3]) && d.getDate() === parseInt(result[4]))
  },
  /*
   微信版本验证
   return:
   {
       state:   状态
       message: 信息
   }
   */
  wxInfo () {
    let mes = {
      state: false,
      message: ''
    }
    /* eslint-disable no-useless-escape  */
    let wechatInfo = navigator.userAgent.match(/MicroMessenger\/([\d\.]+)/i)
    if (!wechatInfo) {
      mes.message = '该支付方式仅支持微信'
      return mes
    } else if (wechatInfo[1] < '5.0') {
      mes.message = '该支付方式仅支持微信5.0以上版本'
      return mes
    }
    mes.state = true
    return mes
  }
}

function IsValid (p, t) {
  return !p.test(t)
}

export { verify }
