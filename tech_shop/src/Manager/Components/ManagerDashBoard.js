import React, { useState} from 'react';
import HeaderManager from './HeaderManager';
import SidenavManage from './SidenavManage';
import DashBoardContent from './DashBoardContent';
import { Row, Col } from 'react-bootstrap'

function ManagerDashboard() {
  const [showSidebar, setShowSidebar] = useState(true);
  const handleSidebarToggle = () => {
    setShowSidebar(!showSidebar)
  }

  return (
    <>
      <Row>
        <Col>
          <HeaderManager onSidebarToggle={handleSidebarToggle} />
        </Col>
      </Row>
      <Row>
        <Col md={2}>
          <SidenavManage show={showSidebar} onHide={handleSidebarToggle}/>
        </Col>
        <Col md={12} sm={12} style={{ textAlign: 'center' }}>
          <DashBoardContent />
        </Col>
      </Row>


    </>
  );
}

export default ManagerDashboard;
