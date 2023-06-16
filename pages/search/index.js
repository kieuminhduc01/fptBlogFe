import { BASE_URL } from '@/api/request';
import SearchBlogList from '@/components/pageComponent/search/searchBlogList';
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
      dataOri = res.data.result;
    })
    .catch((err) => {
      StatusAlertService.showError(err.response.data.Detail);
    });
  return { props: { dataOri, keyword } };
}

const Index = ({ dataOri, keyword }) => {
  return (
    <div>
      <div className=" d-flex justify-content-center">
        <div className="w-89pc w-92pc-sm w-90pc-md w-90pc-lg w-88pc-xl w-88pc-xxl row">
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
