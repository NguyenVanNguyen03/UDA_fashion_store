import { useState } from "react";
import "./styles/ProductList.scss";
import { HiChevronDoubleDown } from "react-icons/hi2";
import BreadcrumbProduct from "./Breadcrumb";
import ReactPaginate from "react-paginate";

const data = [
  {
    id: 1,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar:
      "https://product.hstatic.net/1000096703/product/0_7cebef26c1064010865e6360197183c2_master.jpg",
  },
  {
    id: 2,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar:
      "https://product.hstatic.net/1000096703/product/0_7cebef26c1064010865e6360197183c2_master.jpg",
  },
  {
    id: 3,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    avatar:
      "https://product.hstatic.net/1000096703/product/0_7cebef26c1064010865e6360197183c2_master.jpg",
  },
  {
    id: 4,
    email: "byron.fields@reqres.in",
    first_name: "Byron",
    last_name: "Fields",
    avatar:
      "https://product.hstatic.net/1000096703/product/0_7cebef26c1064010865e6360197183c2_master.jpg",
  },
  {
    id: 5,
    email: "george.edwards@reqres.in",
    first_name: "George",
    last_name: "Edwards",
    avatar:
      "https://product.hstatic.net/1000096703/product/0_7cebef26c1064010865e6360197183c2_master.jpg",
  },
  {
    id: 6,
    email: "rachel.howell@reqres.in",
    first_name: "Rachel",
    last_name: "Howell",
    avatar:
      "https://product.hstatic.net/1000096703/product/0_7cebef26c1064010865e6360197183c2_master.jpg",
  },
  {
    id: 7,
    email: "rachel.howell@reqres.in",
    first_name: "Rachel",
    last_name: "Howell",
    avatar:
      "https://product.hstatic.net/1000096703/product/0_7cebef26c1064010865e6360197183c2_master.jpg",
  },
  {
    id: 8,
    email: "rachel.howell@reqres.in",
    first_name: "Rachel",
    last_name: "Howell",
    avatar:
      "https://product.hstatic.net/1000096703/product/0_7cebef26c1064010865e6360197183c2_master.jpg",
  },
  {
    id: 9,
    email: "rachel.howell@reqres.in",
    first_name: "Rachel",
    last_name: "Howell",
    avatar:
      "https://product.hstatic.net/1000096703/product/0_7cebef26c1064010865e6360197183c2_master.jpg",
  },
  {
    id: 9,
    email: "rachel.howell@reqres.in",
    first_name: "Rachel",
    last_name: "Howell",
    avatar:
      "https://product.hstatic.net/1000096703/product/0_7cebef26c1064010865e6360197183c2_master.jpg",
  },
  {
    id: 9,
    email: "rachel.howell@reqres.in",
    first_name: "Rachel",
    last_name: "Howell",
    avatar:
      "https://product.hstatic.net/1000096703/product/0_7cebef26c1064010865e6360197183c2_master.jpg",
  },
  {
    id: 9,
    email: "rachel.howell@reqres.in",
    first_name: "Rachel",
    last_name: "Howell",
    avatar:
      "https://product.hstatic.net/1000096703/product/0_7cebef26c1064010865e6360197183c2_master.jpg",
  },
  {
    id: 9,
    email: "rachel.howell@reqres.in",
    first_name: "Rachel",
    last_name: "Howell",
    avatar:
      "https://product.hstatic.net/1000096703/product/0_7cebef26c1064010865e6360197183c2_master.jpg",
  },
  {
    id: 9,
    email: "rachel.howell@reqres.in",
    first_name: "Rachel",
    last_name: "Howell",
    avatar:
      "https://product.hstatic.net/1000096703/product/0_7cebef26c1064010865e6360197183c2_master.jpg",
  },
  {
    id: 9,
    email: "rachel.howell@reqres.in",
    first_name: "Rachel",
    last_name: "Howell",
    avatar:
      "https://product.hstatic.net/1000096703/product/0_7cebef26c1064010865e6360197183c2_master.jpg",
  },
  {
    id: 9,
    email: "rachel.howell@reqres.in",
    first_name: "Rachel",
    last_name: "Howell",
    avatar:
      "https://product.hstatic.net/1000096703/product/0_7cebef26c1064010865e6360197183c2_master.jpg",
  },
];

function ProductList() {
  const [showOptions, setShowOptions] = useState(false);
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(0);

  const handleButtonClick = () => {
    setShowOptions(!showOptions);
  };

  const handlePageClick = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
  };

  const pageCount = Math.ceil(data.length / itemsPerPage);

  const displayedData = data.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="container_product">
      <div className="breadcrumb">
        <BreadcrumbProduct />
      </div>
      <div className="menu">
        <h3>Áo Khoác</h3>
        <button onClick={handleButtonClick}>
          Sản phẩm nổi bật <HiChevronDoubleDown />
        </button>
        {showOptions && (
          <div className="options">
            <p>Sản phẩm nổi bật</p>
            <p>Giá: Tăng dần</p>
            <p>Giá: Giảm dần</p>
            <p>Tên: A-Z</p>
            <p>Tên: Z-A</p>
          </div>
        )}
      </div>

      <div className="container-fluid form-product">
        <div className="row row-product">
          {displayedData.map((item) => (
            <div key={item.id} className="col col-product">
              <img
                style={{ width: 295, height: 295 }}
                src={item.avatar}
                alt={`Product ${item.id}`}
              />
              <h6 id="name_product">{`Áo Khoác Dù Trắng Phối Xéo AKD00${item.id}`}</h6>
              <p id="cost_product">350,000₫</p>
            </div>
          ))}
        </div>
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
      />
    </div>
  );
}

export default ProductList;
