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
        <p className="footer-text-subtitle">
          Design based on{" "}
          <a
            href="https://github.com/saadpasta/developerFolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            saadpasta's portfolio
          </a>
        </p>
      </div>
    </Fade>
  );
}
