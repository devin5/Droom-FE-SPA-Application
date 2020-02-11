import React, { useState } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import { signEmployee } from "../../actions/index";
import { connect } from "react-redux";
const EmployeeSignin = props => {
  const [form, setForm] = useState({});

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });
  return (
    <Form className="employerSign">
      <h1>Employee sign in</h1>{" "}
      <a id="signinanchor" onClick={() => props.setBool(bool => !bool)}>
        Employers sign in here !!!
      </a>
      <Row className="formrow" form>
        <Col md={6}>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              type="text"
              name="username"
              id="username"
              placeholder="Username Here"
              onChange={handleChange}
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
      {/* <FormGroup check>
        <Input type="checkbox" name="check" id="exampleCheck"/>
        <Label for="exampleCheck" check>Check me out</Label>
      </FormGroup> */}
      <div className="registerFlex">
        <Button
          id="signbutton"
          outline
          onClick={() => props.signEmployee(form)}
        >
          Sign in
        </Button>{" "}
        <Link className="signlink" to="/register">need an account??</Link>
      </div>
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
export default connect(mapStateToProps, { signEmployee })(EmployeeSignin);
