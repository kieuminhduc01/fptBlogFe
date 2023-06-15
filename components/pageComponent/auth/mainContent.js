import { LoginApi } from '@/api/authAPI';
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
  useEffect(() => {
    messageUnauthorized === ''
      ? ''
      : StatusAlertService.showError(messageUnauthorized);
  }, [messageUnauthorized]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoadingSpin(true);
    const dataReq = {
      email: userName,
      password: password,
    };
    LoginApi(dataReq)
      .then((res) => {
        setCookie('accountId', res.data.result.accountId, { expires: 7 });
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
      });
  };

  return (
    <HashLoaderCus loadingSpin={loadingSpin}>
      <div className="d-flex justify-content-center align-items-end h-80vh h-92vh-sm h-94vh-md h-96vh-lg h-96vh-xl h-96vh-xxl">
        <div className="w-100 order-2 d-flex justify-content-between flex-column align-items-center h-50vh h-50vh-sm h-50vh-md h-50vh-lg h-53vh-xl h-53vh-xxl ">
          <StatusAlert />
          <div className="w-89pc w-40pc-sm w-24pc-md w-22pc-lg w-18pc-xl w-14pc-xxl">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Email"
                  className="form-control"
                  id="userName"
                  value={userName}
                  onChange={handleUserNameChange}
                />
              </div>
              <div className="mb-3">
                <input
                  placeholder="Mật khẩu"
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                />
                <label className="form-check-label" htmlFor="rememberMe">
                  Remember Me
                </label>
              </div>
              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary">
                  Đăng nhập
                </button>
              </div>
            </form>
          </div>
          <div className="order-1 d-flex">
            <Link
              className="ff-lexend fs-5 text-decoration-underline"
              href={UrlPath.register.url}
            >
              Đăng kí
            </Link>
            <div className="ff-lexend fs-5  ms-2">ngay</div>
          </div>
        </div>
      </div>
    </HashLoaderCus>
  );
};

export default MainContent;
