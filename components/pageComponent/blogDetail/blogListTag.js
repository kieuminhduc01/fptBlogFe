import { BASE_URL, Server } from '@/api/request';
import { UrlPath } from '@/type/urlPath';
import axios from 'axios';
import Link from 'next/link';
import { useState } from 'react';
import { ButtonTagStyled } from '@/components/pageComponent/blogList/styledComponent';

const BlogListTag = ({ tagBlogList }) => {
  const [currentPage, setCurrentPage] = useState(2);
  const [loadedPosts, setLoadedPosts] = useState(tagBlogList.items.slice(0, 6));

  const handlePaging = async () => {
    try {
      const res = await axios.post(`${BASE_URL}BlogPost/Paging`, {
        perPage: 6,
        currentPage: currentPage,
        shortBy: {
          title: 'Created',
          isIncrease: false,
        },
        filter: {
          categoryIds: [tagBlogList.items[0].category],
          tagIds: [],
        },
        keyWord: '',
      });
      const newPosts = res.data.result.items;
      setLoadedPosts((prevPosts) => [...prevPosts, ...newPosts]);
      setCurrentPage((prevPage) => prevPage + 1);
    } catch (err) {
      console.error(err);
      // Handle error
    }
  };

  return (
    <>
      {loadedPosts.map((item, index) => (
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
      ))}
      <div className="d-flex justify-content-center mt-4">
        <ButtonTagStyled onClick={handlePaging} className="bg-body">
          Đọc thêm bài viết
        </ButtonTagStyled>
      </div>
    </>
  );
};

export default BlogListTag;
