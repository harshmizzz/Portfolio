import React from "react";
import { useHistory } from "react-router-dom";

function Navigation() {
  let history = useHistory();
  return (
    <div className="headerRight">
      <h3
        onClick={() => {
          history.push("/");
        }}
      >
        Home
      </h3>
      <h3
        onClick={() => {
          history.push("/skills");
        }}
      >
        Skills
      </h3>
      <h3
        onClick={() => {
          history.push("/projects");
        }}
      >
        Projects
      </h3>
      <h3
        onClick={() => {
          history.push("/about");
        }}
      >
        About
      </h3>
      <h3
        onClick={() => {
          history.push("/contact");
        }}
      >
        Contact
      </h3>
    </div>
  );
}

export default Navigation;
