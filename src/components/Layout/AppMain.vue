<template>
  <div class="app-main-container">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'AppMain'
}
</script>
<style scope>
  .app-main-container {
    height:calc(100vh - 135px);
  }
</style>
