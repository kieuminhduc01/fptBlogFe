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

          <BlogListContent dataOri={dataOri} />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
