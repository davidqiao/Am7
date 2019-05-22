<template>
  <div class="app-main-container">
    <router-view :key="key"></router-view>
  </div>
</template>
<script>
export default {
  name: 'AppMain',
  computed: {
    key () {
      return this.$route.fullPath // 为了达到刷新的效果
    }
  }
}
</script>
<style scoped>
  .app-main-container {
    height: calc(100vh - 65px);;
    width: 100%;
  }
</style>
