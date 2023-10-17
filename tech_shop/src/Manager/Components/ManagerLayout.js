import { Col, Row } from "react-bootstrap";

import ManagerDashboard from "./ManagerDashBoard";

export default function ManagerLayout() {
    return (
        <>
           <Row>
                <Col>
                    <ManagerDashboard/>
                </Col>
           </Row>
        </>
    )
}