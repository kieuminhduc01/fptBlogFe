import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { HrStyled } from '../header/styledComponent';
import FacebookIcon from '../icons/facebookIcon';
import LinkedinIcon from '../icons/linkedinIcon';
import { DivStyled, FooterTextH3Styled, PStyled } from './styledComponent';

const Footer = () => {
  const router = useRouter();
  useEffect(() => {
    router.prefetch('https://www.facebook.com/phuongwings?mibextid=LQQJ4d');
  }, [router]);
  const handleClickFacebook = () => {
    router.push('https://www.facebook.com/phuongwings?mibextid=LQQJ4d');
  };
  return (
    <>
      <div style={{ backgroundColor: '#f2f2f2' }}>
        <DivStyled>
          <div className="container">
            <div>
              <div style={{ height: '110px' }}></div>
              <div className="d-flex justify-content-center">
                <div className="footer-text-container">
                  <PStyled>Theo dõi thêm về Phương nhé!</PStyled>
                </div>
              </div>
              <div className="position-relative">
                <HrStyled left="0" right="0" bottom="26px" height="2px" />
              </div>
            </div>
            <div
              className="d-flex justify-content-center mt"
              style={{
                marginTop: '39px',
              }}
            >
              <div
                className="d-flex justify-content-around w"
                style={{
                  width: '35%',
                }}
              >
                <div className="d-flex" onClick={handleClickFacebook}>
                  <FacebookIcon />
                  <FooterTextH3Styled className="ms-3">
                    FACEBOOK
                  </FooterTextH3Styled>
                </div>
                <div className="d-flex">
                  <LinkedinIcon />
                  <FooterTextH3Styled className="ms-3">
                    LINKEDIN
                  </FooterTextH3Styled>
                </div>
              </div>
            </div>
            <div style={{ height: '102px' }}></div>
          </div>
        </DivStyled>
      </div>
    </>
  );
};

export default Footer;
