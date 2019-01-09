<template>
    <div class="page">
      <mt-header title="page1" fixed>
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <div class="page-content">
        <div class="dragDiv" v-drag></div>
      </div>
    </div>
</template>

<script>
import {drag} from '../../directives/common'
export default {
  data () {
    return {}
  },
  directives: {
    ...drag
  }
}
</script>

<style scoped type="text/scss" lang="scss">
  .dragDiv{
    position: absolute;
    left:0;
    bottom:0;
    width: rem(100);
    height: rem(100);
    background-color: #FFCD00;
    z-index: 999;
    touch-action: none;//阻止touchmove时浏览器后台报警告
  }
</style>
