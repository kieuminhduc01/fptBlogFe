import { BASE_URL } from '@/api/request';
import { ButtonTagStyled } from '@/components/pageComponent/blogList/styledComponent';
import BlogList from '@/components/pageComponent/common/blogList';
import axios from 'axios';
import { useState } from 'react';
import { StatusAlertService } from 'react-status-alert';

const BlogListContent = ({ dataOri, start, end }) => {
  const [currentPage, setCurrentPage] = useState(2);
  const [displayedPosts, setDisplayedPosts] = useState(
    dataOri?.slice(start, end),
  );
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
          categoryIds: [dataOri[0].category],
          tagIds: [],
        },
        keyWord: '',
      })
      .then((res) => {
        const newPosts = res.data.result.items;
        setDisplayedPosts((prevPosts) => [...prevPosts, ...newPosts]);
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
      {displayedPosts?.map((item, index) => (
        <BlogList item={item} idex={index} />
      ))}

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

export default BlogListContent;
