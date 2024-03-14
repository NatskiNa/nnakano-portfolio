import React from 'react';
import './About.css';

const About = () => {
  return (
    <>
      <div className="col py-3 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
              <div className="about-me">
                <h2 className="slide-in-top">About</h2>
                <hr></hr>
                <p>
                  A self-led learner front-end developer. <br></br>
                  Currently looking for new opportunities in industry and
                  willing to learn quickly and work on challenging projects with
                  the latest technologies.
                </p>
                <p>
                  Recently graduated from Nucamp Coding Bootcamp. <br></br>
                  Learned the latest technologies and best practices in web
                  development, such as React, React Native, HTML, CSS, Bootstrap
                  and JavaScript.
                </p>
                <p>
                  Previously worked as a fashion designer. <br></br>
                  Have a good eye for visual details and a proven ability to
                  coordinate complex projects with many moving parts while
                  working as part of a team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
