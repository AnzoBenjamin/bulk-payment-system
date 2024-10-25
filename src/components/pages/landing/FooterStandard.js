import React from "react";
import PropTypes from "prop-types";
import createMarkup from "helpers/createMarkup";
import Section from "components/common/Section";
import IconGroup from "components/common/icon/IconGroup";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { blogPostList, menuList1, menuList2 } from "data/footer";
import { bgWhiteIcons } from "data/socialIcons";
import { version } from "config";

const FooterTitle = ({ children }) => (
  <h5 className="text-uppercase text-white opacity-85 mb-3">{children}</h5>
);

FooterTitle.propTypes = { children: PropTypes.node.isRequired };

const FooterList = ({ list }) => (
  <ul className="list-unstyled">
    {list.map(({ title, to }, index) => (
      <li className="mb-1" key={index}>
        <Link className="link-600" to={to}>
          {title}
        </Link>
      </li>
    ))}
  </ul>
);

FooterList.propTypes = { list: PropTypes.array.isRequired };

const FooterBlogList = ({ list }) => (
  <ul className="list-unstyled">
    {list.map((blog, index) => (
      <li key={index}>
        <h5 className="fs-9 mb-0">
          <Link className="link-600" to="#!">
            {blog.title}
          </Link>
        </h5>
        <p className="text-600 opacity-50">
          {blog.date} &bull; {blog.read} read{" "}
          {blog.star && (
            <span dangerouslySetInnerHTML={createMarkup("&starf;")} />
          )}
        </p>
      </li>
    ))}
  </ul>
);

FooterBlogList.propTypes = { list: PropTypes.array.isRequired };

const FooterStandard = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Section bg="dark" className="pt-8 pb-4" data-bs-theme="light">
        <div
          className="position-absolute btn-back-to-top cursor-pointer bg-dark"
          onClick={scrollToTop}
        >
          <FontAwesomeIcon
            icon="chevron-up"
            transform="rotate-45"
            className="text-600"
          />
        </div>
        <Row>
          <Col lg={6}>
            <FooterTitle>Our Mission</FooterTitle>
            <p className="text-600">
              Almared provides businesses with a robust, secure, and efficient platform for managing bulk payments. Our mission is to simplify large-scale transactions, ensuring that every payment is processed with speed, accuracy, and full transparency. With our cutting-edge tools and responsive support, managing payments has never been easier.
            </p>
            <IconGroup className="mt-4" icons={bgWhiteIcons} />
          </Col>
          <Col className="ps-lg-6 ps-xl-8">
            <Row className="mt-5 mt-lg-0">
              <Col xs={12} md={6}>
                <FooterTitle>Company</FooterTitle>
                <FooterList list={menuList1} />
              </Col>
              <Col xs={12} md={6}>
                <FooterTitle>Services</FooterTitle>
                <FooterList list={menuList2} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Section>

      <section className="bg-dark py-0 text-center fs-10" data-bs-theme="light">
        <hr className="my-0 border-600 opacity-25" />
        <div className="container py-3">
          <Row className="justify-content-between">
            <Col xs={12} sm="auto">
              <p className="mb-0 text-600">
                Thank you for using Almared's bulk payment platform{" "}
                <span className="d-none d-sm-inline-block">| </span>
                <br className="d-sm-none" /> {new Date().getFullYear()} &copy;{" "}
                <a
                  className="text-white opacity-85"
                  href="https://almared.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Almared
                </a>
              </p>
            </Col>
            <Col xs={12} sm="auto">
              <p className="mb-0 text-600">v{version}</p>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default FooterStandard;
