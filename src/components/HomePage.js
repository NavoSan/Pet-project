import React from 'react';
import '../css/HomePage.css'

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Bienvenidos a mi sitio web</h1>
        <p>
          Este es un sitio web dedicado al sexo
        </p>
      </div>
      <div className="features-section">
        <div className="feature">
          <h3>Productos de calidad</h3>
          <p>
            Ofrecemos productos de alta calidad para garantizar la satisfacción
            del cliente.
          </p>
        </div>
        <div className="feature">
          <h3>Envío gratis</h3>
          <p>
            Ofrecemos envío gratis en todos nuestros productos para ayudarte a
            ahorrar dinero.
          </p>
        </div>
        <div className="feature">
          <h3>Soporte en línea</h3>
          <p>
            Ofrecemos soporte en línea para garantizar que nuestros clientes
            estén satisfechos con sus compras.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

