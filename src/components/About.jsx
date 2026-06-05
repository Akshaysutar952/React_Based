import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container about-container">
        <div className="about-image fade-in-up">
          <div className="image-placeholder">
            <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
              <rect width="400" height="300" fill="#e8f5e9" rx="10"/>
              <text x="200" y="150" textAnchor="middle" fill="#4caf50" fontSize="20">About Image</text>
            </svg>
          </div>
        </div>
        <div className="about-content fade-in-up" style={{animationDelay: '0.2s'}}>
          <h2>About Our Company</h2>
          <p>We are a team of passionate developers and designers dedicated to creating innovative solutions for our clients.</p>
          <p>With over 5 years of experience in the industry, we've helped hundreds of businesses establish their online presence and achieve their goals.</p>
          <div className="stats">
            <div className="stat">
              <h3>500+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat">
              <h3>100+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat">
              <h3>24/7</h3>
              <p>Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;