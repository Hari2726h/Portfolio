import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/certifications', label: 'Certifications' },
    { path: '/coding', label: 'Coding' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">Hariharan</div>

        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {/* Hamburger icon changes to X when open */}
          {isOpen ? '✕' : '☰'}
        </button>

        <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
          {links.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={closeMenu}
                end={path === '/'}
              >
                {label}
                <span className="underline"></span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Overlay to close sidebar when clicked outside */}
      {isOpen && <div className="sidebar-overlay" onClick={closeMenu} />}
    </>
  );
};

export default Navbar;
