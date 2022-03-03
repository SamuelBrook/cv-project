import { Component } from "react";

class Personal extends Component {
  render() {
    return (
      <div>
        <div>
          Please enter any personal information you wish to display on your CV:
        </div>
        <form>
          <label htmlFor="nameInput">Full Name</label>
          <input id="nameInput" type="text"></input>
          <label htmlFor="addressInput">Email Address</label>
          <input id="addressInput" type="text"></input>
          <label htmlFor="emailInput">Home Address</label>
          <input id="emailInput" type="text"></input>
          <label htmlFor="telephoneInput">Telephone Number</label>
          <input id="telephoneInput" type="text"></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
