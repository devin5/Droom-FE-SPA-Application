import React from "react";
import Test from "./components/Test";
import SignIn from "./components/signin/SignIn";
import Register from "./components/register/Register";
import EmployerRegistration from "./components/register/EmployerRegistration";
import EmployeeRegistration from "./components/register/EmployeeRegistration";
import EmployeeProfile from "./components/profile/EmployeeP";
import EmployerProfile from "./components/profile/EmployerP";
import "./App.css";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <SignIn />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route exact path="/reg/employer">
        <EmployerRegistration />
      </Route>
      <Route exact path="/reg/employee">
        <EmployeeRegistration />
      </Route>
      <Route path="/employee/profile/:id">
        <EmployeeProfile />
      </Route>
      <Route path="/employer/profile/:id">
        <EmployerProfile />
      </Route>
      <Route path="/test">
        <Test />
      </Route>
    </div>
  );
}

export default App;
