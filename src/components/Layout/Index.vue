<template>
  <div>
    <nav-menu />
    <app-main />
  </div>
</template>
<script>
import NavMenu from './NavMenu'
import AppMain from './AppMain'
export default {
  components: {
    NavMenu,
    AppMain
  }
}
</script>
