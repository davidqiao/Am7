<template>
  <el-menu
    class="el-menu"
    :default-active="activeIndex"
    mode="horizontal"
    @select="menuSelect"
    router
  >
    <el-submenu index="0">
      <template #title><svg-icon iconClass="menu"/></template>
      <el-menu-item v-for="item in modules" :key="item.name" :index="item.path">{{$t(item.title)}}</el-menu-item> <!--模块菜单-->
    </el-submenu>
    <template v-for="menu in menus">
      <el-submenu v-if="menu.submenus" :key="menu.name" :index="menu.name"> <!--功能菜单-->
        <template #title>{{$t(menu.title)}}</template>
        <el-menu-item v-for="sub in menu.submenus" :key="sub.name" :index="sub.path">{{$t(sub.title)}}</el-menu-item> <!--功能子项-->
      </el-submenu>
      <el-menu-item v-else :key="menu.name" :index="menu.path">{{$t(menu.title)}}</el-menu-item> <!--logo-->
    </template>
    <el-menu-item class="right-menu">
      <template #title>
        <el-dropdown @command="userCommand">
          <span>
            <img src="@/assets/user.jpg" class="user-menu"/>
            <i class="el-icon-arrow-down el-icon--right" />
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="logout">{{$t('components.navMenu.logout')}}</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </template>
    </el-menu-item>
    <el-menu-item class="right-menu">
      <template #title>
        <el-dropdown @command="languageCommand">
          <span>
            <svg-icon iconClass="language"/>
            <i class="el-icon-arrow-down el-icon--right" />
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="zh">中文</el-dropdown-item>
              <el-dropdown-item command="en">English</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </template>
    </el-menu-item>
  </el-menu>
</template>
<script>
import System from '@/api/system'
import Cookie from 'js-cookie'
export default {
  name: 'NavMenu',
  data: function () {
    return {
      activeIndex: '',
      modules: System.getModules(),
      moduleName: ''
    }
  },
  computed: {
    menus () {
      return System.getMenus(this.moduleName)
    }
  },
  methods: {
    menuSelect (key, keyPath) {
      if (keyPath[0] === '0') {
        // key会自动在最前面前加一个'/'
        this.moduleName = key.replace('/', '')
      }
    },
    languageCommand (command) {
      this.$i18n.locale = command
      Cookie.set('language', command)
    },
    userCommand (command) {
      if (command === 'logout') {
        this.$router.push('/')
      }
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

  .el-menu{
    height: 60px;
  }

  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
