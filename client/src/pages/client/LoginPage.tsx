import '../../components/client/styles/LoginScreen.scss'
const LoginPage = (): JSX.Element => {
  return ( 
  <div className="login-screen">
  <div className="left-section">
    <h2>Đăng nhập</h2>
  </div>
  <div className="right-section">
    <form>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" />

      <label htmlFor="password">Mật khẩu:</label>
      <input type="password" id="password" name="password" />
      <div className='row'>
        <button type="submit">Đăng nhập</button>
       <div className="additional-options">
       <span>Quên mật khẩu?</span>
        <p>Hoặc <span>Đăng ký</span></p>
       </div>
        </div>
      
    </form>
  </div>
</div>);
};

export default LoginPage;
