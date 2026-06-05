import React from 'react';
import { FaRocket, FaShieldAlt, FaHeadset, FaMobileAlt } from 'react-icons/fa';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: <FaRocket />,
      title: 'Fast Performance',
      description: 'Lightning fast loading times and smooth user experience'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Secure Platform',
      description: 'Enterprise-grade security to protect your data'
    },
    {
      icon: <FaHeadset />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for your needs'
    },
    {
      icon: <FaMobileAlt />,
      title: 'Responsive Design',
      description: 'Perfect experience on all devices and screen sizes'
    }
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-header">
          <h2>Our Features</h2>
          <p>Discover what makes us different from the rest</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card fade-in-up" key={index} style={{animationDelay: `${index * 0.1}s`}}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;