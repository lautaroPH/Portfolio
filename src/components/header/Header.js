import React from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import {greeting, skillsSection} from "../../portfolio";

function Header() {
  const viewSkills = skillsSection.display;

  return (
    <Headroom>
      <header className="header">
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className="navicon navicon-dark"></span>
        </label>
        <ul className="menu">
          <li>
            <a href="#aboutMe">About Me</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
