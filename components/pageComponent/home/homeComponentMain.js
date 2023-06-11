import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Profile } from '../../../type/urlPath';
import MainContainer from '../../content/mainContainer';
import FacebookIcon from '../../icons/facebookIcon';
import GmailIcon from '../../icons/gmailIcon';
import LinkedinIcon from '../../icons/linkedinIcon';
import MainContent from './mainContent';
const HomeComponentMain = ({ dataOri }) => {
  return (
    <>
      <div className="position-relative d-none d-md-block">
        <div className="vertical-line position-absolute z-index-dropdown top-260px-xxl top-270px-xl top-260px-lg top-260px-md right-43vw d-none d-md-inline-block"></div>
      </div>
      <MainContainer>
        <Swiper pagination={true} modules={[Pagination]}>
          <SwiperSlide>
            <MainContent dataOri={dataOri.items} index={0} />
          </SwiperSlide>
          <SwiperSlide>
            <MainContent dataOri={dataOri.items} index={1} />
          </SwiperSlide>
          <SwiperSlide>
            <MainContent dataOri={dataOri.items} index={2} />
          </SwiperSlide>
          <SwiperSlide>
            <MainContent dataOri={dataOri.items} index={3} />
          </SwiperSlide>
          <SwiperSlide>
            <MainContent dataOri={dataOri.items} index={4} />
          </SwiperSlide>
        </Swiper>
        <div className="position-relative d-none d-md-block">
          <div className="vertical-line position-absolute d-none d-md-inline-block  left-44vw-xxl left-44vw-xl left-43vw-lg left-41vw-md bottom--10vh-xxl bottom--10vh-xl bottom--10vh-lg bottom--10vh-md"></div>
          <div
            style={{ right: 0, zIndex: -10 }}
            className="bg-body-secondary top--20vh-xxl top--20vh-xl top--20vh-lg top--20vh-md h-40vh-xxl h-40vh-xl h-40vh-lg h-30vh-md w-66vw-xxl w-66vw-xl w-66vw-lg w-65vw-md position-absolute d-none d-md-block"
          ></div>
          <div className="d-flex justify-content-between w-13pc-xxl w-12pc-xl w-12pc-lg w-11pc-md mt-80px-xxl mt-80px-xl mt-70px-lg mt-30px-md  right-96px-xxl right-90px-xl right-66px-lg  right-58px-md position-absolute d-none d-md-flex">
            <a href={Profile.Fb} className="cursor-point">
              <FacebookIcon />
            </a>
            <a href={Profile.Fb} className="cursor-point">
              <LinkedinIcon />
            </a>
            <a href={Profile.Fb} className="cursor-point">
              <GmailIcon />
            </a>
          </div>
        </div>
      </MainContainer>
    </>
  );
};

export default HomeComponentMain;
