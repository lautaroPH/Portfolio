import React from "react";
import {Fade} from "react-reveal";
import {projects} from "../../portfolio";
import "./projects.scss";

export default function Projects() {
  return (
    <div className="main" id="portfolio">
      <Fade bottom duration={1000} distance="20px">
        <h1 className="project-main-title">Portfolio</h1>
        <div className="projects-cards">
          {projects.map(project => (
            <div className="projects-card" key={project.title}>
              <h3 className="projects-card-title">{project.title}</h3>
              <a
                href={project.urlPage}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="projects-card-img"
                  src={project.image}
                  alt="tittulo"
                />
              </a>
              <p className="projects-card-footer">
                <a
                  href={project.urlPage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-button-project"
                >
                  <i className="fas fa-globe-americas"></i>
                </a>
                <a
                  href={project.urlCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-button-project"
                >
                  <i className="fas fa-code"></i>
                </a>
              </p>
            </div>
          ))}
        </div>
      </Fade>
    </div>
  );
}
