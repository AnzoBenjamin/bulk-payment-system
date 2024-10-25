import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppContext } from "providers/AppProvider";
import bg1 from "assets/img/generic/bg-1.jpg";
import dashboardDark from "assets/img/generic/dashboard-alt-dark.png";
import dashboard from "assets/img/generic/dashboard-alt.jpg";
import Section from "components/common/Section";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const {
    config: { isDark, isRTL },
  } = useAppContext();

  return (
    <Section
      className="py-0 overflow-hidden"
      data-bs-theme="light"
      image={bg1}
      position="center bottom"
      overlay
    >
      <Row className="justify-content-center align-items-center pt-8 pt-lg-10 pb-lg-9 pb-xl-0">
        <Col
          md={11}
          lg={8}
          xl={4}
          className="pb-7 pb-xl-9 text-center text-xl-start"
        >
          <Button
            as={Link}
            variant="outline-danger"
            className="mb-4 fs-10 border-2 rounded-pill"
            to="#!"
          >
            <span className="me-2" role="img" aria-label="Gift">
            💸
            </span>
            Upgrade to Enterprise          
            </Button>
          <h1 className="text-white fw-light">
          Simplify{" "}
            <span className="fw-bold">
              <Typewriter
                words={["payments", "transactions", "payouts", "security"]}
                loop={false}
                cursor={!isRTL ? true : false}
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
            <br />
            with Almared Bulk Payment
                      </h1>
          <p className="lead text-white opacity-75">
          Manage large-scale payments with ease, efficiency, and security using Almared’s cutting-edge bulk payment system.
          </p>
          <Button
            as={Link}
            variant="outline-light"
            size="lg"
            className="border-2 rounded-pill mt-4 fs-9 py-2"
            to="#!"
          >
            Get Started Now            
            <FontAwesomeIcon icon="play" transform="shrink-6 down-1 right-5" />
          </Button>
        </Col>
        <Col
          xl={{ span: 7, offset: 1 }}
          className="align-self-end mt-4 mt-xl-0"
        >
          <Link to="/" className="img-landing-banner">
            <img
              className="img-fluid"
              src={isDark ? dashboardDark : dashboard}
              alt=""
            />
          </Link>
        </Col>
      </Row>
    </Section>
  );
};

export default Hero;
