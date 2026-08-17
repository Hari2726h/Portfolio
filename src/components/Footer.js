import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { FiMail } from "react-icons/fi";

const links = [
  { id: "about", label: "About" },
  { id: "journey", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <style>{`
.site-footer {
  background: var(--bg);
  color: var(--text-primary);
  border-top: 1px solid var(--border);
  padding: var(--space-8) var(--space-6);
}

.footer-inner {
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-5);
}

.footer-brand {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1rem;
  color: var(--text-primary);
}

.footer-brand span {
  display: block;
  font-family: var(--font-body);
  font-weight: 400;
  font-size: 0.82rem;
  color: var(--text-muted);
  margin-top: 0.2rem;
}

.footer-links {
  display: flex;
  gap: var(--space-5);
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links a {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.88rem;
  transition: color var(--transition-fast);
}

.footer-links a:hover {
  color: var(--accent);
}

.footer-social {
  display: flex;
  gap: 0.5rem;
}

.footer-icon-link {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.95rem;
  transition: all var(--transition-fast);
}

.footer-icon-link:hover {
  border-color: var(--accent-border);
  color: var(--accent);
}

.footer-bottom {
  max-width: var(--max-width);
  margin: var(--space-6) auto 0;
  padding-top: var(--space-5);
  border-top: 1px solid var(--border);
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--text-muted);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--space-2);
}

@media (max-width: 700px) {
  .footer-links {
    display: none;
  }
}
      `}</style>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            Hariharan C
            <span>Full Stack Developer</span>
          </div>

          <ul className="footer-links">
            {links.map(link => (
              <li key={link.id}>
                <a href={`#${link.id}`}>{link.label}</a>
              </li>
            ))}
          </ul>

          <div className="footer-social">
            <a href="https://github.com/Hari2726h" target="_blank" rel="noreferrer" className="footer-icon-link" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/hariharan-c/" target="_blank" rel="noreferrer" className="footer-icon-link" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://leetcode.com/Hari2726H" target="_blank" rel="noreferrer" className="footer-icon-link" aria-label="LeetCode">
              <SiLeetcode />
            </a>
            <a href="mailto:hari2726h@gmail.com" className="footer-icon-link" aria-label="Email">
              <FiMail />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} Hariharan C. All rights reserved.</span>
          <span>Built with React &amp; Framer Motion</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
