import axios from 'axios';
import { useAtom } from 'jotai';
import { marked } from 'marked';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import StatusAlert, { StatusAlertService } from 'react-status-alert';

import { BASE_URL } from '@/api/request';
import { getCookie } from '@/cookie/cookie';
import { UrlPath } from '@/type/urlPath';

import ArrowRight from '@/components/icons/arrowRight';
import FacebookIcon from '@/components/icons/facebookIcon';
import GmailIcon from '@/components/icons/gmailIcon';
import HeartIcon from '@/components/icons/heartIcon';
import LinkedinIcon from '@/components/icons/linkedinIcon';

import {
  blogTitleAtom,
  messageUnauthorizedAtom,
  totalCommentAtom
} from '@/atom/store';

import Comment from '@/components/pageComponent/blogDetail/comment';
import {
  ButtonTagStyled,
  DivBlockStyled,
  HrStyled
} from '@/components/pageComponent/blogDetail/styledComponent';

const MainContent = ({ BlogPost, tagIds }) => {
  const router = useRouter();
  const [totalComment, setTotalComment] = useAtom(totalCommentAtom);
  const [renderedContent, setRenderedContent] = useState('');
  const [fillLike, setFillLike] = useState(false);
  const [, setMessageUnauthorized] = useAtom(messageUnauthorizedAtom);
  const [, setBlogTitle] = useAtom(blogTitleAtom);
  const [blogPostLike, setBlogPostLike] = useState(BlogPost.likes);
  const [blogPostTags, setBlogPostTags] = useState();

  useEffect(() => {
    setRenderedContent(marked(BlogPost.content));
    setBlogTitle(BlogPost.title);
    console.log('aádasd', BlogPost);
  }, []);
  useEffect(() => {
    console.log('router', router);
    const { pathname } = router;
    const parts = pathname.split('/');
    const category = parts[2];
    // axios
    //   .post(`${BASE_URL}BlogPost/Paging`, {
    //     perPage: 6,
    //     currentPage: 1,
    //     shortBy: {
    //       title: 'Created',
    //       isIncrease: false,
    //     },
    //     filter: {
    //       categoryIds: [category],
    //       tagIds: [tagIds],
    //     },
    //     keyWord: '',
    //   })
    //   .then((res) => {
    //     const newPosts = res.data.result.items;
    //     setBlogPostTags((prevPosts) => [...prevPosts, ...newPosts]);
    //   })
    //   .catch((err) => {
    //     StatusAlertService.showError(err.response.data.Detail);
    //   })
    //   .finally(() => {});
  }, []);
  useEffect(() => {
    const accountId = getCookie('accountId');

    const getComment = async () => {
      try {
        const res = await axios.get(
          `${BASE_URL}Comment?blogPostId=${BlogPost.id}`,
        );
        setTotalComment(res.data.result.total);
      } catch (err) {
        StatusAlertService.showError(err.response.data.Detail);
      }
    };
    getComment();
    axios
      .get(
        `${BASE_URL}BlogPost/Account-Blog-Post?accountId=${accountId}&blogpostId=${BlogPost.id}`,
      )
      .then((res) => {
        setFillLike(res.data.result.isLiked);
      })
      .catch((err) => {
        accountId !== undefined &&
          StatusAlertService.showError(err.response.data.Detail);
      });
  }, []);

  const handleToggleLike = async () => {
    const dataReq = {
      accountId: getCookie('accountId'),
      blogPostId: BlogPost.id,
      isLike: !fillLike,
    };
    const headers = {
      Authorization: `Bearer ${getCookie('jwt_token')}`,
    };
    axios
      .patch(`${BASE_URL}BlogPost/Update-Like`, dataReq, { headers })
      .then(() => {
        if (fillLike === true) {
          StatusAlertService.showAlert('Unlike thành công!');
          setBlogPostLike((prev) => prev - 1);
        } else {
          StatusAlertService.showSuccess('Like thành công!');
          setBlogPostLike((prev) => prev + 1);
        }
        setFillLike(!fillLike);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          setMessageUnauthorized(
            'Bạn chưa đăng nhập, vui lòng đăng nhập để like',
          );
          router.push(UrlPath.auth.url);
        } else {
          StatusAlertService.showError(err.response.data.Detail);
        }
      })
      .finally(() => {});
  };
  const handleClickTag = (tag) => {
    router.push(`${UrlPath.tag.url}?title=${tag.title}&id=${tag.id}`);
  };
  return (
    <>
      <div>
        <StatusAlert />
        <div className="bg-white opacity-100 d-flex justify-content-center">
          <div className="w-89pc w-92pc-sm w-80pc-md w-60pc-lg w-60pc-xl w-60pc-xxl">
            <div className="d-none d-md-flex mt-50px-xxl mt-50px-xl mt-46px-lg mt-40px-md mt-30px-sm">
              {router.pathname === '/SeeThinkShare/[slug]' && (
                <div className="cursor-point ff-lexend fs-20px-xxl fs-20px-xl fs-20px-lg fs-20px-md fs-20px-sm fs-18px color-6C6C6C">
                  See think share
                </div>
              )}
              {router.pathname === '/GrowingInThePRWorld/[slug]' && (
                <div className="cursor-point ff-lexend fs-20px-xxl fs-20px-xl fs-20px-lg fs-20px-md fs-20px-sm fs-18px color-6C6C6C">
                  Growing in the PR world
                </div>
              )}
              {router.pathname === '/MyCorner/[slug]' && (
                <div className="cursor-point ff-lexend fs-20px-xxl fs-20px-xl fs-20px-lg fs-20px-md fs-20px-sm fs-18px color-6C6C6C">
                  My corner
                </div>
              )}

              <div>
                <ArrowRight />
              </div>
              <div className="cursor-point ff-lexend fs-20px-xxl fs-20px-xl fs-20px-lg fs-20px-md fs-20px-sm fs-18px color-6C6C6C">
                {BlogPost.title}
              </div>
            </div>
            <HrStyled className="d-md-block d-none" />
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
                  onClick={handleToggleLike}
                  className="ff-lexend fs-20px-xxl fs-20px-xl fs-20px-lg fs-20px-md fs-20px-sm fs-18px color-2c2727"
                >
                  {blogPostLike}
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
                  {BlogPost.tags.length === 0 ? (
                    <p className=" ms-2 mt-md-1 mt-2px ff-lexend fs-22px-xxl fs-22px-xl fs-22px-lg fs-22px-md fs-22px-sm fs-20px">
                      Bài viết không có tag nào
                    </p>
                  ) : (
                    BlogPost.tags?.map((tag, index) => (
                      <ButtonTagStyled
                        onClick={() => handleClickTag(tag)}
                        className=" mt-3 mt-md-3 color-1d1b1b ms-1 ms-md-2 ms-lg-2 ms-xl-3 bg-body ff-lexend fs-20px-xxl fs-20px-xl fs-20px-lg fs-20px-md fs-20px-sm fs-18px"
                        key={index}
                      >
                        {tag.title}
                      </ButtonTagStyled>
                    ))
                  )}
                </div>
              </div>
              <HrStyled />
              <Comment BlogPost={BlogPost} />
            </div>
            <HrStyled />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
