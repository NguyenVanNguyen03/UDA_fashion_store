import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const ProductCart = (): JSX.Element => {
  const [isCardVisible, setIsCardVisible] = useState(true);

  return isCardVisible ? (
    <div className="cart__wrapper__product d-flex w-100 mt-2">
      <img
        src="https://th.bing.com/th/id/OIP._skW4WfyOqVE_Qj6v2gYZAHaHn?w=198&h=204&c=7&r=0&o=5&dpr=1.5&pid=1.7"
        alt=""
        className="cart__product-img"
      />
      <div className="ms-3 d-flex flex-column justify-content-center">
        <h2 className="cart__product-title">ÁO KHOÁC DÙ DÂY KÉO XÉO AKD0042</h2>
        <h2 className="cart__product-size">XL/Đen</h2>
        <h2 className="cart__product-price">320,000đ</h2>
      </div>
      <button
        className="ms-2 btn btn-danger rounded-0"
        onClick={() => {
          setIsCardVisible(false);
        }}
      >
        <IoCloseSharp
          className="cart__product-close--btn"
          fontSize={30}
          cursor="pointer"
        />
      </button>
    </div>
  ) : (
    <div></div>
  );
};

export default ProductCart;
