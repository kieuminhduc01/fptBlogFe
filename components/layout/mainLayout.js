import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { debounce, DEBOUNCETIME } from '../../share/debounce';
import { UrlPath } from '../../type/urlPath';
import MainContainer from '../content/mainContainer';
import Footer from '../footer/footer';
import Header from '../header/header';

const MainLayout = ({ children }) => {
  const router = useRouter();
  const [isHomeLayout, setIsHomeLayout] = useState(false);
  const [isNotMobile, setIsNotMobile] = useState(false);

  useEffect(() => {
    setIsHomeLayout(router.pathname === UrlPath.home.url);
  });

  useEffect(() => {
    const handleResize = () => {
      setIsNotMobile(window.innerWidth > 768);
    };

    const debouncedHandleResize = debounce(handleResize, DEBOUNCETIME);

    handleResize();
    window.addEventListener('resize', debouncedHandleResize);

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, []);

  return (
    <>
      {isHomeLayout && isNotMobile ? <Header position={'fixed'} /> : <Header />}
      <MainContainer>{children}</MainContainer>
      {isHomeLayout && isNotMobile ? <></> : <Footer />}
    </>
  );
};

export default MainLayout;
