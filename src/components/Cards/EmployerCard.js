import React from "react";

export default function EmployerCard(props) {
  return (<>
  <h1>Employer Card</h1>
      <h1>{props.employer.coName}</h1>
      <h1>{props.employer.city}</h1>
  </>
  );
}
