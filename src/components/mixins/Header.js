import React from "react";
import { useHistory, Link } from "react-router-dom";
import Logo from "../../resources/logo.png";
import { Button } from "reactstrap";
import { connect } from "react-redux";

function Header(props) {
  let history = useHistory();
  console.log("props", props.user);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    history.push("/");
  };

  return (
    <div className="header">
      <div class="logo">
        <img src={Logo} alt="logo" />
        <h1>DROOM</h1>
      </div>

      {localStorage.getItem("token") ? (
        <Button outline id="logbutton" onClick={logout}>
          Log out
        </Button>
      ) : null}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, null)(Header);
