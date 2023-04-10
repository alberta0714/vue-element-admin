/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const igcOperationConfig = {
  path: '/igetcool/opeartioncenter/config',
  component: Layout,
  alwaysShow: true,
  meta: {title: '运营配置', icon: 'el-icon-s-operation'},
  children: [
    {
      path: 'coursepackage',
      component: () => import('@/views/igetcool/config/activities/coursepackage'),
      name: 'CoursePackages',
      meta: {title: '课包买送活动', icon: 'el-icon-present'}
    },
    {
      path: 'searchtop',
      component: () => import('@/views/igetcool/config/search/top'),
      name: 'SearchTop',
      meta: {title: '搜索置顶', icon: 'el-icon-caret-top'}
    },
    {
      path: 'searchblock',
      component: () => import('@/views/igetcool/config/search/block'),
      name: 'SearchBlock',
      meta: {title: '搜索屏蔽词', icon: 'el-icon-remove'}
    }
  ]
}
export default igcOperationConfig
