/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const igcConfigTool =
  {
    path: '/igetcool/dataquery/config',
    component: Layout,
    alwaysShow: true,
    meta: {title: '配置工具', icon: 'el-icon-setting'},
    children: [
      {
        path: 'canalsync',
        component: () => import('@/views/igetcool/config/system/canalsync'),
        name: 'CanalSync',
        meta: {title: '订阅配置', icon: 'el-icon-connection'}
      },
      {
        path: 'dataquery',
        component: () => import('@/views/igetcool/config/system/dataquery'),
        name: 'DataQuery',
        meta: {title: '查询配置', icon: 'el-icon-s-platform'}
      },
      {
        path: 'other',
        component: () => import('@/views/igetcool/config/system/dataquery'),
        name: 'Other',
        meta: {title: '其它配置', icon: 'el-icon-more'}
      },
      {
        path: 'canalTools',
        name: 'Canal工具',
        component: () => import('@/views/igetcool/config/system/canalsync'),
        meta: {title: 'Canal工具', icon: 'el-icon-connection'}
      },
      {
        path: 'kafkaTools',
        name: 'Kafka工具',
        component: () => import('@/views/igetcool/config/system/dataquery'),
        meta: {title: 'Kafka工具', icon: 'el-icon-s-platform'}
      },
      {
        path: 'zkTools',
        name: 'ZK工具',
        component: () => import('@/views/igetcool/config/system/dataquery'),
        meta: {title: 'ZK工具', icon: 'el-icon-more'}
      }
    ]
  }
export default igcConfigTool
