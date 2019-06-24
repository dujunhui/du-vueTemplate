<template>
    <div>
      <mt-header title="我的订单" fixed>
        <div slot="left"  @click="closeOrderPopup">
          <mt-button icon="back">返回</mt-button>
        </div>
      </mt-header>
      <div class="popup-content">
        <!--NabBar 实例-->
        <du-nav-bar v-model="tabSelectedId">
          <du-tab-item id="1">选项一</du-tab-item>
          <du-tab-item id="2">选项二</du-tab-item>
        </du-nav-bar>
        <du-tab-container v-model="tabSelectedId">
          <du-tab-container-item id="1">
            <vue-scroll :ops="ops">
              <div>{{data[0]}}</div>
              <p v-for="(i,index) of 100" :key="index">1--{{i}}</p>
            </vue-scroll>
          </du-tab-container-item>
          <du-tab-container-item id="2">
            <vue-scroll :ops="ops">
              <p v-for="(i,index) of 100" :key="index">2--{{i}}</p>
            </vue-scroll>
          </du-tab-container-item>
        </du-tab-container>

      </div>
    </div>
</template>

<script>
// import { verify } from '@/utils/verify'
import mixin from '@/mixin/mixin'
let data = {
  tabSelectedId: '1' // 我的订单选中的tab标签
}
export default {
  data () {
    return data
  },
  props: ['data'],
  methods: {
    closeOrderPopup () {
      this.$emit('closeOrderPopup')
    }
  },
  mixins: [mixin]
}
</script>

<style scoped type="text/scss" lang="scss">
</style>
