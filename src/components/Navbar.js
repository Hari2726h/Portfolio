import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  const links = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#coding', label: 'Coding' },
    { href: '#contact', label: 'Contact' },
  ];

  // Scroll handler to set active link based on section in viewport
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 120; // Adjust offset for navbar height

      let current = '';
      for (const { href } of links) {
        const section = document.querySelector(href);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            current = href;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // call once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">Hariharan C</div>

        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? '✕' : '☰'}
        </button>

        <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={closeMenu}
                className={`navbar-link ${activeSection === href ? 'active' : ''}`}
              >
                {label}
                <span className="underline"></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Overlay to close sidebar when clicking outside */}
      {isOpen && <div className="sidebar-overlay open" onClick={closeMenu} />}
    </>
  );
};

export default Navbar;
