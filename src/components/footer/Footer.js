import React from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";

export default function Footer() {
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className="footer-text">
          Developed by{" "}
          <a
            href="https://github.com/lautaroPH/Portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lautaro Perez Herrera
          </a>
        </p>
      </div>
    </Fade>
  );
}
