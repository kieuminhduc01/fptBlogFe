import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { BASE_URL } from '../../api/request';
import MainContent from '../../components/pageComponent/blogDetail/mainContent';

export async function getServerSideProps(context) {
  const routerData = context.query;
  const blogPost = await axios.get(`${BASE_URL}BlogPost/${routerData.slug}`);
  const tagAll = await axios.get(`${BASE_URL}Tag/all`);
  const BlogPost = await blogPost.data.result;
  const TagAll = await tagAll.data.result;

  return {
    props: {
      BlogPost,
      TagAll,
    },
  };
}

const Index = ({ BlogPost, TagAll }) => {
  useEffect(() => {}, []);
  return (
    <div>
      <MainContent BlogPost={BlogPost} TagAll={TagAll} />
      {/* {console.log('tagAll', TagAll)} */}
    </div>
  );
};
export default Index;
