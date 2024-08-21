import React from 'react';
import '../css/MainSection.css';
import BoxContainer from '../components/BoxContainer'; 

const MainSections = () => {
  return (
    <div className="main-content">
      <section id="websites" className="section">
        <h3 className="sub-heading">WelCome To Our Gen-R-Creators</h3>
        <h1 className="heading">
          Build for Your Future With in <br/>
          <div className="back">Our Company</div>
        </h1>
        <div className="button-container">
          <a className="sign-up-button" href="#sign-up">Signup Now</a>
          <a className="sign-up-button1" href="#about">Get Contact</a>
        </div>
        <BoxContainer />
      </section>
    </div>
  );
}

export default MainSections;
