<template>
    <div class="page">
      <mt-header title="page1" fixed>
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <div class="page-content"></div>
    </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style scoped type="text/scss" lang="scss">
</style>
