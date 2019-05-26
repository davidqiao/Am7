export default {
  // 表格每页显示行数
  limit: 100,
  // 获得模块信息
  getModules: function () {
    return [{
      id: '/srm',
      path: '/srm',
      name: '供应商管理'
    }, {
      id: '/crm',
      path: '/crm',
      name: '客户管理'
    }, {
      id: '/config',
      path: '/config/list',
      name: '参数设置'
    }]
  },
  // 获得菜单信息
  getMenus: function (moduleId) {
    if (moduleId === '/srm') {
      return [{
        id: '/srm/dashboard',
        path: '/srm/dashboard',
        name: 'SRM'
      }, {
        id: '1',
        name: '订单管理',
        submenus: [{
          id: '/srm/purchase',
          path: '/srm/purchase',
          name: '采购订单'
        }, {
          id: '/srm/outsourcing',
          path: '/srm/outsourcing',
          name: '委外订单'
        }]
      }]
    } else if (moduleId === '/crm') {
      return [{
        id: '/crm/dashboard',
        path: '/crm/dashboard',
        name: 'CRM'
      }, {
        id: '1',
        name: '订单管理',
        submenus: [{
          id: '/crm/sale',
          path: '/crm/sale',
          name: '采购订单'
        }]
      }]
    }
  }
}
