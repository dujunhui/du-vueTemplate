/* ===============================================
 *                公 用 资 源 函 数
 *                   格式化数据
 * =============================================== */

let format
format = {
  // 去除开头是0，和非数字字符
  number (v) {
    let s = v.replace(/[^\d]/g, '')
    return s.substring(0, 1) === 0 ? s.substring(1) : s
  },
  // 去掉左右空格
  trim (v) {
    return v.replace(/(^\s*)|(\s*$)/g, '')
  },
  allTrim (str) {
    return str.replace(/\s+/g, '')
  },
  // 将时间戳转换成时间
  timestampToTime (timestamp) {
    let date = new Date(timestamp) // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
    let Y = date.getFullYear() + '年'
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1)
    let D = date.getDate()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    // return Y+M+D+h+m+s;
    return Y + this.toDou(M) + '月' + this.toDou(D) + '日 ' + this.toDou(h) + ':' + this.toDou(m) + ':' + this.toDou(s)
  },
  toDou (num) {
    if (num < 10) {
      return '0' + num
    } else {
      return num
    }
  },
  toDouDou (num) {
    if (num < 10) {
      return '00' + num
    } else if (num < 100) {
      return '0' + num
    } else {
      return num
    }
  }
}
export { format }
