import { request } from './request';

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
