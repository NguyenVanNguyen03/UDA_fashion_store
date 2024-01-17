// ProductCarousel.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductCarousel = () => {
  const productImages = [
    'https://cf.shopee.vn/file/9b7a083de8c6fa6c280a267f69c9fdc4',
    'https://cf.shopee.vn/file/9b7a083de8c6fa6c280a267f69c9fdc4',
    'https://cf.shopee.vn/file/9b7a083de8c6fa6c280a267f69c9fdc4',
    'https://cf.shopee.vn/file/9b7a083de8c6fa6c280a267f69c9fdc4',
    'https://cf.shopee.vn/file/9b7a083de8c6fa6c280a267f69c9fdc4',
    'https://cf.shopee.vn/file/9b7a083de8c6fa6c280a267f69c9fdc4',


  ];

  return (
    <div className="container-fluid">
      <div className="row">
        {productImages.map((image, index) => (
          <div key={index} className="col">
            <img src={image} alt={`Product ${index + 1}`} className="img-fluid" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
