import React from 'react';

const ContactPage = () => {
  return (
    <div>
      <h1>Contacto</h1>
      <p>Ponte en contacto:</p>
      <form>
        <label>
          Nombre:
          <input type="text" name="name" required />
        </label>
        <label>
          Correo electrónico:
          <input type="email" name="email" required />
        </label>
        <label>
          Mensaje:
          <textarea name="message" required></textarea>
        </label>
        <button type="submit">Enviar mensaje</button>
      </form>
    </div>
  );
};

export default ContactPage;
