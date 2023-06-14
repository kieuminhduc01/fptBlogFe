import { BASE_URL } from '@/api/request';
import MainContent from '@/components/pageComponent/blogDetail/mainContent';
import axios from 'axios';
import { useEffect } from 'react';

export async function getServerSideProps(context) {
  const routerData = context.query;
  const blogPost = await axios.get(`${BASE_URL}BlogPost/${routerData.slug}`);
  const tagAll = await axios.get(`${BASE_URL}Tag/all`);
  const BlogPost = await blogPost.data.result;
  const TagAll = await tagAll.data.result;
  let dataOri;
  await axios
    .post(`${BASE_URL}BlogPost/Paging`, {
      perPage: 6,
      currentPage: 1,
      shortBy: {
        title: 'Created',
        isIncrease: false,
      },
      filter: {
        categoryIds: ['GrowingInThePRWorld'],
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
  return {
    props: {
      BlogPost,
      TagAll,
      dataOri,
    },
  };
}

const Index = ({ BlogPost, TagAll,dataOri }) => {
  useEffect(() => {}, []);
  return (
    <div>
      <MainContent BlogPost={BlogPost} TagAll={TagAll} dataOri={dataOri} />
    </div>
  );
};
export default Index;
