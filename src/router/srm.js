export default {
  path: '/srm',
  name: 'srm',
  component: () => import('@/Views'),
  children: [{
    path: 'dashboard',
    name: 'srm/dashboard',
    component: () => import('@/components/Dashboard')
  }, {
    path: 'purchase',
    name: 'srm/purchase',
    component: () => import('@/views/srm/Purchase')
  }]
}
