import Link from 'next/link';
import { UrlPath } from '../../../type/urlPath';

const MainContent = ({ index, data }) => {
  return (
    <>
      <div>
        <div className="w-100 d-flex justify-content-center mt-260px-md">
          <div className="w-94pc w-96pc-sm padding-x60px-xl row mt-50px-xl">
            <div className=" col-12 col-md-5">
              <h1 className="fs-50px-xl fs-40px-md fs-30px fw-normal ff-lexend color-960C0C ">
                {data[index].title}
              </h1>
              <p className="fs-20px-xl fs-18px-md fs-16px text-align ff-lexend">
                {data[index].summary}
              </p>
              <Link
                href={`${UrlPath.detail.url}`}
                style={{ padding: '12px 16px', border: '2px solid #930C0C' }}
                className="bg-body d-inline-block color-960D0D fs-20px-xl fs-18px-md fs-16px mt-42px-md padding-12px-16px-md"
              >
                Đọc thêm bài viết
              </Link>
            </div>
            <div className=" col-12 col-md-7 position-relative ">
              <div className="mt-100px-md mt-20px float-end overflow-hidden w-40vw-xl w-44vw-md h-100vh-md ">
                <img
                  className="object-fit-cover h-auto w-100"
                  alt=""
                  src={data[index].image}
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
