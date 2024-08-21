// src/components/ContentSection.js

import React from 'react';
import '../css/Industries_Ideas.css';
import logo from '../images/office.avif';

const Industries = () => {
  return (
    <section className="content-section">
      <div className="text-content">
        <h2>Innovative Industrial Solutions</h2>
        <p>
        Our customized IT solutions empower your business to achieve digital transformation. <br />
         Whether it's software development, data analytics, or IT infrastructure, <br />
        we deliver the cutting-edge technology and expertise <br /> needed to drive innovation and efficiency in your organization.
        </p>
        <button className="learn-more-btn">Learn More</button>
      </div>
      <div className="image-content">
        <img src={logo} alt="Logo" />  
      </div>
    </section>
  );
};

export default Industries;
