import { Component } from "react";
import "./inputComponents.css";

class Education extends Component {
  constructor() {
    super();
  }

  addNew = (e) => {};

  render() {
    return (
      <div>
        <div id="header">
          Please enter the following information regarding any qualifications
          that you may have:
        </div>
        <form>
          <label htmlFor="placeInput">Name of Education Institution:</label>
          <input id="placeInput" type="text"></input>
          <label htmlFor="qualificationInput">Name of Qualification:</label>
          <input id="qualificationInput" type="text"></input>
          <label htmlFor="gradeInput">Grade Achieved:</label>
          <input id="gradeInput" type="text"></input>
          <label htmlFor="skillsInput">Skills Acquired:</label>
          <input id="skillsInput" type="text"></input>
          <div id="button-container">
            <button id="add" type="submit">
              Add
            </button>
            <button id="submit" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Education;
