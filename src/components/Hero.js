import React, { useState, useEffect } from 'react';
import './Hero.css';
import resume from './resume.pdf';

const Hero = () => {
  const textArray = [
    "Software Developer",
    "Problem Solver",
    "Java & Spring Boot Enthusiast"
  ];

  const [typedText, setTypedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = textArray[wordIndex];
    const delay = isDeleting ? 40 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(currentWord.substring(0, letterIndex + 1));
        setLetterIndex(letterIndex + 1);

        if (letterIndex + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setTypedText(currentWord.substring(0, letterIndex - 1));
        setLetterIndex(letterIndex - 1);

        if (letterIndex === 0) {
          setIsDeleting(false);
          setWordIndex((wordIndex + 1) % textArray.length);
        }
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, letterIndex, wordIndex, textArray]);

  const scrollToNextSection = () => {
    const next = document.getElementById('about');
    if (next) next.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      <h2 className="welcome-text">Hi, I'm Hariharan 👋</h2>

      <div className="code-wrapper">
        <p>
          <span className="tag">const</span> <span className="var">developer</span> <span className="tag">=</span> <span className="bracket">{'{'}</span>
        </p>
        <p className="typed-line">
          &nbsp;&nbsp;<span className="property">name</span>: <span className="string">"Hariharan C"</span>,
        </p>
        <p className="typed-line">
          &nbsp;&nbsp;<span className="property">role</span>: <span className="string">"{typedText}"</span><span className="cursor">|</span>
        </p>
        <p><span className="bracket">{'};'}</span></p>
      </div>

      <p className="dev-quote">
        "I build clean and scalable web applications — one line of code at a time."
      </p>

      <div className="tech-icons">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring Boot" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
      </div>

      <a href={resume} download="Hariharan_Resume.pdf" className="btn">
        📄 Download Resume
      </a>

      <div className="scroll-indicator" onClick={scrollToNextSection} aria-label="Scroll to About Section">
        ↓
      </div>
    </section>
  );
};

export default Hero;
