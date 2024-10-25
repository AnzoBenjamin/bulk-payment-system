import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import Background from "components/common/Background";
import Avatar from "components/common/Avatar";
import classNames from "classnames";
import { useContext } from "react";
import { AuthContext } from "context/AuthContext";
import ProfileImage from "components/common/ProfileImage";
import { AuthProvider } from "context/AuthContext";
const ProfileBannerHeader = ({  coverSrc, className }) => {
  const {user} = useContext(AuthContext);
  console.log(user)
  return (
    <AuthProvider>
    <Card.Header
      className={classNames(className, "position-relative min-vh-25 mb-7")}
      >
      <Background image={coverSrc} className="rounded-3 rounded-bottom-0" />
      <ProfileImage name={user?.username}/>
    </Card.Header>
      </AuthProvider>
  );
};

const ProfileBannerBody = ({ children }) => {
  return <Card.Body>{children}</Card.Body>;
};

const ProfileBanner = ({ children }) => {
  return <Card className="mb-3">{children}</Card>;
};

ProfileBanner.Header = ProfileBannerHeader;
ProfileBanner.Body = ProfileBannerBody;

ProfileBannerHeader.propTypes = {
  avatar: PropTypes.string.isRequired,
  coverSrc: PropTypes.string.isRequired,
  className: PropTypes.string,
};

ProfileBannerBody.propTypes = {
  children: PropTypes.node.isRequired,
};

ProfileBanner.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProfileBanner;
