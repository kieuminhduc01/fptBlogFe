import { request } from './request';

const Auth = {
  base: '/Account/Auth',
};
const CreateAccount = {
  base: '/Account/Create/Client',
};
export const LoginApi = (data) => {
  return request({
    url: Auth.base,
    method: 'post',
    data,
  });
};
export const CreateAccountApi = (data) => {
  return request({
    url: CreateAccount.base,
    method: 'post',
    data,
  });
};
