import { BASE_URL } from '@/api/request';
import MainContent from '@/components/pageComponent/blogList/mainContent';
import axios from 'axios';

export async function getServerSideProps() {
  let dataOri;
  await axios
    .post(`${BASE_URL}BlogPost/Paging`, {
      perPage: 7,
      currentPage: 1,
      shortBy: {
        title: 'Created',
        isIncrease: false,
      },
      filter: {
        categoryIds: ['MyCorner'],
        tagIds: [],
      },
      keyWord: '',
    })
    .then((res) => {
      dataOri = res.data.result;
    })
    .catch((err) => {
      StatusAlertService.showError(err.response.data.Detail);
    });
  return { props: { dataOri } };
}

const Index = ({ dataOri }) => {
  return (
    <div>
      <MainContent dataOri={dataOri} />
    </div>
  );
};

export default Index;
