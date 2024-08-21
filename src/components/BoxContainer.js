// BoxContainer.js
import React from 'react';
import '../css/BoxContainer.css'; // Import the CSS file
import foodimage from '../images/food.avif'; // Adjust the path
import marketimage from '../images/2.avif'; // Adjust the path
import clothimage from '../images/3.avif'; // Adjust the path

const BoxContainer = () => {
  return (
    <div className="box-container">
      <div className="box">
        <img src={foodimage} alt="Restaurants & Food Businesses" />
        <h4>Front-end Development</h4>
        <p>
          Build an online store showcasing dishes with eye-catching images &
          easily update prices with our templates.
        </p>
        <button className="button">Get Apply Now</button>
      </div>
      <div className="box">
        <img src={marketimage} alt="Grocery Shop" />
        <h4>Machine Learning</h4>
        <p>
          Get your grocery store online with a user-friendly design that
          enhances your customers' shopping experience.
        </p>
        <button className="button">Get Apply Now</button>
      </div>
      <div className="box">
        <img src={clothimage} alt="Retail Stores" />
        <h4>Reactjs and Angular</h4>
        <p>
          Create a stunning showcase for your latest collections with our
          stylish templates and user-friendly interface.
        </p>
        <button className="button">Get Apply Now</button>
      </div>
    </div>
  );
}

export default BoxContainer;
