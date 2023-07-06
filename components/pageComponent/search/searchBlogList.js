import { BASE_URL } from '@/api/request';
import { isPagingSearchAtom } from '@/atom/store';
import { ButtonTagStyled } from '@/components/pageComponent/blogList/styledComponent';
import BlogList from '@/components/pageComponent/common/blogList';
import axios from 'axios';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { StatusAlertService } from 'react-status-alert';

const SearchBlogList = ({ dataOri, start, end, keyword }) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(2);
  const [isPagingSearch, setIsPagingSearch] = useAtom(isPagingSearchAtom);
  const [keywordArr, setKeywordArr] = useState([]);
  const [displayedPosts, setDisplayedPosts] = useState(
    dataOri?.slice(start, end),
  );

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
      {dataOri.length === 0 ? (
        <div className="ff-lexend fs-22px-xxl fs-20px-xl fs-20px-lg fs-18px-md fs-18px-sm fs-16px mb-5">
          Không có bài viết nào
        </div>
      ) : isPagingSearch ? (
        displayedPosts?.map((item, index) => (
          <BlogList item={item} idex={index} />
        ))
      ) : (
        dataOri?.map((item, index) => <BlogList item={item} idex={index} />)
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
