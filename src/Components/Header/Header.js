import React from "react";
import "./Header.css";
import Media from "react-media";
import Navigation from "./Navigation";
import HamburgerBox from "./Hamburger";
import { useHistory } from "react-router-dom";

function Header() {
  let history = useHistory();
  function handleclick() {
    history.push("/");
  }
  return (
    <div className="header">
      <div className="headerLeft">
        <h2 onClick={handleclick}>HM.</h2>
      </div>
      <Media query={{ maxWidth: 800 }}>
        {(matches) => (matches ? <HamburgerBox /> : <Navigation />)}
      </Media>
    </div>
  );
}

export default Header;
