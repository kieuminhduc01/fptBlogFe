import { request } from '@/api/request';

const Like = {
  base: 'BlogPost/Update-Like',
};
export const LikeApi = (data) => {
  return request({
    url: Like.base,
    method: 'patch',
    data,
  });
};
