// LoginPage.js
import { useState } from 'react';
import axios from 'axios'; // Import thư viện Axios
import '../../components/client/styles/LoginScreen.scss';
import { GoDash } from "react-icons/go";

// ...

const LoginPage = (): JSX.Element => {
  const [forgotPassword, setForgotPassword] = useState(false);
  const [submitButtonText, setSubmitButtonText] = useState('Đăng nhập');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleForgotPasswordClick = () => {
    setForgotPassword(true);
    setSubmitButtonText('Gửi');
  };

  const handleBackToLoginClick = () => {
    setForgotPassword(false);
    setSubmitButtonText('Đăng nhập');
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/v1/auth/login', {
        email,
        password,
      }, {
        withCredentials: true,
      });
      if (response.data.success) {
        // Xử lý khi đăng nhập thành công
        console.log('Đăng nhập thành công');
      } else {
        // Xử lý khi đăng nhập không thành công
        console.log('Đăng nhập không thành công:', response.data.message);
      }
    } catch (error) {
      console.error('Lỗi khi gửi yêu cầu đăng nhập:', error);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Ngăn chặn form gửi đi để xử lý bằng JavaScript

    // Gọi hàm xử lý đăng nhập
    handleLogin();
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
        <form onSubmit={handleSubmit}> {/* Thêm sự kiện onSubmit để kích hoạt khi nhấn nút submit */}
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
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="row">
                <button type="submit">{submitButtonText}</button>
                <div className="additional-options">
                  <span onClick={handleForgotPasswordClick}>Quên mật khẩu?</span>
                  <p>hoặc <span>Đăng ký</span></p>
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
