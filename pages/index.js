import axios from 'axios';
import { BASE_URL } from '../api/request';
import HomeComponentMain from '../components/pageComponent/home/homeComponentMain';

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
    });
  return { props: { dataOri } };
}

const Index = ({ dataOri }) => {
  return (
    <>
      <HomeComponentMain data={dataOri} /> 
    </>
  );
};

export default Index;
