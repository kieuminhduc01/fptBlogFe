import axios from 'axios';
import { useAtom } from 'jotai';
import { marked } from 'marked';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import StatusAlert, { StatusAlertService } from 'react-status-alert';

import { LikeApi } from '@/api/likeAPI';
import { BASE_URL } from '@/api/request';
import { getCookie } from '@/cookie/cookie';
import { UrlPath } from '@/type/urlPath';

import ArrowRight from '@/components/icons/arrowRight';
import FacebookIcon from '@/components/icons/facebookIcon';
import GmailIcon from '@/components/icons/gmailIcon';
import HeartIcon from '@/components/icons/heartIcon';
import LinkedinIcon from '@/components/icons/linkedinIcon';

import { blogTitleAtom, messageUnauthorizedAtom } from '@/atom/store';

import BlogListTag from '@/components/pageComponent/blogDetail/blogListTag';
import Comment from '@/components/pageComponent/blogDetail/comment';
import {
  ButtonTagStyled,
  DivBlockStyled,
  HrStyled,
} from '@/components/pageComponent/blogDetail/styledComponent';

const MainContent = ({ BlogPost, TagAll, dataOri }) => {
  const router = useRouter();
  const [totalComment, setTotalComment] = useState();
  const [renderedContent, setRenderedContent] = useState('');
  const [fillLike, setFillLike] = useState(false);
  const [, setMessageUnauthorized] = useAtom(messageUnauthorizedAtom);
  const [, setBlogTitle] = useAtom(blogTitleAtom);
  const [currentPage, setCurrentPage] = useState(1);
  const [tagBlogList, setTagBlogList] = useState();
  const [isTag, setIsTag] = useState(false);
  useEffect(() => {
    setRenderedContent(marked(BlogPost.content));
    setBlogTitle(BlogPost.title);
  }, []);

  useEffect(() => {
    const getComment = async () => {
      try {
        const res = await axios.get(
          `${BASE_URL}Comment?blogPostId=${BlogPost.id}`,
        );
        setTotalComment(res.data.result.total);
      } catch (err) {
        console.error(err);
      }
    };

    getComment();
  }, []);

  const handleToggleLike = async () => {
    setFillLike(!fillLike);
    const dataReq = {
      accountId: getCookie('accountId'),
      blogPostId: BlogPost.id,
      isLike: fillLike,
    };

    try {
      await LikeApi(dataReq);
      StatusAlertService.showSuccess('Like thành công!');
    } catch (err) {
      if (err.response.status === 401) {
        setMessageUnauthorized(
          'Bạn chưa đăng nhập, vui lòng đăng nhập để like',
        );
        router.push(UrlPath.auth.url);
      } else {
        StatusAlertService.showError(err.response.data.Detail);
      }
    }
  };
  const handleClickTag = async (tagId) => {
    console.log('aa');
    await axios
      .post(`${BASE_URL}BlogPost/Paging`, {
        perPage: 6,
        currentPage: 1,
        shortBy: {
          title: 'Created',
          isIncrease: false,
        },
        filter: {
          categoryIds: [dataOri?.items[0].category],
          tagIds: [tagId],
        },
        keyWord: '',
      })
      .then((res) => {
        const newPosts = res.data.result;
        console.log('103', newPosts);
        setTagBlogList(newPosts);
        setIsTag(!isTag);
      })
      .catch((err) => {
        StatusAlertService.showError(err.response.data.Detail);
      })
      .finally(() => {
        setCurrentPage((prevPage) => prevPage + 1);
      });
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
                  onClick={handleToggleLike}
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
                      onClick={() => handleClickTag(tag.id)}
                      className=" mt-3 mt-md-3 color-1d1b1b ms-1 ms-md-2 ms-lg-2 ms-xl-3 bg-body ff-lexend fs-20px-xxl fs-20px-xl fs-20px-lg fs-20px-md fs-20px-sm fs-18px"
                      key={index}
                    >
                      {tag.title}
                    </ButtonTagStyled>
                  ))}
                </div>
              </div>
              <div className="d-flex justify-content-center mt-3">
                <div className="w-89pc w-92pc-sm w-90pc-md w-90pc-lg w-88pc-xl w-88pc-xxl row">
                  {isTag === true ? (
                    <BlogListTag tagBlogList={tagBlogList} />
                  ) : (
                    <></>
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
