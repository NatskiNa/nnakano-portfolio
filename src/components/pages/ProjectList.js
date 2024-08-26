import React from 'react';
import './styles/Projects.css';

const ProjectList = ({
  name,
  description,
  projectLink,
  techUsed,
  liveLink,
}) => {
  return (
    <div className="container projects-section">
      <div className="project-list">
        <div className="title">
          <h5>{name}</h5>
        </div>

        <p className="description">{description}</p>

        <div className="row">
          {techUsed &&
            techUsed.map((tech, index) => (
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" key={index}>
                <div className="techUsed-in-project">
                  <p>{tech.techName}</p>
                </div>
              </div>
            ))}
        </div>
        <div className="project-link-buttons">
          <div className="code-link-btn">
            <a
              target="_"
              className="text-decoration-none text-white"
              href={projectLink}
            >
              Source Code
            </a>
          </div>
          <div className="live-link-btn text-decoration-none ">
            <a
              target="_"
              className="text-decoration-none text-white"
              href={liveLink}
            >
              Watch Live
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
