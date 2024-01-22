import { deleteProduct } from "../../store/productSlice";
import { useDispatch } from "react-redux";
import { IoCloseSharp } from "react-icons/io5";

type PropsType = {
  product: {
    id: string;
    name: string;
    size: string;
    color: string;
    price: number;
    image: string;
    cartItemNumber: number;
  };
};

const ProductCart = (props: PropsType): JSX.Element => {
  const ditpatch = useDispatch();
  const product = props.product;

  const hanleDelteProduct = (id: string) => {
    ditpatch(deleteProduct(id));
  };

  return (
    <div className="cart__wrapper__product d-flex w-100 mt-2">
      <img src={product.image} alt="" className="cart__product-img" />
      <div className="ms-3 d-flex flex-column justify-content-center">
        <h2 className="cart__product-title">{product.name}</h2>
        <h2 className="cart__product-size">
          {product.size}/{product.color}
        </h2>
        <div className="d-flex align-items-center gap-2">
          <p
            className="d-flex justify-content-center align-items-center"
            style={{
              width: "20px",
              height: "20px",
              backgroundColor: "black",
              color: "white",
            }}
          >
            {product.cartItemNumber}
          </p>
          <p className="cart__product-price m-0 d-block">
            {product.price.toLocaleString()}đ
          </p>
        </div>
      </div>
      <button
        className="ms-2 btn btn-danger rounded-0"
        onClick={() => {
          hanleDelteProduct(product.id);
        }}
      >
        <IoCloseSharp
          className="cart__product-close--btn"
          fontSize={30}
          cursor="pointer"
        />
      </button>
    </div>
  );
};

export default ProductCart;
