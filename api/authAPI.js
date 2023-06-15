import { request } from '@/api/request';

const Auth = {
  base: '/Account/Auth',
};
const CreateAccount = {
  base: '/Account/Create/Client',
};
const ForgotPass = {
  base: '/Account/ResetPassword',
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
export const ForgotPassApi = (data) => {
  return request({
    url: ForgotPass.base,
    method: 'patch',
    data,
  });
};
