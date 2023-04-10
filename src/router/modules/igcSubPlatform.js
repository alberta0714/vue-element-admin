/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const igcSubPlatform = {
  path: '/igetcool/SubscriptionPlatform',
  component: Layout,
  alwaysShow: true,
  meta: { title:'订阅开放平台', icon: 'el-icon-s-platform' },
  children: [
    {
      path: 'index',
      component: () => import('@/views/igetcool/SubscriptionPlatform/index'),
      name: 'SubscriptionPlatformCreate',
      meta: { title: '创建配置', icon: 'el-icon-postcard' }
    },
    {
      path: 'list',
      component: () => import('@/views/igetcool/SubscriptionPlatform/index'),
      name: 'SubscriptionPlatformList',
      meta: { title: '订阅列表', icon: 'table' }
    }
  ]
}
export default igcSubPlatform
