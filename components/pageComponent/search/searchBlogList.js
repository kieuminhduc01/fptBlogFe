import { BASE_URL, Server } from '@/api/request';
import { isPagingSearchAtom } from '@/atom/store';
import { ButtonTagStyled } from '@/components/pageComponent/blogList/styledComponent';
import { UrlPath } from '@/type/urlPath';
import axios from 'axios';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { StatusAlertService } from 'react-status-alert';

const SearchBlogList = ({ dataOri, start, end, keyword }) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(2);
  const [isPagingSearch, setIsPagingSearch] = useAtom(isPagingSearchAtom);
  const [keywordArr, setKeywordArr] = useState([]);
  const [displayedPosts, setDisplayedPosts] = useState(
    dataOri?.items.slice(start, end),
  );
  const handleClickImg = (item) => {
    router.push(`${UrlPath.home.url}${item?.category}/${item?.slug}`);
  };
  useEffect(() => {
    setKeywordArr((pre) => [...pre, keyword]);
    if (
      keywordArr.length > 1 &&
      keywordArr[keywordArr.length - 1] !== keyword &&
      !isPagingSearch === true
    ) {
      setDisplayedPosts([]);
      setCurrentPage(2);
    }
  }, [keyword]);
  const handlePaging = () => {
    setIsPagingSearch(true);
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
          tagIds: [],
        },
        keyWord: keyword,
      })
      .then((res) => {
        const newPosts = res.data.result.items;
        setDisplayedPosts((prevPosts) => [...prevPosts, ...newPosts]);
        if (newPosts.length !== 0) {
          setCurrentPage((prevPage) => prevPage + 1);
        } else {
        }
      })
      .catch((err) => {
        StatusAlertService.showError(err.response.data.Detail);
      })
      .finally(() => {});
  };
  return (
    <>
      {dataOri.items.length === 0 ? (
        <div className="ff-lexend fs-22px-xxl fs-20px-xl fs-20px-lg fs-18px-md fs-18px-sm fs-16px">
          Không có bài viết nào
        </div>
      ) : isPagingSearch ? (
        displayedPosts?.map((item, index) => (
          <div className="col-6 col-md-4" key={index}>
            <div className="pb-100pc-global w-100 height-0 position-relative overflow-hidden">
              <img
                onClick={() => handleClickImg(item)}
                className="position-absolute top-0 left-0 w-100 h-100 object-fit-cover cursor-point"
                src={`${Server}${item?.image}`}
              />
            </div>
            <div className="d-flex justify-content-center mt-2">
              <Link
                href={`${UrlPath.home.url}${item?.category}/${item?.slug}`}
                className="ff-lexend fs-22px-xxl fs-20px-xl fs-20px-lg fs-18px-md fs-18px-sm fs-16px"
              >
                {item.title}
              </Link>
            </div>
          </div>
        ))
      ) : (
        dataOri?.items.map((item, index) => (
          <div className="col-6 col-md-4 mb-3 mb-md-4" key={index}>
            <div className="pb-100pc-global w-100 height-0 position-relative overflow-hidden">
              <img
                onClick={() => handleClickImg(item)}
                className="position-absolute top-0 left-0 w-100 h-100 object-fit-cover cursor-point"
                src={`${Server}${item?.image}`}
              />
            </div>
            <div className="d-flex justify-content-center mt-2">
              <Link
                href={`${UrlPath.home.url}${item?.category}/${item?.slug}`}
                className="ff-lexend fs-22px-xxl fs-20px-xl fs-20px-lg fs-18px-md fs-18px-sm fs-16px"
              >
                {item.title}
              </Link>
            </div>
            <div className="d-flex justify-content-center">
              <div className="fs-12px-xxl fs-12px-xl fs-12px-lg fs-12px-sm fs-10px">
                May 30, 2023
              </div>
            </div>
          </div>
        ))
      )}

      {dataOri.total > 6 && (
        <div className="d-flex justify-content-center mt-4">
          <ButtonTagStyled
            onClick={handlePaging}
            className="bg-body fs-22px-xxl fs-20px-xl fs-20px-lg fs-18px-md fs-18px-sm fs-16px ff-lexend mb-3 color-960C0C"
          >
            Đọc thêm bài viết
          </ButtonTagStyled>
        </div>
      )}
    </>
  );
};

export default SearchBlogList;
