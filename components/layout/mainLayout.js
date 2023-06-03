import MainContainer from '../content/mainContainer';
import Footer from '../footer/footer';
import Header from '../header/header';

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </>
  );
};

export default MainLayout;
