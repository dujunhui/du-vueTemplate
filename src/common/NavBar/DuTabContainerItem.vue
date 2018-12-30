<template>
    <div class="navBarContent" :class="{'is-selected': $parent.value===id}">
      <slot></slot>
    </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: ['id']
}
</script>

<style scoped type="text/scss" lang="scss">
  .navBarContent{
    position: absolute;
    top:  0;
    left: 0;
    bottom: 0;
    width: 100%;
    display: none;
    overflow: hidden;
    font-size: $font-small-size;
  }
  .is-selected{
    display: block;
  }
</style>
