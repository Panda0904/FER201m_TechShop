import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import '../css/stylesidebar.css'

function SidenavManage({ show, onHide }) {
  return (
    <Offcanvas show={show} onHide ={onHide} placement="start" className="sidebar">
      <Offcanvas.Body>
        <ul className="navbar-nav">
          <li style={{textAlign: 'center'}}>
            <img className="user-logo" src="/images/User-logo.png" alt="" /><br />
            <h3 style={{ color: 'aliceblue', textAlign: 'center' }}>Hi, Manager</h3>
          </li>
          <li style={{marginTop:'50px'}}>
            <Nav.Link href="#" className="nav-link px-5">
              <span className="me-2"><i className="bi bi-speedometer2"></i>Thống Kê</span>
            </Nav.Link>
          </li>
          <li>
            <Nav.Link href="#" className="nav-link px-5">
              <span className="me-2"><i className="bi bi-speedometer2"></i>Tài khoản</span>
              
            </Nav.Link>
          </li>
        </ul>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default SidenavManage;
