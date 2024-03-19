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
              A self-motivated front-end developer with a passion for learning
              and a drive for excellence. <br></br>
              Currently looking for new opportunities in industry and willing to
              learn quickly and work on challenging projects with the latest
              technologies.
            </p>
            <p>
              Recently graduated from Nucamp Coding Bootcamp, I've gained
              expertise in React, React Native, HTML, CSS, Bootstrap, and
              JavaScript. Eager to apply my skills to challenging projects with
              the latest technologies.
            </p>
            <p>
              With a background in fashion design, I bring a unique perspective
              and a knack for detail-oriented work to the development field.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
