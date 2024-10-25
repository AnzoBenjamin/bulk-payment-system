import { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Form, Row, Col } from "react-bootstrap";
import ApiCalls from "api/calls";
import urls from "api/urls";
import { AuthContext } from "context/AuthContext";
import { v4 as uuidv4 } from 'uuid';
const RegistrationForm = ({ hasLabel }) => {
  // State
  const navigate = useNavigate();
  const {login, accessToken} = useContext(AuthContext)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    username:"",
    orgName: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
    companyRegId: uuidv4()
  });

  const api = new ApiCalls();

  // Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    const requestBody = getRequestBody();

    const signUpResponse = await signUpOrganization(requestBody);
    if (signUpResponse) {
      const loginResponse = await loginUser(formData);
      if (loginResponse) {
        await addStaffMember();
        navigate('/dashboard');
      }
    }
  };

  const getRequestBody = () => {
    const { firstName, lastName, username, companyRegId, phoneNumber, orgName, email, password } = formData;
    return {
      password,
      first_name: firstName,
      last_name: lastName,
      email,
      username,
      phone_number: phoneNumber,
      org_name: orgName,
      company_reg_id: companyRegId,
    };
  };

  const signUpOrganization = async (requestBody) => {
    try {
      const response = await api.postRequest(requestBody, urls.SIGNUP_ORGANIZATION);
      if (response.status === 201) {
        toast.success("Organization created successfully", { theme: "colored" });
        return true;
      }
    } catch (error) {
      handleApiError(error, "Failed to create the organization");
    }
    return false;
  };

  const loginUser = async (formData) => {
    try {
      const response = await api.postRequest(formData, urls.LOGIN_USER);
      if (response.status === 200) {
        toast.success("Logged in successfully", { theme: "colored" });
        login(response.data.user, {
          access_token: response.data.access_token,
          refresh_token: response.data.refresh_token,
        });
        return true;
      }
    } catch (error) {
      handleApiError(error, "Failed to log in");
    }
    return false;
  };

  const addStaffMember = async () => {
    try {
      const { firstName, lastName, username, companyRegId, phoneNumber, email, password } = formData;
      const response = await api.postRequest(
        {
          password,
          first_name: firstName,
          last_name: lastName,
          email,
          username,
          phone_number: phoneNumber,
          organization: companyRegId,
          role: "owner",
        },
        urls.ADD_STAFF,
        accessToken
      );
      if (response.status === 200) {
        toast.success("Created staff successfully", { theme: "colored" });
      }
    } catch (error) {
      handleApiError(error, "Failed to create the staff");
    }
  };

  const handleApiError = (error, defaultMessage) => {
    if (error.response) {
      console.log("status code " + error.response.status);
      const data = error.response.data;
      console.log("error response:", data);
      const message = getErrorMessage(data) || defaultMessage;
      toast.error(message, { theme: "colored" });
    } else {
      console.log(error);
      toast.error("An error occurred. Please try again later", { theme: "colored" });
    }
  };

  const getErrorMessage = (data) => {
    const fields = ["first_name", "last_name", "password", "email", "phone_number", "org_name"];
    for (let field of fields) {
      if (data[field]) {
        return data[field][0];
      }
    }
    return null;
  };

  const validate = () => {
    let {
      firstName,
      lastName,
      phoneNumber,
      orgName,
      email,
      username,
      password,
      confirmPassword,
    } = formData;
    if (firstName === "") {
      toast.error("The first name is required", {
        theme: "colored",
      });
      return false;
    } else if (lastName === "") {
      toast.error("The last name is required", {
        theme: "colored",
      });
      return false;
    } else if (email === "") {
      toast.error("Email is required", {
        theme: "colored",
      });
      return false;
    } else if (phoneNumber === "") {
      toast.error("Phone number is required", {
        theme: "colored",
      });
      return false;

    } else if(username===""){
      toast.error("Username is required", {
        theme: "colored",
      });
      return false;
    }
    else if (phoneNumber.length < 10) {
      toast.error("Phone number is invalid", {
        theme: "colored",
      });
      return false;
    } else if (orgName === "") {
      toast.error("The organization's name is required", {
        theme: "colored",
      });
      return false;
    } else if (password === "") {
      toast.error("Password field is empty", {
        theme: "colored",
      });
      return false;
    } else if (password.length < 6) {
      toast.error("Password must have at least 6 characters", {
        theme: "colored",
      });
      return false;
    } else if (password !== confirmPassword) {
      toast.error("Passwords do not match", {
        theme: "colored",
      });
      return false;
    } else {
      return true;
    }
  };

  const handleFieldChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      {/* <Form.Group className="mb-3">
        {hasLabel && <Form.Label>Email address</Form.Label>}
        <Form.Control
          placeholder={!hasLabel ? 'Email address' : ''}
          value={formData.email}
          name="email"
          onChange={handleFieldChange}
          type="text"
        />
      </Form.Group> */}

      <Row className="g-2 mb-3">
        <Form.Group as={Col} sm={6}>
          {hasLabel && <Form.Label>First Name</Form.Label>}
          <Form.Control
            placeholder={!hasLabel ? "First Name" : ""}
            value={formData.firstName}
            name="firstName"
            onChange={handleFieldChange}
            type="text"
          />
        </Form.Group>
        <Form.Group as={Col} sm={6}>
          {hasLabel && <Form.Label>Last Name</Form.Label>}
          <Form.Control
            placeholder={!hasLabel ? "Last Name" : ""}
            value={formData.lastName}
            name="lastName"
            onChange={handleFieldChange}
            type="tel"
          />
        </Form.Group>
      </Row>

      <Row className="g-2 mb-3">
        <Form.Group as={Col} sm={6}>
          {hasLabel && <Form.Label>Email</Form.Label>}
          <Form.Control
            placeholder={!hasLabel ? "Email address" : ""}
            value={formData.email}
            name="email"
            onChange={handleFieldChange}
            type="text"
          />
        </Form.Group>
        <Form.Group as={Col} sm={6}>
          {hasLabel && <Form.Label>Phone Number</Form.Label>}
          <Form.Control
            placeholder={!hasLabel ? "Phone Number" : ""}
            value={formData.phoneNumber}
            name="phoneNumber"
            onChange={handleFieldChange}
            type="tel"
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3">
        {hasLabel && <Form.Label>Username</Form.Label>}
        <Form.Control
          placeholder={!hasLabel ? "Username" : ""}
          value={formData.username}
          name="username"
          onChange={handleFieldChange}
          type="text"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        {hasLabel && <Form.Label>Organization Name</Form.Label>}
        <Form.Control
          placeholder={!hasLabel ? "Name" : ""}
          value={formData.orgName}
          name="orgName"
          onChange={handleFieldChange}
          type="text"
        />
      </Form.Group>

      <Row className="g-2 mb-3">
        <Form.Group as={Col} sm={6}>
          {hasLabel && <Form.Label>Password</Form.Label>}
          <Form.Control
            placeholder={!hasLabel ? "Password" : ""}
            value={formData.password}
            name="password"
            onChange={handleFieldChange}
            type="password"
          />
        </Form.Group>
        <Form.Group as={Col} sm={6}>
          {hasLabel && <Form.Label>Confirm Password</Form.Label>}
          <Form.Control
            placeholder={!hasLabel ? "Confirm Password" : ""}
            value={formData.confirmPassword}
            name="confirmPassword"
            onChange={handleFieldChange}
            type="password"
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3">
        <Form.Check type="checkbox" id="acceptCheckbox" className="form-check">
          <Form.Check.Input
            type="checkbox"
            name="isAccepted"
            checked={formData.isAccepted}
            onChange={(e) =>
              setFormData({
                ...formData,
                isAccepted: e.target.checked,
              })
            }
          />
          <Form.Check.Label className="form-label" aria-required required>
            I accept the <Link to="#!">terms</Link> and{" "}
            <Link to="#!">privacy policy</Link>
          </Form.Check.Label>
        </Form.Check>
      </Form.Group>

      <Form.Group className="mb-4">
        <Button
          className="w-100"
          type="submit"
          disabled={
            !formData.firstName ||
            !formData.lastName ||
            !formData.phoneNumber ||
            !formData.orgName ||
            !formData.email ||
            !formData.password ||
            !formData.confirmPassword
          }
        >
          Register
        </Button>
      </Form.Group>
      {/* <Divider>or register with</Divider> */}

      {/* <SocialAuthButtons /> */}
    </Form>
  );
};

RegistrationForm.propTypes = {
  hasLabel: PropTypes.bool,
};

export default RegistrationForm;
