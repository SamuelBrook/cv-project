import { Component } from "react";
import "./display.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

class Display extends Component {
  constructor(props) {
    super();
  }

  printDocument = () => {
    const input = document.querySelector("#cv-container");
    html2canvas(input).then((canvas) => {
      const img = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(img, "PNG", 0, 0);
      pdf.save("download.pdf");
    });
  };

  render() {
    const { name, address, number, email, work, education } = this.props;
    return (
      <div>
        <div id="cv-container">
          <div id="header">
            <h1 id="title">{name}</h1>
            <div id="personal-details">
              <div>{address}</div>
              <div>{number}</div>
              <div>{email}</div>
            </div>
          </div>
          <div id="work-experience">
            <h2 id="heading">Work Experience</h2>
            <div>
              {work.map((job) => {
                return (
                  <div class="job" key={job.id}>
                    <h3>{job.job}</h3>
                    <div>{job.place}</div>
                    <h4 id="responsibilities">Responsibilities</h4>
                    <div>{job.responsibilities}</div>
                    <h4 id="skills">Skills</h4>
                    <div>{job.skills}</div>
                  </div>
                );
              })}
            </div>
            <div id="education">
              <h2 id="heading">Education</h2>
              <div>
                {education.map((qual) => {
                  return (
                    <div class="qual" key={qual.id}>
                      <h3>{qual.qualification}</h3>
                      <div>{qual.place}</div>
                      <div>{qual.grade}</div>
                      <h4 id="skills">Skills</h4>
                      <div>{qual.skills}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <button onClick={this.printDocument}>Download PDF</button>
      </div>
    );
  }
}

export default Display;
