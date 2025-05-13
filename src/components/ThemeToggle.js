import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) setTheme(storedTheme);
  }, []);

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <button onClick={toggleTheme} style={toggleBtnStyle}>
      {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
};

const toggleBtnStyle = {
  padding: '0.5rem 1rem',
  fontSize: '0.9rem',
  border: 'none',
  backgroundColor: '#6a11cb',
  color: '#fff',
  borderRadius: '20px',
  cursor: 'pointer',
  zIndex: 1100,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
};



export default ThemeToggle;
