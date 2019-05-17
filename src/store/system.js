export default {
  // 获得模块信息
  getModules: function () {
    return [{
      id: '/srm',
      name: '供应商管理'
    }, {
      id: '/crm',
      name: '客户管理'
    }, {
      id: '/config',
      name: '参数设置'
    }]
  },
  // 获得菜单信息
  getMenus: function (moduleName) {
    return [{
      id: '/srm/dashboard',
      name: 'SRM'
    }, {
      id: '1',
      name: '订单管理',
      submenus: [{
        id: '/srm/purchase',
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
