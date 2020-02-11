import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getEmployeeProfile } from "../../actions/index";
import { useParams, useHistory, Link } from "react-router-dom";
import Loading from "../mixins/Loading";
import "./Profile.css";
import { Button } from "reactstrap";
function EmployeeProfile(props) {
  let { id } = useParams();
  let history = useHistory();
  useEffect(() => {
    props.getEmployeeProfile(id);
  }, []);

  return (
    <>
      {props.isLoading ? (
        <Loading />
      ) : (
        <div className="profile">
          <div className="avatar">
            <img src={props.profile.imgUrl} alt="" />
            <p>
              {props.profile.firstName} {props.profile.lastName}
            </p>
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
            <h2>Who Am I ?</h2>
            <p>Hello, I am {props.profile.firstName}</p>
            <p>
              {" "}
              I have been a {props.profile.profession} for{" "}
              {props.profile.yearsIn} years!
            </p>
            <h3>What position am I looking to secure?</h3>
            <p> {props.profile.desiredTitle} role</p>
            <h3>What Skills do I have?</h3>
            <p>{props.profile.skills}</p>
            <Button
              id="signbutton"
              outline
              onClick={() => history.push(`/employer/list/${id}`)}
            >
              Find Employer's
            </Button>
          </div>
        </div>
      )}
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
