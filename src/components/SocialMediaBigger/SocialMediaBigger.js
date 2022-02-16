import React from "react";
import "./SocialMediaBigger.scss";
import {socialMediaLinksToContact} from "../../portfolio";

export default function SocialMediaBigger() {
  if (!socialMediaLinksToContact.display) {
    return null;
  }
  return (
    <div className="social-media-div">
      {socialMediaLinksToContact.github ? (
        <a
          href={socialMediaLinksToContact.github}
          className="icon-button-bigger github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinksToContact.linkedin ? (
        <a
          href={socialMediaLinksToContact.linkedin}
          className="icon-button-bigger linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinksToContact.gmail ? (
        <a
          href={`mailto:${socialMediaLinksToContact.gmail}`}
          className="icon-button-bigger google"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-envelope"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinksToContact.facebook ? (
        <a
          href={socialMediaLinksToContact.facebook}
          className="icon-button-bigger facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-f"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinksToContact.whatsapp ? (
        <a
          href={socialMediaLinksToContact.whatsapp}
          className="icon-button-bigger whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-whatsapp"></i>
          <span></span>
        </a>
      ) : null}
    </div>
  );
}
