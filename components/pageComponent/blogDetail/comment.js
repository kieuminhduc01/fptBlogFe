import { CreateCommentApi } from '@/api/commentAPI';
import { BASE_URL } from '@/api/request';
import { messageUnauthorizedAtom, totalCommentAtom } from '@/atom/store';
import { InputFieldStyled } from '@/components/header/styledComponent';
import AvatarIcon from '@/components/icons/avatarIcon';
import AvatarIconSubCM from '@/components/icons/avatarIconSubCM';
import SentIcon from '@/components/icons/sentIcon';
import { DivInputStyled } from '@/components/pageComponent/blogDetail/styledComponent';
import { getCookie } from '@/cookie/cookie';
import { UrlPath } from '@/type/urlPath';
import axios from 'axios';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { StatusAlertService } from 'react-status-alert';

const Comment = ({ BlogPost }) => {
  const [commentData, setCommentData] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [commentReplyText, setCommentReplyText] = useState('');
  const [commentIdParent, setCommentIdParent] = useState(null);
  const [, setMessageUnauthorized] = useAtom(messageUnauthorizedAtom);
  const [, setTotalComment] = useAtom(totalCommentAtom);
  const router = useRouter();
  const inputRef = useRef(null);

  useEffect(() => {
    axios
      .get(`${BASE_URL}Comment?blogPostId=${BlogPost.id}`)
      .then((res) => {
        setCommentData(res.data.result.comments);
      })
      .catch((err) => {
        StatusAlertService.showError(err.response.data.Detail);
      });
  }, []);
  useEffect(() => {
    if (commentIdParent !== null) {
      inputRef.current.focus();
    }
  }, [commentIdParent]);
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
        axios
          .get(`${BASE_URL}Comment?blogPostId=${BlogPost.id}`)
          .then((res) => {
            setCommentData(res.data.result.comments);
          });
        setTotalComment((pre) => pre + 1);
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
        axios
          .get(`${BASE_URL}Comment?blogPostId=${BlogPost.id}`)
          .then((res) => {
            setCommentData(res.data.result.comments);
          });
        setTotalComment((pre) => pre + 1);
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
  const handleKeyDownCmt = (event) => {
    if (event.key === 'Enter') {
      handleClickComment();
    }
  };
  const handleKeyDownReply = (event) => {
    if (event.key === 'Enter') {
      handleSubmitReply();
    }
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
                    <div className="ff-lexend fs-22px-xxl fs-22px-xl fs-22px-lg fs-22px-md fs-22px-sm fs-20px fw-bold color-2c2727">
                      {comment.accountName}
                    </div>
                    <div>
                      <div className="ff-lexend fs-20px-xxl fs-20px-xl fs-20px-lg fs-20px-md fs-20px-sm fs-18px color-2c2727">
                        {comment.commentContent}
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => handleClickReply(comment.commentId)}
                      className="mx-2 fw-bolder color-2c2727 border-0 bg-body ff-lexend fs-16px-xxl fs-16px-xl fs-16px-lg fs-16px-md fs-16px-sm fs-14px"
                    >
                      Reply
                    </button>
                    {commentIdParent === comment.commentId && (
                      <div key={index}>
                        <DivInputStyled className="input-group mb-3 justify-content-between d-flex bg-fafafa p-1 p-md-2">
                          <InputFieldStyled
                            type="text"
                            placeholder="Viết phản hồi..."
                            value={commentReplyText}
                            className="ms-1 bg-transparent"
                            onChange={handleChangeCommentReplyText}
                            onKeyDown={handleKeyDownReply}
                            ref={inputRef} // Thêm ref ở đây
                          />
                          <div className="mt-2px" onClick={handleSubmitReply}>
                            <SentIcon className="w-32px-xxl w-30px-xl w-28px-lg w-26px-md w-24px-sm w-22px" />
                          </div>
                        </DivInputStyled>
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
        <DivInputStyled className="justify-content-between d-flex bg-fafafa p-1 p-md-2">
          <InputFieldStyled
            type="text"
            placeholder="Viết bình luận..."
            className="form-control form-control-lg ms-1 bg-transparent "
            value={commentText}
            onChange={handleChangeCommentText}
            onKeyDown={handleKeyDownCmt}
          />
          <div onClick={handleClickComment} className="mt-2 mt-md-1">
            <SentIcon className="w-40px-xxl w-38px-xl w-36px-lg w-34px-md w-32px-sm w-30px" />
          </div>
        </DivInputStyled>
        <br />
      </div>
    </>
  );
};

export default Comment;
