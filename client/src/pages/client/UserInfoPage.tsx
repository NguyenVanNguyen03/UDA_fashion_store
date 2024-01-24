import { useState, useEffect } from 'react';
import userApi from '../../apis/userApi';
import './UserInfoPage.scss';
import { useNavigate } from 'react-router-dom';

interface UserInfo {
  firstName: string;
  lastName: string;
  gender: string;
  dob: Date;
  email: string;
  phoneNumber: string;
  address: string;
}

const UserInfoPage = (): JSX.Element => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [userNotFound, setUserNotFound] = useState<boolean>(false);

  useEffect(() => {
    const userId = localStorage.getItem('userId');

    if (!userId) {
      alert('Xin quý khách vui lòng đăng nhập !');
      navigate('/login');
      console.error('No userId found in Local Storage');
      return;
    }

    userApi
      .getUserById(userId)
      .then((response) => {
        // console.log('User data from API:', response.user);
        setUserInfo(response.user);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          // Handle 404 error
          setUserNotFound(true);
        } else {
          console.error('Error fetching user information:', error);
        }
      });
  }, [navigate]);

  const formatDate = (date: Date | string): string => {
    if (typeof date === 'string') {
      date = new Date(date);
    }
    if (Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date.getTime())) {
      return date.toLocaleDateString();
    } else {
      return 'Invalid Date';
    }
  };

  return (
    <div className="user-info-container">
      <h1>Hồ Sơ Của Tôi</h1>
      {userNotFound ? (
        <p>User not found</p>
      ) : userInfo !== null ? (
        <div className="user-details">
          <p>First Name: {userInfo.firstName}</p>
          <p>Last Name: {userInfo.lastName}</p>
          <p>Gender: {userInfo.gender}</p>
          <p>Date of Birth: {formatDate(userInfo.dob)}</p>
          <p>Email: {userInfo.email}</p>
          <p>Phone Number: {userInfo.phoneNumber}</p>
          <p>Address: {userInfo.address}</p>
        </div>
      ) : (
        <p>Loading user information...</p>
      )}
    </div>
  );
};

export default UserInfoPage;
