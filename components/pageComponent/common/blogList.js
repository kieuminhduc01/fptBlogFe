import { Server } from '@/api/request';
import { UrlPath } from '@/type/urlPath';
import { Category } from '@/utils/enum';
import Link from 'next/link';
import { useRouter } from 'next/router';

const BlogList = ({ item, index }) => {
  const router = useRouter();
  const handleClickImg = (item) => {
    router.push(`${UrlPath.home.url}${Category[item?.category]}/${item?.slug}`);
  };
  return (
    <>
      <div className="col-6 col-md-4 mb-3 mb-md-4" key={index}>
        <div className=" image-container pb-100pc-global w-100 height-0 position-relative overflow-hidden">
          <img
            onClick={() => handleClickImg(item)}
            className="position-absolute top-0 left-0 w-100 h-100 object-fit-cover cursor-point"
            src={`${Server}${item?.image}`}
          />
        </div>
        <div className="d-flex justify-content-center mt-md-2">
          <Link
            href={`${UrlPath.home.url}${Category[item?.category]}/${
              item?.slug
            }`}
            className="text-center ff-lexend fs-22px-xxl fs-20px-xl fs-20px-lg fs-18px-md fs-18px-sm fs-16px"
          >
            {item?.title}
          </Link>
        </div>
        <div className="d-flex justify-content-center">
          <div className="fs-12px-xxl fs-12px-xl fs-12px-lg fs-12px-md fs-12px-sm fs-10px">
            {item?.created}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogList;
