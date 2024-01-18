// LoginPage.js
import { useState } from 'react';
import '../../components/client/styles/LoginScreen.scss';
import { GoDash } from "react-icons/go";
import { screenUrl } from '../../constants/screenUrls';
import { Link } from 'react-router-dom';
const LoginPage = (): JSX.Element => {
  const [forgotPassword, setForgotPassword] = useState(false);
  const [submitButtonText, setSubmitButtonText] = useState('Đăng nhập');
  const [email, setEmail] = useState('');



  const handleForgotPasswordClick = () => {
    setForgotPassword(true);
    setSubmitButtonText('Gửi');

  };

  const handleBackToLoginClick = () => {
    setForgotPassword(false);
    setSubmitButtonText('Đăng nhập');

  };


  return (
    <div className="login-screen">
      <div className="left-section">
        <h2> Đăng nhập</h2>
        <div style={{ marginLeft: '15%' }}>
          <GoDash fontSize={60} />
        </div>
      </div>
      <div className="right-section">
        <form >
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}

          />

          {forgotPassword ? (
            <>
              <div className="additional-options">
                <p style={{ color: 'red' }}>Nhập lại email để gửi mã khôi phục mật khẩu.</p>
                <button type="submit">Gửi</button>

                <a onClick={handleBackToLoginClick}> huỷ</a>
              </div>
            </>
          ) : (
            <>
              <label htmlFor="password">Mật khẩu:</label>
              <input type="password" id="password" name="password" />
              <div className="row">
                <button type="submit">{submitButtonText}</button>
                <div className="additional-options">
                  <span onClick={handleForgotPasswordClick}>Quên mật khẩu?</span>
                  <p>hoặc <Link to={screenUrl.REGISTER }>  <span>Đăng ký</span></Link></p>

                </div>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
