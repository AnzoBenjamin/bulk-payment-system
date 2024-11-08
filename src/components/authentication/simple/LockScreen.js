import Avatar from "components/common/Avatar";
import LockScreenForm from "components/authentication/LockScreenForm";
import team1 from "assets/img/team/1.jpg";

const LockScreen = () => {
  return (
    <div className="text-center">
      <Avatar src={team1} size="4xl" />
      <h5 className="mt-3 mb-0">Hi! Emma Watson</h5>
      <small>Enter your password to access the admin.</small>
      <LockScreenForm className="mt-4 mx-sm-4" type="simple" />
    </div>
  );
};

export default LockScreen;
