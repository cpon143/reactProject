// Header.js
import React from 'react';
import logo from './logo.png';
import './Header.css';

const Header = () => {
  const toggleMenu = () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.checked = !menuToggle.checked;
    navLinks.classList.toggle('open');
  };

  return (
    <header className="header head-with-mainS">
        <img src={logo} alt="Logo" className="logo" />
        <nav>
          <input type="checkbox" id="menu-toggle" className="menu-toggle" />
          <label htmlFor="menu-toggle" className="menu-icon" onClick={toggleMenu}>&#9776;</label>
          <ul className="nav-links">
            <li><a href="www.google.com"><b>Home</b></a></li>
            <li><a href="www.google.com"><b>Service</b></a></li>
            <li><a href="www.google.com"><b>Study Abroad</b></a></li>
            <li><a href="www.google.com"><b>About Us</b></a></li>
            <li><a href="www.google.com"><b>Contact Us</b></a></li>
            {/* New menu item for smartphone view */}
            {/* <li className="smartphone-only"><a href="www.google.com"><b>New Item</b></a></li> */}
          </ul>
        </nav>
      </header>
  );
};

export default Header;
