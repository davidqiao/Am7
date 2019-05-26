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
