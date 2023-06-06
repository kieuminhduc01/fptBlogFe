import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { UrlPath } from '../../type/urlPath';
import MainContainer from '../content/mainContainer';
import Footer from '../footer/footer';
import Header from '../header/header';

const MainLayout = ({ children }) => {
  const router = useRouter();
  const [isHomeLayout, setIsHomeLayout] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsHomeLayout(
        window.innerWidth > 768 && router.pathname === UrlPath.home.url,
      );
    };
    handleResize();
    window.addEventListener('resize', handleResize); 

    return () => {
      window.removeEventListener('resize', handleResize); 
    };
  }, []);
  return (
    <>
      {isHomeLayout ? <Header position={'fixed'} /> : <Header />}
      <MainContainer>{children}</MainContainer>
      {isHomeLayout ? <></> : <Footer />}
    </>
  );
};

export default MainLayout;
