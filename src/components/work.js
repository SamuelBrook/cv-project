import { Component } from "react";
import "./inputComponents.css";

class Work extends Component {
  constructor() {
    super();
  }

  addNew = (e) => {};

  render() {
    return (
      <div>
        <div id="container">
          <div>
            <div id="header">
              Please enter the following information regarding any work
              experience that you may have:
            </div>
            <div id="inner-container">
              <form>
                <label htmlFor="placeInput">
                  Name of Company or Organisation:
                </label>
                <input id="placeInput" type="text"></input>
                <label htmlFor="jobInput">Job Title:</label>
                <input id="jobInput" type="text"></input>
                <label htmlFor="responsibilitiesInput">Responsibilities:</label>
                <input id="responsibilitiesInput" type="text"></input>
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
                    Submit
                  </button>
                </div>
              </form>
              <div id="inputInfo">
                {"Number of qualifications added:"}
                {this.props.inputNumber}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
