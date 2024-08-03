import HomeComponentMain from '@/components/pageComponent/home/homeComponentMain';
import axios from 'axios';
import https from 'https';
import StatusAlert, { StatusAlertService } from 'react-status-alert';

export async function getServerSideProps() {
  let dataOri;

  const axiosInstance = axios.create({
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
  });

  await axiosInstance
    .post(`https://localhost:44302/api/BlogPost/Paging`, {
      perPage: 4,
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
      StatusAlertService.showError(err.response?.data.Detail);
    });
  return { props: { dataOri } };
}

const Index = ({ dataOri }) => {
  console.log('dataOri', dataOri);
  return (
    <>
      <StatusAlert />
      <HomeComponentMain dataOri={dataOri} />
    </>
  );
};

export default Index;
