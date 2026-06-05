import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Contact Us</h2>
          <p>Get in touch with us for any inquiries</p>
        </div>
        <div className="contact-container">
          <div className="contact-info fade-in-up">
            <h3>Let's Talk</h3>
            <p>Have a project in mind? We'd love to hear about it.</p>
            <div className="info-item">
              <strong>Email:</strong> hello@company.com
            </div>
            <div className="info-item">
              <strong>Phone:</strong> +1 (555) 123-4567
            </div>
            <div className="info-item">
              <strong>Address:</strong> 123 Business St, City, State 12345
            </div>
          </div>
          <form className="contact-form fade-in-up" onSubmit={handleSubmit} style={{animationDelay: '0.2s'}}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;