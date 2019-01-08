import React from "react";
import PropTypes from "prop-types";

class EditClimb extends React.Component {
  static propTypes = {
    updateClimb: PropTypes.func,
    climb: PropTypes.shape({
      image: PropTypes.string,
      color: PropTypes.string,
      desc: PropTypes.string,
      grade: PropTypes.string,
      wall: PropTypes.string,
      status: PropTypes.string
    })
  };
  handleChange = event => {
    //update the climb
    //get copy of current climb
    const updatedClimb = {
      ...this.props.climb,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.updateClimb(this.props.index, updatedClimb);
  };
  render() {
    return (
      <div className="add-climb">
        <input
          name="color"
          value={this.props.climb.color}
          type="text"
          placeholder="Color"
          onChange={this.handleChange}
        />
        <input
          name="image"
          value={this.props.climb.image}
          type="text"
          placeholder="Image"
          onChange={this.handleChange}
        />
        <textarea
          className="desc"
          name="desc"
          ref={this.descRef}
          placeholder="Description"
          onChange={this.handleChange}
        />
        <input
          name="grade"
          value={this.props.climb.grade}
          type="text"
          placeholder="Grade"
          onChange={this.handleChange}
        />
        <input
          name="wall"
          value={this.props.climb.wall}
          type="text"
          placeholder="Wall"
          onChange={this.handleChange}
        />
        <select
          name="status"
          value={this.props.climb.status}
          onChange={this.handleChange}
        >
          <option value="available">Climb On</option>
          <option value="unavailable">Removed</option>
        </select>
        <button onClick={() => this.props.deleteClimb(this.props.index)}>
          Remove
        </button>
      </div>
    );
  }
}
export default EditClimb;
