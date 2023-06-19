import { BASE_URL } from '@/api/request';
import { formatDate } from '@/components/convertDateTime';
import BlogListTag from '@/components/pageComponent/tag/blogListTag';
import axios from 'axios';
import { useEffect } from 'react';
import { StatusAlertService } from 'react-status-alert';

export async function getServerSideProps(context) {
  let tagTitle = context.query.title;
  let id = context.query.id;
  let dataOri;
  await axios
    .post(`${BASE_URL}BlogPost/Paging`, {
      perPage: 6,
      currentPage: 1,
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
      const dataTemp = res.data.result;
      dataOri = dataTemp.items.map((item) => ({
        ...item,
        created: formatDate(item.created),
      }));
    })
    .catch((err) => {
      StatusAlertService.showError(err.response.data.Detail);
    });
  return { props: { dataOri, tagTitle, id } };
}

const Index = ({ dataOri, tagTitle, id }) => {
  return (
    <div>
      <div className="bg-f8f7f7 d-flex justify-content-center mt-md-4 mb-md-5 mt-2 mb-2">
        <div className="w-94pc w-95pc-sm w-93pc-md w-92pc-lg w-90pc-xl w-90pc-xxl p-4 d-flex">
          <div className="w-55pc-xxl w-56pc-xl w-57pc-lg w-58pc-md w-60pc-sm w-70pc d-flex justify-content-between">
            <div className="ff-lexend fs-20px-xxl fs-20px-xl fs-20px-lg fs-18px-md fs-18px-sm fs-16px">
              Tag
            </div>
            <div className="ff-lexend fs-34px-xxl fs-34px-xl fs-32px-lg fs-30px-md fs-28px-sm fs-26px color-960C0C">
              {tagTitle}
            </div>
          </div>
        </div>
      </div>
      <div className=" d-flex justify-content-center">
        <div className="w-89pc w-92pc-sm w-90pc-md w-90pc-lg w-88pc-xl w-88pc-xxl row">
          <BlogListTag dataOri={dataOri} id={id} />
        </div>
      </div>
    </div>
  );
};

export default Index;
