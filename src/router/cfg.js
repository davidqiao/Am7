export default{
  path: '/config',
  name: 'config',
  component: () => import('@/components/Layout'),
  redirect: 'config/list',
  children: [{
    path: 'list',
    name: 'config/list',
    component: () => import('@/views/config')
  }]
}
