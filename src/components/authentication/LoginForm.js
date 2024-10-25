import PropTypes from "prop-types";
import React, { useState, useContext } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import paths from "routes/paths";
import ApiCalls from "api/calls";
import urls from "api/urls";
import { AuthContext } from "context/AuthContext";
const forgotPasswordPaths = {
  simple: paths.simpleForgotPassword,
  split: paths.splitForgotPassword,
  card: paths.cardForgotPassword,
};
const LoginForm = ({ hasLabel = false, layout = "simple" }) => {
  // State
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });
  //Create the api constructor
  const api = new ApiCalls();
  const navigate = useNavigate();
  const {login} = useContext(AuthContext);

  
  // Handler
  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      let response = await api.postRequest(
        formData,
        urls.LOGIN_USER
      );
      if (response.status === 200) {
        let message = "Logged in successfuly";
        toast.success(message, {
          theme: "colored",
        });
        login(response.data.user, {
          access_token: response.data.access_token,
          refresh_token: response.data.refresh_token,
      });

              
      navigate('/dashboard')
      console.log(response)
        
        //TODO: navigate to dashboard route
      }
      else{
          console.log(response)
      }
      //api.login(formData)
    }  catch (error) {
      if (error.response) {
        console.log("status code " + error.response.status);
        let data = error.response.data;
        console.log("error response:", data);
        let message = "Failed to create the organization";
        [
          "first_name",
          "last_name",
          "password",
          "email",
          "phone_number",
          "org_name",
        ].forEach((field) => {
          if (data[field]) {
            message = data[field][0];
          }
        });
        toast.error(message, {
          theme: "colored",
        });
      } else {
        console.log(error);
        let message = "An error occurred. Please try again later";
        toast.error(message, {
          theme: "colored",
        });
      }
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
      <Form.Group className="mb-3">
        {hasLabel && <Form.Label>Email address</Form.Label>}
        <Form.Control
          placeholder={!hasLabel ? "Email address" : ""}
          value={formData.email}
          name="email"
          onChange={handleFieldChange}
          type="email"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        {hasLabel && <Form.Label>Password</Form.Label>}
        <Form.Control
          placeholder={!hasLabel ? "Password" : ""}
          value={formData.password}
          name="password"
          onChange={handleFieldChange}
          type="password"
        />
      </Form.Group>

      <Row className="justify-content-between align-items-center">
        <Col xs="auto">
          <Form.Check type="checkbox" id="rememberMe" className="mb-0">
            <Form.Check.Input
              type="checkbox"
              name="remember"
              checked={formData.remember}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  remember: e.target.checked,
                })
              }
            />
            <Form.Check.Label className="mb-0 text-700">
              Remember me
            </Form.Check.Label>
          </Form.Check>
        </Col>

        <Col xs="auto">
          <Link className="fs-10 mb-0" to={forgotPasswordPaths[layout]}>
            Forgot Password?
          </Link>
        </Col>
      </Row>

      <Form.Group>
        <Button
          type="submit"
          color="primary"
          className="mt-3 w-100"
          disabled={!formData.email || !formData.password}
        >
          Log in
        </Button>
      </Form.Group>


    </Form>
  );
};

LoginForm.propTypes = {
  layout: PropTypes.string,
  hasLabel: PropTypes.bool,
};

export default LoginForm;
