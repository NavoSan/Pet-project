import React, {useState, useEffect} from 'react';
import image from '../images/image-contact.png'


import '../css/ContactPage.css';

const ContactPage = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !email || !message) {
      setError('Please fill in all fields');
      return;
    }

    setIsSending(true);
  
    // Envío de los datos del formulario al servidor
    fetch('/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
          setIsSending(false);
        } else {
          setIsSent(true);
          setName('');
          setEmail('');
          setMessage('');
        }
      })
      .catch((error) => {
        setError('An error occurred. Please try again later.');
        setIsSending(false);
      });
  };
  

  return (
    <div className="contact-page-container">
      <div className="contact-page-content">
      <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>

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

