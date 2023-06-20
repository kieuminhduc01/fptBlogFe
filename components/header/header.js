import { blogTitleAtom, isPagingSearchAtom } from '@/atom/store';
import NarBarDesktop from '@/components/header/narBarDesktop';
import NarBarMobile from '@/components/header/narBarMobile';
import {
  DivLogoMobileBanNgheStyled,
  DivLogoMobilePhuongKeStyled,
  DivStyled,
  H1Styled,
  H2Styled,
  HrStyled,
  InputFieldStyled
} from '@/components/header/styledComponent';
import AccountIcon from '@/components/icons/accountIcon';
import ArrowLeft from '@/components/icons/arrowLeft';
import LensIcon from '@/components/icons/lensIcon';
import ThreeLineIcon from '@/components/icons/threeLineIcon';
import { UrlPath } from '@/type/urlPath';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef, useState } from 'react';
import StatusAlert from 'react-status-alert';
import DropDown from './dropDown';

const Header = ({ position }) => {
  const [widthMenuContent, setWidthMenuContent] = useState(0);
  const [isContentVisiable, setIsContentVisiable] = useState(false);
  const [displayArrorwLeft, setDisplayArrorwLeft] = useState('none');
  const [rightPxArrowLeft, setRightPxArrowLeft] = useState();
  const [isClickAccount, setIsClickAccount] = useState(false);
  const [search, setSearch] = useState('');
  const [, setIsPagingSearch] = useAtom(isPagingSearchAtom);
  const [blogTitle] = useAtom(blogTitleAtom);
  const router = useRouter();
  const [width, setWidth] = useState(0);
  const sideBarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!sideBarRef?.current?.contains(event.target)) {
        setWidthMenuContent(0);
        setDisplayArrorwLeft('none');
        setRightPxArrowLeft('right-17vw right-49vw-sm');
        setIsContentVisiable(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth);
      const handleResize = () => {
        setWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);
  const handleClickLogo = () => {
    router.push(UrlPath.home.url);
  };
  const handleClickMenu = () => {
    if (width <= 576) {
      setWidthMenuContent('84vw');
    } else if (width <= 768) {
      setWidthMenuContent('52vw');
    }
    setTimeout(() => {
      setIsContentVisiable(true);
      setDisplayArrorwLeft('block');
    }, 500);
  };

  const handleClickArrowLeft = () => {
    setWidthMenuContent(0);
    setDisplayArrorwLeft('none');
    setIsContentVisiable(false);
  };
  const handleTurnOffSidebar = useCallback(() => {
    setWidthMenuContent(0);
    setDisplayArrorwLeft('none');
    setIsContentVisiable(false);
  }, []);
  const handleClickAccount = () => {
    setIsClickAccount(!isClickAccount);
  };
  const handleSearch = () => {
    setIsPagingSearch(false);
    router.push(`${UrlPath.search.url}?keyword=${search}`);
  };
  const getTitle = (url) => {
    switch (url) {
      case UrlPath.growingInThePRWorld.url: {
        return UrlPath.growingInThePRWorld.title;
      }
      case UrlPath.seeThinkShare.url: {
        return UrlPath.seeThinkShare.title;
      }
      case UrlPath.myCorner.url: {
        return UrlPath.myCorner.title;
      }
      case UrlPath.home.url: {
        return UrlPath.home.title;
      }
      case UrlPath.search.url: {
        return UrlPath.search.title;
      }
      case UrlPath.tag.url: {
        return UrlPath.tag.title;
      }
      case `${UrlPath.growingInThePRWorld.url}/[slug]`: {
        return blogTitle;
      }
      case `${UrlPath.seeThinkShare.url}/[slug]`: {
        return blogTitle;
      }
      case `${UrlPath.myCorner.url}/[slug]`: {
        return blogTitle;
      }
    }
  };
  return (
    <>
      <div
        ref={sideBarRef}
        className="d-md-none position-fixed z-index-fixed"
        style={{
          height: '100vh',
          backgroundColor: '#c97b7b',
          width: widthMenuContent,
          transition: 'width 0.7s ease',
        }}
      >
        <div
          className={`position-fixed d-md-none ${rightPxArrowLeft} top-24px-sm top-30px`}
          style={{ display: displayArrorwLeft }}
          onClick={handleClickArrowLeft}
        >
          <ArrowLeft />
        </div>
        <div>
          {isContentVisiable && (
            <NarBarMobile onClickTurnOfSidebar={handleTurnOffSidebar} />
          )}
        </div>
      </div>
      <DivStyled>
        <StatusAlert />
        <div
          className="header-container z-index-fixed"
          style={{ position: position }}
        >
          <div className="position-relative">
            <div className="bg-white opacity-100">
              <div className="bg-white opacity-100 d-flex justify-content-center">
                <div className="w-89pc w-92pc-sm w-90pc-md w-90pc-lg w-88pc-xl w-88pc-xxl">
                  <div className="d-flex d-md-none justify-content-between flex-row ">
                    <div
                      className="cursor-point z-index-dropdown mt-22px-sm mt-20px"
                      onClick={handleClickMenu}
                    >
                      <ThreeLineIcon />
                    </div>
                  </div>
                  <div className=" d-md-none float-start mt-62px-sm mt-60px mb-22px-sm mb-20px fw-bold fs-2">
                    {getTitle(router.pathname)}
                  </div>
                  <div className="d-md-none d-flex w-100  mb-22px-sm mb-20px">
                    <div className="d-flex padding-12px-sm padding-10px w-100 br-14px-sm br-14px bg-fafafa ">
                      <div
                        onClick={handleSearch}
                        className="cursor-point mr-8px-sm mr-8px"
                      >
                        <LensIcon />
                      </div>
                      <InputFieldStyled
                        className="w-90pc-sm w-90pc bg-fafafa"
                        type="search"
                        placeholder="Tìm kiếm"
                        aria-label="Search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      ></InputFieldStyled>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="float-end me-md-5 mt-md-5 mt--216px mt--230px-sm mr-30px mr-30px-sm position-relative">
                  <div onClick={handleClickAccount} className="cursor-point">
                    <AccountIcon height="40px" width="40px" />
                  </div>
                  <DropDown isClickAccount={isClickAccount} />
                </div>
                <DivLogoMobilePhuongKeStyled className=" d-flex justify-content-center">
                  <div className="w-180px-xxl w-170px-xl w-170px-lg w-160px-md">
                    <H2Styled
                      color="#960c0c"
                      onClick={handleClickLogo}
                      className="fs-34px-xxl fs-32px-xl fs-30px-lg fs-28px-md fs-22px-sm fs-20px mt-52px-xxl mt-50px-xl mt-48px-lg mt-40px-md float-start cursor-point "
                    >
                      Phương kể
                    </H2Styled>
                  </div>
                </DivLogoMobilePhuongKeStyled>
                <DivLogoMobileBanNgheStyled className="d-flex justify-content-center mt-md-1">
                  <div className="z-index-dropdown w-220px-xxl w-220px-xl w-200px-lg w-200px-md">
                    <H1Styled
                      onClick={handleClickLogo}
                      className=" me-lg-4  cursor-point fs-42px-xl fs-38px-md fs-30px-sm fs-28px letter-spacing-3px-xxl letter-spacing-3px-xl letter-spacing-2px-lg letter-spacing-1px-md float-end"
                    >
                      Bạn nghe
                    </H1Styled>
                  </div>
                </DivLogoMobileBanNgheStyled>
              </div>
            </div>
            <HrStyled
              className="d-md-block d-none"
              top="70px"
              width="34vw"
              widthLg="36vw"
              widthXl="38vw"
              height="2px"
            />
            <HrStyled
              className="d-md-block d-none"
              top="80px"
              right="0"
              width="40vw"
              height="2px"
            />
          </div>
          <NarBarDesktop />
        </div>
      </DivStyled>
    </>
  );
};

export default Header;
