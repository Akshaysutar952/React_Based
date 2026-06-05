import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content fade-in-up">
          <h1>Welcome to Our Platform</h1>
          <p>We create amazing digital experiences that help businesses grow and succeed in the modern world.</p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-image fade-in-up" style={{animationDelay: '0.2s'}}>
          <div className="image-placeholder">
            <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
              <rect width="400" height="300" fill="#e3f2fd" rx="10"/>
              <text x="200" y="150" textAnchor="middle" fill="#007bff" fontSize="20">Hero Image</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;