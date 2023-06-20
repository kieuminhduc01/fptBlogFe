import { CreateAccountApi } from '@/api/authAPI';
import {
  H1Styled,
  H2Styled,
  HrStyled
} from '@/components/header/styledComponent';
import HashLoaderCus from '@/components/spins/hashLoader';
import { UrlPath } from '@/type/urlPath';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import StatusAlert, { StatusAlertService } from 'react-status-alert';

const MainContent = () => {
  const router = useRouter();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [linkWeb, setLinkWeb] = useState('');
  const [name, setName] = useState('');
  const [isSendEmailWhenHaveNewPost, setIsSendEmailWhenHaveNewPost] =
    useState(false);

  const [loadingSpin, setLoadingSpin] = useState(false);

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleLinkWebChange = (e) => {
    setLinkWeb(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleIsSendEmailChange = (e) => {
    setIsSendEmailWhenHaveNewPost(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoadingSpin(true);
    const dataReq = {
      userName: userName,
      password: password,
      email: email,
      linkWeb: linkWeb,
      name: name,
      isSendEmailWhenHaveNewPost: isSendEmailWhenHaveNewPost,
    };
    CreateAccountApi(dataReq)
      .then(() => {
        StatusAlertService.showSuccess('Đăng kí thành công!');
        router.push(UrlPath.auth.url);
      })
      .catch((err) => {
        StatusAlertService.showError(err.response.data.Detail);
      })
      .finally(() => {
        setLoadingSpin(false);
      });
  };
  const handleClickLogo = () => {
    router.push(UrlPath.home.url);
  };
  return (
    <HashLoaderCus loadingSpin={loadingSpin}>
      <div>
        <div className="position-relative">
          <div className="d-flex justify-content-center mt-5 mt-md-0">
            <div className="w-180px-xxl w-170px-xl w-170px-lg w-160px-md w-150px-sm w-140px">
              <H2Styled
                color="#960c0c"
                onClick={handleClickLogo}
                className="fs-34px-xxl fs-32px-xl fs-30px-lg fs-28px-md fs-26px-sm fs-24px mt-52px-xxl mt-50px-xl mt-48px-lg mt-40px-md float-start cursor-point "
              >
                Phương kể
              </H2Styled>
            </div>
          </div>
          <div className=" d-flex justify-content-center mt-1">
            <div className="z-index-dropdown w-300px-xxl w-290px-xl w-260px-lg w-200px-md w-180px-sm w-170px">
              <H1Styled
                onClick={handleClickLogo}
                className="me-lg-4  cursor-point fs-42px-xl fs-38px-md fs-36px-sm  fs-34px letter-spacing-3px-xxl letter-spacing-3px-xl letter-spacing-2px-lg letter-spacing-1px-md float-end"
              >
                Bạn nghe
              </H1Styled>
            </div>
          </div>

          <HrStyled
            className="d-block "
            top="18px"
            topMd="70px"
            width="31vw"
            widthSm="33vw"
            widthMd="38vw"
            widthLg="39vw"
            widthXl="40vw"
            widthXxl="41vw"
            height="2px"
          />
          <HrStyled
            className="d-block "
            top="28px"
            topMd="80px"
            right="0"
            width="28vw"
            widthSm="32vw"
            widthMd="36vw"
            widthLg="38vw"
            widthXl="39vw"
            widthXxl="41vw"
            height="2px"
          />
        </div>
        <div className="d-flex justify-content-center align-items-end h-80vh h-90vh-sm h-90vh-md h-86vh-lg h-86vh-xl h-86vh-xxl">
          <StatusAlert />
          <div className="w-100 order-2 d-flex justify-content-between flex-column align-items-center h-67vh h-70vh-sm h-70vh-md h-70vh-lg h-70vh-xl h-70vh-xxl ">
            <div className="w-89pc w-60pc-sm w-39pc-md w-30pc-lg w-23pc-xl w-20pc-xxl">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Tên đăng Nhập"
                    className="form-control"
                    id="userName"
                    value={userName}
                    onChange={handleUserNameChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    placeholder="Mật khẩu"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    placeholder="Nhập lại mật khẩu"
                    className="form-control"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="LinkWeb"
                    className="form-control"
                    id="linkWeb"
                    value={linkWeb}
                    onChange={handleLinkWebChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Họ tên"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={handleNameChange}
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="isSendEmailWhenHaveNewPost"
                    checked={isSendEmailWhenHaveNewPost}
                    onChange={handleIsSendEmailChange}
                  />
                  <label
                    className="form-check-label ff-lexend fs-6"
                    htmlFor="isSendEmailWhenHaveNewPost"
                  >
                    Gửi thông báo khi có bài viết mới
                  </label>
                </div>
                <div className="d-flex justify-content-center ">
                  <button
                    type="submit"
                    className="btn btn-primary fs-5 ff-lexend"
                  >
                    Đăng kí
                  </button>
                </div>
              </form>
            </div>
            <div className="order-1">
              <Link
                className="ff-lexend fs-5 text-decoration-underline"
                href={UrlPath.auth.url}
              >
                Đăng nhập
              </Link>
            </div>
          </div>
        </div>
      </div>
    </HashLoaderCus>
  );
};

export default MainContent;
