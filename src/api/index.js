/* 简介：
将需要用到的API进行分析， 通过apiHandler
对URL进行组装， 返回http.js中需要用到的参数
 */

/**
 *
 * 如果api需要类似key的公用参数，可进行扩展
 * let basicParams = {
 *    key: 'be11167ba8f986655acdaeb068210567'
 * }
 * let apiUrl = 'http://192.168.161.70:4000'
 */

let apiUrl = process.env.BASE_API

let apiList = {
  GetGoods: {
    url: apiUrl + '/getGoods'
  }
}

export function apiHandler (name, data = {}) {
  return {
    url: apiList[name].url,
    params: Object.assign({}, apiList[name].params, data) // 与接口中的公共参数进行合并
  }
}
