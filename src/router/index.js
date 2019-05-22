import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/srm',
    name: 'srm',
    component: Index,
    children: [{
      path: 'purchase',
      name: 'srm_purchase',
      component: () => import('@/views/srm/Purchase')
    }, {
      path: 'outsourcing',
      name: 'srm_outsourcing',
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
      component: () => import('@/components/Table')
    }, {
      path: 'dashboard',
      name: 'crm_dashboard',
      component: () => import('@/components/Dashboard')
    }]
  }]
})
