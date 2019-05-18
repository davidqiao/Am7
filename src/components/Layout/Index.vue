<template>
  <div style="div-container">
    <nav-menu />
    <app-main />
  </div>
</template>
<script>
import NavMenu from '@/components/Layout/NavMenu'
import AppMain from '@/components/Layout/AppMain'
export default {
  components: {
    NavMenu,
    AppMain
  }
}
</script>
<style scope>
  .div-container {
    height: 100%;
  }
</style>
