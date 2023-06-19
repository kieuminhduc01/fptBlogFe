import { ForgotPassApi, LoginApi } from '@/api/authAPI';
import { messageUnauthorizedAtom } from '@/atom/store';
import HashLoaderCus from '@/components/spins/hashLoader';
import { setCookie } from '@/cookie/cookie';
import { UrlPath } from '@/type/urlPath';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import StatusAlert, { StatusAlertService } from 'react-status-alert';

const MainContent = () => {
  const router = useRouter();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loadingSpin, setLoadingSpin] = useState(false);
  const [isForgotPass, setIsForgotPass] = useState(false);
  const [emailForgot, setEmailForgot] = useState('');
  const [messageUnauthorized] = useAtom(messageUnauthorizedAtom);
  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };
  const handleUserEmailForgotChange = (e) => {
    setEmailForgot(e.target.value);
  };

  useEffect(() => {
    messageUnauthorized === ''
      ? ''
      : StatusAlertService.showError(messageUnauthorized);
  }, [messageUnauthorized]);
  const handleClickForgotPass = () => {
    setIsForgotPass(!isForgotPass);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoadingSpin(true);
    const dataReqLogin = {
      email: userName,
      password: password,
    };
    const dataReqForgotPass = {
      email: emailForgot,
    };
    {
      !isForgotPass
        ? LoginApi(dataReqLogin)
            .then((res) => {
              setCookie('accountId', res.data.result.accountId, { expires: 7 });
              setCookie('email', res.data.result.accountEmail, { expires: 7 });
              setCookie('accountName', res.data.result.accountName, {
                expires: 7,
              });
              setCookie('jwt_token', res.data.result.token, {
                expires: 7,
              });
              StatusAlertService.showSuccess('Đăng nhập thành công!');
              if (messageUnauthorized === '') {
                router.push(UrlPath.home.url);
              } else {
                router.back();
              }
            })
            .catch((err) => {
              StatusAlertService.showError(err.response.data.Detail);
            })
            .finally(() => {
              setLoadingSpin(false);
            })
        : ForgotPassApi(dataReqForgotPass)
            .then(() => {
              StatusAlertService.showSuccess(
                'Vui lòng kiểm tra Email để lấy mật khẩu mới!',
              );
            })
            .catch((err) => {
              StatusAlertService.showError(err.response.data.Detail);
            })
            .finally(() => {
              setLoadingSpin(false);
            });
    }
  };
  return (
    <HashLoaderCus loadingSpin={loadingSpin}>
      <div className="d-flex justify-content-center align-items-end h-80vh h-92vh-sm h-94vh-md h-96vh-lg h-96vh-xl h-96vh-xxl">
        <div className="w-100 order-2 d-flex justify-content-between flex-column align-items-center h-50vh h-50vh-sm h-50vh-md h-50vh-lg h-53vh-xl h-53vh-xxl ">
          <StatusAlert />
          <div className="w-89pc w-50pc-sm w-33pc-md w-26pc-lg w-21pc-xl w-18pc-xxl">
            <form onSubmit={handleSubmit}>
              {!isForgotPass && (
                <div>
                  <div className="mb-3">
                    <input
                      type="text"
                      placeholder="Email"
                      className="form-control ff-lexend fs-22px-xxl fs-20px-xl fs-20px-lg fs-18px-md fs-18px-sm fs-16px"
                      id="userName"
                      value={userName}
                      onChange={handleUserNameChange}
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      placeholder="Mật khẩu"
                      type="password"
                      className="form-control ff-lexend fs-22px-xxl fs-20px-xl fs-20px-lg fs-18px-md fs-18px-sm fs-16px"
                      id="password"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </div>
                </div>
              )}
              {isForgotPass && (
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Email"
                    className="form-control ff-lexend fs-22px-xxl fs-20px-xl fs-20px-lg fs-18px-md fs-18px-sm fs-16px"
                    id="emailForgot"
                    value={emailForgot}
                    onChange={handleUserEmailForgotChange}
                  />
                </div>
              )}
              <div className=" d-flex justify-content-between ">
                {!isForgotPass && (
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="rememberMe"
                      checked={rememberMe}
                      onChange={handleRememberMeChange}
                    />
                    <label
                      className="form-check-label ff-lexend"
                      htmlFor="rememberMe"
                    >
                      Remember Me
                    </label>
                  </div>
                )}
                <div
                  className="ff-lexend  cursor-point "
                  onClick={handleClickForgotPass}
                >
                  {!isForgotPass && 'Quên mật khẩu'}
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-primary ff-lexend fs-5"
                >
                  {isForgotPass ? 'Submit' : 'Đăng nhập'}
                </button>
              </div>
            </form>
          </div>
          <div className="order-1 d-flex">
            <Link
              className="ff-lexend fs-5 text-decoration-underline"
              href={UrlPath.register.url}
            >
              Đăng kí ngay
            </Link>
            {isForgotPass && (
              <div>
                <p
                  onClick={handleClickForgotPass}
                  className=" ff-lexend ms-1  fs-5 text-decoration-underline"
                >
                  / Đăng nhập
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </HashLoaderCus>
  );
};

export default MainContent;
