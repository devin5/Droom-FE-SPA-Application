import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { registerEmployer } from "../../actions/index";
import Loading from "../mixins/Loading";

function EmployerRegistration(props) {
  const [form, setForm] = useState({});
  let location = useLocation();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = e => {
    const obj = { ...form, ...location.state };
    props.registerEmployer({ ...form, ...location.state });
  
  };

 
  return (
    <>
      {props.isLoading ? (
        <Loading />
      ) : (
        <div className="signindiv">
          <Form>
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
            <FormGroup>
              <Label for="proffession">Profession</Label>
              <Input
                type="text"
                name="proffession"
                id="proffession"
                placeholder="proffession"
                onChange={handleChange}
                value={form.proffession}
              />
            </FormGroup>
            <FormGroup>
              <Label for="openPostions">Open Postions</Label>
              <Input
                type="text"
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
                type="text"
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
                type="text"
                name="mission"
                id="mission"
                placeholder="Mission Statement"
                onChange={handleChange}
                value={form.mission}
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
            <FormGroup>
              <Label for="state">State</Label>
              <Input
                type="text"
                name="state"
                id="state"
                placeholder="State"
                onChange={handleChange}
                value={form.state}
              />
            </FormGroup>

            <Button onClick={submit}>Submit</Button>
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
