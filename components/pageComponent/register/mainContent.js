import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import StatusAlert, { StatusAlertService } from 'react-status-alert';
import { CreateAccountApi } from '../../../api/authAPI';
import { UrlPath } from '../../../type/urlPath';
import HashLoaderCus from '../spins/hashLoader';

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
  return (
    <HashLoaderCus loadingSpin={loadingSpin}>
      <div className="d-flex justify-content-center align-items-end h-80vh h-92vh-sm h-94vh-md h-96vh-lg h-96vh-xl h-96vh-xxl">
        <StatusAlert />
        <div className="w-100 order-2 d-flex justify-content-between flex-column align-items-center h-67vh h-70vh-sm h-70vh-md h-70vh-lg h-70vh-xl h-70vh-xxl ">
          <div className="w-89pc w-40pc-sm w-24pc-md w-22pc-lg w-20pc-xl w-16pc-xxl">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="UserName"
                  className="form-control"
                  id="userName"
                  value={userName}
                  onChange={handleUserNameChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  placeholder="Confirm Password"
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
                  placeholder="Name"
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
                  className="form-check-label"
                  htmlFor="isSendEmailWhenHaveNewPost"
                >
                  Gửi thông báo khi có bài viết mới
                </label>
              </div>
              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="order-1">
            <Link className="ff-lexend" href={UrlPath.auth.url}>
              Đăng nhập
            </Link>
          </div>
        </div>
      </div>
    </HashLoaderCus>
  );
};

export default MainContent;
