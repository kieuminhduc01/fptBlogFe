import { H2Styled, LinkStyled } from '@/components/header/styledComponent';
import { UrlPath } from '@/type/urlPath';

const NarBarDesktop = ({ onClickTurnOfSidebar }) => {
  return (
    <>
      <div className="container">
        <H2Styled
          color="#fff"
          className="fs-26px-sm fs-24px mt-20px-sm mt-20px fw-bold ml-16px-sm ml-16px"
        >
          Phương kể bạn nghe
        </H2Styled>
        <hr className="ml-16px color-white" />
        <ul
          className="nav mt-4 flex-column z-index-fixed "
          onClick={onClickTurnOfSidebar}
        >
          <li className="nav-item ">
            <LinkStyled
              color="#ffffffd9"
              colorfocus="#B5CCC7"
              colorhover="#B5CCC7"
              className="nav-link fs-20px-sm fs-18px  pe-0"
              href={UrlPath.growingInThePRWorld.url}
            >
              GROWING IN THE PR WORLD
            </LinkStyled>
          </li>
          <li className="nav-item ">
            <LinkStyled
              color="#ffffffd9"
              colorfocus="#B5CCC7"
              colorhover="#B5CCC7"
              className="nav-link fs-20px-sm fs-18px pe-0"
              href={UrlPath.seeThinkShare.url}
            >
              SEE THINK SHARE
            </LinkStyled>
          </li>
          <li className="nav-item">
            <LinkStyled
              color="#ffffffd9"
              colorfocus="#B5CCC7"
              colorhover="#B5CCC7"
              className="nav-link fs-20px-sm fs-18px pe-0"
              href={UrlPath.myCorner.url}
            >
              MY CORNER
            </LinkStyled>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NarBarDesktop;
