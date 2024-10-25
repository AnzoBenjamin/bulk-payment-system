import { Card, Col, Button, Row } from "react-bootstrap";

const EventFooter = () => {
  return (
    <Card>
      <Card.Body>
        <Row className="flex-between-center">
          <Col md>
            <h5 className="mb-2 mb-md-0"> Nice Job! You&amp;apos;re almost done</h5>
          </Col>
          <Col xs="auto">
            <Button
              size="sm"
              variant="falcon-default"
              className="me-2"
              type="submit"
            >
              Save
            </Button>
            <Button size="sm" variant="falcon-primary">
              Process your payment
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default EventFooter;
