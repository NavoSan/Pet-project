import React from 'react';
import '../css/ContactPage.css';
import image from '../images/image-contact.png'

const ContactPage = () => {
  return (
    <div className="contact-page-container">
      <div className="contact-page-content">
      <h1>Contact Us</h1>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
      
      <div className="contact-image-container">
        <div className="contact-text">
          <h3>Lorem ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            suscipit est non metus malesuada convallis.
          </p>
        </div>
        <img src={image} alt="Contact" />
      </div>

    </div>
  );
};

export default ContactPage;

