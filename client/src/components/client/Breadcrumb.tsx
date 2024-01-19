import { Breadcrumb } from "react-bootstrap";

function BreadcrumbProduct() {
  return (
    <Breadcrumb id="breadcrumb">
      <Breadcrumb.Item className="item-breadcrumb" href="/">
        Trang chủ
      </Breadcrumb.Item>
      <Breadcrumb.Item className="item-breadcrumb" href="/collections">
        Danh mục
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Áo Khoác</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadcrumbProduct;
