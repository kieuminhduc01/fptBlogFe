import { ChangePassApi } from '@/api/authAPI';
import { getCookie } from '@/cookie/cookie';
import { UrlPath } from '@/type/urlPath';
import { yupResolver } from '@hookform/resolvers/yup';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
import { HashLoader } from 'react-spinners';
import { StatusAlertService } from 'react-status-alert';
import * as Yup from 'yup';
const validationSchema = Yup.object().shape({
  currentPassword: Yup.string()
    .required('Vui lòng nhập mật khẩu cũ')
    .min(5, 'Mật khẩu phải có ít nhất 5 kí tự'),
  newPassword: Yup.string()
    .required('Vui lòng nhập mật khẩu mới')
    .min(5, 'Mật khẩu phải có ít nhất 5 kí tự')
    .notOneOf(
      [Yup.ref('currentPassword')],
      'Mật khẩu mới phải khác mật khẩu cũ',
    ),
});

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
const DropDown = ({ isClickAccount }) => {
  const router = useRouter();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (data) => {
    setIsLoading(true);
    const dataReq = {
      email: getCookie('email'),
      OldPassword: data.currentPassword,
      newPassword: data.newPassword,
    };
    ChangePassApi(dataReq)
      .then(() => {
        StatusAlertService.showSuccess('Thay đổi thành công');
      })
      .catch((err) => {
        StatusAlertService.showError(err.response.data.Detail);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const handleClickLogOut = () => {
    Cookies.remove('jwt_token');
    Cookies.remove('accountId');
    Cookies.remove('accountName');
    Cookies.remove('email');
    router.reload();
  };
  const handleClickLogin = () => {
    router.push(UrlPath.auth.url);
  };
  return (
    <>
      {isClickAccount && (
        <div className=" ml--114px-global mt-md-2 mt-1 bg-f8f7f7 z-index-fixed position-absolute p-4 br-10px-xxl br-10px-xl br-8px-lg br-8px-md br-8px-sm br-6px">
          <div className="d-flex justify-content-center">
            {getCookie('jwt_token') === undefined ? (
              <button
                onClick={handleClickLogin}
                className="rounded white-space-noWrap ff-lexend float-start fs-22px-xxl fs-20px-xl fs-20px-lg fs-16px-md fs-16px-sm fs-16px bg-body border-0 color-960C0C"
              >
                Đăng nhập
              </button>
            ) : (
              <div className="z-index-modal">
                <button
                  className=" rounded white-space-noWrap ff-lexend d-block fs-22px-xxl fs-20px-xl fs-20px-lg fs-16px-md fs-16px-sm fs-16px bg-body border-0 color-960C0C"
                  onClick={openModal}
                >
                  Đổi mật khẩu
                </button>
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={closeModal}
                  style={customStyles}
                  contentLabel="Example Modal"
                  id="Modal"
                >
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                      <input
                        type="text"
                        placeholder="Mật khẩu hiện tại"
                        className="form-control"
                        {...register('currentPassword')}
                      />
                      {errors.currentPassword && (
                        <div className="error color-red">
                          {errors.currentPassword.message}
                        </div>
                      )}
                    </div>
                    <div className="mb-3">
                      <input
                        type="password"
                        placeholder="Mật khẩu mới"
                        className="form-control"
                        {...register('newPassword')}
                      />
                      {errors.newPassword && (
                        <div className="error color-red">
                          {errors.newPassword.message}
                        </div>
                      )}
                    </div>
                    <div className="d-flex justify-content-center">
                      <HashLoader
                        color="#36d7b7"
                        loading={isLoading}
                        speedMultiplier={1}
                      />
                    </div>
                    <div className="d-flex justify-content-center mt-1">
                      <button type="submit" className="btn btn-primary">
                        Thay đổi
                      </button>
                    </div>
                  </form>
                </Modal>
                <button
                  onClick={handleClickLogOut}
                  className="rounded white-space-noWrap ff-lexend float-start fs-22px-xxl fs-20px-xl fs-20px-lg fs-16px-md fs-16px-sm fs-16px bg-body mt-2 border-0 color-960C0C"
                >
                  Đăng xuất
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default DropDown;
