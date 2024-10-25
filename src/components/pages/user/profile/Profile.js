import ProfileBanner from "./Banner";
import ProfileIntro from "./ProfileIntro";
import { Col, Row } from "react-bootstrap";
import associations from "data/associations";
import Associations from "components/pages/asscociations/Associations";
import people from "data/people";
import activities from "data/activities";
import Followers from "./Followers";
import ActivityLog from "./ActivityLog";
import Experiences from "./Experiences";
import Education from "./Education";
import Events from "./Events";
import events from "data/events/events";
import Photos from "./Photos";

const Profile = () => {
  return (
    <>
      <ProfileBanner />
      <Row className="g-3 mb-3">

      </Row>

    </>
  );
};

export default Profile;
