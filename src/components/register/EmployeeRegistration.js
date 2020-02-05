import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { registerEmployee } from "../../actions/index";
import Loading from "../mixins/Loading";

function EmployeeRegistration(props) {
  const [form, setForm] = useState({});
  let location = useLocation();



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
            <FormGroup>
              <Label for="lastName">Last Name Name</Label>
              <Input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                onChange={handleChange}
                value={form.lastName}
              />
            </FormGroup>

            <FormGroup>
              <Label for="yearsIn">Years in profession</Label>
              <Input
                type="text"
                name="yearsIn"
                id="yearsIn"
                placeholder="Years in profession"
                onChange={handleChange}
                value={form.yearsIn}
              />
            </FormGroup>
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
                type="text"
                name="skills"
                id="skills"
                placeholder="Skills"
                onChange={handleChange}
                value={form.skills}
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
export default connect(mapStateToProps, { registerEmployee })(
  EmployeeRegistration
);
