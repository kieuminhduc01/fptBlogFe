import { BASE_URL } from '@/api/request';
import SearchBlogList from '@/components/pageComponent/search/searchBlogList';
import { formatDate } from '@/utils/convertDateTime';
import axios from 'axios';
import { StatusAlertService } from 'react-status-alert';

export async function getServerSideProps(context) {
  let keyword = context.query.keyword;
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
        tagIds: [],
      },
      keyWord: keyword,
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
  return { props: { dataOri, keyword } };
}

const Index = ({ dataOri, keyword }) => {
  return (
    <div>
      <div className="bg-f8f7f7 d-flex justify-content-center mt-md-4 mb-md-5 mt-2 mb-2">
        <div className="w-94pc w-95pc-sm w-93pc-md w-92pc-lg w-90pc-xl w-90pc-xxl p-4 d-flex">
          <div className="w-50pc-xxl w-51pc-xl w-53pc-lg w-54pc-md w-55pc-sm w-57pc d-flex justify-content-between">
            <div className="ff-lexend fs-20px-xxl fs-20px-xl fs-20px-lg fs-18px-md fs-18px-sm fs-16px">
              Từ khóa
            </div>
            <div className="ff-lexend fs-34px-xxl fs-34px-xl fs-32px-lg fs-30px-md fs-28px-sm fs-26px color-960C0C">
              {keyword}
            </div>
          </div>
        </div>
      </div>
      <div className=" d-flex justify-content-center">
        <div className="w-89pc w-92pc-sm w-90pc-md w-88pc-lg w-84pc-xl w-80pc-xxl row">
          <SearchBlogList
            dataOri={dataOri}
            start={0}
            end={6}
            keyword={keyword}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
