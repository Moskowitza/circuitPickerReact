import React from "react";
import PropTypes from "prop-types";
// import Header from "../Header/Header";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { getFunName } from "../../helpers";
import base from "../../base";
import { withRouter } from "react-router-dom";

class Circuit extends React.Component {
  myCircuit = React.createRef();
  static propTypes = {
    climbs: PropTypes.object.isRequired,
    circuit: PropTypes.object.isRequired
  };
  renderCircuit = key => {
    const climb = this.props.climbs[key];
    const count = this.props.circuit[key];
    const isAvailable = climb && climb.status === "available";
    const transitionOptions = {
      classNames: "circuit",
      key,
      timeout: { enter: 250, exit: 250 }
    };
    if (!climb) return null;
    if (!isAvailable) {
      return (
        <CSSTransition {...transitionOptions}>
          <li key={key}>
            Sorry {climb ? climb.color : "this climb"} is no longer set
          </li>
        </CSSTransition>
      );
    }
    return (
      <CSSTransition {...transitionOptions}>
        <li key={key}>
          color: {climb.color} grade: {climb.grade} repeat {count}
          <button onClick={() => this.props.removeFromCircuit(key)}>
            remove
          </button>
        </li>
      </CSSTransition>
    );
  };
  saveCircuit = e => {
    // Prevent this function from running
    e.preventDefault();
    const myCircuit = this.myCircuit.current.value;
    console.log(`saveCircuit circuitName ${myCircuit}`);
    const gymName = this.props.gymName;
    console.log(`saveCircuit gymName ${gymName}`);
    this.ref = base.post(`${gymName}/${myCircuit}`, {
      data: this.props.circuit
    });
    // change page to the RunCircuit
    this.props.history.push(`/gym/${gymName}/${myCircuit}`);
  };

  render() {
    const climbIds = this.props.circuit ? Object.keys(this.props.circuit) : 0;
    const total = climbIds.reduce((prevTotal, key) => {
      const climb = this.props.climbs[key];
      const count = this.props.circuit[key];
      const isAvailable = climb && climb.status === "available";
      if (isAvailable) {
        return prevTotal + count + climb.grade;
      }
      return total;
    }, 0);
    return (
      <div className="section">
        {/* <Header tagline="circuit picker tool" /> */}
        <h2>Circuit</h2>

        <TransitionGroup component="ul" className="circuit">
          {climbIds.map(this.renderCircuit)}
        </TransitionGroup>
        <div className="total">{total}</div>
        <form onSubmit={this.saveCircuit}>
          <input
            type="text"
            ref={this.myCircuit}
            required
            placeholder="circuit Name"
            defaultValue={getFunName()}
          />
          <button type="submit">Save Circuit</button>
        </form>
      </div>
    );
  }
}
export default withRouter(Circuit);
