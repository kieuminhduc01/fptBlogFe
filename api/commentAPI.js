import { request } from './requet'
const Comment = {
  base: 'Comment'
}
export const CreateCommentApi = (data) => {
  return request({
    url: Comment.base,
    method: 'post',
    data
  })
}
export const ReadCommentApi = (data) => {
  return request({
    url: Comment.base,
    method: 'get',
    data
  })
}

