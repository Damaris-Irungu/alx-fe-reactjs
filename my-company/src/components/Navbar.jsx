import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navbarStyle = {
    padding: '10px',
    backgroundColor: '#333',
    display: 'flex',
    justifyContent: 'space-around',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
  };

  return (
    <nav style={navbarStyle}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/about" style={linkStyle}>About</Link>
      <Link to="/services" style={linkStyle}>Services</Link>
      <Link to="/contact" style={linkStyle}>Contact</Link>
    </nav>
  );
};
export default Navbar;
