import { useState } from 'react';
import '../css/stylepdetail.css'; // Import your CSS file

function ProductDetail() {

    const [selectedVariantColor, setSelectedVariantColor] = useState([]);

    const [selectedVariant, setSelectedVariant] = useState([]);

    const handleVariantClick1 = (index) => {
        setSelectedVariantColor(index);
    };

    const handleVariantClick2 = (index) => {
        setSelectedVariant(index);
    };
    return (
        <div>
            <main className="container" style={{ marginTop: '50px', marginBottom: '50px' }}>
                <div className="row d-flex flex-wrap">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="product-inner">
                            <div className="d-flex flex-wrap">
                                <div className="col-lg-5 col-md-12 col-12 product-gallery" style={{ textAlign: '-webkit-center' }}>
                                    <div className="product-gallery--inner" style={{ border: 'solid 1px', width: '60%' }}>
                                        <img style={{ width: '100%' }}
                                            src="https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/b/4/b48cd136-7366-4d01-8d58-8ee3d5dc93b7_2.jpg"
                                            alt="" srcset="" />
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-12 col-12 product-info">
                                    <div className="product-name">
                                        <h1>Samsung Galaxy Fold5 12GB 1TB</h1>
                                    </div>
                                    <div className="product-rating">
                                        <span className="number">5.0</span>
                                        <span className="icon">
                                            <i className="bi bi-star-fill" style={{ color: '#eaee14' }}></i>
                                        </span>
                                        <span className="number-rate">433 lượt đánh giá</span>
                                    </div>
                                    <b>Lựa chọn màu</b>
                                    <div className="box-product-variants">
                                        <ul className="list-variants">
                                            <li className={`item-variant false ${selectedVariantColor === 0 ? 'red-border' : ''}`} onClick={() => handleVariantClick1(0)}>
                                                <a title="Kem" className="button__change-color d-flex " >
                                                    <img src="images/Galaxy-Fold-5/galaxy-z-fold-5-kem-1_1.webp" width="50" height="50" alt="Samsung Galaxy Z Fold5 12GB 256GB-Kem" loading="lazy" />
                                                    <div>
                                                        <strong className="item-variant-name">Kem</strong>
                                                    </div>
                                                </a>
                                            </li>

                                            <li className={`item-variant false ${selectedVariantColor === 1 ? 'red-border' : ''}`} onClick={() => handleVariantClick1(1)}>
                                                <a title="Kem" className="button__change-color d-flex " >
                                                    <img src="images/Galaxy-Fold-5/galaxy-z-fold-5-kem-1_1.webp" width="50" height="50" alt="Samsung Galaxy Z Fold5 12GB 256GB-Kem" loading="lazy" />
                                                    <div>
                                                        <strong className="item-variant-name">Kem</strong>
                                                    </div>
                                                </a>
                                            </li>

                                            <li className={`item-variant false ${selectedVariantColor === 2 ? 'red-border' : ''}`} onClick={() => handleVariantClick1(2)}>
                                                <a title="Kem" className="button__change-color d-flex " >
                                                    <img src="images/Galaxy-Fold-5/galaxy-z-fold-5-kem-1_1.webp" width="50" height="50" alt="Samsung Galaxy Z Fold5 12GB 256GB-Kem" loading="lazy" />
                                                    <div>
                                                        <strong className="item-variant-name">Kem</strong>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    <b>Lựa chọn dung lượng</b>
                                    <div className="box-product-variants">
                                        <ul className="list-variants">
                                            <li className={`item-variant false ${selectedVariant === 0 ? 'red-border' : ''}`} onClick={() => handleVariantClick2(0)}>
                                                <a title="Kem" className="button__change-color d-flex " >

                                                    <div className="d-flex" style={{ flexDirection: 'column' }}>
                                                        <div> <strong className="item-variant-name">8GB-256GB</strong></div>

                                                        <span>
                                                            33.490.000₫
                                                        </span>
                                                    </div>
                                                </a>
                                            </li>

                                            <li className={`item-variant false ${selectedVariant === 1 ? 'red-border' : ''}`} onClick={() => handleVariantClick2(1)}>
                                                <a title="Kem" className="button__change-color d-flex ">

                                                    <div className="d-flex" style={{ flexDirection: 'column' }}>
                                                        <div><strong className="item-variant-name">12GB-512GB</strong></div>
                                                        <span>
                                                            33.490.000₫
                                                        </span>
                                                    </div>
                                                </a>
                                            </li>

                                            <li className={`item-variant false ${selectedVariant === 2 ? 'red-border' : ''}`} onClick={() => handleVariantClick2(2)}>
                                                <a title="Kem" className="button__change-color d-flex " >

                                                    <div className="d-flex" style={{ flexDirection: 'column' }}>
                                                        <div><strong className="item-variant-name">12GB-1TB</strong></div>
                                                        <span>
                                                            33.490.000₫
                                                        </span>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="btn-container d-flex">
                                        <button className='btn-buy-add'>Mua Ngay</button>
                                        <button className='btn-buy-add'>Thêm vào giỏ hàng</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="techInfo">
                            <h2 className="title d-6 mb-3">Thông số kỹ thuật</h2>
                        </div>
                        <div className="cps-block-technicalInfo mb-3 ml-3 px-3 pt-3 pb-1">
                            <ul className="technical-content">
                                <li className="technical-content-item d-flex   p-2">
                                    <div>Kích thước màn hình</div>
                                    <div>6.8 inches</div>
                                </li>
                                <li className="technical-content-item d-flex   p-2">
                                    <div>Công nghệ màn hình</div>
                                    <div>Dynamic AMOLED 2X</div>
                                </li>
                                <li className="technical-content-item d-flex   p-2">
                                    <div>Camera sau</div>
                                    <div>108 MP, f/1.8 góc rộng<br />10 MP, f/4.9<br />10 MP, f/2.4<br />12 MP, f/2.2 góc siêu rộng </div>
                                </li>
                                <li className="technical-content-item d-flex   p-2">
                                    <div>Camera trước</div>
                                    <div>40 MP, f/2.2</div>
                                </li>
                                <li className="technical-content-item d-flex   p-2">
                                    <div>Chipset</div>
                                    <div> Snapdragon 8 Gen 1 (4 nm)</div>
                                </li>
                                <li className="technical-content-item d-flex   p-2">
                                    <div>Dung lượng RAM</div>
                                    <div>12 GB</div>
                                </li>
                                <li className="technical-content-item d-flex   p-2">
                                    <div>Bộ nhớ trong</div>
                                    <div>256 GB</div>
                                </li>
                                <li className="technical-content-item d-flex   p-2">
                                    <div>Pin</div>
                                    <div> 5000 mAh</div>
                                </li>
                                <li className="technical-content-item d-flex   p-2">
                                    <div>Thẻ SIM</div>
                                    <div>2 Nano-SIM + eSIM</div>
                                </li>
                                <li className="technical-content-item d-flex   p-2">
                                    <div>Hệ điều hành</div>
                                    <div>Android 12, One UI 4.1</div>
                                </li>
                                <li className="technical-content-item d-flex   p-2">
                                    <div>Độ phân giải màn hình</div>
                                    <div>1440 x 3088 pixels (QHD+)</div>
                                </li>
                                <li className="technical-content-item d-flex   p-2">
                                    <div>Tính năng màn hình</div>
                                    <div>Tần số quét 120Hz<br />Công nghệ HDR10+, 1750 nits</div>
                                </li>
                                <li className="technical-content-item d-flex   p-2">
                                    <div>Tương thích</div>
                                    <div>Bút Spen</div>
                                </li>
                            </ul>
                        </div>
                        <div className='boxReview'>
                            <div className="box-review-filter">
                                <div class="title">Lọc theo</div>
                            </div>
                            <div class="filter-container d-flex">
                                <div class="filter-item">
                                    Tất cả
                                </div>
                                <div class="filter-item">
                                    Có Hình Ảnh
                                </div>
                            </div>

                            <div class="filter-container d-flex" style={{ marginTop: '10px' }}>
                                <div class="filter-item star">
                                    <div>5</div>
                                    <div className="bi bi-star-fill" style={{ color: '#eaee14' }}></div>
                                </div>
                                <div class="filter-item star">
                                    <div>4</div>
                                    <div className="bi bi-star-fill" style={{ color: '#eaee14' }}></div>
                                </div>
                                <div class="filter-item star">
                                    <div>3</div>
                                    <div className="bi bi-star-fill" style={{ color: '#eaee14' }}></div>
                                </div>
                                <div class="filter-item star">
                                    <div>2</div>
                                    <div className="bi bi-star-fill" style={{ color: '#eaee14' }}></div>
                                </div>
                                <div class="filter-item star">
                                    <div>1</div>
                                    <div className="bi bi-star-fill" style={{ color: '#eaee14' }}></div>
                                </div>
                            </div>
                            <div className="boxReview-comment">
                                <div className="comment-container">
                                    <div className="boxReview-comment-item-title d-flex">
                                        <img src='images/Chiaki_Sato.png'></img>
                                        <div className="user-name" style={{ fontWeight: '500', margin: '0px 3px 0px 3px' }}>
                                            Nguyễn Anh Tuấn
                                        </div>
                                        <div className="rating-comment">
                                            <span className="number">5</span>
                                            <span className="icon">
                                                <i className="bi bi-star-fill" style={{ color: '#eaee14' }}></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="comment-image" style={{ margin: '20px 0px 10px 50px' }}>
                                        <img src="images/Chiaki_Sato.png" />
                                    </div>
                                    <div className="comment-content" style={{ paddingLeft: '50px' }}>
                                        <p>This prod iss goood</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main >
        </div >
    );
}

export default ProductDetail;
