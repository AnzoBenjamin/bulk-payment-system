import PropTypes from "prop-types";


const ProfileImage = ({ name }) => {
  const nameParts = name.split(" ");
  const firstNameInitial = nameParts[0] ? nameParts[0][0] : "";
  const lastNameInitial = nameParts[1] ? nameParts[1][0] : "";

  return (
    <span className="user-profile-image">
      {firstNameInitial.toUpperCase()}
      {lastNameInitial.toUpperCase()}
    </span>
  );
};
ProfileImage.propTypes = {
  name: PropTypes.string.isRequired,
};
export default ProfileImage;
