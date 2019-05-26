import modules from '@/store/module'
import menus from '@/store/menu'
export default {
  // 表格每页显示行数
  limit: 100,
  // 获得模块信息
  getModules: function () {
    // todo:获取当前用户的模块信息
    return modules
  },
  // 获得菜单信息
  getMenus: function (moduleName) {
    // todo:获取当前用户的菜单信息
    if (moduleName in menus) {
      return menus[moduleName]
    }
    return null
  }
}
