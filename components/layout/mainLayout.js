import { useRouter } from 'next/router';
import { UrlPath } from '../../type/urlPath';
import MainContainer from '../content/mainContainer';
import Footer from '../footer/footer';
import Header from '../header/header';

const MainLayout = ({ children }) => {
  const router = useRouter();
  const isHomeLayout = router.pathname === UrlPath.home.url;
  return (
    <>
      {isHomeLayout ? <Header position={'fixed'} /> : <Header />}
      <MainContainer>{children}</MainContainer>
      {isHomeLayout ? <></> : <Footer />}
    </>
  );
};

export default MainLayout;
