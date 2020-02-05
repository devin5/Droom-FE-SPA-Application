import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getEmployeeProfile } from "../../actions/index";
import { useParams, Link } from "react-router-dom";

function EmployeeProfile(props) {
  let { id } = useParams();
  useEffect(() => {
    props.getEmployeeProfile(id);
  }, []);

  return (
    <>
      <h1>username: {props.profile.username}</h1>
      <h1>isEmployer: {props.profile.isEmployer}</h1>
      <h1>First Name: {props.profile.firstName}</h1>
      <h1>Last Name: {props.profile.LastName}</h1>
      <h1>Years in: {props.profile.yearsIn}</h1>
      <h1>profession: {props.profile.profession}</h1>
      <h1>desired title {props.profile.desiredTitle}</h1>
      <h1>skills {props.profile.skills}</h1>
      <h1>image url: {props.profile.imgUrl}</h1>
      <h1>city {props.profile.city}</h1>
      <h1>State: {props.profile.state}</h1>
      <Link to="/test">see Employer's</Link>
    </>
  );
}

const mapStateToProps = state => {
  return {
    profile: state.profile,
    user: state.user,
    isLoading: state.isLoading,
    error: state.error
  };
};
export default connect(mapStateToProps, { getEmployeeProfile })(
  EmployeeProfile
);
