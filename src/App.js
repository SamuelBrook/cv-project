import React, { Component } from "react";
import Personal from "./components/personal";
import Education from "./components/education";
import Work from "./components/work";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentPage: "personal",
      personal: {
        name: "",
        email: "",
        address: "",
        phoneNumber: "",
      },

      education: {},

      work: {},
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.switchPage = this.switchPage.bind(this);
  }

  switchPage = () => {
    if (this.state.currentPage === "personal") {
      this.setState({
        currentPage: "education",
      });
    } else {
      this.setState({
        currentPage: "work",
      });
    }
  };

  onSubmit = (e) => {
    e.preventDefault();

    const nameInput = document.querySelector("#nameInput");
    const emailInput = document.querySelector("#emailInput");
    const addressInput = document.querySelector("#addressInput");
    const telephoneInput = document.querySelector("#telephoneInput");

    this.setState({
      personal: {
        name: nameInput.value,
        email: emailInput.value,
        address: addressInput.value,
        phoneNumber: telephoneInput.value,
      },
    });

    this.switchPage();
  };

  render() {
    return (
      <div id="container">
        {this.state.currentPage === "personal" && (
          <Personal onSubmit={this.onSubmit} />
        )}
        {this.state.currentPage === "education" && (
          <Education onSubmit={this.onSubmit} />
        )}
        {this.state.currentPage === "work" && <Work onSubmit={this.onSubmit} />}
      </div>
    );
  }
}

export default App;
