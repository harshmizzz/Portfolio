import React, { useState } from "react";
import "./Hamburger.css";
import { Turn as Hamburger } from "hamburger-react";
import { useHistory } from "react-router-dom";
function HamburgerBox() {
  const [isOpen, setOpen] = useState(false);
  let history = useHistory();
  return (
    <div className="hamburger">
      <Hamburger toggled={isOpen} toggle={setOpen} />
      <div className={isOpen ? "hamburgerOpen" : "hamburgerItems"}>
        <h3
          onClick={() => {
            history.push("/");
            setOpen(false);
          }}
        >
          Home
        </h3>
        <h3
          onClick={() => {
            history.push("/skills");
            setOpen(false);
          }}
        >
          Skills
        </h3>
        <h3
          onClick={() => {
            history.push("/projects");
            setOpen(false);
          }}
        >
          Projects
        </h3>
        <h3
          onClick={() => {
            history.push("/about");
            setOpen(false);
          }}
        >
          About
        </h3>
        <h3
          onClick={() => {
            history.push("/contact");
            setOpen(false);
          }}
        >
          Contact
        </h3>
      </div>
    </div>
  );
}

export default HamburgerBox;
