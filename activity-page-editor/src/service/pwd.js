import { request } from '../utils/request'

export function saveTemp (data) {
  return request({
    url: '/activity/pwdTemp/save',
    method: 'post',
    data
  })
}
