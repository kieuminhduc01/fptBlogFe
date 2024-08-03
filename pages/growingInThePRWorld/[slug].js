import { BASE_URL } from '@/api/request';
import MainContent from '@/components/pageComponent/blogDetail/mainContent';
import { formatDate } from '@/utils/convertDateTime';
import axios from 'axios';
import https from 'https';

export async function getServerSideProps(context) {
  const axiosInstance = axios.create({
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
  });
  const routerData = context.query;
  const blogPost = await axiosInstance.get(
    `${BASE_URL}BlogPost/${routerData.slug}`,
  );
  const BlogPost = await blogPost.data.result;
  let BlogListRelevant;
  await axiosInstance
    .post(`${BASE_URL}BlogPost/Relevant`, {
      perPage: 7,
      currentPage: 1,
      shortBy: {
        title: 'Created',
        isIncrease: false,
      },
      blogPostId: BlogPost.id,
    })
    .then((res) => {
      const dataTemp = res.data.result;
      BlogListRelevant = dataTemp.items.map((item) => ({
        ...item,
        created: formatDate(item.created),
      }));
    })
    .catch((err) => {
      console.log('err', err);
      StatusAlertService.showError(err.response.data.Detail);
    });
  return {
    props: {
      BlogPost,
      BlogListRelevant,
    },
  };
}

const Index = ({ BlogPost, BlogListRelevant }) => {
  return (
    <div>
      <MainContent BlogPost={BlogPost} BlogListRelevant={BlogListRelevant} />
    </div>
  );
};
export default Index;
