import React from 'react';
import './Home.css';
import Typewriter from 'typewriter-effect';
import myResume from './NN_CV.pdf';

const Home = () => {
  return (
    <div className="container-fluid home">
      <div className="container home-content">
        <h2>Hi, I'm a </h2>
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
            <a href={myResume} download="NNakano_cv">
              Get Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
