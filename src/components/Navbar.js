import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { FiMenu, FiX, FiSun, FiMoon, FiArrowUpRight } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

const links = [
  { id: "about", label: "About" },
  { id: "journey", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const allSectionIds = ["hero", "about", "capabilities", "journey", "projects", "skills", "achievements", "coding", "certifications", "contact"];

const Navbar = () => {
  const [active, setActive] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const observerRef = useRef(null);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 24);
  });

  useEffect(() => {
    const sections = allSectionIds.map(id => document.getElementById(id)).filter(Boolean);

    observerRef.current = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach(section => observerRef.current.observe(section));
    return () => observerRef.current && observerRef.current.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <>
      <style>{`
.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  padding: var(--space-4) var(--space-6);
  pointer-events: none;
}

.nav-inner {
  pointer-events: auto;
  width: 100%;
  max-width: var(--max-width);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem 0.7rem 0.7rem 1.25rem;
  border-radius: var(--radius-full);
  border: 1px solid transparent;
  background: transparent;
  transition: background var(--transition-base), border-color var(--transition-base), box-shadow var(--transition-base);
}

.nav-inner.scrolled {
  background: color-mix(in srgb, var(--bg) 72%, transparent);
  backdrop-filter: blur(16px) saturate(140%);
  -webkit-backdrop-filter: blur(16px) saturate(140%);
  border-color: var(--border);
  box-shadow: var(--shadow-sm);
}

.nav-brand {
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-primary);
  text-decoration: none;
  letter-spacing: -0.01em;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-brand-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 10px var(--accent);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links li {
  position: relative;
}

.nav-link {
  position: relative;
  display: inline-block;
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  padding: 0.5rem 0.95rem;
  border-radius: var(--radius-full);
  transition: color var(--transition-fast);
}

.nav-link:hover {
  color: var(--text-primary);
}

.nav-link.active {
  color: var(--text-primary);
}

.nav-active-pill {
  position: absolute;
  inset: 0;
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: var(--radius-full);
  z-index: -1;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.nav-icon-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text-secondary);
  border-radius: 50%;
  cursor: pointer;
  font-size: 1rem;
  transition: all var(--transition-fast);
}

.nav-icon-btn:hover {
  border-color: var(--accent-border);
  color: var(--accent);
}

.nav-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  background: var(--text-primary);
  color: var(--bg);
  font-size: 0.88rem;
  font-weight: 600;
  padding: 0.55rem 1.1rem;
  border-radius: var(--radius-full);
  text-decoration: none;
  transition: background var(--transition-fast), color var(--transition-fast);
}

.nav-cta:hover {
  background: var(--accent);
  color: #fff;
}

.nav-toggle {
  display: none;
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text-primary);
  font-size: 1.15rem;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
}

@media (max-width: 900px) {
  .nav-links,
  .nav-cta-desktop {
    display: none;
  }
  .nav-toggle {
    display: flex;
  }
}

/* ===================== MOBILE FULLSCREEN MENU ===================== */
.mobile-menu {
  position: fixed;
  inset: 0;
  z-index: 1200;
  background: var(--bg);
  display: flex;
  flex-direction: column;
}

.mobile-menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-5) var(--space-6);
}

.mobile-menu-links {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--space-2);
  padding: 0 var(--space-6);
}

.mobile-menu-link {
  font-family: var(--font-display);
  font-size: clamp(2rem, 8vw, 2.75rem);
  font-weight: 600;
  color: var(--text-primary);
  text-decoration: none;
  letter-spacing: -0.02em;
  padding: 0.4rem 0;
  border-bottom: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.mobile-menu-link span {
  font-family: var(--font-mono);
  font-size: 0.9rem;
  color: var(--text-muted);
}

.mobile-menu-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-6);
  border-top: 1px solid var(--border);
}
      `}</style>

      <nav className="nav-bar">
        <div className={`nav-inner ${scrolled ? "scrolled" : ""}`}>
          <a href="#hero" className="nav-brand">
            <span className="nav-brand-dot" />
            Hariharan C
          </a>

          <ul className="nav-links">
            {links.map(link => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`nav-link ${active === link.id ? "active" : ""}`}
                >
                  {active === link.id && (
                    <motion.span className="nav-active-pill" layoutId="navIndicator" transition={{ type: "spring", stiffness: 400, damping: 32 }} />
                  )}
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-right">
            <button className="nav-icon-btn" onClick={toggleTheme} aria-label="Toggle color theme">
              {theme === "dark" ? <FiSun /> : <FiMoon />}
            </button>
            <a href="/resume.pdf" download="Hariharan_C_Resume.pdf" className="nav-cta nav-cta-desktop">
              Resume <FiArrowUpRight />
            </a>
            <button className="nav-toggle" onClick={() => setMobileOpen(true)} aria-label="Open menu">
              <FiMenu />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="mobile-menu-header">
              <a href="#hero" className="nav-brand" onClick={closeMobileMenu}>
                <span className="nav-brand-dot" />
                Hariharan C
              </a>
              <button className="nav-icon-btn" onClick={closeMobileMenu} aria-label="Close menu">
                <FiX />
              </button>
            </div>

            <motion.div
              className="mobile-menu-links"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }}
            >
              {links.map((link, i) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  className="mobile-menu-link"
                  onClick={closeMobileMenu}
                  variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  {link.label}
                  <span>0{i + 1}</span>
                </motion.a>
              ))}
            </motion.div>

            <div className="mobile-menu-footer">
              <button className="nav-icon-btn" onClick={toggleTheme} aria-label="Toggle color theme">
                {theme === "dark" ? <FiSun /> : <FiMoon />}
              </button>
              <a href="/resume.pdf" download="Hariharan_C_Resume.pdf" className="nav-cta" onClick={closeMobileMenu}>
                Resume <FiArrowUpRight />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
