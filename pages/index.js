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
    })
    .catch((err) => {
      return (
        <div class="alert alert-danger alert-dismissible fade show">
          <strong>Error!</strong> {err}
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
          ></button>
        </div>
      );
    });
  return { props: { dataOri } };
}

const Index = ({ dataOri }) => {
  return (
    <>
      <HomeComponentMain dataOri={dataOri} />
    </>
  );
};

export default Index;
