import React from "react";
import Boulders from "./Boulders/Boulders";
import Circuit from "./Circuit/Circuit";
import Header from "./Header/Header";
import Inventory from "./Inventory/Inventory";
import sampleClimbs from "../sampleClimbs";
import base from "../base";

class App extends React.Component {
  state = {
    climbs: {},
    circuit: {}
  };
  componentDidMount() {
    const { params } = this.props.match;
    const localStorageRef = localStorage.getItem(params.gymId);
    if (localStorageRef) {
      this.setState({ circuit: JSON.parse(localStorageRef) });
    }
    this.ref = base.syncState(`${params.gymId}/climbs`, {
      context: this,
      state: "climbs"
    });
  }
  componentWillUnmount() {
    console.log("unmounting");
    base.removeBinding(this.ref);
  }
  componentDidUpdate() {
    console.log(this.state.circuit);
    const { params } = this.props.match;
    localStorage.setItem(params.gymId, JSON.stringify(this.state.circuit));
    console.log("Component Did Update");
  }

  addClimb = climb => {
    console.log(`Adding${climb}`);
    //take copy of current state
    const climbs = { ...this.state.climbs };
    //name our new climb by the date, add it to the array of climbs we spread in above.
    climbs[`climb${Date.now()}`] = climb;
    this.setState({
      climbs
    });
  };
  updateClimb = (key, updatedClimb) => {
    //take copy and then update
    const climbs = { ...this.state.climbs };
    climbs[key] = updatedClimb;
    this.setState({
      climbs
    });
  };
  deleteClimb = key => {
    //copy state
    const climbs = { ...this.state.climbs };
    // update state
    climbs[key] = null;
    this.setState({
      climbs
    });
  };
  removeFromCircuit = key => {
    //copy state
    const circuit = { ...this.state.circuit };
    // update state
    // circuit[key] = circuit[key] - 1;
    delete circuit[key];
    this.setState({
      circuit
    });
  };
  loadSamples = samples => {
    this.setState({ climbs: sampleClimbs });
  };
  addToCircuit = key => {
    //copy state
    const circuit = { ...this.state.circuit };
    //add or update circuit
    circuit[key] = circuit[key] + 1 || 1;
    //call setState
    this.setState({
      circuit
    });
  };

  render() {
    return (
      <div className="app-container">
        <Header tagline="pick your climbs" />
        <div className="app-components">
          <Boulders
            climbs={this.state.climbs}
            addToCircuit={this.addToCircuit}
          />
          <Circuit
            history={this.props.history}
            gymName={this.props.match.params.gymId}
            circuit={this.state.circuit}
            climbs={this.state.climbs}
            removeFromCircuit={this.removeFromCircuit}
          />
          <Inventory
            addClimb={this.addClimb}
            loadSamples={this.loadSamples}
            climbs={this.state.climbs}
            updateClimb={this.updateClimb}
            deleteClimb={this.deleteClimb}
            gymId={this.props.match.params.gymId}
          />
        </div>
      </div>
    );
  }
}
export default App;
