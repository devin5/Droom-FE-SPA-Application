import React from "react";
import Test from "./components/Test";
import SignIn from "./components/signin/SignIn";
import Register from "./components/register/Register";
import EmployerRegistration from "./components/register/EmployerRegistration";
import EmployeeRegistration from "./components/register/EmployeeRegistration";
import EmployeeProfile from "./components/profile/EmployeeP";
import EmployerProfile from "./components/profile/EmployerP";
import EmployeeDisplay from "./components/Cards/EmployeeDisplay";
import EmployerDisplay from "./components/Cards/EmployerDisplay";
import Header from "./components/mixins/Header";

import ProtectedRoute from "./utils/ProtectedRoute";
import "./App.css";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
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

      <ProtectedRoute
        path="/employee/profile/:id/"
        component={EmployeeProfile}
      />
      <ProtectedRoute
        path="/employer/profile/:id"
        component={EmployerProfile}
      />
      <ProtectedRoute path="/employee/list/:id" component={EmployeeDisplay} />
      <ProtectedRoute path="/employer/list/:id" component={EmployerDisplay} />
      <Route path="/test">
        <Test />
      </Route>
    </div>
  );
}

export default App;
