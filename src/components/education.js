import { Component } from "react";

class Education extends Component {
  constructor() {}

  addNew = (e) => {};

  render() {
    return (
      <div>
        <div>
          Please enter the following information regarding any qualifications
          that you may have:
        </div>
        <form>
          <label htmlFor="placeInput">Name of Education Institution</label>
          <input id="placeInput" type="text"></input>
          <label htmlFor="qualificationInput">Name of Qualification</label>
          <input id="qualificationInput" type="text"></input>
          <label htmlFor="gradeInput">Grade Achieved</label>
          <input id="gradeInput" type="text"></input>
          <label htmlFor="skillsInput">Skills Acquired</label>
          <input id="skillsInput" type="text"></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
