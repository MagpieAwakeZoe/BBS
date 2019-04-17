import request from '../utils'
export function regist (params) {
  return request({
    method: 'Post',
    url: '/users/regist',
    data: params
  })
}

export function login (params) {
  return request({
    method: 'Post',
    url: '/users/login',
    data: params
  })
}
