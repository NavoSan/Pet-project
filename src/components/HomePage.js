import React from 'react';
import image from '../images/homepage-image.jpg';

const HomePage = () => {
  return (
    <div>
      <h1>Bienvenido a Mi Página</h1>
      <img src={image} alt="Imagen de la página de inicio" />
      <p>Lorem ipsum madafokers.</p>
    </div>
  );
};

export default HomePage;
