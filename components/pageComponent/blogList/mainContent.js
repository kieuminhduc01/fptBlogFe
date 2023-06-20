import { Server } from '@/api/request';
import BlogListContent from '@/components/pageComponent/blogList/blogListContent';
import { DivStyled } from '@/components/pageComponent/blogList/styledComponent';
import { UrlPath } from '@/type/urlPath';
import Link from 'next/link';
import { useRouter } from 'next/router';

const MainContent = ({ dataOri }) => {
  const router = useRouter();
  const handleClickImg = (item) => {
    router.push(`${UrlPath.home.url}${item?.category}/${item?.slug}`);
  };

  return (
    <div>
      <div className="bg-f8f7f7 mt-3 mt-md-4 mb-5">
        <div className="opacity-100 d-flex justify-content-center">
          <div className="w-89pc w-92pc-sm w-90pc-md w-90pc-lg w-88pc-xl w-88pc-xxl row">
            <div className="d-flex justify-content-center">
              <div className="ff-lexend fs-46px-xxl fs-44px-xl fs-42px-lg fs-40px-md fs-36px-sm fs-30px mt-md-5 mb-2 d-md-block d-none">
                {dataOri[0].category === 'GrowingInThePRWorld' &&
                  'Growing in the PR world'}
                {dataOri[0].category === 'SeeThinkShare' && 'See think share'}
                {dataOri[0].category === 'MyCorner' && 'My corner'}
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <DivStyled className="square-container">
                <img
                  onClick={() => handleClickImg(dataOri[0])}
                  className="cursor-point w-100 h-auto"
                  src={`${Server}${dataOri[0]?.image}`}
                />
              </DivStyled>
            </div>
            <div className="d-flex justify-content-center">
              <Link
                href={`${UrlPath.home.url}${dataOri[0]?.category}/${dataOri[0]?.slug}`}
                className="ff-lexend fs-38px-xxl fs-36px-xl fs-34px-lg fs-40px-md fs-34px-sm fs-28px mt-md-4 mt-2"
              >
                {dataOri[0].title}
              </Link>
            </div>
            <div className="d-flex justify-content-center mt-2 mt-md-3">
              <div className=" w-50pc-xxl w-50pc-xl w-50pc-lg w-50pc-md w-70pc-sm w-80pc d-flex justify-content-center">
                <p className=" text-center ff-lexend fs-22px-xxl fs-22px-xl fs-20px-lg fs-20px-md fs-18px-sm fs-16px mb-md-4 mb-3">
                  {dataOri[0].summary}
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-center mb-3 mb-md-5">
              <div className="fs-12px-xxl fs-12px-xl fs-12px-md fs-12px-lg fs-12px-sm fs-11px">
                {dataOri[0].created}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-100 d-flex justify-content-center ">
        <div className="w-89pc w-92pc-sm w-90pc-md w-90pc-lg w-88pc-xl w-88pc-xxl row mt-3 mt-md-5">
          <BlogListContent dataOri={dataOri} start={1} end={7} />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
