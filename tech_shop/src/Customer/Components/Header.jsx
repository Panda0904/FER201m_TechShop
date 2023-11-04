import React from 'react';
import '../css/styleheader.css'
function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-light">
                <div className="container-fluid">
                    <img src="/images/Chiaki_Sato.png" alt="" className="navbar-brand" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ gap: '25px', paddingLeft: '10px' }}>
                            <li className="nav-item">
                                <a className="link-nav" aria-current="page" href="/">Trang chủ</a>
                            </li>
                            <li className="nav-item">
                                <a className="link-nav" href="/">Blogs</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="link-nav dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Sản phẩm
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Tất cả sản phẩm</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a className="dropdown-item" href="/">Điện Thoại</a></li>
                                    <li><a className="dropdown-item" href="/">Laptop</a></li>
                                    <li><a className="dropdown-item" href="/">Phụ kiện</a></li>
                                    <li><a className="dropdown-item" href="/">PC</a></li>
                                    <li><a className="dropdown-item" href="/">Tablet</a></li>
                                </ul>
                            </li>
                            <li>
                                
                            </li>
                            
                        </ul>
                        <div>
                        <form className="search d-flex">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="search-btn" type="submit"><i className="bi bi-search"></i></button>
                                </form>
                        </div>
                        <div>
                            <li className="nav-item">
                                <a className="link-nav" href="#">Hỏi đáp</a>
                            </li>
                            
                            </div>
                            <div>
                            <li className="nav-item">
                                <a className="link-nav" href="#">Đánh Giá</a>
                            </li>
                            </div>
                        <div className="nav-action">
                            <img src="../../assets/images/User-logo.png" alt="" srcSet=""
                                style={{ width: '40px', marginRight: '10px' }} />
                            
                            <div className="nav-item dropdown" style={{ marginRight: '30px' }}>
                                <a className="link-nav dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Tài khoản
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Hồ sơ</a></li>
                                    <li><a className="dropdown-item" href="#">Đổi mật khẩu</a></li>
                                </ul>
                            </div>
                            <div style={{ marginTop: '7px' }}>
                                <a href="/login" className="link-nav">Đăng nhập</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
