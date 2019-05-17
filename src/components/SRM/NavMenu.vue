<template>
  <el-menu
    :default-active="activeIndex"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-submenu index="0">
      <template #title><svg-icon iconClass="menu"/></template>
      <el-menu-item v-for="item in modules" :key="item.id" :index="item.id">{{item.name}}</el-menu-item> <!--模块菜单-->
    </el-submenu>
    <template v-for="menu in menus">
      <el-submenu v-if="menu.submenus" :key="menu.id" :index="menu.id"> <!--功能菜单-->
        <template #title>{{menu.name}}</template>
        <el-menu-item v-for="sub in menu.submenus" :key="sub.id" :index="sub.id">{{sub.name}}</el-menu-item> <!--功能子项-->
      </el-submenu>
      <el-menu-item v-else :key="menu.id" :index="menu.id">{{menu.name}}</el-menu-item> <!--logo-->
    </template>
    <el-submenu index="5" class="right-menu">
      <template #title><img src="@/assets/user.jpg" class="user-menu"/></template>
      <el-menu-item>David</el-menu-item>
      <el-menu-item>注销</el-menu-item>
    </el-submenu>
    <el-submenu index="6" class="right-menu">
      <template #title><svg-icon iconClass="language"/></template>
      <el-menu-item>中文</el-menu-item>
      <el-menu-item>English</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
import system from '@/store/system'
export default {
  name: 'NavMenu',
  data: function () {
    return {
      activeIndex: '',
      modules: system.getModules(),
      menus: system.getMenus()
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style scoped>
  .user-menu {
    width: 40px;
    height: 40px;
    border-radius: 12px;
  }

  .right-menu {
    float: right;
  }
</style>
<style>
.el-submenu .el-menu-item, .el-menu--popup {
  min-width: 150px;
}
</style>
