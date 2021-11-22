import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/vue-element-admin/canal/canalList',
    method: 'get',
    params: query
  })
}


export function traceCheck(query) {
  return request({
    url: '/admin/dataquery/sw/checkpoint',
    method: 'get',
    params: query
  })
}


// export function traceCheck(query) {
//   return request({
//     url: 'http://igetcool-data-query-sw-dev.svc.igetcool.com/admin/dataquery/sw/checkpoint',
//     method: 'get',
//     params: query
//   })
// }


