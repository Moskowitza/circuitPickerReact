import React from "react";
import PropTypes from "prop-types";

const SignIn = props => (
  <nav className="login">
    <h2>Route Editor Login</h2>

    <button className="register" onClick={() => props.authenticate("email")}>
      Register with Email
    </button>
  </nav>
);

SignIn.propTypes = {
  authenticate: PropTypes.func.isRequired
};
export default SignIn;
