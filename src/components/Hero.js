import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const textArray = [
    "Aspiring Software Developer",
    "Passionate About Web Development",
    "Coding Enthusiast"
  ];

  const [typedText, setTypedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = textArray[wordIndex];
    let typingDelay = 100;

    if (isDeleting) {
      typingDelay = 50;
    }

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(currentWord.substring(0, letterIndex + 1));
        setLetterIndex((prev) => prev + 1);

        if (letterIndex + 1 === currentWord.length) {
          setIsDeleting(true);
        }
      } else {
        setTypedText(currentWord.substring(0, letterIndex - 1));
        setLetterIndex((prev) => prev - 1);

        if (letterIndex === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % textArray.length);
        }
      }
    }, typingDelay);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, letterIndex, wordIndex]);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <h1>Hi, I'm Hariharan C</h1>
      <p className="sub-text">{typedText}<span className="cursor">|</span></p>

      <a href="/resume.pdf" target="_blank" className="btn">
        📄 Download Resume
      </a>

      <div className="scroll-indicator" onClick={scrollToNextSection}>
        <span>↓</span>
      </div>
    </section>
  );
};

export default Hero;
