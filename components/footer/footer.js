import { BASE_URL } from '@/api/request';
import { PStyled } from '@/components/footer/styledComponent';
import { HrStyled } from '@/components/header/styledComponent';
import FacebookIcon from '@/components/icons/facebookIcon';
import LinkedinIcon from '@/components/icons/linkedinIcon';
import axios from 'axios';
import { useEffect, useState } from 'react';
import StatusAlert, { StatusAlertService } from 'react-status-alert';

const Footer = () => {
  const [proFile, setProFile] = useState();
  useEffect(() => {
    axios
      .get(`${BASE_URL}Contact`)
      .then((res) => {
        setProFile(res.data.result);
      })
      .catch((err) => {
        StatusAlertService.showError(err.response.data.Detail);
      });
  }, []);
  return (
    <>
      <div className="footer-bg ">
        <StatusAlert />
        <div>
          <div className="d-flex justify-content-center">
            <div className="w-94pc w-93pc-sm w-90pc-md w-90pc-lg w-88pc-xl w-88pc-xxl">
              <div>
                <div className="h-70px-xxl h-70px-xl h-60px-lg h-60px-md h-50px-sm h-40px "></div>
                <div className="d-flex justify-content-center">
                  <div className="z-index-dropdown footer-bg pe-3 ps-3">
                    <PStyled className=" fs-34px-xxl fs-34px-xl fs-32px-lg fs-32px-md fs-28px-sm fs-24px letter-spacing-3px-xl letter-spacing-2px-xl letter-spacing-1px-lg letter-spacing-1px-md mb-4px">
                      Theo dõi thêm về Phương nhé!
                    </PStyled>
                  </div>
                </div>
                <div className="position-relative">
                  <HrStyled
                    left="0"
                    right="0"
                    className=" bottom-20px-xxl bottom-20px-xl bottom-20px-lg bottom-20px-md bottom-14px-sm bottom-2px "
                    height="2px"
                  />
                </div>
              </div>
              <div className="d-flex justify-content-center mt-18px-xxl mt-18px-xl mt-18px-lg mt-18px-md mt-18px-sm mt-14px w-100">
                <div className="d-flex justify-content-around w-35pc-xxl w-34pc-xl w-400px-lg w-320px-md w-300px-sm w-290px">
                  <div className="d-flex">
                    <FacebookIcon />
                    <a
                      className=" footer-text fs-18px-xxl fs-18px-xl fs-18px-lg fs-16px-md fs-16px-sm fs-14px"
                      href={proFile?.facebook}
                      target="_blank"
                    >
                      FACEBOOK
                    </a>
                  </div>
                  <div className="d-flex">
                    <LinkedinIcon />
                    <a
                      className="footer-text  fs-18px-xxl fs-18px-xl fs-18px-lg fs-16px-md fs-16px-sm fs-14px"
                      href={proFile?.linkedin}
                      target="_blank"
                    >
                      LINKEDIN
                    </a>
                  </div>
                </div>
              </div>
              <div className="h-40px-xxl h-40px-xl h-40px-lg h-40px-md h-40px-sm h-40px "></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
