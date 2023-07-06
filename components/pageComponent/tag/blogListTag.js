import { BASE_URL } from '@/api/request';
import { ButtonTagStyled } from '@/components/pageComponent/blogList/styledComponent';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { StatusAlertService } from 'react-status-alert';
import BlogList from '@/components/pageComponent/common/blogList';

const BlogListTag = ({ id, dataOri }) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(2);
  const [loadedPosts, setLoadedPosts] = useState(dataOri?.slice(0, 6));
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

export default BlogListTag;
