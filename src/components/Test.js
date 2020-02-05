import React from "react";
import { connect } from "react-redux";




const Test = props => {

  console.log("im props from test" , props.user) ;

  

  return (
   <h1>I am a test</h1>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user,
    isLoading: state.isLoading,
    error: state.error
  };
};
export default connect(mapStateToProps, null)(Test);
