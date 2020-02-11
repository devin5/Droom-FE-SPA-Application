import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Col, Row } from "reactstrap";
import { useLocation, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { registerEmployer } from "../../actions/index";
import Loading from "../mixins/Loading";
import { states } from "../../states";

function EmployerRegistration(props) {
  const [form, setForm] = useState({});
  let location = useLocation();
  let history = useHistory();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = e => {
    const obj = { ...form, ...location.state };
    props.registerEmployer({ ...form, ...location.state });
  };

  console.log("im user", props.user);
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
                  <Label for="coName">Company Name</Label>
                  <Input
                    type="text"
                    name="coName"
                    id="coName"
                    placeholder="Company Name"
                    onChange={handleChange}
                    value={form.coName}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="proffession">Industry</Label>
                  <Input
                    type="text"
                    name="proffession"
                    id="proffession"
                    placeholder="Industry"
                    onChange={handleChange}
                    value={form.proffession}
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
                {/* <FormGroup>
                  <Label for="state">State</Label>
                  <Input
                    type="text"
                    name="state"
                    id="state"
                    placeholder="State"
                    onChange={handleChange}
                    value={form.state}
                  />
                </FormGroup> */}
              </Col>
            </Row>
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
              <Label for="openPostions">Open Postions</Label>
              <Input
                type="textarea"
                name="openPostions"
                id="openPostions"
                placeholder="Open Positions"
                onChange={handleChange}
                value={form.openPostions}
              />
            </FormGroup>
            <FormGroup>
              <Label for="benifets">Benifets</Label>
              <Input
                type="textarea"
                name="benifets"
                id="benifets"
                placeholder="Benifets"
                onChange={handleChange}
                value={form.benifets}
              />
            </FormGroup>
            <FormGroup>
              <Label for="mission">Mission Statemnet</Label>
              <Input
                type="textarea"
                name="mission"
                id="mission"
                placeholder="Mission Statement"
                onChange={handleChange}
                value={form.mission}
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
export default connect(mapStateToProps, { registerEmployer })(
  EmployerRegistration
);
