import Link from 'next/link';
import { useEffect, useState } from 'react';
import MainContainer from '../../content/mainContainer';
import FacebookIcon from '../../icons/facebookIcon';
import GmailIcon from '../../icons/gmailIcon';
import LinkedinIcon from '../../icons/linkedinIcon';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import MainContent from './mainContent';
import { Profile } from '../../../type/urlPath';
const HomeComponentMain = ({ data }) => {
  return (
    <>
      <MainContainer>
        <Swiper pagination={true} modules={[Pagination]}>
          <SwiperSlide>
            <MainContent data={data.items} index={0} />
          </SwiperSlide>
          <SwiperSlide>
            <MainContent data={data.items} index={1} />
          </SwiperSlide>
          <SwiperSlide>
            <MainContent data={data.items} index={2} />
          </SwiperSlide>
          <SwiperSlide>
            <MainContent data={data.items} index={3} />
          </SwiperSlide>
          <SwiperSlide>
            <MainContent data={data.items} index={4} />
          </SwiperSlide>
        </Swiper>
        <div className="position-relative d-none d-md-block">
          <div className="vertical-line position-absolute z-index-dropdown top--116vh-md right-47vw-xl right-43vw ml-200px-xl ml-70px-md d-none d-md-inline-block"></div>
          <div className="vertical-line position-absolute d-none d-md-inline-block left-48vw-xl left-40vw bottom-0"></div>
          <div
            style={{ top: '-49vh', right: 0, zIndex: -10 }}
            className="bg-body-secondary h-78vh w-66vw position-absolute d-none d-md-block"
          ></div>
          <div
            style={{ right: '7%', bottom: '-20vh' }}
            className="d-flex justify-content-between w-12pc-xl w-11pc-md position-absolute d-none d-md-flex"
          >
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
