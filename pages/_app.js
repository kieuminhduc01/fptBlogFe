import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head';
import { useRouter } from 'next/router';
import 'react-status-alert/dist/status-alert.css';
import 'swiper/css';
import 'swiper/css/pagination';
import MainLayout from '../components/layout/mainLayout';
import '../styles/globals.css';
import '../styles/styles.scss';
import { UrlPath } from '../type/urlPath';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const getTitle = () => {
    switch (router.pathname) {
      case UrlPath.growingInThePRWorld.url: {
        return UrlPath.growingInThePRWorld.title;
      }
      case UrlPath.seeThinkShare.url: {
        return UrlPath.seeThinkShare.title;
      }
      case UrlPath.home.url: {
        return UrlPath.home.title;
      }
      case UrlPath.myConner.url: {
        return UrlPath.myConner.title;
      }
      case UrlPath.auth.url: {
        return UrlPath.auth.title;
      }
      case `${UrlPath.seeThinkShare.url}/[slug]`: {
        return 'Chi tiết bài viết';
      }
      case `${UrlPath.growingInThePRWorld.url}/[slug]`: {
        return 'Chi tiết bài viết';
      }
      case `${UrlPath.myConner.url}/[slug]`: {
        return 'Chi tiết bài viết';
      }
    }
  };
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0,maximum-scale=1.0"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap" />
        <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@200;300&display=swap"></link>
        <title>{getTitle()}</title>
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default MyApp;
