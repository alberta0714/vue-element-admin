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
      name: 'SubscriptionPlatform',
      meta: { title: '开放配置', icon: 'el-icon-postcard' }
    }
  ]
}
export default igcSubPlatform
