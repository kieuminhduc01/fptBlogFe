import { UrlPath } from '../../type/urlPath';
import { H2Styled, LinkStyled } from './styledComponent';

const NarBarDesktop = ({ onClickTurnOfSidebar }) => {
  return (
    <>
      <div className="container">
        <H2Styled
          color="#fff"
          className="fs-26px-sm fs-26px mt-20px-sm mt-20px fw-bold ml-16px-sm ml-16px"
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
              className="nav-link fs-20px-sm fs-20px"
              href={UrlPath.growingInThePRWorld.url}
            >
              Growing in the PR World
            </LinkStyled>
          </li>
          <li className="nav-item ">
            <LinkStyled
              color="#ffffffd9"
              colorfocus="#B5CCC7"
              colorhover="#B5CCC7"
              className="nav-link fs-20px-sm fs-20px"
              href={UrlPath.seeThinkShare.url}
            >
              See think share
            </LinkStyled>
          </li>
          <li className="nav-item">
            <LinkStyled
              color="#ffffffd9"
              colorfocus="#B5CCC7"
              colorhover="#B5CCC7"
              className="nav-link fs-20px-sm fs-20px"
              href={UrlPath.myConner.url}
            >
              My conner
            </LinkStyled>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NarBarDesktop;
