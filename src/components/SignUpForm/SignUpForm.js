import React from "react";
// import base, { firebaseApp } from "../base";
import firebase from "firebase";

class SignUpForm extends React.Component {
  //Setting the initial values of this.state.email and this.state.password

  state = {
    email: "",
    password: "",
    confirmPassword: "",
    uid: null
  };
  // handle any changes to the input fields
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    alert(`Username: ${this.state.email}\nPassword: ${this.state.password}`);
    this.signUp(this.state.email, this.state.password);
  };

  signUp = (email, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorCode);
        console.log(errorMessage);
      });
  };
  render() {
    return (
      <div>
        <h1>Sign Up Page</h1>
        <label>Email Address:</label>
        <p>
          <input
            type="text"
            className="form-control"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </p>
        <label> Password: </label>
        <p>
          <input
            type="password"
            className="form-control"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
        </p>
        <label> Confirm Password: </label>
        <p>
          <input
            type="password"
            className="form-control"
            name="confirmPassword"
            value={this.state.confirmPassword}
            onChange={this.handleInputChange}
          />
        </p>
        <button onClick={this.handleFormSubmit}>Sign UP</button>
      </div>
    );
  }
}
export default SignUpForm;
