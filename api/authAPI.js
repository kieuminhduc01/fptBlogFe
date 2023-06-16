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
const ChangePass = {
  base: '/Account/ChangePass',
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
export const ChangePassApi = (data) => {
  return request({
    url: ChangePass.base,
    method: 'patch',
    data,
  });
};
