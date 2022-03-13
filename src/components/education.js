import { Component } from "react";
import "./inputComponents.css";

class Education extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div id="container">
          <div>
            <div id="header">
              Please enter the following information regarding any
              qualifications that you may have:
            </div>
            <div id="inner-container">
              <form>
                <label htmlFor="placeInput">
                  Name of Education Institution:
                </label>
                <input id="placeInput" type="text"></input>
                <label htmlFor="qualificationInput">
                  Name of Qualification:
                </label>
                <input id="qualificationInput" type="text"></input>
                <label htmlFor="gradeInput">Grade Achieved:</label>
                <input id="gradeInput" type="text"></input>
                <label htmlFor="skillsInput">Skills Acquired:</label>
                <input id="skillsInput" type="text"></input>
                <div id="button-container">
                  <button onClick={this.props.onAdd} id="add" type="submit">
                    Add
                  </button>
                  <button
                    onClick={this.props.onSubmit}
                    id="submit"
                    type="submit"
                  >
                    Finish
                  </button>
                </div>
              </form>
              <div id="inputInfo">
                {"Number of qualifications added: "}
                {this.props.inputNumber}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
