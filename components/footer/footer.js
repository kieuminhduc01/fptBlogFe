import Link from 'next/link';
import { Profile } from '@/type/urlPath';
import { HrStyled } from '@/components/header/styledComponent';
import FacebookIcon from '@/components/icons/facebookIcon';
import LinkedinIcon from '@/components/icons/linkedinIcon';
import {
  DivStyled,
  FooterTextstylde,
  PStyled,
} from '@/components/footer/styledComponent';

const Footer = () => {
  return (
    <>
      <div className="footer-bg ">
        <DivStyled>
          <div className="d-flex justify-content-center">
            <div className="w-94pc w-93pc-sm w-90pc-md w-90pc-lg w-88pc-xl w-88pc-xxl">
              <div>
                <div className="h-102px-xxl h-100px-xl h-80px-lg h-80px-md h-50px-sm h-40px "></div>
                <div className="d-flex justify-content-center">
                  <div className="footer-text-container">
                    <PStyled className=" fs-40px-xxl fs-38px-xl fs-36px-lg fs-34px-md fs-28px-sm fs-24px letter-spacing-3px-xl letter-spacing-2px-xl letter-spacing-1px-lg letter-spacing-1px-md mb-4px">
                      Theo dõi thêm về Phương nhé!
                    </PStyled>
                  </div>
                </div>
                <div className="position-relative">
                  <HrStyled
                    left="0"
                    right="0"
                    className=" bottom-28px-xxl bottom-26px-xl bottom-24px-lg bottom-10px-md bottom-14px-sm bottom-2px "
                    height="2px"
                  />
                </div>
              </div>
              <div className="d-flex justify-content-center mt-36px-xxl mt-34px-xl mt-30px-lg mt-26px-md w-100">
                <div className="d-flex justify-content-around w-35pc-xxl w-34pc-xl w-400px-lg w-320px-md w-300px-sm w-240px">
                  <div className="d-flex">
                    <FacebookIcon />
                    <Link legacyBehavior href={Profile.Fb} className="ms-1">
                      <FooterTextstylde
                        className=" fs-22px-xxl fs-20px-xl fs-20px-lg fs-16px-md fs-16px-sm fs-14px"
                        id="link"
                        target="_blank"
                      >
                        FACEBOOK
                      </FooterTextstylde>
                    </Link>
                  </div>
                  <div className="d-flex">
                    <LinkedinIcon />
                    <Link legacyBehavior href={Profile.In} className="ms-3">
                      <FooterTextstylde
                        className=" fs-22px-xxl fs-20px-xl fs-20px-lg fs-16px-md fs-16px-sm fs-14px"
                        id="link"
                        target="_blank"
                      >
                        LINKEDIN
                      </FooterTextstylde>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="h-102px-xxl h-100px-xl h-80px-lg h-80px-md h-50px-sm h-40px"></div>
            </div>
          </div>
        </DivStyled>
      </div>
    </>
  );
};

export default Footer;
