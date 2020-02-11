import React from "react";
import { Spinner } from "reactstrap";

const Loading = props => {
  return (
    <div className="spincontain">
      <Spinner className="spinner" type="grow" />
    </div>
  );
};

export default Loading;
