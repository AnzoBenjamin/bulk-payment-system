import { Card, Col, Row } from "react-bootstrap";

const EventHeader = () => {
  return (
    <Card>
      <Card.Body>
        <Row className="flex-between-center">
          <Col md>
            <h5 className="mb-2 mb-md-0"> Initiate bulk payment</h5>
          </Col>

        </Row>
      </Card.Body>
    </Card>
  );
};

export default EventHeader;
