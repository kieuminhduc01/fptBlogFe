import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef, useState } from 'react';
import { UrlPath } from '../../type/urlPath';
import ArrowLeft from '../icons/arrowLeft';
import LensIcon from '../icons/lensIcon';
import ThreeLineIcon from '../icons/threeLineIcon';
import NarBarDesktop from './narBarDesktop';
import NarBarMobile from './narBarMobile';
import {
  DivStyled,
  H1Styled,
  H2Styled,
  HrStyled,
  InputFieldStyled
} from './styledComponent';

const Header = ({ position }) => {
  const [widthMenuContent, setWidthMenuContent] = useState(0);
  const [isContentVisiable, setIsContentVisiable] = useState(false);
  const [displayArrorwLeft, setDisplayArrorwLeft] = useState('none');
  const [rightPxArrowLeft, setRightPxArrowLeft] = useState();

  const router = useRouter();
  const [width, setWidth] = useState(0);
  const sideBarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!sideBarRef?.current?.contains(event.target)) {
        setWidthMenuContent(0);
        setDisplayArrorwLeft('none');
        setRightPxArrowLeft('right-17vw right-51vw-sm');
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
  const handleClickMenu = () => {
    if (width <= 576) {
      setWidthMenuContent('84vw');
    } else if (width <= 768) {
      setWidthMenuContent('50vw');
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

  const getTitle = (url) => {
    switch (url) {
      case UrlPath.growingInThePRWorld.url: {
        return UrlPath.growingInThePRWorld.title;
      }
      case `${UrlPath.seeThinkShare.url}`: {
        return UrlPath.seeThinkShare.title;
      }
      case UrlPath.myConner.url: {
        return UrlPath.myConner.title;
      }
      case UrlPath.detail.url: {
        return UrlPath.detail.title;
      }
      case UrlPath.home.url: {
        return UrlPath.home.title;
      }
      case UrlPath.tag.url: {
        return UrlPath.tag.title;
      }
    }
  };
  return (
    <>
      <div
        ref={sideBarRef}
        className="d-md-none position-fixed z-index1000"
        style={{
          height: '100vh',
          backgroundColor: '#c97b7b',
          width: widthMenuContent,
          transition: 'width 0.7s ease',
        }}
      >
        <div
          className={`position-fixed d-md-none ${rightPxArrowLeft} top-30px`}
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
        <div className="header-container" style={{ position: position }}>
          <div className="position-relative">
            <div className="bg-white opacity-100">
              <div className="bg-white opacity-100 d-flex justify-content-center">
                <div className="w-90pc w-94pc-sm">
                  <div className="d-flex d-md-none justify-content-between flex-row ">
                    <div
                      className="cursor-point z-index100 mt-20px"
                      onClick={handleClickMenu}
                    >
                      <ThreeLineIcon />
                    </div>
                    <div>
                      <H2Styled color="#960c0c" className="fs-20px mt-20px">
                        Phương kể bạn nghe
                      </H2Styled>
                    </div>
                  </div>
                  <div className=" d-md-none float-start mt-60px mb-20px fw-bold fs-1">
                    {getTitle(router.pathname)}
                  </div>
                  <div className="d-md-none d-flex w-100  mb-20px">
                    <div className="d-flex padding-10px w-100 br-14px bg-fafafa ">
                      <div className="cursor-pointer mr-8px">
                        <LensIcon />
                      </div>
                      <InputFieldStyled
                        className="w-90pc bg-fafafa"
                        type="search"
                        placeholder="Tìm kiếm"
                        aria-label="Search"
                      ></InputFieldStyled>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-none d-md-flex justify-content-center">
                <div className="w-220px-xl w-200px-md w-200px">
                  <H2Styled
                    color="#960c0c"
                    className="fs-32px-xl fs-28px-md fs-24px mt-50px-xl mt-40px-md mt-20px float-start  "
                  >
                    Phương kể
                  </H2Styled>
                </div>
              </div>
              <div className=" d-none d-md-flex justify-content-center">
                <div className="bg-white z-index100 w-260px-xl w-240px-md w-200px">
                  <H1Styled className="fs-42px-xl fs-38px-md fs-34px letter-spacing-3px-xl letter-spacing-2px-xl letter-spacing-1px float-end">
                    Bạn nghe
                  </H1Styled>
                </div>
              </div>
            </div>
            <HrStyled
              className="d-md-block d-none"
              top="90px"
              width="50vw"
              height="2px"
            />
            <HrStyled
              className="d-md-block d-none"
              top="98px"
              right="0"
              width="50vw"
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
