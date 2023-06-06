import { UrlPath } from '../../type/urlPath';
import { H2Styled, LinkStyled } from './styledComponent';

const NarBarDesktop = ({ onClickTurnOfSidebar }) => {
  return (
    <>
      <div className="container">
        <H2Styled color="#fff" className="fs-26px mt-20px fw-bold ml-16px">
          Phương kể bạn nghe
        </H2Styled>
        <hr className="ml-16px color-white" />
        <ul
          className="nav mt-4 flex-column z-index102 "
          onClick={onClickTurnOfSidebar}
        >
          <li className="nav-item ">
            <LinkStyled
              color="#ffffffd9"
              colorFocus="#B5CCC7"
              colorHover="#B5CCC7"
              className="nav-link fs-20px"
              href={UrlPath.growingInThePRWorld.url}
            >
              Growing in the PR World
            </LinkStyled>
          </li>
          <li className="nav-item ">
            <LinkStyled
              color="#ffffffd9"
              colorFocus="#B5CCC7"
              colorHover="#B5CCC7"
              className="nav-link fs-20px"
              href={UrlPath.seeThinkShare.url}
            >
              See think share
            </LinkStyled>
          </li>
          <li className="nav-item">
            <LinkStyled
              color="#ffffffd9"
              colorFocus="#B5CCC7"
              colorHover="#B5CCC7"
              className="nav-link fs-20px"
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
