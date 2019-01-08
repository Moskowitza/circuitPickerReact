import React from "react";
import { getFunName } from "../../helpers";
import base from "../../base";
import Header from "../Header/Header";

class GymPicker extends React.Component {
  myInput = React.createRef();
  state = {
    gyms: []
  };
  getGyms() {
    base.fetch("/", {
      context: this,
      asArray: true,
      then(data) {
        const gyms = [];
        data.forEach(gym => {
          gyms.push(gym.key);
        });
        this.setState({ gyms });
      }
    });
  }
  componentWillMount() {
    this.getGyms();
  }
  goToGym = e => {
    //prevent form from submitting
    e.preventDefault();
    // get input text
    // const gymName = this.myInput.value.value;
    const gymName = this.myInput.current.value;
    // change page to the gym name
    this.props.history.push(`/gym/${gymName}`);
  };
  // componentDidMount = () => console.log("mounted");
  render() {
    return (
      <>
        <Header tagline="Pick  A Gym & Design a Circuit" />
        <form className="gym-selector" onSubmit={this.goToGym}>
          <h2>This is the Gym Picker Component</h2>
          <input
            type="text"
            ref={this.myInput}
            required
            placeholder="Gym Name"
            defaultValue={getFunName()}
          />
          <button type="submit">visit gym</button>
        </form>
        <form className="gym-selector" onSubmit={this.goToGym}>
          <select name="gym" ref={this.myInput}>
            {this.state.gyms.map(gym => (
              <option value={gym}>{gym}</option>
            ))}
          </select>
          <button type="submit">visit gym</button>
        </form>
      </>
    );
  }
}
export default GymPicker;
