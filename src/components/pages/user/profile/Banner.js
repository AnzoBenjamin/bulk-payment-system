import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import coverSrc from "assets/img/generic/4.jpg";
import apple from "assets/img/logos/apple.png";
import google from "assets/img/logos/g.png";
import hp from "assets/img/logos/hp.png";
import avatar from "assets/img/team/2.jpg";
import Flex from "components/common/Flex";
import VerifiedBadge from "components/common/VerifiedBadge";
import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProfileBanner from "../ProfileBanner";
import { useContext } from "react";
import { AuthContext } from "context/AuthContext";
const Banner = () => {
  const {user} = useContext(AuthContext)

  useEffect(()=>{

  },[])
  const [rightSidedItems] = useState([
    {
      title: "Google",
      image: google,
    },
    {
      title: "Apple",
      image: apple,
    },
    {
      title: " Hewlett Packard",
      image: hp,
    },
  ]);
  return (
    <ProfileBanner>
      <ProfileBanner.Header avatar={avatar} coverSrc={coverSrc} />
      <ProfileBanner.Body>
        <Row>
          <Col lg={8}>
            <h4 className="mb-1">
              {user.username}
            </h4>
            <h5 className="fs-9 fw-normal">
              Senior Software Engineer at Technext Limited
            </h5>
            <p className="text-500">New York, USA</p>
          </Col>
        </Row>
      </ProfileBanner.Body>
    </ProfileBanner>
  );
};

export default Banner;
