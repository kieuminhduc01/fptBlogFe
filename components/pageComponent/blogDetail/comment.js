import { CreateCommentApi } from '@/api/commentAPI';
import { BASE_URL } from '@/api/request';
import { messageUnauthorizedAtom } from '@/atom/store';
import AvatarIcon from '@/components/icons/avatarIcon';
import AvatarIconSubCM from '@/components/icons/avatarIconSubCM';
import { ButtonTagStyled } from '@/components/pageComponent/blogDetail/styledComponent';
import { getCookie } from '@/cookie/cookie';
import { UrlPath } from '@/type/urlPath';
import axios from 'axios';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { StatusAlertService } from 'react-status-alert';

const Comment = ({ BlogPost }) => {
  const [commentData, setCommentData] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [commentReplyText, setCommentReplyText] = useState('');
  const [commentIdParent, setCommentIdParent] = useState(null);
  const [, setMessageUnauthorized] = useAtom(messageUnauthorizedAtom);
  const router = useRouter();

  useEffect(() => {
    const getComment = async () => {
      try {
        const res = await axios.get(
          `${BASE_URL}Comment?blogPostId=${BlogPost.id}`,
        );
        setCommentData(res.data.result.comments);
      } catch (err) {
        console.error(err);
      }
    };

    getComment();
  }, []);

  const handleChangeCommentText = (e) => {
    setCommentText(e.target.value);
  };

  const handleChangeCommentReplyText = (e) => {
    setCommentReplyText(e.target.value);
  };

  const handleClickReply = (commentId) => {
    setCommentIdParent(commentId);
  };

  const handleSubmitReply = () => {
    const dataReq = {
      accountId: getCookie('accountId'),
      blogPostId: BlogPost.id,
      parentId: commentIdParent,
      content: commentReplyText,
    };

    CreateCommentApi(dataReq)
      .then((res) => {
        StatusAlertService.showSuccess('Trả lời thành công!');
      })
      .catch((err) => {
        if (err.response.status === 401) {
          setMessageUnauthorized(
            'Bạn chưa đăng nhập, vui lòng đăng nhập để trả lời bình luận',
          );
          router.push(UrlPath.auth.url);
        } else {
          StatusAlertService.showError(err.response.data.Detail);
        }
      })
      .finally(() => {
        setCommentIdParent(null);
      });
  };

  const handleClickComment = () => {
    const dataReq = {
      accountId: getCookie('accountId'),
      blogPostId: BlogPost.id,
      content: commentText,
    };

    CreateCommentApi(dataReq)
      .then((res) => {
        StatusAlertService.showSuccess('Bình luận thành công!');
      })
      .catch((err) => {
        if (err.response.status === 401) {
          setMessageUnauthorized(
            'Bạn chưa đăng nhập, vui lòng đăng nhập để bình luận',
          );
          router.push(UrlPath.auth.url);
        } else {
          StatusAlertService.showError(err.response.data.Detail);
        }
      })
      .finally(() => {
        setCommentIdParent(null);
      });
  };

  return (
    <>
      <div>
        <div>
          <div className="ff-lexend fs-24px-xxl fs-24px-xl fs-24px-lg fs-24px-md fs-24px-sm fs-22px fw-bold">
            Bình luận
          </div>
          <div>
            {commentData.map((comment, index) => (
              <div key={index} className="d-flex">
                <div>
                  <AvatarIcon />
                </div>
                <div className="ms-2 mb-1">
                  <div className="bg-body-secondary p-3 rounded-4">
                    <div className="ff-lexend fs-22px-xxl fs-22px-xl fs-22px-lg fs-22px-md fs-22px-sm fs-20px fw-bold">
                      {comment.accountName}
                    </div>
                    <div>
                      <div className="ff-lexend fs-20px-xxl fs-20px-xl fs-20px-lg fs-20px-md fs-20px-sm fs-18px">
                        {comment.commentContent}
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => handleClickReply(comment.commentId)}
                      className="mx-2 fw-bolder border-0 bg-body ff-lexend fs-16px-xxl fs-16px-xl fs-16px-lg fs-16px-md fs-16px-sm fs-14px"
                    >
                      Reply
                    </button>
                    {commentIdParent === comment.commentId && (
                      <div key={index}>
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            placeholder="Nhập"
                            value={commentReplyText}
                            onChange={handleChangeCommentReplyText}
                          />
                          <button
                            onClick={handleSubmitReply}
                            type="submit"
                            className="btn btn-primary"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                  {comment.subComments?.map((subComments, index) => (
                    <div key={index} className="d-flex">
                      <div>
                        <AvatarIconSubCM />
                      </div>
                      <div className="ms-1 mt-1 mt-md-2 mb-1 mb-md-2">
                        <div className="bg-body-secondary p-3 rounded-4">
                          <div className="ff-lexend fs-22px-xxl fs-22px-xl fs-22px-lg fs-22px-md fs-22px-sm fs-20px fw-bold">
                            {subComments.accountName}
                          </div>
                          <div>
                            <div className="ff-lexend fs-20px-xxl fs-20px-xl fs-20px-lg fs-20px-md fs-20px-sm fs-18px">
                              {subComments.commentContent}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <br />
        <div>
          <input
            type="text"
            placeholder="Nhập bình luận"
            className="form-control form-control-lg"
            value={commentText}
            onChange={handleChangeCommentText}
          />
        </div>
        <br />
        <div className="d-flex justify-content-center mt-2 mb-5">
          <ButtonTagStyled
            onClick={handleClickComment}
            className="mb-md-5 bg-body ff-lexend fs-20px-xxl fs-20px-xl fs-20px-lg fs-20px-md fs-20px-sm fs-18px"
          >
            Bình luận
          </ButtonTagStyled>
        </div>
      </div>
    </>
  );
};

export default Comment;
