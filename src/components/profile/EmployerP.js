import React, { useEffect } from "react";
import Loading from "../mixins/Loading";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import { getEmployerProfile } from "../../actions/index";
import { useHistory, useParams, Link } from "react-router-dom";

function EmployerProfile(props) {
  let history = useHistory();
  let { id } = useParams();
  useEffect(() => {
    props.getEmployerProfile(id);
  }, []);
  console.log("im the user", props.user);
  console.log("im the ", props.profile);
  return (
    <>
      {props.isLoading ? (
        <Loading />
      ) : (
        <div className="profile">
          <div className="avatar">
            <img src={props.profile.imgUrl} alt="" />
            <p>{props.profile.coName}</p>
            <p>
              <span>City: </span>
              {props.profile.city}
            </p>
            <p>
              <span>State: </span>
              {props.profile.state}
            </p>
          </div>
          <div className="procontent">
            <h2>Who are We ?</h2>
            <p>Hello, we Are {props.profile.coName}</p>
            <p> We are in the {props.profile.proffession} bussiness !</p>
            <h3>What positions are we looking to fill?</h3>
            <p> {props.profile.openPostions}</p>
            <h3>What Benifets do we have?</h3>
            <p>{props.profile.benifets}</p>
            <Button
              id="signbutton"
              outline
              onClick={() => history.push(`/employee/list/${id}`)}
            >
              Find Employee's
            </Button>
          </div>
        </div>
      )}
    </>
  );
  return (
    <>
      <div className="profile">
        <h1>Employer Profile</h1>
        <h1>usernae: {props.profile.username}</h1>
        <h1>isEmployer: {props.profile.isEmployer ? "yes" : "no"}</h1>
        <h1>CO Name: {props.profile.coName}</h1>
        <h1>Profession: {props.profile.proffession}</h1>
        <h1>open Positions: {props.profile.openPostions}</h1>
        <h1>Benefiets: {props.profile.benifets}</h1>
        <h1>Mission Statement{props.profile.mission}</h1>
        <img src={props.profile.imgUrl} alt="avatar image for user" />
        <h1>city {props.profile.city}</h1>
        <h1>State: {props.profile.state}</h1>
      </div>
      <Link to={`/employee/list/${id}`}>see Employee's</Link>
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
