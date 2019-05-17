import Vue from 'vue'
import Router from 'vue-router'
import SRM from '@/components/SRM'
import CRM from '@/components/CRM'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/srm',
    name: 'srm',
    component: SRM,
    children: [{
      path: 'purchase',
      name: 'purchase',
      component: () => import('@/components/Table')
    }, {
      path: 'dashboard',
      name: 'dashboard',
      component: () => import('@/components/Dashboard')
    }]
  }, {
    path: '/crm',
    name: 'crm',
    component: CRM
  }]
})
