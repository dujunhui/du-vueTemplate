<template>
    <div class="navBar">
      <slot></slot>
    </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: ['value']
}
</script>

<style scoped type="text/scss" lang="scss">
  .navBar{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: $navBar-height;
    font-size: $font-small-size;
    @include clearfix;
  }
</style>
