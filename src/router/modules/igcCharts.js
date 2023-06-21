/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const igcCharts = {
  path: '/igetcool/charts',
  component: Layout,
  alwaysShow: true,
  meta: {title: '酷德图表', icon: 'chart'},
  children: [
    {
      path: 'mycharts',
      component: () => import('@/views/igetcool/charts/mycharts'),
      name: 'iGetCoolMyCharts',
      meta: {title: '我的图表', icon: 'el-icon-present'}
    }
  ]
}
export default igcCharts
