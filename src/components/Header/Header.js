import React from "react";
import PropTypes from "prop-types";

const Header = props => (
  <div className="header">
    <h2>Circuit Picker</h2>
    <h3 className="tagline">
      <span>{props.tagline}</span>
    </h3>
  </div>
);
Header.propTypes = {
  tagline: PropTypes.string.isRequired
};
export default Header;
