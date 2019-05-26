export default {
  components: {
    toolbar: {
      new: 'New',
      import: 'Import',
      delete: 'Delete'
    },
    navMenu: {
      logout: 'logout'
    }
  },
  views: {
    srm: {
      purchase: 'Purchase'
    },
    crm: {
      sale: 'Sales order'
    }
  },
  modules: {
    srm: 'SRM',
    crm: 'CRM',
    cfg: 'Config'
  },
  menus: {
    srm: {
      order: 'Orders',
      purchase: 'Purchase',
      outsourcing: 'Outsourcing'
    },
    crm: {
      order: 'Orders',
      sale: 'Sale'
    }
  }
}
