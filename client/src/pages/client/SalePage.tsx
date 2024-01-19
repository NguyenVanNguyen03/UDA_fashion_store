import { Link } from "react-router-dom";
import "./SalePage.scss";

const productSale = [
  {
    id: 1,
    name: "Aos khoacs Hoodie",
    percentDiscount: 33,
    price: 300000,
    img: "https://product.hstatic.net/1000096703/product/1_04a9710f7f964d818442e422ef4b351a_grande.jpg",
  },
  {
    id: 2,
    name: "Quân đùi",
    percentDiscount: 33,
    price: 300000,
    img: "https://product.hstatic.net/1000096703/product/1_04a9710f7f964d818442e422ef4b351a_grande.jpg",
  },
  {
    id: 3,
    name: "Aos khoacs Hoodie",
    percentDiscount: 33,
    price: 300000,
    img: "https://product.hstatic.net/1000096703/product/1_04a9710f7f964d818442e422ef4b351a_grande.jpg",
  },
  {
    id: 4,
    name: "Aos khoacs Hoodie",
    percentDiscount: 33,
    price: 300000,
    img: "https://product.hstatic.net/1000096703/product/1_04a9710f7f964d818442e422ef4b351a_grande.jpg",
  },
  {
    id: 5,
    name: "Aos khoacs Hoodie",
    percentDiscount: 33,
    price: 300000,
    img: "https://product.hstatic.net/1000096703/product/1_04a9710f7f964d818442e422ef4b351a_grande.jpg",
  },
];

const SalePage = () => {
  return (
    <div className="p-5  sale-page ">
      <div className="d-flex justify-content-between mb-3 ">
        <p
          style={{
            fontFamily: "inherit",
            fontSize: "30px",
            fontWeight: "600",
          }}
        >
          SALE
        </p>
        <select
          style={{
            cursor: "pointer",
            border: "none",
            borderBottom: "2px solid black",
            outline: "none",
          }}
        >
          <option value="option1">Sản phẩm nỗi bật</option>
          <option value="option2">Giá: Tăng dần </option>
          <option value="option3">Giá: giảm dần</option>
          <option value="option4">Tên: A-Z</option>
          <option value="option5">Tên: Z-A</option>
        </select>
      </div>
      <div className="d-flex flex-wrap justify-content-between ">
        {productSale.map((product, index) => {
          return (
            <div
              key={index}
              style={{
                width: "24%",
                // background: "red",
              }}
            >
              <div
                className=" w-100 position-relative rounded-2 sale-page__wrapper-img"
                style={{
                  height: "300px",
                }}
              >
                <Link to={"/"}>
                  <img
                    className="w-100 h-100 "
                    style={{
                      objectFit: "cover",
                    }}
                    src="https://product.hstatic.net/1000096703/product/1_04a9710f7f964d818442e422ef4b351a_grande.jpg"
                    alt=""
                    title={product.name}
                  />
                </Link>
                <div
                  className="position-absolute d-flex justify-content-center align-items-center"
                  style={{
                    top: "3px",
                    left: "20px",
                    width: "40px",
                    height: "40px",
                    backgroundImage:
                      "url(https://theme.hstatic.net/1000096703/1000836887/14/bg-saleoff.png?v=268)",
                    backgroundSize: "cover",
                  }}
                >
                  <p
                    style={{
                      color: "white",
                      fontWeight: "100px",
                    }}
                  >
                    20%
                  </p>
                </div>
              </div>
              <div className="d-flex flex-column align-items-center p-3 ">
                <Link to={"/"} className="cursor-pointer text-pro">
                  {product.name}{" "}
                </Link>
                <div className="d-flex ">
                  <p
                    style={{
                      color: "red",
                      fontWeight: "bold",
                    }}
                  >
                    {product.percentDiscount == 0
                      ? product.price * 1
                      : (product.price * product.percentDiscount) / 100}
                    đ
                  </p>
                  <div
                    style={{
                      width: "10px",
                    }}
                  ></div>
                  <p
                    style={{
                      textDecoration: "line-through",
                      color: "#939393",
                    }}
                  >
                    295.000 đ
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SalePage;
