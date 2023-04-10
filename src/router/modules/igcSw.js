/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const igcSwRouter = {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: () => import('@/views/canal-tab/index'),
          name: 'Canal-Tab',
          meta: { title: '订阅SW链路预警', icon: 'el-icon-warning-outline' }
        }
      ]
    }
export default igcSwRouter
