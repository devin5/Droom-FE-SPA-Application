import React from "react";
import { useHistory } from "react-router-dom";
import Logo from "../../resources/logo.png";
import {Button} from 'reactstrap'

export default function Header() {
  let history = useHistory();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id")
    history.push("/");
  };

  return (
    <div className="header">
    <div class="logo">
    <img src={Logo} alt="logo" />
      <h1>DROOM</h1>
    </div>
     
      {localStorage.getItem("token") ? (
        <Button  outline id="logbutton" onClick={logout}>Log out</Button>
      ) : null}
    </div>
  );
}
