import { Component } from "react";
import "./inputComponents.css";

class Work extends Component {
  constructor() {}

  addNew = (e) => {};

  render() {
    return (
      <div>
        <div id="header">
          Please enter the following information regarding any work experience
          that you may have:
        </div>
        <form>
          <label htmlFor="placeInput">Name of Company or Organisation:</label>
          <input id="placeInput" type="text"></input>
          <label htmlFor="jobInput">Job Title:</label>
          <input id="jobInput" type="text"></input>
          <label htmlFor="responsibilitiesInput">Responsibilities:</label>
          <input id="responsibilitiesInput" type="text"></input>
          <label htmlFor="skillsInput">Skills Acquired:</label>
          <input id="skillsInput" type="text"></input>
          <button id="submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Work;
