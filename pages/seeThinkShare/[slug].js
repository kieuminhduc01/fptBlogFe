import { BASE_URL } from '@/api/request';
import MainContent from '@/components/pageComponent/blogDetail/mainContent';
import axios from 'axios';

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
  return (
    <div>
      <MainContent BlogPost={BlogPost} TagAll={TagAll} />
    </div>
  );
};
export default Index;
