import { UrlPath } from '../../type/urlPath';
import LensIcon from '../icons/lensIcon';
import {
  DivStyled,
  H1Styled,
  H2Styled,
  HrStyled,
  InputFieldStyled,
  LinkStyled,
} from './styledComponent';

const Header = ({ position }) => {
  return (
    <>
      <DivStyled>
        <div className="header-container" style={{ position: position }}>
          <div className="position-relative">
            <div className="content-container">
              <div className="d-flex justify-content-center">
                <div className="" style={{ width: '220px' }}>
                  <H2Styled>Phương kể</H2Styled>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <div
                  style={{ background: '#fff', width: '260px', zIndex: '100' }}
                >
                  <H1Styled>Bạn nghe</H1Styled>
                </div>
              </div>
            </div>
            <HrStyled top="90px" width="50vw" height="2px" />
            <HrStyled top="98px" right="0" width="50vw" height="2px" />
          </div>
          <ul className="nav mt-2 justify-content-center">
            <li className="nav-item ms-5">
              <LinkStyled
                className="nav-link"
                href={UrlPath.growingInThePRWorld.url}
              >
                Growing in the PR World
              </LinkStyled>
            </li>
            <li className="nav-item ms-5">
              <LinkStyled className="nav-link" href={UrlPath.seeThinkShare.url}>
                See think share
              </LinkStyled>
            </li>
            <li className="nav-item ms-5">
              <LinkStyled className="nav-link" href={UrlPath.myConner.url}>
                My conner
              </LinkStyled>
            </li>
            <li className="nav-item ms-5">
              <form style={{ marginTop: '3px' }} className="d-flex ">
                <InputFieldStyled
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
        </div>
      </DivStyled>
    </>
  );
};

export default Header;
