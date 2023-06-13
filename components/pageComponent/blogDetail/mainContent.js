import axios from 'axios';
import { marked } from 'marked';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import StatusAlert, { StatusAlertService } from 'react-status-alert';
import { LikeApi } from '../../../api/likeAPI';
import { BASE_URL } from '../../../api/request';
import { getCookie } from '../../../cookie/cookie';
import ArrowRight from '../../icons/arrowRight';
import FacebookIcon from '../../icons/facebookIcon';
import GmailIcon from '../../icons/gmailIcon';
import HeartIcon from '../../icons/heartIcon';
import LinkedinIcon from '../../icons/linkedinIcon';
import BlogTagList from './blogTagList';
import Comment from './comment';
import { ButtonTagStyled, DivBlockStyled, HrStyled } from './styledComponent';

const MainContent = ({ BlogPost, TagAll }) => {
  const router = useRouter();
  const [totalComment, setTotalComment] = useState();
  const [renderedContent, setRenderedContent] = useState('');
  const [fillLike, setFillLike] = useState(false);
  useEffect(() => {
    setRenderedContent(marked(BlogPost.content));
  }, []);
  useEffect(() => {
    const getComment = async () => {
      await axios
        .get(`${BASE_URL}Comment?blogPostId=${BlogPost.id}`)
        .then((res) => {
          setTotalComment(res.data.result.total);
        });
    };
    getComment();
  }, []);
  const handlelToggleLike = () => {
    setFillLike(!fillLike);
    const dataReq = {
      accountId: getCookie('accountId'),
      blogPostId: BlogPost.id,
      isLike: fillLike,
    };
    LikeApi(dataReq)
      .then(() => {
        StatusAlertService.showSuccess('Like thành công!');
      })
      .catch((err) => {
        if (err.response.status) {
          StatusAlertService.showError(
            'Bạn chưa đăng nhập, vui lòng đăng nhập để like',
          );
        } else {
          StatusAlertService.showError(err.response.data.Detail);
        }
      })
      .finally(() => {});
  };
  return (
    <>
      <div>
        <StatusAlert />
        <div className="bg-white opacity-100 d-flex justify-content-center">
          <div className="w-89pc w-92pc-sm w-80pc-md w-60pc-lg w-60pc-xl w-60pc-xxl">
            <div className="d-flex mt-50px-xxl mt-50px-xl mt-46px-lg mt-40px-md mt-30px-sm">
              {router.pathname === '/SeeThinkShare/[slug]' && (
                <div className="cursor-point ff-lexend fs-20px-xxl fs-20px-xl fs-20px-lg fs-20px-md fs-20px-sm fs-18px color-6C6C6C">
                  See think share
                </div>
              )}
              {router.pathname === '/GrowingInThePRWorld/[slug]' && (
                <div>Growing in the PR world</div>
              )}
              {router.pathname === '/MyConner/[slug]' && <div>My conner</div>}

              <div>
                <ArrowRight />
              </div>
              <div className="cursor-point ff-lexend fs-20px-xxl fs-20px-xl fs-20px-lg fs-20px-md fs-20px-sm fs-18px color-6C6C6C">
                {BlogPost.title}
              </div>
            </div>
            <HrStyled />
            <DivBlockStyled
              className="mt-30px-xxl mt-30px-xl mt-30px-lg mt-30px-md mt-30px-sm mt-30px"
              dangerouslySetInnerHTML={{ __html: renderedContent }}
            />
            <div className="mt-100px-xxl mt-100px-xl mt-90px-lg mt-90px-md mt-60px-sm mt-50px">
              <div className="d-flex justify-content-between">
                <div className="row w-75">
                  <div className="col-5 ff-lexend fs-20px-xxl fs-20px-xl fs-20px-lg fs-20px-md fs-20px-sm fs-18px color-2c2727">
                    {BlogPost.views} Views
                  </div>
                  <div className="col-7 ff-lexend fs-20px-xxl fs-20px-xl fs-20px-lg fs-20px-md fs-20px-sm fs-18px color-2c2727">
                    {totalComment} Bình luận
                  </div>
                </div>
                <div
                  onClick={handlelToggleLike}
                  className="ff-lexend fs-20px-xxl fs-20px-xl fs-20px-lg fs-20px-md fs-20px-sm fs-18px color-2c2727"
                >
                  {BlogPost.likes}
                  <HeartIcon fillLike={fillLike} />
                </div>
              </div>
              <HrStyled />
              <div className="d-flex ">
                <div className="ff-lexend fs-24px-xxl fs-24px-xl fs-24px-lg fs-24px-md fs-24px-sm fs-22px fw-bold">
                  Chia sẻ bài viết:
                </div>
                <a href="#" className="cursor-point ms-3">
                  <FacebookIcon />
                </a>
                <a href={'#'} className="cursor-point ms-3">
                  <LinkedinIcon />
                </a>
                <a href="#" className="cursor-point ms-4">
                  <GmailIcon />
                </a>
              </div>

              <div className="d-flex flex-wrap mt-2 mt-md-3">
                <div className="ff-lexend fs-24px-xxl fs-24px-xl fs-24px-lg fs-24px-md fs-24px-sm fs-22px fw-bold">
                  Tag:
                </div>
                <div>
                  {TagAll.map((tag, index) => (
                    <ButtonTagStyled
                      className=" mt-3 mt-md-3 color-1d1b1b ms-1 ms-md-2 ms-lg-2 ms-xl-3 bg-body ff-lexend fs-20px-xxl fs-20px-xl fs-20px-lg fs-20px-md fs-20px-sm fs-18px"
                      key={index}
                    >
                      {tag.title}
                    </ButtonTagStyled>
                  ))}
                </div>
              </div>
              <HrStyled />
              <Comment BlogPost={BlogPost} />
            </div>
            <HrStyled />
            <BlogTagList />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
