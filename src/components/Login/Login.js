import React from "react";
import PropTypes from "prop-types";
const Login = props => (
  <nav className="login">
    <h2>inventory login</h2>
    <p>Sign in</p>
    <button className="google" onClick={() => props.authenticate("Google")}>
      Google Login
    </button>
  </nav>
);
Login.proptypes = {
  authenticate: PropTypes.func.isrequired
};

export default Login;
