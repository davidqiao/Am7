export default{
  path: '/config',
  name: 'config',
  component: () => import('@/Views'),
  children: [{
    path: 'list',
    name: 'config/list',
    component: () => import('@/views/config')
  }]
}
