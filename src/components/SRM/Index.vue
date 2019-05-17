<template>
  <div>
    <nav-menu />
    <tool-bar />
    <app-main />
  </div>
</template>
<script>
import NavMenu from '@/components/Layout/NavMenu'
import ToolBar from '@/components/Layout/ToolBar'
import AppMain from '@/components/Layout/AppMain'
export default {
  components: {
    NavMenu,
    ToolBar,
    AppMain
  }
}
</script>
