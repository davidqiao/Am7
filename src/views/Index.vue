<template>
  <div>
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
  .div-container-flex{
    height: 100%;
    width:100%;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    overflow: hidden;
  }
</style>
