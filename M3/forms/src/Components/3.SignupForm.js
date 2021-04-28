// GOALS:
//    - combine onChange handlers into a single function
//    - disable the submit button if either form field is empty

import { Component } from "react";
import "./SignupForm.css";

class SignupForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
    };
  }

  // TODO: combine the onChange event handlers

  handleValueChange = (e) => {
    const {name } = e.target
    const {value} = e.target
    this.setState ({
      [name] : value,
    })
  }

  handleFirstNameChange = (e) => {
    this.setState({
      firstName: e.target.value,
    });
  };

  handleLastNameChange = (e) => {
    this.setState({
      lastName: e.target.value,
    });
  };

  handleSubmit = (e) => {    
    e.preventDefault();
    const {firstName, lastName } = this.state
    alert("form submitted by:" + " " + firstName +" "+ lastName);
  };

  // TODO: write a method to return true if firstName and lastName are
  isValidInput = () => {};

  render() {
    const { firstName, lastName } = this.state;
    // TODO: use this.isValidInput() to determine if we should disable the submit button

    return (
      <form className="SignupForm" onSubmit={this.handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        {/* TODO: update onChange handler */}
        <input
          type="text"
          name="firstName"
          id="firstName"
          onChange={this.handleValueChange}
          value={firstName}
        />

        <label htmlFor="lastName">Last Name:</label>
        {/* TODO: update onChange handler */}
        <input
          type="text"
          name="lastName"
          id="lastName"
          onChange={this.handleValueChange}
          value={lastName}
        />

        {/* TODO: disable button if form input is not valid */}
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default SignupForm;
