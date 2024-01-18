// LoginPage.js
import { useState } from 'react';
import axios from 'axios'; // Import thư viện Axios
import '../../components/client/styles/LoginScreen.scss';
<<<<<<< HEAD
import { GoDash } from "react-icons/go";

// ...

=======
import { GoDash } from 'react-icons/go';
import AuthApi from '../../apis/authApi'; // Thay đổi đường dẫn tới AuthApi
import { ApiResponse } from '../../apis/ApiResponse';
>>>>>>> main
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

<<<<<<< HEAD
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
=======
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (forgotPassword) {
      // Xử lý gửi mã khôi phục mật khẩu
      // ...
    } else {
      try {
        const response: ApiResponse = await AuthApi.login(email, password);
        if (response.userId && response.token) {
          alert('Đăng nhập thành công ');
          localStorage.setItem('userId', response.userId);
          localStorage.setItem('token', response.token);
 
          
        } else {
          alert( response.message );
          console.log( response.message);
        }
      } catch (error: unknown) {
        if (typeof error === 'object' && error !== null) {
          // Nếu error là một object không phải là null hoặc undefined
          const typedError = error as { response?: { status?: number } };
          if (typedError.response && typedError.response.status === 401) {
            // Lỗi 401 - Unauthorized (mật khẩu không đúng)
            alert('Đăng nhập không thành công: Mật khẩu không đúng');
            // Hiển thị thông báo lỗi cho người dùng
            // Ví dụ: setState để hiển thị thông báo lỗi trên giao diện
            // Ví dụ: this.setState({ errorMessage: 'Mật khẩu không đúng' });
          } else {
            console.error('Lỗi khi gửi yêu cầu đăng nhập:', error);
          }
        } else {
          console.error('Lỗi khi gửi yêu cầu đăng nhập:', error);
        }
      }
    }
  };
>>>>>>> main

  return (
    <div className="login-screen">
      <div className="left-section">
        <h2> Đăng nhập</h2>
        <div style={{ marginLeft: '15%' }}>
          <GoDash fontSize={60} />
        </div>
      </div>
      <div className="right-section">
<<<<<<< HEAD
        <form onSubmit={handleSubmit}> {/* Thêm sự kiện onSubmit để kích hoạt khi nhấn nút submit */}
=======
        <form onSubmit={handleSubmit}>
>>>>>>> main
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
