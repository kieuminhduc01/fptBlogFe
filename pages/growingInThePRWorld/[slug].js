import axios from 'axios';
import { useEffect } from 'react';
import { BASE_URL } from '../../api/request';
import MainContent from '../../components/pageComponent/blogDetail/mainContent';

export async function getServerSideProps(context) {
  const routerData = context.query;
  const res = await axios.get(`${BASE_URL}BlogPost/${routerData.slug}`);
  const tagAll = await axios.get(`${BASE_URL}Tag/all`);
  const data = res.data.result;
  return {
    props: {
      data,
      tagAll,
    },
  };
}

const Index = ({ data, tagAll }) => {
  useEffect(() => {}, []);
  return (
    <div>
      <MainContent data={data} />
    </div>
  );
};
export default Index;
