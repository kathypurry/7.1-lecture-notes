// GOAL: add another text input for the user's last name.
// Checklist:
//       - update the initial state in the constructor,
//       - create an event handler to update state when the lastName input changes
//       - update the render method to render a controlled input
//       - update the handleSubmit method to alert the user with their first AND last name

import { Component } from "react";
import "./SignupForm.css";

class SignupForm extends Component {
  constructor() {
    super();
    // TODO: Update initial state
    this.state = {
      firstName: "",
      lastName:"",
    };
  }

  handleFirstNameChange = (e) => {
    this.setState({ firstName: e.target.value });
  };

  // TODO: complete the event handler:
  handleLastNameChange = (e) => {
    this.setState({ lastName : e.target.value})
  };

  // TODO: when the form is submitted, alert the user with their first AND last name
  handleSubmit = (e) => {
    e.preventDefault();
    alert("form submitted by:" + this.state.firstName +" "+ this.state.lastName);
  };

  render() {
    const { firstName } = this.state;
    const { lastName } = this.state

    console.log("rendering, firstName is:", firstName);
    console.log("rendering, lastName is:", lastName)
    return (
      <form className="SignupForm" onSubmit={this.handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          onChange={this.handleFirstNameChange}
          value={firstName}
        />

        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          onChange={this.handleLastNameChange}
          value={lastName}
        />
        
        {/* TODO: add jsx for the last name label and input */}
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default SignupForm;
