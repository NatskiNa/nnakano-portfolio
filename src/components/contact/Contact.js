import './Contact.css';
import React from 'react';
import contactpic from '../../image/connect.jpg';

const Contact = () => {
  return (
    <div className="col py-3 d-flex align-items-center">
      <div className="container contact-section">
        <div className="row">
          <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
            <div className="contact-image">
              <img src={contactpic} alt="contact" />
            </div>
          </div>
          <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7">
            <div className="contact-form"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
