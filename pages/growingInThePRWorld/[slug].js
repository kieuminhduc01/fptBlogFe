import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { BASE_URL } from '../../api/request';
import MainContent from '../../components/pageComponent/blogDetail/mainContent';

export async function getServerSideProps(context) {
  const routerData = context.query;
  const res = await axios.get(`${BASE_URL}BlogPost/${routerData.slug}`);
  const data = res.data.result;
  return {
    props: {
      data,
    },
  };
}

const Index = ({ data }) => {
  useEffect(() => {
    console.log('aa', data);
  }, []);
  return (
    <div>
      <MainContent data={data} />
    </div>
  );
};
export default Index;
