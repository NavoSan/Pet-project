import React from 'react';
import logo from '../images/logo.png';

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Logo de la página" />
      <nav>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/about">Acerca de</a></li>
          <li><a href="/contact">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
