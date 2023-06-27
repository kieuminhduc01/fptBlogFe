import { BASE_URL } from '@/api/request';
import MainContent from '@/components/pageComponent/blogList/mainContent';
import { formatDate } from '@/utils/convertDateTime';
import axios from 'axios';
import { StatusAlertService } from 'react-status-alert';

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
        categoryIds: ['GrowingInThePRWorld'],
        tagIds: [],
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
