import axios from 'axios';
import StatusAlert, { StatusAlertService } from 'react-status-alert';
import { BASE_URL } from '@/api/request';
import HomeComponentMain from '@/components/pageComponent/home/homeComponentMain';

export async function getServerSideProps() {
  let dataOri;
  await axios
    .post(`${BASE_URL}BlogPost/Paging`, {
      perPage: 10,
      currentPage: 1,
      shortBy: {
        title: 'Created',
        isIncrease: false,
      },
      filter: {
        categoryIds: [],
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
    <>
      <StatusAlert />
      <HomeComponentMain dataOri={dataOri} />
    </>
  );
};

export default Index;
