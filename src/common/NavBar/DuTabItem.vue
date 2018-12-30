<template>
  <div :class="{'is-selected': $parent.value===id}" @click="$parent.$emit('input', id)">
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
  div{
    width: 50%;
    float: left;
    text-align: center;
    height: $navBar-height;
    line-height: $navBar-height;;
    border-bottom: 0.025rem solid $bottom-line-color;
  }
  .is-selected{
    color: $color-primary;
    border-bottom: 0.05rem solid $color-primary;
  }
</style>
