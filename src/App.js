import React, { Component } from "react";
import Personal from "./components/personal";
import Education from "./components/education";
import Work from "./components/work";
import Display from "./components/display";
import uniqid from "uniqid";

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

      education: [],

      work: [],
    };

    this.switchPage = this.switchPage.bind(this);
    this.submitInput = this.submitInput.bind(this);
    this.addInput = this.addInput.bind(this);
  }

  switchPage = () => {
    if (this.state.currentPage === "personal") {
      this.setState({
        currentPage: "education",
      });
    } else if (this.state.currentPage === "education") {
      this.setState({
        currentPage: "work",
      });
    } else if (this.state.currentPage === "work") {
      this.setState({
        currentPage: "display",
      });
    }
  };

  addInput = (e) => {
    e.preventDefault();
    if (this.state.currentPage === "education") {
      const placeInput = document.querySelector("#placeInput");
      const qualificationInput = document.querySelector("#qualificationInput");
      const gradeInput = document.querySelector("#gradeInput");
      const skillsInput = document.querySelector("#skillsInput");

      const educationInput = {
        place: placeInput.value,
        qualification: qualificationInput.value,
        grade: gradeInput.value,
        skills: skillsInput.value,
        id: uniqid(),
      };

      this.setState({
        education: this.state.education.concat(educationInput),
      });
    } else if (this.state.currentPage === "work") {
      const placeInput = document.querySelector("#placeInput");
      const jobInput = document.querySelector("#jobInput");
      const responsibilitiesInput = document.querySelector(
        "#responsibilitiesInput"
      );
      const skillsInput = document.querySelector("#skillsInput");

      const workInput = {
        place: placeInput.value,
        job: jobInput.value,
        responsibilities: responsibilitiesInput.value,
        skills: skillsInput.value,
        id: uniqid(),
      };

      this.setState({
        work: this.state.work.concat(workInput),
      });
    }
  };

  submitInput = (e) => {
    e.preventDefault();

    if (this.state.currentPage === "personal") {
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
    }
    this.switchPage();
  };

  render() {
    const { personal } = this.state;
    return (
      <div id="container">
        {this.state.currentPage === "personal" && (
          <Personal onSubmit={this.submitInput} />
        )}
        {this.state.currentPage === "education" && (
          <Education
            onSubmit={this.submitInput}
            onAdd={this.addInput}
            inputNumber={this.state.education.length}
          />
        )}
        {this.state.currentPage === "work" && (
          <Work
            onSubmit={this.submitInput}
            onAdd={this.addInput}
            inputNumber={this.state.work.length}
          />
        )}
        {this.state.currentPage === "display" && (
          <Display
            name={personal.name}
            email={personal.email}
            address={personal.address}
            number={personal.phoneNumber}
            work={this.state.work}
            education={this.state.education}
          />
        )}
      </div>
    );
  }
}

export default App;
