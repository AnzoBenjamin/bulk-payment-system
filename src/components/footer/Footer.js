import { Col, Row } from "react-bootstrap";
import { version } from "config";

const Footer = () => (
  <footer className="footer">
    <Row className="justify-content-between text-center fs-10 mt-4 mb-3">
      <Col sm="auto">
        <p className="mb-0 text-600">
          Thank you for working with Alma Red.{" "}
          <span className="d-none d-sm-inline-block">| </span>
          <br className="d-sm-none" /> {new Date().getFullYear()} &copy;{" "}
        </p>
      </Col>
    </Row>
  </footer>
);

export default Footer;
