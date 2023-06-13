import { request } from '@/api/request';

const Comment = {
  base: 'Comment',
};
export const CreateCommentApi = (data) => {
  return request({
    url: Comment.base,
    method: 'post',
    data,
  });
};
