import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Capabilities from './components/Capabilities';
import Journey from './components/Journey';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Coding from './components/Coding';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-root">
      <Navbar />
      <Hero />
      <About />
      <Capabilities />
      <Journey />
      <Projects />
      <Skills />
      <Achievements />
      <Coding />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
