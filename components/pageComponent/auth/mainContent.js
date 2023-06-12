import React, { useState } from 'react';

const MainContent = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý logic đăng nhập ở đây
    console.log('UserName:', userName);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">
            UserName
          </label>
          <input
            type="text"
            className="form-control"
            id="userName"
            value={userName}
            onChange={handleUserNameChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
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
        <button type="submit" className="btn btn-primary">
          Đăng nhập
        </button>
      </form>
    </div>
  );
};

export default MainContent;
