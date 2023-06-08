import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';
import MainLayout from '../components/layout/mainLayout';
import '../styles/globals.css';
import '../styles/styles.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import { UrlPath } from '../type/urlPath';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const getTitle = () => {
    switch (router.pathname) {
      case UrlPath.growingInThePRWorld.url: {
        return UrlPath.growingInThePRWorld.title;
      }
      case UrlPath.auth.url: {
        return UrlPath.auth.title;
      }
      case UrlPath.detail.url: {
        return UrlPath.detail.title;
      }
      case UrlPath.tag.url: {
        return UrlPath.tag.title;
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
    }
  };
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0,maximum-scale=1.0"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap" />

        <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@200;300&display=swap"></link>

        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
          crossOrigin="anonymous"
        ></Script>
        <title>{getTitle()}</title>
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default MyApp;
