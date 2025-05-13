import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Coding from './components/Coding';
import Contact from './components/Contact';
import './components/styles.css';

import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <>
      <Navbar />
       <br/>
       <br/>
       <br/>
      <div className="section" id="home"><Hero /></div>
      <div className="section" id="about"><About /></div>
      <div className="section" id="skills"><Skills /></div>
      <div className="section" id="projects"><Projects /></div>
      <div className="section" id="certifications"><Certifications /></div>
      <div className="section" id="coding"><Coding /></div>
      <div className="section" id="contact"><Contact /></div>
    </>
  );
}

export default App;
