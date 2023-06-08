import { UrlPath } from '../../type/urlPath';
import LensIcon from '../icons/lensIcon';
import { InputFieldStyled, LinkStyled } from './styledComponent';

const NarBarDesktop = () => {
  return (
    <>
      <ul className="nav mt-2 justify-content-center d-none d-md-flex">
        <li className="nav-item ms-5">
          <LinkStyled
            color="#2c2727"
            colorfocus="#960c0c"
            colorhover="#960c0c"
            className="nav-link fs-20px-xxl fs-20px-xl fs-20px-lg fs-20px-md"
            href={UrlPath.growingInThePRWorld.url}
          >
            Growing in the PR World
          </LinkStyled>
        </li>
        <li className="nav-item ms-5">
          <LinkStyled
            colorfocus="#960c0c"
            colorhover="#960c0c"
            color="#2c2727"
            className="nav-link fs-20px-xxl fs-20px-xl fs-20px-lg fs-20px-md"
            href={UrlPath.seeThinkShare.url}
          >
            See think share
          </LinkStyled>
        </li>
        <li className="nav-item ms-5">
          <LinkStyled
            color="#2c2727"
            colorfocus="#960c0c"
            colorhover="#960c0c"
            className="nav-link fs-20px-xxl fs-20px-xl fs-20px-lg fs-20px-md"
            href={UrlPath.myConner.url}
          >
            My conner
          </LinkStyled>
        </li>
        <li className="nav-item ms-5">
          <form className="d-flex mt-1">
            <InputFieldStyled
              borderBottom="2px solid #b3a7a7"
              className="form-control me-1 w-50"
              type="search"
              placeholder="Tìm kiếm"
              aria-label="Search"
            ></InputFieldStyled>
            <div className="cursor-pointer">
              <LensIcon />
            </div>
          </form>
        </li>
      </ul>
    </>
  );
};

export default NarBarDesktop;
