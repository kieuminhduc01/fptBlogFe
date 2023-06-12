import { request } from './requet'
const AdminAuthUrl = {
  base: '/Account/Auth'
}
export const LoginApi = (data) => {
  return request({
    url: AdminAuthUrl.base,
    method: 'post',
    data
  })
}
