// GOAL: Create a form that let's a user enter their first name
//       (This form should be a 'controlled' component)

import { Component } from "react";
import "./SignupForm.css";

class SignupForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName : "",
    };
  }

  // TODO: update react state when user types in the text input
  handleFirstNameChange = (e) => {
    const { value } = e.target
    this.setState({firstName : value})

  };

  // TODO: handle form submission
  handleSubmit = (e) => {};

  render() {
    const { firstName } = this.state;
    console.log("rendering, firstName is:", firstName);
    return (
      <form className="SignupForm" onSubmit={this.handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" name="firstName" id="firstName" value={firstName} onChange={this.handleFirstNameChange}/>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default SignupForm;
