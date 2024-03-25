import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="container about-section" id="about">
      <div className="row">
        <div className="col">
          <div className="about-me">
            <h2>About</h2>
            <hr></hr>
            <p>
              A self-motivated front-end developer, I am eager to pursue new
              opportunities within the industry.
            </p>
            <p>
              Recently completing the Nucamp Coding Bootcamp, I have acquired
              expertise in React, React Native, HTML, CSS, Bootstrap, and
              JavaScript.
            </p>
            <p>
              Transitioning from an extensive background in high-end fashion, I
              bring a unique drive to innovate in alignment with current trends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
