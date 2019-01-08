import React from "react";

class AddClimb extends React.Component {
  colorRef = React.createRef();
  imageRef = React.createRef();
  descRef = React.createRef();
  gradeRef = React.createRef();
  wallRef = React.createRef();
  statusRef = React.createRef();
  addOrEdit = e => {
    e.preventDefault();
    const climb = {
      color: this.colorRef.current.value,
      image: this.imageRef.current.value,
      desc: this.descRef.current.value,
      grade: this.gradeRef.current.value,
      wall: this.wallRef.current.value,
      status: this.statusRef.current.value
    };
    this.props.addClimb(climb);
    //reset form
    e.currentTarget.reset();
  };
  render() {
    return (
      <form className="add-climb" onSubmit={this.addOrEdit}>
        <input
          name="color"
          ref={this.colorRef}
          type="text"
          placeholder="Color"
        />
        <input
          name="image"
          ref={this.imageRef}
          type="text"
          placeholder="Image"
        />
        <textarea name="desc" ref={this.descRef} placeholder="Description" />
        <input
          name="grade"
          ref={this.gradeRef}
          type="text"
          placeholder="Grade"
        />
        <input name="wall" ref={this.wallRef} type="text" placeholder="Wall" />
        <select name="status" ref={this.statusRef}>
          <option value="available">Climb On</option>
          <option value="unavailable">Removed</option>
        </select>
        <button type="submit">Save</button>
      </form>
    );
  }
}
export default AddClimb;
