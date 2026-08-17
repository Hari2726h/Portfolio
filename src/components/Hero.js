import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FiMail, FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import profileImg from "./WhatsApp Image 2026-04-05 at 8.57.55 PM.jpeg";
import { fadeUp, staggerContainer, cardTap } from "../lib/motion";

const ROLES = [
  "SDE Intern @ Kapture CX",
  "Backend & AI Systems Engineer",
  "Java & Spring Boot Specialist",
  "Problem Solver",
];

const Hero = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    const speed = deleting ? 30 : 75;

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (charIndex + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        setText(current.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        if (charIndex === 0) {
          setDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, deleting, roleIndex]);

  return (
    <>
      <style>{`
#hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: var(--bg);
  color: var(--text-primary);
  padding: 140px var(--space-6) var(--space-12);
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background-image:
    linear-gradient(to right, var(--border) 1px, transparent 1px),
    linear-gradient(to bottom, var(--border) 1px, transparent 1px);
  background-size: 64px 64px;
  -webkit-mask-image: radial-gradient(ellipse 60% 50% at 50% 30%, black 0%, transparent 75%);
  mask-image: radial-gradient(ellipse 60% 50% at 50% 30%, black 0%, transparent 75%);
  opacity: 0.6;
}

.hero-glow {
  position: absolute;
  top: -10%;
  right: -10%;
  width: 640px;
  height: 640px;
  background: radial-gradient(circle, var(--accent-soft) 0%, transparent 70%);
  filter: blur(20px);
  z-index: 0;
  pointer-events: none;
}

.hero-inner {
  position: relative;
  z-index: 1;
  max-width: var(--max-width);
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
  gap: var(--space-10);
  align-items: center;
}

.hero-role-tag {
  font-family: var(--font-mono);
  font-size: 0.9rem;
  color: var(--accent);
  min-height: 1.4em;
}

.hero-role-tag .cursor {
  color: var(--accent);
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.hero-title {
  font-family: var(--font-display);
  font-size: var(--fs-hero);
  font-weight: 600;
  line-height: 1.02;
  letter-spacing: -0.03em;
  color: var(--text-primary);
  margin: var(--space-4) 0 var(--space-5);
}

.hero-desc {
  font-size: var(--fs-md);
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 480px;
  margin-bottom: var(--space-8);
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  margin-bottom: var(--space-8);
  flex-wrap: wrap;
}

.hero-social {
  display: flex;
  gap: 0.6rem;
}

.hero-social-link {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 1.05rem;
  transition: all var(--transition-fast);
}

.hero-social-link:hover {
  border-color: var(--accent-border);
  color: var(--accent);
}

/* ===================== VISUAL ===================== */
.hero-visual {
  position: relative;
  display: flex;
  justify-content: center;
}

.hero-frame {
  position: relative;
  width: 100%;
  max-width: 360px;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  background: var(--surface);
  padding: 10px;
  box-shadow: var(--shadow-lg);
}

.hero-frame-img {
  width: 100%;
  border-radius: calc(var(--radius-lg) - 8px);
  filter: grayscale(45%) contrast(1.05);
  display: block;
}

.hero-chip {
  position: absolute;
  bottom: -18px;
  left: -18px;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 0.7rem 1rem;
  box-shadow: var(--shadow-md);
}

.hero-chip-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--success);
  box-shadow: 0 0 10px var(--success);
  flex-shrink: 0;
}

.hero-chip-text strong {
  display: block;
  font-family: var(--font-display);
  font-size: 0.95rem;
  color: var(--text-primary);
  line-height: 1.2;
}

.hero-chip-text span {
  font-size: 0.78rem;
  color: var(--text-muted);
}

.hero-corner {
  position: absolute;
  top: -12px;
  right: -12px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-full);
  padding: 0.5rem 0.9rem;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.hero-scroll-hint {
  position: absolute;
  bottom: var(--space-8);
  left: var(--space-6);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--text-muted);
  z-index: 1;
}

@media (max-width: 992px) {
  .hero-inner {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }

  .hero-visual {
    order: -1;
  }

  .hero-frame {
    max-width: 280px;
  }

  .hero-scroll-hint {
    display: none;
  }
}

@media (max-width: 480px) {
  #hero {
    padding: 120px var(--space-4) var(--space-10);
  }

  .hero-actions {
    flex-direction: column;
    align-items: stretch;
  }
}
      `}</style>

      <section id="hero">
        <div className="hero-bg" />
        <div className="hero-glow" />

        <div className="hero-inner">
          <motion.div variants={staggerContainer(0.1)} initial="hidden" animate="visible">
            <motion.div className="eyebrow" variants={fadeUp}>
              Software Development Engineer Intern · Kapture CX
            </motion.div>

            <motion.h1 className="hero-title" variants={fadeUp}>
              Hariharan C
            </motion.h1>

            <motion.div className="hero-role-tag" variants={fadeUp}>
              {"> "}{text}<span className="cursor">_</span>
            </motion.div>

            <motion.p className="hero-desc" variants={fadeUp} style={{ marginTop: "1.25rem" }}>
              I build scalable backend systems and AI-powered platforms —
              currently interning at Kapture CX on an enterprise AI system for
              automated incident investigation, powered by LLMs and RAG.
            </motion.p>

            <motion.div className="hero-actions" variants={fadeUp}>
              <motion.a href="#projects" className="btn btn-primary" whileHover={{ y: -2 }} whileTap={cardTap}>
                View Projects <FiArrowDownRight />
              </motion.a>
              <motion.a href="/resume.pdf" className="btn btn-ghost" download="Hariharan_C_Resume.pdf" whileHover={{ y: -2 }} whileTap={cardTap}>
                Download Resume
              </motion.a>
            </motion.div>

            <motion.div className="hero-social" variants={fadeUp}>
              <motion.a href="https://github.com/Hari2726h" target="_blank" rel="noreferrer" className="hero-social-link" aria-label="GitHub" whileHover={{ y: -3 }} whileTap={cardTap}>
                <FaGithub />
              </motion.a>
              <motion.a href="https://www.linkedin.com/in/hariharan-c/" target="_blank" rel="noreferrer" className="hero-social-link" aria-label="LinkedIn" whileHover={{ y: -3 }} whileTap={cardTap}>
                <FaLinkedin />
              </motion.a>
              <motion.a href="mailto:hari2726h@gmail.com" className="hero-social-link" aria-label="Email" whileHover={{ y: -3 }} whileTap={cardTap}>
                <FiMail />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          >
            <div className="hero-frame">
              <div className="hero-corner">
                <FiArrowUpRight /> hari2726h
              </div>
              <img
                src={profileImg}
                alt="Hariharan C"
                className="hero-frame-img"
                loading="eager"
                fetchpriority="high"
              />
              <div className="hero-chip">
                <span className="hero-chip-dot" />
                <div className="hero-chip-text">
                  <strong>900+ problems solved</strong>
                  <span>DSA · LeetCode · HackerRank</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="hero-scroll-hint">
          <span>SCROLL</span>
          <span>—</span>
          <span>01 / 10</span>
        </div>
      </section>
    </>
  );
};

export default Hero;
