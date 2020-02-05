import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { signEmployer } from "../../actions/index";
import { connect } from "react-redux";
const EmployerSignIn = props => {
  const [form, setForm] = useState({});


  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Form>
      <h1>Employer sign in</h1>
      <a id="signinanchor" onClick={() => props.setBool(bool => !bool)}>
        Employee sign in here !!!
      </a>
      <Row className="formrow" form>
        <Col md={6}>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              onChange={handleChange}
              type="text"
              name="username"
              id="username"
              placeholder="Username Here"
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="password Here"
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
      </Row>

      <Button onClick={() => props.signEmployer(form)}>Sign in</Button>
      <Link to="/register">need an account??</Link>
    </Form>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user,
    isLoading: state.isLoading,
    error: state.error
  };
};
export default connect(mapStateToProps, { signEmployer })(EmployerSignIn);
