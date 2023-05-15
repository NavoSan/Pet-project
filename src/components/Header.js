import React from 'react';
import logo from '../images/logo.png';
import '../css/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="navbar">
      <img className="navbar-logo" src={logo} alt="Logo de la página" />
        <ul className="navbar-menu">
          <li className="navbar-menu-item active">
           <Link to="/">Home</Link>
          </li>
          <li className="navbar-menu-item">
            <Link to="/about">About</Link>
          </li>
          <li className="navbar-menu-item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header> 
  );
};

export default Header;
