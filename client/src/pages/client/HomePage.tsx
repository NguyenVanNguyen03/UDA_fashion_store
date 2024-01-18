import { useEffect } from "react";
import ProductCarousel from "../../components/client/ProductCarousel ";
import "./HomePage.scss";
import productApi from "../../apis/productApi";

const HomePage = () => {
  useEffect(() => {
    const g = async () => {
      const res = await productApi.getProductById("65a56604d2e19dd6a7095141");
      console.log(res);
    };
    g();
  }, []);
  return (
    <div className="homepage position-relative">
      <ProductCarousel />
    </div>
  );
};

export default HomePage;
