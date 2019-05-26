export default {
  components: {
    toolbar: {
      new: '创建',
      import: '导入',
      delete: '删除'
    },
    navMenu: {
      logout: '注销'
    }
  },
  views: {
    srm: {
      purchase: '采购订单'
    },
    crm: {
      sale: '销售订单'
    }
  },
  modules: {
    srm: '供应商管理',
    crm: '客户管理',
    cfg: '系统设置'
  },
  menus: {
    srm: {
      order: '订单管理',
      purchase: '采购订单',
      outsourcing: '委外订单'
    },
    crm: {
      order: '订单管理',
      sale: '销售订单'
    }
  }
}
