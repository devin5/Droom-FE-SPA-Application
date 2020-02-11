import React, { useEffect } from "react";
import EmployeeCard from "./EmployeeCard";
import { connect } from "react-redux";
import { getEmployeesArray } from "../../actions/index";
import { useHistory, useParams } from "react-router-dom";

function EmployeeDisplay(props) {
  let history = useHistory();
  let { id } = useParams();
  useEffect(() => {
    props.getEmployeesArray();
  }, []);
  console.log("im user", props.user);

  console.log("grvrevrwv", props.array);
  return (
    <>
      <button onClick={() => history.push(`/employer/profile/${id}`)}>
        go back to profile
      </button>
      {props.array.map((item, index, array) => (
        <EmployeeCard key={index} employee={item} />
      ))}
    </>
  );
}

const mapStateToProps = state => {
  return {
    array: state.array,
    profile: state.profile,
    user: state.user,
    isLoading: state.isLoading,
    error: state.error
  };
};
export default connect(mapStateToProps, { getEmployeesArray })(EmployeeDisplay);
