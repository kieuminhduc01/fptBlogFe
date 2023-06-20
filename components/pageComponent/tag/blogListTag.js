import { BASE_URL, Server } from '@/api/request';
import { ButtonTagStyled } from '@/components/pageComponent/blogList/styledComponent';
import { UrlPath } from '@/type/urlPath';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { StatusAlertService } from 'react-status-alert';

const BlogListTag = ({ id, dataOri }) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(2);
  const [loadedPosts, setLoadedPosts] = useState(dataOri?.slice(0, 6));
  const handleClickImg = (item) => {
    router.push(`${UrlPath.home.url}${item?.category}/${item?.slug}`);
  };
  const handlePaging = () => {
    axios
      .post(`${BASE_URL}BlogPost/Paging`, {
        perPage: 6,
        currentPage: currentPage,
        shortBy: {
          title: 'Created',
          isIncrease: false,
        },
        filter: {
          categoryIds: [],
          tagIds: [id],
        },
        keyWord: '',
      })
      .then((res) => {
        const newPosts = res.data.result;
        setLoadedPosts((prevPosts) => [...prevPosts, ...newPosts.items]);
        if (newPosts.total === 0) {
          setCurrentPage(2);
        } else setCurrentPage((prevPage) => prevPage + 1);
      })
      .catch((err) => {
        StatusAlertService.showError(err.response.data.Detail);
      });
  };

  return (
    <>
      {loadedPosts?.map((item, index) => (
        <div className="col-6 col-md-4 mb-3 mb-md-4" key={index}>
          <div className="pb-100pc-global w-100 height-0 position-relative overflow-hidden">
            <img
              onClick={() => handleClickImg(item)}
              className="position-absolute top-0 left-0 w-100 h-100 object-fit-cover cursor-point"
              src={`${Server}${item?.image}`}
            />
          </div>
          <div
            onClick={() => handleClickImg(item)}
            className="d-flex justify-content-center mt-2 cursor-point"
          >
            <Link
              href={`${UrlPath.home.url}${item?.category}/${item?.slug}`}
              className="ff-lexend fs-22px-xxl fs-20px-xl fs-20px-lg fs-18px-md fs-18px-sm fs-16px cursor-point"
            ></Link>
            {item.title}
          </div>
          <div className="d-flex justify-content-center">
            <div className="fs-12px-xxl fs-12px-xl fs-12px-lg fs-12px-md fs-12px-sm fs-10px">
              {item.created}
            </div>
          </div>
        </div>
      ))}
      <div className="d-flex justify-content-center mt-4">
        <ButtonTagStyled
          onClick={handlePaging}
          className="bg-body fs-22px-xxl fs-20px-xl fs-20px-lg fs-18px-md fs-18px-sm fs-16px ff-lexend mb-3 color-960C0C"
        >
          Đọc thêm bài viết
        </ButtonTagStyled>
      </div>
    </>
  );
};

export default BlogListTag;
