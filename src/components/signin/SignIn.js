import React, { useState } from "react";
import Employee from "./EmployeeSignIn";
import Employer from "./EmployerSignIn";
import Loading from "../mixins/Loading";
import { connect } from "react-redux";

function SignIn(props) {
  const [bool, setBool] = useState(true);

  return (
    <>
      {props.isLoading ? (
        <Loading />
      ) : (
        <div className="signindiv">
          {bool ? (
            <Employee setBool={setBool} />
          ) : (
            <Employer setBool={setBool} />
          )}
        </div>
      )}
    </>
  );
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading
  };
};
export default connect(mapStateToProps)(SignIn);
