import { Breadcrumb } from "react-bootstrap";

interface BreadcrumbProductProps {
  categoryName: string | undefined;
}

function BreadcrumbProduct({ categoryName }: BreadcrumbProductProps) {
  return (
    <Breadcrumb id="breadcrumb">
      <Breadcrumb.Item className="item-breadcrumb" href="/">
        Trang chủ
      </Breadcrumb.Item>
      <Breadcrumb.Item className="item-breadcrumb" href="/collections">
        Danh mục
      </Breadcrumb.Item>
      <Breadcrumb.Item active>{categoryName}</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadcrumbProduct;
