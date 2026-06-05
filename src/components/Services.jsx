import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies',
      price: 'Starting at $999'
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps for iOS and Android',
      price: 'Starting at $1499'
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces with excellent user experience',
      price: 'Starting at $799'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>What we can do for you</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card fade-in-up" key={index} style={{animationDelay: `${index * 0.1}s`}}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-price">{service.price}</div>
              <button className="btn btn-primary">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;