import React from 'react';
import './styles/About.css';

const About = () => {
  return (
    <div className="container about-section" id="about">
      <div className="row">
        <div className="col">
          <div className="about-me">
            <h2>About</h2>
            <hr></hr>
            <p>
              I am a passionate front-end web developer focused on creating
              responsive and user-friendly applications. With a keen eye for
              detail and a commitment to excellence, I thrive on building
              solutions that meet client needs and enhance user experiences.
            </p>
            <p>
              I have a strong interest in React and enjoy developing interactive
              features and improving performance as I expand my skills.
              Additionally, my foundational knowledge of backend technologies
              provides insight into full-stack development challenges. I am
              eager to contribute fresh ideas, adapt quickly to new tools and
              methodologies, and keep up with industry trends through continuous
              learning and collaboration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
