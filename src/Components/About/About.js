import React from "react";
import "./About.css";
function About() {
  return (
    <div className="about">
      <div className="aboutHeading">
        <h2>About Me</h2>
        <div className="aboutline"></div>
      </div>
      <div className="aboutInfo">
        <div className="aboutprofile">
          <img src="/Images/profile.png" alt="" />
          <button>
            <a href="/Images/Resume-Harsh-Mishra.pdf" target="_blank">
              Resume
            </a>
          </button>
        </div>
        <div className="aboutcontent">
          <div className="aboutContentHeading">
            <h2>I'm Harsh Mishra and i'm a ReactJs Developer</h2>
          </div>
          <div className="aboutContentBig">
            <p>
              I am a Btech-IT student at SRMIST. Due to graduate in the coming
              years, I am eager to secure challenging roles in the IT industry.
              I’m an independent web developer who is passionate about bringing
              the client’s visions to life. My strongest skill is my creativity.
              Being able to gather client’s requirements and translate those
              into an engaging, effective, and unique website is what has helped
              me make beautiful websites. Alongside this, I have developed sound
              communication skills while delivering presentations to large
              audiences at university. As such, I am confident that I can make
              an instant impact in engineering roles. I am eager to hear about
              potential career opportunities, so I would be pleased to chat
              about job openings in the engineering sphere.
            </p>
          </div>
          <div className="aboutContentSmall">
            <div className="aboutContentSmallBox">
              {" "}
              <p>Course: </p>
              <span>Btech-Information Technology</span>
            </div>
            <div className="aboutContentSmallBox">
              <p>College: </p>
              <span>SRM Institute of Science & Technology</span>
            </div>
            <div className="aboutContentSmallBox">
              <p>Graduation: </p>
              <span>Btech-IT 2023</span>
            </div>
            <div className="aboutContentSmallBox">
              <p>Technologies:</p>
              <span>ReactJs,Web Development,C++,Firebase,Github</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
