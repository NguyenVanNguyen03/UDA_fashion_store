import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import ProductCarousel from "../../components/client/ProductCarousel ";
import productApi from "../../apis/productApi";
import "./HomePage.scss";
import "swiper/css";
import "swiper/css/pagination";

const listBanner = [
  {
    id: 1,
    img: "https://file.hstatic.net/1000096703/file/new_54bdde61828c48a396df94faa792c673.jpg",
    url: "all",
  },
  {
    id: 2,
    img: "https://file.hstatic.net/1000096703/file/somicotton_0aba4b4cda614572b542dfb634dcaa17.jpg",
    url: "so-mi",
  },
  {
    id: 3,
    img: "https://file.hstatic.net/1000096703/file/somitn_51b5a0a20ced4f24a260bc5076eef55a.jpg",
    url: "so-mi-tay-ngan",
  },
  {
    id: 4,
    img: "https://file.hstatic.net/1000096703/file/akdu_dk_xeo_e87ad07a3ed44183bfdff88009fe292f.jpg",
    url: "ao-khoac",
  },
];

const categories = [
  {
    title: "ÁO KHOÁC",
    categoryId: 1,
  },
  {
    title: "SƠ MI",
    categoryId: 2,
  },
  {
    title: "QUẦN DÀI",
    categoryId: 3,
  },
  {
    title: "QUẦN SHORT",
    categoryId: 4,
  },
];

const products = [
  {
    category: "Áo khoác",
    products: [
      {
        id: 1,
        price: 300000,
        title: "Quần Tây Nam Slimfit Đen QTA0031",
        img: "https://th.bing.com/th/id/R.2f32c53929c5766a6ada86910e51d4fe?rik=gQW314uPquvr6A&riu=http%3a%2f%2fwww.logosoftwear.com%2fimages_products2%2f26321%2f26321.zoom.jpg&ehk=wg%2f19DvGJ0C%2bNGQ9Ypqi8tfKh%2bzs9wHTgbvhIdXUqj4%3d&risl=&pid=ImgRaw&r=0",
      },
      {
        id: 2,
        price: 300000,
        title: "Quần Tây Nam Slimfit Đen QTA0031",
        img: "https://th.bing.com/th/id/R.2f32c53929c5766a6ada86910e51d4fe?rik=gQW314uPquvr6A&riu=http%3a%2f%2fwww.logosoftwear.com%2fimages_products2%2f26321%2f26321.zoom.jpg&ehk=wg%2f19DvGJ0C%2bNGQ9Ypqi8tfKh%2bzs9wHTgbvhIdXUqj4%3d&risl=&pid=ImgRaw&r=0",
      },
      {
        id: 3,
        price: 300000,
        title: "Quần Tây Nam Slimfit Đen QTA0031",
        img: "https://th.bing.com/th/id/R.2f32c53929c5766a6ada86910e51d4fe?rik=gQW314uPquvr6A&riu=http%3a%2f%2fwww.logosoftwear.com%2fimages_products2%2f26321%2f26321.zoom.jpg&ehk=wg%2f19DvGJ0C%2bNGQ9Ypqi8tfKh%2bzs9wHTgbvhIdXUqj4%3d&risl=&pid=ImgRaw&r=0",
      },
      {
        id: 4,
        price: 300000,
        title: "Quần Tây Nam Slimfit Đen QTA0031",
        img: "https://th.bing.com/th/id/R.2f32c53929c5766a6ada86910e51d4fe?rik=gQW314uPquvr6A&riu=http%3a%2f%2fwww.logosoftwear.com%2fimages_products2%2f26321%2f26321.zoom.jpg&ehk=wg%2f19DvGJ0C%2bNGQ9Ypqi8tfKh%2bzs9wHTgbvhIdXUqj4%3d&risl=&pid=ImgRaw&r=0",
      },
      {
        id: 5,
        price: 300000,
        title: "Quần Tây Nam Slimfit Đen QTA0031",
        img: "https://th.bing.com/th/id/R.2f32c53929c5766a6ada86910e51d4fe?rik=gQW314uPquvr6A&riu=http%3a%2f%2fwww.logosoftwear.com%2fimages_products2%2f26321%2f26321.zoom.jpg&ehk=wg%2f19DvGJ0C%2bNGQ9Ypqi8tfKh%2bzs9wHTgbvhIdXUqj4%3d&risl=&pid=ImgRaw&r=0",
      },
    ],
  },
];

const HomePage = () => {
  const [isActive, setIsActive] = useState(0);
  const [categoryName, setCategoryName] = useState("Áo khoác");

  useEffect(() => {
    const g = async () => {
      const res = await productApi.getProductById("65a56604d2e19dd6a7095141");
      console.log(res);
    };
    g();
  }, []);

  const handleClickCategory = (index: number) => {
    setIsActive(index);
  };

  return (
    <div className="homepage position-relative">
      <div className="slider__wrapper">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {listBanner.map((banner, index) => {
            return (
              <SwiperSlide className="swiper">
                <img key={index} src={banner.img} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="d-flex flex-column align-items-center mt-5">
        <p className="title__product-new text-uppercase">Sản phẩm mới</p>
        <div className="d-flex nav-category gap-4 ">
          {categories.map((category, index) => {
            return (
              <li
                key={index}
                className={isActive == index ? "active" : ""}
                onClick={() => {
                  handleClickCategory(index);
                }}
              >
                {category.title}
              </li>
            );
          })}
        </div>
      </div>
      <div className="mt-5 category__card-product d-flex flex-column align-items-center">
        <Swiper
          watchSlidesProgress={true}
          slidesPerView={4}
          className="mySwiper"
        >
          {products.map((el) => {
            if (el.category == categoryName) {
              return el.products.map((product) => {
                return (
                  <SwiperSlide>
                    <div className="d-flex flex-column align-items-center category__card me-4">
                      <div className="w-100 d-flex justify-content-center">
                        <img
                          className="category__card-img"
                          src={product.img}
                          alt=""
                        />
                      </div>
                      <Link to={"/"}>{product.title}</Link>
                      <p className="product-price">{product.price}đ</p>
                    </div>
                  </SwiperSlide>
                );
              });
            }
          })}
        </Swiper>
        <button className="btn my-3 btn__load-data px-4 py-2">Xem thêm</button>
      </div>
      <div className="d-flex gap-2 mb-5">
        <div className="product-intro position-relative">
          <img
            src="https://file.hstatic.net/1000096703/file/13_f161048fd69e41c096161641f468d663.jpg"
            alt=""
          />
          <div className="card-overlay position-absolute start-0 left-0 bottom-0 end-0"></div>
        </div>
        <div className="product-intro position-relative">
          <img
            src="https://file.hstatic.net/1000096703/file/9_c25efb770ca748868ff408bea4c4c4c5.jpg"
            alt=""
          />
          <div className="card-overlay position-absolute start-0 left-0 bottom-0 end-0"></div>
        </div>
        <div className="product-intro position-relative">
          <img
            src="https://file.hstatic.net/1000096703/file/11_7441d71a347d4bf29645e98a4d1826c8.jpg"
            alt=""
          />
          <div className="card-overlay position-absolute start-0 left-0 bottom-0 end-0"></div>
        </div>
      </div>
      <ProductCarousel />
    </div>
  );
};

export default HomePage;
