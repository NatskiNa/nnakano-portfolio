import './Contact.css';
import React from 'react';
import contactpic from '../../image/connect.jpg';
import { MdOutlineEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="container contact-section" id="contact">
      <div className="row">
        <div className="col-md-8">
          <div className="contact-image">
            <img src={contactpic} alt="contact" />
          </div>
        </div>

        <div className="col-md-4">
          <ul>
            <div className="mx-2 my-2 border rounded py-2 px-2">
              <li className="contact-item">
                <a
                  className="text-black"
                  href="mailto:owl35@proton.me"
                  target="/blank"
                >
                  <MdOutlineEmail size={27} className="fs-5" /> Email
                </a>
              </li>
            </div>
            <div className="mx-2 my-2 border rounded py-2 px-2">
              <li className="contact-item">
                <a
                  className="text-black"
                  href="https://github.com/NatskiNa"
                  target="/blank"
                >
                  <FaGithub size={27} className="fs-5" /> Github
                </a>
              </li>
            </div>
            <div className="mx-2 my-2 border rounded py-2 px-2">
              <li className="contact-item">
                <a
                  className="text-black"
                  href="https://www.linkedin.com/in/natskina/"
                  target="/blank"
                >
                  <FaLinkedin size={27} className="fs-5" /> LinkedIn
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
