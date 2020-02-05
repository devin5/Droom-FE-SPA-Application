import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getEmployerProfile } from "../../actions/index";
import { useHistory, useParams, Link } from "react-router-dom";

function EmployerProfile(props) {
  let history = useHistory();
  let { id } = useParams();
  useEffect(() => {
    props.getEmployerProfile(id);
  }, []);
  console.log("im the profile", props.profile);
  return (
    <>
      <h1>username: {props.profile.username}</h1>
      <h1>isEmployer: {props.profile.isEmployer}</h1>
      <h1>First Name: {props.profile.coName}</h1>
      <h1>Last Name: {props.profile.proffession}</h1>
      <h1>Years in: {props.profile.openPostions}</h1>
      <h1>profession: {props.profile.benifets}</h1>
      <h1>desired title {props.profile.mission}</h1>
      <h1>skills {props.profile.imgUrl}</h1>
      <h1>city {props.profile.city}</h1>
      <h1>State: {props.profile.state}</h1>
      {/* <button onClick={() => history.push("/test")}>see Employee's</button> */}
      <Link to="/test">see Employee's</Link>
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
export default connect(mapStateToProps, { getEmployerProfile })(
  EmployerProfile
);
