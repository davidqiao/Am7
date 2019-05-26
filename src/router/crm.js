export default{
  path: '/crm',
  name: 'crm',
  component: () => import('@/components/Layout'),
  redirect: '/crm/Dashboard',
  children: [{
    path: 'dashboard',
    name: 'crm/dashboard',
    component: () => import('@/components/Dashboard')
  }, {
    path: 'sale',
    name: 'crm/sale',
    component: () => import('@/views/crm/Sale')
  }]
}
