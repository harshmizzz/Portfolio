import React from "react";
import Progress_bar from "./ProgressBar";
import "./Skills.css";

function Skills() {
  return (
    <div className="skills">
      <div className="skillsHeading">
        <h1>My Skills</h1>
      </div>
      <div className="skillsContent">
        <div className="skillsContainer">
          <h2>Html</h2>
          <Progress_bar bgcolor="#ec7748c3" progress="90" height={20} />
        </div>
        <div className="skillsContainer">
          <h2>CSS</h2>
          <Progress_bar bgcolor="#ec7748c3" progress="90" height={20} />
        </div>
        <div className="skillsContainer">
          <h2>Javascript</h2>
          <Progress_bar bgcolor="#ec7748c3" progress="85" height={20} />
        </div>
        <div className="skillsContainer">
          <h2>ReactJS</h2>
          <Progress_bar bgcolor="#ec7748c3" progress="80" height={20} />
        </div>
        <div className="skillsContainer">
          <h2>GitHub</h2>
          <Progress_bar bgcolor="#ec7748c3" progress="85" height={20} />
        </div>
        <div className="skillsContainer">
          <h2>Firebase</h2>
          <Progress_bar bgcolor="#ec7748c3" progress="75" height={20} />
        </div>
        <div className="skillsContainer">
          <h2>C++</h2>
          <Progress_bar bgcolor="#ec7748c3" progress="85" height={20} />
        </div>
      </div>
    </div>
  );
}

export default Skills;
