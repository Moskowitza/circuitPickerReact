import React from "react";
import PropTypes from "prop-types";
class Boulder extends React.Component {
  static propTypes = {
    details: PropTypes.shape({
      image: PropTypes.string,
      color: PropTypes.string,
      desc: PropTypes.string,
      grade: PropTypes.string,
      wall: PropTypes.string,
      status: PropTypes.string
    }),
    addToCircuit: PropTypes.func
  };
  handleClick = () => {
    this.props.addToCircuit(this.props.index);
  };
  render() {
    const { image, color, desc, grade, wall, status } = this.props.details;
    const isAvailable = status === "available";
    return (
      <li className="single-climb">
        <div className="info">
          <img className="thumbnail" src={image} alt={color} />
          <div className="details">
            <h3>{color}</h3>
            <h4>{grade} </h4>
            <p>{desc}</p>
            <p>{wall}</p>
          </div>
        </div>
        <button disabled={!isAvailable} onClick={this.handleClick}>
          {isAvailable ? "Add to Circuit" : "Sorry"}
        </button>
      </li>
    );
  }
}

export default Boulder;
