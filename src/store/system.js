export default {
  // 获得模块信息
  getModules: function () {
    return [{
      id: '1',
      name: 'SRM'
    }, {
      id: '2',
      name: 'CRM'
    }, {
      id: '3',
      name: '参数设置'
    }]
  },
  // 获得菜单信息
  getMenus: function () {
    return [{
      id: 'logo',
      name: 'SRM'
    }, {
      id: '1',
      name: '订单管理',
      submenus: [{
        id: '1-1',
        name: '采购订单'
      }, {
        id: '1-2',
        name: '委外订单'
      }]
    }, {
      id: '2',
      name: '交货管理',
      submenus: [{
        id: '2-1',
        name: '交货通知单'
      }, {
        id: '2-2',
        name: '退货通知单'
      }]
    }]
  }
}
