import React from 'react';

import './Header.css';

import logo from '../assets/logo.svg';
import icon from '../assets/icon.svg';

function Header() {
  return (
    <header className="nav">
      <img src={logo} alt="logo" />
      <div className="nav-item">
        <a href="#">
          Meu perfil
          <img src={icon} alt="icon" className="icon" />
        </a>
      </div>
    </header>
  );
}

export default Header;
