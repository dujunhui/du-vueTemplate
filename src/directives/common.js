import { format } from '../utils/format'
let focus = {
  /*
   *  v-focus 自动获取焦点
   *  注意：影响路由的进场动画
   */
  focus: {
    // 当绑定元素插入到DOM中
    inserted: function (el) {
      el.focus() // 获取焦点
    }
  }
}

let number = {
  /*
   *  v-number 只能输入非0正整数
   *  注意：与v-model有冲突
   */
  number: {
    bind: function (el, binding, vnode) {
      el.handler = function () {
        // vnode.context.name = format.number(el.value) //用vnode.context可以拿到this里data的数据
        el.value = format.number(el.value)
      }
      el.addEventListener('input', el.handler)
    },
    unbind: function (el) {
      el.removeEventListener('input', el.handler)
    }
  }
}

let drag = {
  /*
   *  v-drag 拖拽
   *  <div v-drag>我可以拖拽</div>
   */
  drag: {
    inserted: function (el) {
      let oW, oH
      // 绑定touchstart事件
      el.addEventListener('touchstart', function (e) {
        console.log(e)
        let touches = e.touches[0]
        oW = touches.clientX - el.offsetLeft
        oH = touches.clientY - el.offsetTop
        // 阻止页面的滑动默认事件
        document.addEventListener('touchmove', defaultEvent, false)
      }, false)

      el.addEventListener('touchmove', function (e) {
        let touches = e.touches[0]
        let oLeft = touches.clientX - oW
        let oTop = touches.clientY - oH
        if (oLeft < 0) {
          oLeft = 0
        } else if (oLeft > document.documentElement.clientWidth - el.offsetWidth) {
          oLeft = (document.documentElement.clientWidth - el.offsetWidth)
        }
        if (oTop < 0) {
          oTop = 0
        } else if (oTop > document.documentElement.clientHeight - el.offsetHeight) {
          oTop = (document.documentElement.clientHeight - el.offsetHeight)
        }
        el.style.left = oLeft + 'px'
        el.style.top = oTop + 'px'
      }, false)

      el.addEventListener('touchend', function () {
        document.removeEventListener('touchmove', defaultEvent, false)
      }, false)
      function defaultEvent (e) {
        e.preventDefault()
      }
    }
  }
}

export { focus, number, drag }
