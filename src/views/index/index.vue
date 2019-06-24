<template>
    <div class="page">
      <mt-header title="首页" fixed>
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <div slot="right" @click="openOrderPopup">我的订单</div>
      </mt-header>
      <div class="page-content">
        <vue-scroll :ops="ops">
          <div class="box">
            <div @click="$router.replace('/page1')">page1 > </div>
            <div>用户：{{userName}}</div>
            <div><input type="text" v-focus v-number></div>
            <div><mt-button @click.native="showToast">Toast提示</mt-button></div>
            <div><mt-button @click.native="showToastBack">Toast提示后返回</mt-button></div>
            <div><mt-button @click.native="showToastSuccess">Toast成功的提示</mt-button></div>
            <div><mt-button @click.native="showToastSuccessBack">Toast成功的提示后返回</mt-button></div>
            <div><mt-button @click.native="showToastError">Toast失败的提示</mt-button></div>
            <div><mt-button @click.native="showToastErrorBack">Toast失败的提示后返回</mt-button></div>
            <div class="imgBox"><img src="../../assets/img/logo.png"></div>
            <p v-for="(i, index) in goods" :key="index">{{i.name}} ￥{{i.price}}</p>
          </div>
        </vue-scroll>
      </div>

      <!--购物车遮罩-->
      <transition name="shade">
        <div v-show="buyCarShow" class="shadeBox" @click="buyCarShow=false"></div>
      </transition>

      <!--购物车层-->
      <transition name="slide-fade">
        <div v-show="buyCarShow" class="buyCarBox">
          <p>购物车</p>
        </div>
      </transition>

      <!--底部Bar-->
      <div class="bottomBarBox" @click="buyCarShow=true"></div>

      <!--弹出层 我的订单-->
      <mt-popup
        v-model="orderPopupVisible"
        position="right" class="mint-popup-w100" :modal="false">
        <my-list-order :data="orders" v-on:closeOrderPopup="closeOrderPopup"></my-list-order>
      </mt-popup>
    </div>
</template>

<script>

import IndexService from '@/services/IndexService'
import { verify } from '@/utils/verify'
import mixin from '@/mixin/mixin'
import myListOrder from './listOrder.vue'
import { focus, number } from '../../directives/common'

let data = {
  indexService: null,
  orderPopupVisible: false, // 我的订单pop层
  buyCarShow: false, // 购物车开关
  userName: '', // 工号
  goods: [], // 商品
  orders: ['sss']
}
export default {
  data () {
    return data
  },
  components: { myListOrder },
  directives: {
    ...focus,
    ...number
  },
  mounted () {
    this.init()
    this.indexService.getGoods((data) => {
      if (data.state === 'success') {
        this.userName = data.data.userName
        this.goods = data.data.goods
        if (verify.IsRequired(this.userName)) {
          this.setToastMsgError({message: '获取用户信息失败'})
        }
      }
    })
  },
  destroyed () {
    this.userName = ''
  },
  methods: {
    init () {
      this.indexService = new IndexService(this)
    },
    openOrderPopup () {
      this.orderPopupVisible = true
    },
    closeOrderPopup () {
      this.orderPopupVisible = false
    },
    showToast () {
      this.setToast({message: 'Toast提示！'})
    },
    showToastBack () {
      this.setToastBack({message: 'Toast提示！等待执行返回', backFun: () => { alert('开始执行返回函数') }})
    },
    showToastSuccess () {
      this.setToastSuccess({message: '成功'})
    },
    showToastSuccessBack () {
      this.setToastSuccessBack({message: '成功', backFun: () => { alert('开始执行返回函数') }})
    },
    showToastError () {
      this.setToastError({message: '失败'})
    },
    showToastErrorBack () {
      this.setToastErrorBack({message: '失败', backFun: () => { alert('开始执行返回函数') }})
    }
  },
  mixins: [mixin]
}
</script>

<style scoped type="text/scss" lang="scss">

.page-content{
  margin-bottom: $bottom-height;
}
.box{
  padding: 0.2rem;
  div{
    padding: 0.2rem 0;
  }
  .imgBox{
    width: rem(500);
    img{
      @include img-responsive()
    }
  }
}

.bottomBarBox{
  position: absolute;
  bottom: 0;
  left:0;
  z-index: 1;
  width: 100%;
  height: $bottom-height;
  background-color: $bottom-bar-color;
  font-size: $font-base-size;
  padding-left: 2rem;
}

</style>
