import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Layout'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/srm',
    name: 'srm',
    component: Index,
    children: [{
      path: 'purchase',
      name: 'srm_purchase',
      meta: {
        ormID: 'P',
        title: '采购订单'

      },
      component: () => import('@/components/Table')
    }, {
      path: 'outsourcing',
      name: 'srm_outsourcing',
      meta: {
        ormID: 'W',
        title: '委外订单'
      },
      component: () => import('@/components/Table')
    }, {
      path: 'dashboard',
      name: 'srm_dashboard',
      component: () => import('@/components/Dashboard')
    }]
  }, {
    path: '/crm',
    name: 'crm',
    component: Index,
    children: [{
      path: 'sales',
      name: 'crm_sales',
      meta: {
        title: '销售订单'
      },
      component: () => import('@/components/Table')
    }, {
      path: 'dashboard',
      name: 'crm_dashboard',
      component: () => import('@/components/Dashboard')
    }]
  }]
})
