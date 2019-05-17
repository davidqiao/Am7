<template>
  <div>
    <nav-menu />
    <tool-bar />
    <app-main />
  </div>
</template>
<script>
import NavMenu from './NavMenu'
import ToolBar from './ToolBar'
import AppMain from './AppMain'
export default {
  components: {
    NavMenu,
    ToolBar,
    AppMain
  }
}
</script>
