import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import paths from "routes/paths";
import ProfileImage from "components/common/ProfileImage";
import { useContext } from "react";
import { AuthContext } from "context/AuthContext";

const ProfileDropdown = () => {
  const {user} = useContext(AuthContext)
  return (
    <Dropdown navbar={true} as="li">
      <Dropdown.Toggle
        bsPrefix="toggle"
        as={Link}
        to="#!"
        className="pe-0 ps-2 nav-link"
      >
      <ProfileImage name={user.username} />
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-caret dropdown-menu-card  dropdown-menu-end">
        <div className="bg-white rounded-2 py-2 dark__bg-1000">
          <Dropdown.Item as={Link} to={paths.userSettings}>
            Settings
          </Dropdown.Item>
          <Dropdown.Item as={Link} to={paths.cardLogout}>
            Logout
          </Dropdown.Item>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ProfileDropdown;
