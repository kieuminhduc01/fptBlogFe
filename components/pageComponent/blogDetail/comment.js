import axios from 'axios';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { CreateCommentApi } from '../../../api/commentAPI';
import { BASE_URL } from '../../../api/request';
import { UrlPath } from '../../../type/urlPath';
import AvatarIcon from '../../icons/avatarIcon';
import AvatarIconSubCM from '../../icons/avatarIconSubCM';
import { ButtonTagStyled } from './styledComponent';

const Comment = ({ BlogPost }) => {
  const [commentData, setCommentData] = useState([]);
  const [commentText, setCommentText] = useState('');
  
  useEffect(() => {
    const getComment = async () => {
      await axios
        .get(`${BASE_URL}Comment?blogPostId=${BlogPost.id}`)
        .then((res) => {
          setCommentData(res.data.result.comments);
          console.log('aaaa', commentData);
        });
    };
    getComment();
  }, []);
  const handeBlurCommentText=(e)=>{
    setCommentText(e.target.value)
  }
  const handleClickComment = () => {
    const dataReq = {
      accountId: "string",
      blogPostId: "string",
      parentId: "string",
      content: commentText
    };
    CreateCommentApi(dataReq)
      .then((res) => {

      })
      .catch(() => {

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
            {commentData.map((comment, index) => {
              return (
                <div key={index} className="d-flex ">
                  <div>
                    <AvatarIcon />
                  </div>
                  <div className="ms-2 ">
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
                      <button className="mx-2 fw-bolder border-0 bg-body ff-lexend fs-16px-xxl fs-16px-xl fs-16px-lg fs-16px-md fs-16px-sm fs-14px">
                        Reply
                      </button>
                    </div>
                    {comment.subComments?.map((subComments, index) => {
                      return (
                        <div key={index} className="d-flex ">
                          <div>
                            <AvatarIconSubCM />
                          </div>
                          <div className="ms-1">
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
                            <div>
                              <button className="mx-2 fw-bolder border-0 bg-body ff-lexend fs-16px-xxl fs-16px-xl fs-16px-lg fs-16px-md fs-16px-sm fs-14px">
                                Reply
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <br />
        <div className="row">
          <div className="form-group">
            <input
              type="text"
              placeholder="Nhập bình luận"
              className="form-control form-control-lg"
              value={commentText}
              onBlur={handeBlurCommentText}

            />
          </div>
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
