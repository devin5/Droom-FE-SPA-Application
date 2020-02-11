import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import { useLocation, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { registerEmployee } from "../../actions/index";
import Loading from "../mixins/Loading";
import { states } from "../../states";

function EmployeeRegistration(props) {
  const [form, setForm] = useState({});
  let location = useLocation();
  let history = useHistory();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = e => {
    const obj = { ...form, ...location.state };
    props.registerEmployee({ ...form, ...location.state });
  };

  return (
    <>
      {props.isLoading ? (
        <Loading />
      ) : (
        <div className="signindiv">
          <Form>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="firstName">First Name</Label>
                  <Input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="First Name"
                    onChange={handleChange}
                    value={form.firstName}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="lastName">Last Name</Label>
                  <Input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Last Name"
                    onChange={handleChange}
                    value={form.lastName}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="city">City</Label>
                  <Input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="City"
                    onChange={handleChange}
                    value={form.city}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="state">State</Label>
                  <Input
                    type="select"
                    placeholder="State"
                    name="state"
                    onChange={handleChange}
                    value={form.state}
                    id="state"
                  >
                    {states.map(item => (
                      <option>{item}</option>
                    ))}
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={8}>
                <FormGroup>
                  <Label for="profession">Profession</Label>
                  <Input
                    type="text"
                    name="profession"
                    id="profession"
                    placeholder="Profession"
                    onChange={handleChange}
                    value={form.profession}
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="yearsIn">Years in profession</Label>
                  <Input
                    type="select"
                    name="yearsIn"
                    id="yearsIn"
                    placeholder="Years in profession"
                    onChange={handleChange}
                    value={form.yearsIn}
                  >
                    {states.map((item, index) => (
                      <option>{index}</option>
                    ))}
                  </Input>
                </FormGroup>
              </Col>
            </Row>

            <FormGroup>
              <Label for="desiredTitle">Title Desired</Label>
              <Input
                type="text"
                name="desiredTitle"
                id="desiredTitle"
                placeholder="Title Desired"
                onChange={handleChange}
                value={form.desiredTitle}
              />
            </FormGroup>
            <FormGroup>
              <Label for="imgUrl">Image Url</Label>
              <Input
                type="text"
                name="imgUrl"
                id="imgUrl"
                placeholder="img url for avatar"
                onChange={handleChange}
                value={form.imgUrl}
              />
            </FormGroup>
            <FormGroup>
              <Label for="skills">Skills</Label>
              <Input
                type="textarea"
                name="skills"
                id="skills"
                placeholder="Skills"
                onChange={handleChange}
                value={form.skills}
              />
            </FormGroup>

            <Button id="signbutton" outline onClick={submit}>
              Submit
            </Button>

            <Button id="signbutton" outline onClick={history.goBack}>
              Go Back
            </Button>
          </Form>
        </div>
      )}
    </>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
    isLoading: state.isLoading,
    error: state.error
  };
};
export default connect(mapStateToProps, { registerEmployee })(
  EmployeeRegistration
);
