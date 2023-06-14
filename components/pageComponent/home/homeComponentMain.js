import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Profile } from '@/type/urlPath';
import MainContainer from '@/components/content/mainContainer';
import FacebookIcon from '@/components/icons/facebookIcon';
import GmailIcon from '@/components/icons/gmailIcon';
import LinkedinIcon from '@/components/icons/linkedinIcon';
import MainContent from '@/components/pageComponent/home/mainContent';

const HomeComponentMain = ({ dataOri }) => {
  return (
    <>
      <div className="position-relative d-none d-lg-block">
        <div className="vertical-line position-absolute z-index-dropdown top-260px-xxl top-270px-xl top-260px-lg right-46vw-global d-none d-md-inline-block"></div>
      </div>
      <MainContainer>
        <Swiper pagination={true} modules={[Pagination]}>
          {[...Array(dataOri.perPage)].map((_, index) => (
            <SwiperSlide key={index}>
              <MainContent dataOri={dataOri.items} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="position-relative d-none d-md-block">
          <div className="vertical-line position-absolute d-none d-lg-inline-block left-40vw-xxl left-40vw-xl left-40vw-lg left-41vw-md bottom--10vh-xxl bottom--10vh-xl bottom--10vh-lg bottom--10vh-md"></div>
          <div className="right-0 z-index--100 bg-body-secondary top--40vh-xxl top--34vh-xl top--34vh-lg top--30vh-md h-60vh-xxl h-50vh-xl h-50vh-lg w-74vw-xxl w-73vw-xl w-71vw-lg position-absolute d-none d-lg-block"></div>
          <div className="d-flex justify-content-between w-13pc-xxl w-12pc-xl w-12pc-lg w-11pc-md mt-80px-xxl mt-80px-xl mt-70px-lg mt-30px-md mb-30px-md right-160px-xxl right-140px-xl right-116px-lg right-68px-md position-absolute d-none d-md-flex">
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
