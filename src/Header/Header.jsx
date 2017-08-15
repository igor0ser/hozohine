import React from 'react';
import logo from './logo.png';
import './Header.css';

const Header = () => (
  <header className="header">
    <img src={logo} className="header__logo" alt="logo" />
    <h2>Super Awesome App</h2>
  </header>
);

export default Header;
