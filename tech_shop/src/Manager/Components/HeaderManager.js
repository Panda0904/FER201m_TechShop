import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import '../css/styleheaderm.css'

function HeaderManager({ onSidebarToggle }) {
  return (
    <Navbar expand="lg" style={{backgroundColor: 'rgba(112, 83, 83, 1)'}}>
      <Navbar.Brand as="button" >
        <span className="navbar-toggler-icon" onClick={onSidebarToggle}></span>
      </Navbar.Brand>
      <Navbar.Brand href="#" className="me-auto ms-lg-0 ms-3 text-uppercase fw-bold">
        Chiaki Sato Shop
      </Navbar.Brand>
      <Button variant="dark">
        Đăng xuất
      </Button>
    </Navbar>
  );
}

export default HeaderManager;
