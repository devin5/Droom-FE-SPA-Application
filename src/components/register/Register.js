import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

const Register = props => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    isEmployer: true
  });

  let history = useHistory();
  let path = form.isEmployer ? "/reg/employer" : "/reg/employee";

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEmployer = (e, bool) => {
    setForm({ ...form, isEmployer: bool });
  };

  return (
    <div className="signindiv">
      <Form>
        <h1>Registration</h1> <Link to="/">already have an account ???</Link>
        <Row className="formrow" form>
          <Col md={6}>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input
                value={form.username}
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
                value={form.password}
                type="password"
                name="password"
                id="examplePassword"
                placeholder="password Here"
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          <Col id="col" md={6}>
            <FormGroup>
              <Label for="isEmployer">Account type</Label>
              <Input
                value={form.isEmployer}
                type="select"
                name="isEmployer"
                id="isEmployer"
                onChange={e => handleEmployer(e, !form.isEmployer)}
              >
                <option value={true}>employer</option>
                <option value={false}>employee</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Button
          id="signbutton"
          outline
          onClick={() => {
            history.push(path, form);
          }}
        >
          register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
