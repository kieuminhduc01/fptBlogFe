import HomeComponentMain from '../components/pageComponent/home/homeComponentMain';

export async function getServerSideProps() {
  const res = await fetch(
    `https://api-gateway.fullstack.edu.vn/api/blog-posts/phan-1-tao-du-an-reactjs-voi-webpack-va-babel`,
  );
  const data = await res.json();
  return { props: { data } };
}

const Index = ({ data }) => {
  return (
    <>
      <HomeComponentMain />
    </>
  );
};

export default Index;
