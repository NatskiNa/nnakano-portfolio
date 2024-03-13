import React from 'react';
import './Home.css';
import Typewriter from 'typewriter-effect';
import myResume from './NN_CV.pdf';

const Home = () => {
  return (
    <div className="container-fluid home">
      <div className="container home-content">
        <h2>Hi, I'm Natski, </h2>
        <h1>
          <Typewriter
            options={{
              strings: ['FRONT-END WEB DEVELOPER', 'React | React Native'],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <div className="buttons">
          <div className="hire-me-btn">Hire Me</div>
          <div className="resume-btn">
            <a className="resume-link" href={myResume} download="NN_CV.pdf">
              Get Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
