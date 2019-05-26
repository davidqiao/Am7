export default{
  path: '/crm',
  name: 'crm',
  component: () => import('@/Views'),
  children: [{
    path: 'sales',
    name: 'crm/sales',
    component: () => import('@/views/crm/Sale')
  }, {
    path: 'dashboard',
    name: 'crm/dashboard',
    component: () => import('@/components/Dashboard')
  }]
}
