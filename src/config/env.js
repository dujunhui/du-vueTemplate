let baseURL // http库所请求的地址
let imgUrl // 放置图片的路径，以便图片使用cdn的时候更换路径

if (process.env.NODE_ENV === 'development') { // 开发环境
  baseURL = 'https://easy-mock.com/mock/5c281540e644911aa4071e7a/du-vueTemplate'
  imgUrl = ''
} else {
  baseURL = 'https://easy-mock.com/mock/5c281540e644911aa4071e7a/du-vueTemplate'
  imgUrl = ''
}

export {baseURL, imgUrl}
