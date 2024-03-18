import './Contact.css';
import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="container contact-section" id="contact">
      <div className="row">
        <div className="col-xl-8 col-lg-10 col-md-10 col-sm-12">
          <div className="contact">
            <h2>Contact Me</h2>
            <hr></hr>
            <div className="row">
              <div className="col buttons">
                <a
                  className="contact-info"
                  href="mailto:owl35@proton.me"
                  target="/blank"
                >
                  <MdOutlineEmail size={27} className="fs-5" /> Email
                </a>
              </div>
              <div className="col buttons">
                <a
                  className="contact-info"
                  href="https://github.com/NatskiNa"
                  target="/blank"
                >
                  <FaGithub size={27} className="fs-5" /> Github
                </a>
              </div>
              <div className="col buttons">
                <a
                  className="contact-info"
                  href="https://www.linkedin.com/in/natskina/"
                  target="/blank"
                >
                  <FaLinkedin size={27} className="fs-5" /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
