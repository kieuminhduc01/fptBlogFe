import axios from 'axios';
import { BASE_URL } from '../api/request';
import HomeComponentMain from '../components/pageComponent/home/homeComponentMain';

export async function getServerSideProps() {
  const res = await axios.post(`${BASE_URL}BlogPost/Paging`, {
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
  });
  const data = res.data.result;
  return { props: { data } };
}

const Index = ({ data }) => {
  return (
    <>
      <HomeComponentMain data={data} />
    </>
  );
};

export default Index;
