<template>
    <div class="navBarContent">
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
  .navBarContent{
    position: absolute;
    top:  $navBar-height;
    left: 0;
    bottom: 0;
    width: 100%;
    font-size: $font-small-size;
  }
</style>
