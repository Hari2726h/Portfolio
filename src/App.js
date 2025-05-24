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

function App() {
  return (
    <div>
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="certifications">
        <Certifications />
      </section>
      <section id="coding">
        <Coding />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
