import React, { useState } from 'react';
import { Nav } from './NavStyle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav isOpen={isOpen}>
      <div className="container">
        <div className="brand">MyBrand</div>
        <div className="menu">
          <a href="#" className="menu-item">Home</a>
          <a href="#" className="menu-item">About</a>
          <a href="#" className="menu-item">Services</a>
          <a href="#" className="menu-item">Contact</a>
        </div>
        <button className="mobile-menu-button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>
      <div className="mobile-menu">
        <a href="#" className="mobile-menu-item">Home</a>
        <a href="#" className="mobile-menu-item">About</a>
        <a href="#" className="mobile-menu-item">Services</a>
        <a href="#" className="mobile-menu-item">Contact</a>
      </div>
    </Nav>
  );
};

export default Navbar;