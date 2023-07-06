import { ForgotPassApi, LoginApi } from '@/api/authAPI';
import { messageUnauthorizedAtom } from '@/atom/store';
import {
  H1Styled,
  H2Styled,
  HrStyled,
} from '@/components/header/styledComponent';
import HashLoaderCus from '@/components/spins/hashLoader';
import { setCookie } from '@/cookie/cookie';
import { UrlPath } from '@/type/urlPath';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import StatusAlert, { StatusAlertService } from 'react-status-alert';
import * as Yup from 'yup';
const validationSchema = Yup.object().shape({
  userName: Yup.string()
    .required('Vui lòng nhập Email')
    .email('Email không hợp lệ'),
  password: Yup.string()
    .required('Vui lòng nhập mật khẩu')
    .min(5, 'Mật khẩu phải có ít nhất 5 kí tự'),
});
const MainContent = () => {
  const router = useRouter();
  const [loadingSpin, setLoadingSpin] = useState(false);
  const [isForgotPass, setIsForgotPass] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const [messageUnauthorized] = useAtom(messageUnauthorizedAtom);
  useEffect(() => {
    messageUnauthorized === ''
      ? ''
      : StatusAlertService.showError(messageUnauthorized);
  }, [messageUnauthorized]);
  const handleClickForgotPass = () => {
    setIsForgotPass(!isForgotPass);
  };
  const onSubmitLogin = (data) => {
    setLoadingSpin(true);
    const dataReqLogin = {
      email: data.userName,
      password: data.password,
    };
    LoginApi(dataReqLogin)
      .then((res) => {
        setCookie('accountId', res.data.result.accountId, { expires: 7 });
        setCookie('email', res.data.result.accountEmail, { expires: 7 });
        setCookie('accountName', res.data.result.accountName, { expires: 7 });
        setCookie('jwt_token', res.data.result.token, { expires: 7 });
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
  const handleClickLogo = () => {
    router.push(UrlPath.home.url);
  };
  const onSubmitForgot = (data) => {
    setLoadingSpin(true);
    const dataReqForgotPass = {
      email: data.userName,
    };
    ForgotPassApi(dataReqForgotPass)
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
            width="30vw"
            widthSm="33vw"
            widthMd="38vw"
            widthLg="40vw"
            widthXl="41vw"
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
        <div className="d-flex justify-content-center align-items-end h-66vh h-76vh-sm h-74vh-md h-74vh-lg h-74vh-xl h-74vh-xxl">
          <div className="w-100 order-2 d-flex justify-content-between flex-column align-items-center h-45vh h-50vh-sm h-50vh-md h-50vh-lg h-53vh-xl h-53vh-xxl ">
            <StatusAlert />
            <div className="w-89pc w-50pc-sm w-33pc-md w-26pc-lg w-21pc-xl w-18pc-xxl">
              {isForgotPass ? (
                <form onSubmit={handleSubmit(onSubmitForgot)}>
                  <div>
                    <div className="mb-3">
                      <input
                        type="text"
                        placeholder="Email"
                        className="form-control ff-lexend fs-22px-xxl fs-20px-xl fs-20px-lg fs-18px-md fs-18px-sm fs-16px"
                        {...register('userName')}
                      />
                      {errors.userName && (
                        <div className="error color-red">
                          {errors.userName.message}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="d-flex justify-content-center">
                    <button
                      type="submit"
                      className="btn btn-primary ff-lexend fs-5"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              ) : (
                <form onSubmit={handleSubmit(onSubmitLogin)}>
                  <div>
                    <div className="mb-3">
                      <input
                        type="text"
                        placeholder="Email"
                        className="form-control ff-lexend fs-22px-xxl fs-20px-xl fs-20px-lg fs-18px-md fs-18px-sm fs-16px"
                        {...register('userName')}
                      />
                      {errors.userName && (
                        <div className="error color-red">
                          {errors.userName.message}
                        </div>
                      )}
                    </div>
                    <div className="mb-3">
                      <input
                        placeholder="Mật khẩu"
                        type="password"
                        className="form-control ff-lexend fs-22px-xxl fs-20px-xl fs-20px-lg fs-18px-md fs-18px-sm fs-16px"
                        {...register('password')}
                      />
                      {errors.password && (
                        <div className="error color-red">
                          {errors.password.message}
                        </div>
                      )}
                    </div>
                  </div>

                  <div
                    className="ff-lexend  cursor-point mb-3 ms-2"
                    onClick={handleClickForgotPass}
                  >
                    Quên mật khẩu
                  </div>

                  <div className="d-flex justify-content-center">
                    <button
                      type="submit"
                      className="btn btn-primary ff-lexend fs-5"
                    >
                      Đăng nhập
                    </button>
                  </div>
                </form>
              )}
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
                    className=" ff-lexend ms-1  fs-5 text-decoration-underline cursor-point"
                  >
                    / Đăng nhập
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </HashLoaderCus>
  );
};

export default MainContent;
