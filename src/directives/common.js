import { format } from '../utils/format'
export default{
  /*
   *  v-focus 自动获取焦点
   *  注意：影响路由的进场动画
   */
  focus: {
    // 当绑定元素插入到DOM中
    inserted: function (el) {
      el.focus() // 获取焦点
    }
  },

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
  },
  /*
   *  v-quan 优惠券的自定义事件
   *  注意：与v-model有冲突
   */
  quan: {
    bind: function (el, binding, vnode) {
      el.handler = function () {
        // vnode.context.name = format.number(el.value) //用vnode.context可以拿到this里data的数据
        let diKou = format.zNumber(el.value)
        // 不能超过总券值
        if (diKou > vnode.context.fmyMoney) {
          diKou = ''
        }
        // 不能超过总价格（不能抵扣运费）
        let zongJia = parseFloat(Math.fixed(parseFloat(vnode.context.order_real_amount)))
        if (zongJia < diKou) {
          diKou = ''
        }
        el.value = diKou
        vnode.context.quan = el.value // 双向绑定值
      }
      el.addEventListener('input', el.handler)
    },
    unbind: function (el) {
      el.removeEventListener('input', el.handler)
    }
  }
}
