import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/vue-element-admin/canal/canalList',
    method: 'get',
    params: query
  })
}

