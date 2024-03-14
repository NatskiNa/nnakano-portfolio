import React from 'react';
import './Projects.css';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const ProjectList = ({
  name,
  image,
  description,
  projectLink,
  techUsed,
  liveLink,
}) => {
  return (
    <>
      <div className="project-list">
        <div className="title-and-chevron">
          <h5>{name}</h5>
          <p>
            <FaChevronUp size={16} />
          </p>
        </div>
        <div className="row">
          {techUsed &&
            techUsed.map((tech, index) => (
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12" key={index}>
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
    </>
  );
};

export default ProjectList;
