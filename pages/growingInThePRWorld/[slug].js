import { BASE_URL } from '@/api/request';
import MainContent from '@/components/pageComponent/blogDetail/mainContent';
import axios from 'axios';

export async function getServerSideProps(context) {
  const routerData = context.query;
  const blogPost = await axios.get(`${BASE_URL}BlogPost/${routerData.slug}`);
  const BlogPost = await blogPost.data.result;
  const blogPostTags = BlogPost.tags;
  const tagIds = blogPostTags.map((tag) => tag.id);
  return {
    props: {
      BlogPost,
      tagIds,
    },
  };
}

const Index = ({ BlogPost, tagIds }) => {
  return (
    <div>
      <MainContent BlogPost={BlogPost} tagIds={tagIds} />
    </div>
  );
};
export default Index;
