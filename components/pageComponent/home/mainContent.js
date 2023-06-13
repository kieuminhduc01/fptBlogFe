import { Server } from '@/api/request';
import { UrlPath } from '@/type/urlPath';
import { LinkStyled } from '@/components/pageComponent/home/styledComponent';

const MainContent = ({ index, dataOri }) => {
  return (
    <>
      <div>
        <div className="w-100 d-flex justify-content-center mt-260px-md">
          <div className="w-94pc w-95pc-sm w-86pc-md w-80pc-lg w-80pc-xl w-80pc-xxl row mt-50px-xxl mt-50px-xl mt-48px-lg  mt-46px-md">
            <div className=" col-12 col-md-5">
              <h1 className="fs-50px-xxl fs-50px-xl fs-46px-lg fs-40px-md fs-34px-sm fs-30px fw-normal ff-lexend color-960C0C ">
                {dataOri[index]?.title}
              </h1>
              <p className="fs-22px-xxl fs-20px-xl fs-20px-lg fs-18px-md fs-18px-sm fs-16px text-align ff-lexend">
                {dataOri[index]?.summary}
              </p>
              <LinkStyled
                href={`${UrlPath.home.url}${dataOri[index]?.category}/${dataOri[index]?.slug}`}
                className="bg-body d-inline-block color-960D0D fs-22px-xxl fs-20px-xl fs-20px-lg fs-18px-md fs-18px-sm fs-16px  mt-42px-md"
              >
                Đọc thêm bài viết
              </LinkStyled>
            </div>
            <div className=" col-12 col-md-7 position-relative">
              <div className="mt-20px-xxl mt-20px-xl mt-20px-lg mt-20px-md mt-30px-sm mt-20px float-end w-96pc-xxl w-96pc-xl w-96pc-lg w-96pc-md">
                <img
                  className="w-100"
                  alt=""
                  src={`${Server}${dataOri[index]?.image}`}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
