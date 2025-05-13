// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'coding', label: 'Coding' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logo">Hariharan</div>

      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        {links.map(({ id, label }) => (
          <li key={id}>
            <Link
              to={id}
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              activeClass="active"
              onClick={closeMenu}
            >
              {label}
              <span className="underline"></span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
