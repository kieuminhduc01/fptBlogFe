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
  const [isAuthPage, setIsAuthPage] = useState(false);
  const [isRegisterPage, setIsRegisterPage] = useState(false);
  const [isNotMobile, setIsNotMobile] = useState(false);

  useEffect(() => {
    setIsHomeLayout(router.pathname === UrlPath.home.url);
    setIsAuthPage(router.pathname === UrlPath.auth.url);
    setIsRegisterPage(router.pathname === UrlPath.register.url);
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
      {isAuthPage || isRegisterPage ? (
        <></>
      ) : isHomeLayout && isNotMobile ? (
        <Header position={'fixed'} />
      ) : (
        <Header />
      )}
      <MainContainer>{children}</MainContainer>
      {isAuthPage || isRegisterPage ? (
        <></>
      ) : isHomeLayout && isNotMobile ? (
        <></>
      ) : (
        <Footer />
      )}
    </>
  );
};

export default MainLayout;
