import Vue from 'vue'
import Router from 'vue-router'
import crm from './crm'
import srm from './srm'
import cfg from './cfg'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'login',
    component: () => import('@/views/login')
  },
  srm,
  crm,
  cfg
  ]
})
