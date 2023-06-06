import Link from 'next/link';
import { HrStyled } from '../header/styledComponent';
import FacebookIcon from '../icons/facebookIcon';
import LinkedinIcon from '../icons/linkedinIcon';
import { DivStyled, FooterTextstylde, PStyled } from './styledComponent';

const Footer = () => {
  return (
    <>
      <div className="footer-bg ">
        <DivStyled>
          <div className="container">
            <div>
              <div className="h-100px-xl h-80px-md h-40px "></div>
              <div className="d-flex justify-content-center">
                <div className="footer-text-container">
                  <PStyled className="fs-38px-xl fs-30px-md fs-20px letter-spacing-2px-xl letter-spacing-1px-md mb-4px">
                    Theo dõi thêm về Phương nhé!
                  </PStyled>
                </div>
              </div>
              <div className="position-relative">
                <HrStyled
                  left="0"
                  right="0"
                  className="bottom-16px-xl bottom-10px-md bottom-2px "
                  height="2px"
                />
              </div>
            </div>
            <div className="d-flex justify-content-center mt-36px-xl mt-30px-md">
              <div className="d-flex justify-content-around w-28pc-xl w-22pc-md w-18pc">
                <div className="d-flex">
                  <FacebookIcon />
                  <Link
                    legacyBehavior
                    href="https://www.facebook.com/phuongwings?mibextid=LQQJ4d"
                    className="ms-1"
                  >
                    <FooterTextstylde
                      className="fs-20px-xl fs-16px-md fs-14px "
                      id="link"
                      target="_blank"
                    >
                      FACEBOOK
                    </FooterTextstylde>
                  </Link>
                </div>
                <div className="d-flex">
                  <LinkedinIcon />
                  <Link legacyBehavior href="#" className="ms-3">
                    <FooterTextstylde
                      className="fs-20px-xl fs-16px-md fs-14px "
                      id="link"
                      target="_blank"
                    >
                      LINKEDIN
                    </FooterTextstylde>
                  </Link>
                </div>
              </div>
            </div>
            <div className="h-100px-xl  h-80px-md  h-40px "></div>
          </div>
        </DivStyled>
      </div>
    </>
  );
};

export default Footer;
