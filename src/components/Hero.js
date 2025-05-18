import React, { useState, useEffect } from 'react';
import './Hero.css';
import resume from './resume.pdf';
const Hero = () => {
  const textArray = [
    "Aspiring Full-Stack Developer",
    "Passionate Problem Solver",
    "React & JavaScript Enthusiast"
  ];

  const [typedText, setTypedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = textArray[wordIndex];
    let typingDelay = isDeleting ? 40 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(currentWord.substring(0, letterIndex + 1));
        setLetterIndex((prev) => prev + 1);

        if (letterIndex + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1000); // wait before deleting
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
  }, [typedText, isDeleting, letterIndex, wordIndex, textArray]);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <h2 className="welcome-text">Welcome to My Dev World 👨‍💻</h2>

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
        "Code is like humor. When you have to explain it, it’s bad."
      </p>

   

      <div className="scroll-indicator" onClick={scrollToNextSection}>
        ↓
      </div>

     <a href={resume} download="Hariharan_Resume.pdf" className="btn">
  📄 Download Resume
</a>

    </section>
  );
};

export default Hero;
