import LensIcon from '../icons/lensIcon';
import {
  DivStyled,
  H1Styled,
  H2Styled,
  HrStyled,
  LinkStyled,
} from './styledComponent';

const Header = () => {
  return (
    <>
      <DivStyled>
        <div className="header-container">
          <div className="position-relative">
            <div className="content-container">
              <div className="d-flex justify-content-center">
                <div className="" style={{ width: '260px' }}>
                  <H2Styled>Phương kể</H2Styled>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <div
                  style={{ background: '#fff', width: '220px', zIndex: '100' }}
                >
                  <H1Styled>Bạn nghe</H1Styled>
                </div>
              </div>
            </div>
            <HrStyled top="130px" width="50vw" height="2px" />
            <HrStyled top="140px" right="0" width="50vw" height="2px" />
          </div>
          <ul className="nav mt-2 justify-content-center">
            <li className="nav-item ms-5">
              <LinkStyled className="nav-link" href="#">
                Growing in the PR World
              </LinkStyled>
            </li>
            <li className="nav-item ms-5">
              <LinkStyled className="nav-link" href="#">
                See think share
              </LinkStyled>
            </li>
            <li className="nav-item ms-5">
              <LinkStyled className="nav-link" href="#">
                My conner
              </LinkStyled>
            </li>
            <li className="nav-item ms-5">
              <form style={{ marginTop: '3px' }} className="d-flex ">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Tìm kiếm"
                  aria-label="Search"
                ></input>
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
