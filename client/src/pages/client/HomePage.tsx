// import SearchForm from "../../components/client/SearchForm";
import Footer from "../../components/common/Footer";
import { Header } from "../../components/index";
import ProductCarousel from "../../components/client/ProductCarousel "
import  LoginPage  from "./LoginPage";

const HomePage = (): JSX.Element => {
  return (
    <div className="homepage position-relative">
      <Header />
      {/* <SearchForm /> */}
      <LoginPage/>

      <ProductCarousel/>
      <Footer/>
    </div>
  );
};

export default HomePage;
