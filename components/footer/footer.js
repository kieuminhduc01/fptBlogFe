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
              <div className="h-10px-xxl h-96px-xl h-80px-lg"></div>
              <div className="d-flex justify-content-center">
                <div className="footer-text-container">
                  <PStyled className="fs-38px-xxl fs-36px-xl fs-32px-lg fs-28px-md fs-24px-sm fs-20px">
                    Theo dõi thêm về Phương nhé!
                  </PStyled>
                </div>
              </div>
              <div className="position-relative">
                <HrStyled left="0" right="0" bottom="26px" height="2px" />
              </div>
            </div>
            <div className="d-flex justify-content-center mt-38px-xxl">
              <div className="d-flex justify-content-around w-30pc ">
                <div className="d-flex">
                  <FacebookIcon />
                  <Link
                    legacyBehavior
                    href="https://www.facebook.com/phuongwings?mibextid=LQQJ4d"
                    className="ms-1"
                  >
                    <FooterTextstylde id="link" target="_blank">
                      FACEBOOK
                    </FooterTextstylde>
                  </Link>
                </div>
                <div className="d-flex">
                  <LinkedinIcon />
                  <Link legacyBehavior href="#" className="ms-3">
                    <FooterTextstylde id="link" target="_blank">
                      LINKEDIN
                    </FooterTextstylde>
                  </Link>
                </div>
              </div>
            </div>
            <div className="h-100px-xxl"></div>
          </div>
        </DivStyled>
      </div>
    </>
  );
};

export default Footer;
