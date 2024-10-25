import { Form, Button, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const SocialAuthButtons = () => (
  <Form.Group className="mb-0">
    <Row>
      <Col sm={6} className="pe-sm-1">
        <Button variant="" size="sm" className="btn-outline-google mt-2 w-100">
          <FontAwesomeIcon
            icon={faGoogle}
            transform="grow-8"
            className="me-2"
          />{" "}
          google
        </Button>
      </Col>
      <Col sm={6} className="ps-sm-1">
        <Button
          variant=""
          size="sm"
          className="btn-outline-facebook mt-2 w-100"
        >
          <FontAwesomeIcon
            icon={["fab", "facebook-square"]}
            transform="grow-8"
            className="me-2"
          />{" "}
          facebook
        </Button>
      </Col>
    </Row>
  </Form.Group>
);

export default SocialAuthButtons;
