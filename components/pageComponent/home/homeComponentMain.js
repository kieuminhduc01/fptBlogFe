import { BASE_URL } from '@/api/request';
import MainContainer from '@/components/content/mainContainer';
import FacebookIcon from '@/components/icons/facebookIcon';
import GmailIcon from '@/components/icons/gmailIcon';
import LinkedinIcon from '@/components/icons/linkedinIcon';
import MainContent from '@/components/pageComponent/home/mainContent';
import axios from 'axios';
import { useEffect, useState } from 'react';
import StatusAlert, { StatusAlertService } from 'react-status-alert';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const HomeComponentMain = ({ dataOri }) => {
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
      <div className="position-relative d-none d-lg-block">
        <div className="vertical-line position-absolute z-index-dropdown top-260px-xxl top-260px-xl top-260px-lg right-42vw-global d-none d-md-inline-block"></div>
      </div>
      <StatusAlert />
      <MainContainer>
        <Swiper
          pagination={true}
          modules={[Pagination]}
          autoplay={{ delay: 1000 }}
          loop={true}
        >
          {[...Array(dataOri.perPage)].map((_, index) => (
            <SwiperSlide key={index}>
              <MainContent dataOri={dataOri.items} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="position-relative d-none d-md-block">
          <div className="vertical-line position-absolute d-none d-lg-inline-block left-46vw-xxl left-45vw-xl left-44vw-lg bottom--16vh-xxl bottom--14vh-xl bottom--12vh-lg bottom--10vh-md"></div>
          <div className="right-0 z-index--100 bg-body-secondary top--40vh-xxl top--34vh-xl top--34vh-lg top--30vh-md h-60vh-xxl h-50vh-xl h-50vh-lg w-74vw-xxl w-73vw-xl w-71vw-lg position-absolute d-none d-lg-block"></div>
          <div className="d-flex justify-content-between w-13pc-xxl w-12pc-xl w-12pc-lg w-11pc-md mt-80px-xxl mt-80px-xl mt-70px-lg mt-30px-md mb-30px-md right-160px-xxl right-140px-xl right-116px-lg right-68px-md position-absolute d-none d-md-flex">
            <a
              href={proFile?.facebook}
              className="cursor-point"
              target="_blank"
            >
              <FacebookIcon />
            </a>
            <a
              href={proFile?.linkedin}
              className="cursor-point"
              target="_blank"
            >
              <LinkedinIcon />
            </a>
            <a
              href={proFile?.facebook}
              className="cursor-point"
              target="_blank"
            >
              <GmailIcon />
            </a>
          </div>
        </div>
      </MainContainer>
    </>
  );
};

export default HomeComponentMain;
