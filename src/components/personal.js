import { Component } from "react";
import "./inputComponents.css";

class Personal extends Component {
  render() {
    return (
      <div id="container">
        <div id="header">
          Please enter any personal information you wish to display on your CV:
        </div>
        <form>
          <label htmlFor="nameInput">Full Name:</label>
          <input id="nameInput" type="text"></input>
          <label htmlFor="emailInput">Email Address:</label>
          <input id="emailInput" type="text"></input>
          <label htmlFor="addressInput">Home Address:</label>
          <input id="addressInput" type="text"></input>
          <label htmlFor="telephoneInput">Telephone Number:</label>
          <input id="telephoneInput" type="text"></input>
          <button onClick={this.props.onSubmit} id="submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Personal;
