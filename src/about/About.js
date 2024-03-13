import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="col py-3 d-flex align-items-center about-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
            <div className="about-me">
              <h2>About me</h2>
              <hr></hr>
              <p>
                I recently graduated from Nucamp Coding Bootcamp, where I
                learned the latest technologies and best practices in web
                development, such as React, React Native, HTML, CSS, and
                JavaScript. I hold a Bachelor of Fine Arts (BFA) in
                Fashion/Apparel Design from Parsons School of Design, where I
                honed my creativity, aesthetics, and problem-solving skills.
                From my experience as a fashion designer, I have extensive
                experience with graphic design software, a good eye for visual
                details and a proven ability to coordinate complex projects with
                many moving parts while working as part of a team. My goal is to
                combine my passion for fashion and technology, and create
                immersive and engaging digital experiences that enhance the
                lives of the users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
