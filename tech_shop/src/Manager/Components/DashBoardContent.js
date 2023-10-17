
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

function DashBoardContent() {
  return (
    <main className="mt-5 pt-3">
      <Container>
        <div className="row">
          <div className="col-md-3 mb-3">
            <Card bg="primary" text="white" className="h-100">
              <Card.Body></Card.Body>
              <Card.Footer></Card.Footer>
            </Card>
          </div>
          <div className="col-md-3 mb-3">
            <Card bg="warning" text="dark" className="h-100">
              <Card.Body></Card.Body>
              <Card.Footer></Card.Footer>
            </Card>
          </div>
          <div className="col-md-3 mb-3">
            <Card bg="success" text="white" className="h-100">
              <Card.Body></Card.Body>
              <Card.Footer></Card.Footer>
            </Card>
          </div>
          <div className="col-md-3 mb-3">
            <Card bg="danger" text="white" className="h-100">
              <Card.Body></Card.Body>
              <Card.Footer></Card.Footer>
            </Card>
          </div>
        </div>
        <div className="row">
          <Card className="w-100">
            <Card.Header>
              <span className="me-2"><i className="bi bi-bar-chart-fill"></i></span>
              Area Chart Example
            </Card.Header>
            <Card.Body>
              <canvas className="chart" width="400" height="200"></canvas>
            </Card.Body>
          </Card>
        </div>
        <div className="row">
          <Card className="w-100">
            <Card.Header>
              <span className="me-2"><i className="bi bi-bar-chart-fill"></i></span>
              Area Chart Example
            </Card.Header>
            <Card.Body>
              <canvas className="chart" width="400" height="200"></canvas>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </main>
  );
}

export default DashBoardContent;
