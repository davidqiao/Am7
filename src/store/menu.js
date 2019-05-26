/**
 * 菜单信息
 * 目前只支持双层菜单
 *
 * xxx:           module.js中的name
 * {
 *  name:         唯一标识符
 *  path:         路由地址
 *  title:        标题-在多语言文件中的键
 * }
 *
 */
export default {
  srm: [{
    name: 'srm.dashboard',
    path: '/srm/dashboard',
    title: 'modules.srm'
  }, {
    name: 'srm.order',
    title: 'menus.srm.order',
    submenus: [{
      name: 'srm.purchase',
      path: '/srm/purchase',
      title: 'menus.srm.purchase'
    }, {
      name: 'srm.outsourcing',
      path: '/srm/outsourcing',
      title: 'menus.srm.outsourcing'
    }]
  }],
  crm: [{
    name: 'crm.dashboard',
    path: '/crm/dashboard',
    title: 'modules.crm'
  }, {
    name: 'crm.order',
    title: 'menus.crm.order',
    submenus: [{
      name: 'crm.sale',
      path: '/crm/sale',
      title: 'menus.crm.sale'
    }]
  }]
}
