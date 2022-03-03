import { Component } from "react";

class Work extends Component {
  constructor() {}

  addNew = (e) => {};

  render() {
    return (
      <div>
        <div>
          Please enter the following information regarding any work experience
          that you may have:
        </div>
        <form>
          <label htmlFor="placeInput">Name of Company or Organisation</label>
          <input id="placeInput" type="text"></input>
          <label htmlFor="jobInput">Job Title</label>
          <input id="jobInput" type="text"></input>
          <label htmlFor="responsibilitiesInput">Responsibilities</label>
          <input id="responsibilitiesInput" type="text"></input>
          <label htmlFor="skillsInput">Skills Acquired</label>
          <input id="skillsInput" type="text"></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
