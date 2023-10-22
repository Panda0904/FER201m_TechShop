import React from 'react';
import '../css/styleplist.css';

function ProductList() {
  return (
    <main className="container" style={{ paddingTop: '20px', marginBottom: '4%' }}>
      <h4>Danh sách thương hiệu</h4>
      <div className="brand-list d-flex flex-wrap">
        <a className="brand_logo_link" href="">
          <img className="brand_logo" src="images/applelogo.webp" alt="" />
        </a>
        <a className="brand_logo_link" href="">
          <img className="brand_logo" src="images/xiaomilogo.webp" alt="" />
        </a>
        <a className="brand_logo_link" href="">
          <img className="brand_logo" src="images/asuslogo.webp" alt="" />
        </a>
        <a className="brand_logo_link" href="">
          <img className="brand_logo" src="images/oppologo.webp" alt="" />
        </a>
      </div>
      <h4>Sắp xếp theo</h4>
      <div className="sort d-flex flex-wrap">
        <a className="button_sort" href="">Giá tiền cao - thấp</a>
        <a className="button_sort" href="">Giá tiền thấp - cao</a>
        <a className="button_sort" href="">Xem nhiều</a>
      </div>
      <div className="product-list-filter d-flex flex-wrap">
        <ProductItem
          imageSrc="https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/b/4/b48cd136-7366-4d01-8d58-8ee3d5dc93b7_2.jpg"
          name="Samsung Galaxy Fold5 12GB 1TB"
          price="47.990.000₫"
          originalPrice="51.990.000₫"
          percentOff="8%"
          promoText="Trả góp 12 tháng 0 lãi, 0đ trả trước qua Samsung Finance+ và 3 km khác"
        />
        {/* Add more ProductItem components for other products */}
      </div>
    </main>
  );
}
function Redirect() {
    
}
const ProductItem = ({ imageSrc, name, price, originalPrice, percentOff, promoText }) => {
  return (
    <div className="product-info-container product-item col-12 col-sm-6 col-md-4 col-xl-3">
      <div className="product-info">
        <a href="../User/productDetail.html" className="product__link button__link">
          <div className="product__image">
            <img
              src={imageSrc}
              width="358"
              height="358"
              alt={name}
              loading="lazy"
              className="product__img"
            />
          </div>
          <div className="product__name">
            <h3 className="product-name">{name}</h3>
          </div>
          <div className="box-info__box-price">
            <p className="product__price--show">{price}</p>
            <p className="product__price--through">{originalPrice}</p>
            <div className="product__price--percent">
              <p className="product__price--percent-detail">{`Giảm ${percentOff}`}</p>
            </div>
          </div>
        </a>
        <div className="product__promotions">
          <div>
            <div className="promotion">
              <p className="coupon-price">{promoText}</p>
            </div>
          </div>
        </div>
        <div className="product__promotions" style={{ display: 'none' }}>
          <div className="promotion">
            <p className="gift-cont"></p>
          </div>
        </div>
      </div>
      <button className="btn-buy-add" onClick={() => Redirect()}>
        Mua ngay
      </button>
      <button className="btn-buy-add">Giỏ hàng</button>
    </div>
  );
};

export default ProductList;
