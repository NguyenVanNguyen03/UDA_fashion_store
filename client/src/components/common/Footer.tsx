import "./Footer.scss";
import { IoHome } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";
import { RiInstagramLine } from "react-icons/ri";
import { FaTiktok } from "react-icons/fa";

const Footer = (): JSX.Element => {
  return (
    <div className="footer">
      {/* Phần trên */}
      <div className="upper-section">
        <div>
          <h3>KENTA VN</h3>
          <ul>
            <li>Giới thiệu223211322</li>
            <li>Kiểm tra đơn hàng</li>
            <li>Cách chọn size</li>
            <li>Thông tin liên hệ</li>
            <li>Câu hỏi thường gặp</li>
            <li>Hướng dẫn bảo quản</li>
          </ul>
        </div>
        <div>
          <h3>CHÍNH SÁCH</h3>
          <ul>
            <li>Hướng dẫn mua hàng</li>
            <li>Khách hàng thân thiết</li>
            <li>Chính sách đổi hàng</li>
            <li>Chính sách bảo mật</li>
            <li>Đối tác sản xuất</li>
            <li>Bán hàng liên kết (Affiliate)</li>
          </ul>
        </div>
        <div>
          <h3>KẾT NỐI VỚI KENTA</h3>
          <div className="icon">
            <FaFacebook fontSize={30} />
            <AiFillGoogleCircle fontSize={32} />
            <RiInstagramLine fontSize={30} />
            <FaTiktok fontSize={30} />
          </div>
        </div>
        <div>
          <h3>THÔNG TIN CỬA HÀNG</h3>
          <p>
            <IoHome /> 20 Cửu Long, P15, Q.10, HCM
          </p>
          <p>
            {" "}
            <IoHome /> 168 Nguyễn Trọng Tuyển, P8, Phú Nhuận
          </p>
          <p>
            <FaPhoneAlt /> Hotline: (028) 7300 6200
          </p>
          <p>
            <IoIosMail fontSize={20} /> Mail: kentasale@gmail.com
          </p>
        </div>
      </div>
      <div className="separator"></div>
      {/* Phần dưới */}
      <div className="lower-section">
        <div className="copyright">
          <p>Copyright © 2024 KENTA.VN. </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
