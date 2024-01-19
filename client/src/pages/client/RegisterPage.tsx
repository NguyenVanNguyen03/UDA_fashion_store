import { useState } from 'react';
import '../../components/client/styles/RegisterPage.scss';
import { GoArrowLeft, GoDash } from "react-icons/go";
import { screenUrl } from '../../constants/screenUrls';
import { Link } from 'react-router-dom';

const RegisterPage = (): JSX.Element => {
  const [submitButtonTexts, ] = useState('Đăng ký');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState(''); // You might use radio buttons for gender
  const [birthdate, setBirthdate] = useState('');
  const [password, setPassword] = useState('');


  return (
    <div className="register-screen">
      <div className="left-section">
        <h2> Đăng ký</h2>
        <div style={{ marginLeft: '15%' }}>
          <GoDash fontSize={60} />
        </div>
      </div>
      <div className="right-section">
        <form >
          <label htmlFor="firstName">Họ:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <label htmlFor="lastName">Tên:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

<div className="gender-options">
  <input
  className='male'
    type="radio"
    id="male"
    name="gender"
    value="male"
    checked={gender === "male"}
    onChange={(e) => setGender(e.target.value)}
  />
  <label htmlFor="male">Nam</label>

  <input
  className='female'
    type="radio"
    id="female"
    name="gender"
    value="female"
    checked={gender === "female"}
    onChange={(e) => setGender(e.target.value)}
  />
  <label htmlFor="female">Nữ</label>
</div>
<label htmlFor="birthdate">Số điện thoại:</label>
          <input
            type="text"
            id="birthdate"
            name="birthdate"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          />
             <label htmlFor="birthdate">Ngày sinh:</label>
          <input
            type="text"
            id="birthdate"
            name="birthdate"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          />
          <label htmlFor="birthdate">Địa chỉ:</label>
          <input
            type="text"
            id="birthdate"
            name="birthdate"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Mật khẩu:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="register-back">
            <button type="submit">{submitButtonTexts}</button>
            <div className="additional-options">
              <><Link to={screenUrl.LOGIN}> </Link></  >
              <div className='icon-back' style={{ }}>
                <Link to={screenUrl.HOME }>  <GoArrowLeft  fontSize={25} />
              <span className='back-home'>
                Quay lại trang chủ</span> </Link>
             
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
