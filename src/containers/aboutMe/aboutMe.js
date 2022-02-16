import React from "react";
import {Fade} from "react-reveal";
import {aboutMe} from "../../portfolio";
import "./aboutMe.scss";

export default function AboutMe() {
  return (
    <div className="main" id="aboutMe">
      <div className="aboutMe-main-div">
        <Fade left duration={1000}>
          <div className="aboutMe-text-div">
            <h1 className="aboutMe-heading">{aboutMe.title} </h1>
            <p className="subTitle aboutMe-text-subtitle">
              {aboutMe.description}
            </p>
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="aboutMe-image-div">
            <img
              src="https://res.cloudinary.com/dv1ksnrvk/image/upload/v1644071572/WhatsApp_Image_2022-02-05_at_11.32.37_emt32s.jpg"
              alt="imagen"
              className="image-profile"
            />
          </div>
        </Fade>
      </div>
    </div>
  );
}
