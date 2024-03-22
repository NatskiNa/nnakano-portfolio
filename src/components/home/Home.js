import React from 'react';
import './Home.css';
import Typewriter from 'typewriter-effect';
import myResume from './NN_CV.pdf';
import { Link } from 'react-scroll';

const Home = ({ isSidebarOpen }) => {
  return (
    <div className="container-fluid home" id="home">
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
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={100}
            offset={-100}
          >
            <div className="contact-me-btn">Contact Me</div>
          </Link>
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
