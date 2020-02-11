import React from "react";

export default function EmployeeCard(props) {
  return (
    <>
      <h1>Employee card</h1>

      <h1>{props.employee.firstName}</h1>
      <h1>{props.employee.lastName}</h1>
    </>
  );
}
