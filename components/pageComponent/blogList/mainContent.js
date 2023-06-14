import { BASE_URL, Server } from '@/api/request';
import { UrlPath } from '@/type/urlPath';
import Link from 'next/link';
import { ButtonTagStyled, DivStyled } from './styledComponent';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useState } from 'react';

const MainContent = ({ dataOri }) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(2);
  const [displayedPosts, setDisplayedPosts] = useState(
    dataOri.items.slice(1, 7),
  );

  const handleClickImg = (item) => {
    router.push(`${UrlPath.home.url}${item?.category}/${item?.slug}`);
  };

  const handlePaging = async () => {
    await axios
      .post(`${BASE_URL}BlogPost/Paging`, {
        perPage: 6,
        currentPage: currentPage,
        shortBy: {
          title: 'Created',
          isIncrease: false,
        },
        filter: {
          categoryIds: [dataOri.items[0].category],
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
    <div>
      <div className="bg-white opacity-100 d-flex justify-content-center">
        <div className="w-89pc w-92pc-sm w-90pc-md w-90pc-lg w-88pc-xl w-88pc-xxl row">
          <div>
            <div className="d-flex justify-content-center">
              <div className="ff-lexend fs-46px-xxl fs-44px-xl fs-42px-lg fs-40px-md fs-36px-sm fs-30px mt-md-5 mb-2 d-md-block d-none">
                {dataOri.items[0].category === 'GrowingInThePRWorld' &&
                  'Growing in the PR world'}
                {dataOri.items[0].category === 'SeeThinkShare' &&
                  'See think share'}
                {dataOri.items[0].category === 'MyCorner' && 'My corner'}
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <DivStyled className="square-container">
                <img
                  onClick={() => handleClickImg(dataOri.items[0])}
                  className="cursor-point w-100 h-auto"
                  src={`${Server}${dataOri.items[0]?.image}`}
                />
              </DivStyled>
            </div>
            <div className="d-flex justify-content-center">
              <Link
                href={`${UrlPath.home.url}${dataOri.items[0]?.category}/${dataOri.items[0]?.slug}`}
                className="ff-lexend fs-38px-xxl fs-36px-xl fs-34px-lg fs-40px-md fs-34px-sm fs-28px mt-md-4 mt-2"
              >
                {dataOri.items[0].title}
              </Link>
            </div>
            <div className="d-flex justify-content-center">
              <div className="ff-lexend fs-22px-xxl fs-22px-xl fs-20px-lg fs-20px-md fs-18px-sm fs-16px mb-md-4 mb-3">
                {dataOri.items[0].summary}
              </div>
            </div>
          </div>

          {displayedPosts.map((item, index) => (
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
        </div>
      </div>
    </div>
  );
};

export default MainContent;
