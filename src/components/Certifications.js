import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiAward, FiArrowUpRight, FiX, FiBookOpen } from "react-icons/fi";
import { fadeUp, viewportOnce } from "../lib/motion";

const CERTS = [
  { title: "Cloud Computing - NPTEL (2025)", file: "/certificates/Cloud_Computing.pdf", category: "NPTEL" },
  { title: "Operating System - NPTEL (2024)", file: "/certificates/Operating Systems.pdf", category: "NPTEL" },
  { title: "Effective Writing - NPTEL (2024)", file: "/certificates/Effective Writing.pdf", category: "NPTEL" },
  { title: "AWS Cloud Practitioner Essentials (2025)", file: "/certificates/Cloud_Practioner.pdf", category: "AWS" },
  { title: "GFG 160 Days Problem Solving (2025)", file: "/certificates/CFG_160_Days_Problem_Solving.pdf", category: "Coding Platforms" },
  { title: "HackerRank Java Basic", file: "/certificates/java_basic certificate.pdf", category: "Coding Platforms" },
  { title: "HackerRank SDE Intern", file: "/certificates/software_engineer_intern certificate (1).pdf", category: "Coding Platforms" },
  { title: "HackerRank SQL Basic", file: "/certificates/sql_basic certificate.pdf", category: "Coding Platforms" },
  { title: "HackerRank SQL Intermediate", file: "/certificates/sql_intermediate certificate.pdf", category: "Coding Platforms" },
  { title: "College Hackathon Participation (2024)", file: "/certificates/Hackathon_Participation.pdf", category: "College" },
  { title: "Code Quest Runner-Up (2024)", file: "/certificates/Code_Quest_Runner_Certificate.jpg", category: "College" }
];

const CATEGORIES = ["All", "NPTEL", "AWS", "Coding Platforms", "College"];

const EDUCATION = [
  {
    title: "B.E Computer Science",
    sub: "Sri Krishna College of Technology · CGPA 8.5/10",
    year: "2023 — 2027",
  },
  {
    title: "Higher Secondary — Mathematics & Biology",
    sub: "Mannar Higher Secondary School · 92% · 2nd Rank",
    year: "2023",
  },
];

const Certifications = () => {
  const [category, setCategory] = useState("All");
  const [activeCert, setActiveCert] = useState(null);

  const filteredCerts = useMemo(() => {
    return category === "All" ? CERTS : CERTS.filter(c => c.category === category);
  }, [category]);

  return (
    <>
      <style>{`
#certifications {
  background: var(--bg);
  color: var(--text-primary);
  scroll-margin-top: 100px;
}

.edu-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  margin: var(--space-10) 0;
}

.edu-card {
  display: flex;
  align-items: center;
  gap: var(--space-5);
  padding: var(--space-6);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background: var(--surface);
}

.edu-icon {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-sm);
  background: var(--accent-soft);
  color: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  flex-shrink: 0;
}

.edu-title {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1.05rem;
  color: var(--text-primary);
}

.edu-sub {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-top: 0.2rem;
}

.edu-year {
  margin-left: auto;
  font-family: var(--font-mono);
  font-size: 0.82rem;
  color: var(--text-muted);
  white-space: nowrap;
}

.cert-filters {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: var(--space-6);
}

.filter-btn {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text-secondary);
  padding: 0.5rem 1.1rem;
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all var(--transition-fast);
  font-size: 0.85rem;
  font-weight: 500;
}

.filter-btn.active {
  background: var(--text-primary);
  color: var(--bg);
  border-color: var(--text-primary);
}

.filter-btn:hover:not(.active) {
  border-color: var(--accent-border);
  color: var(--accent);
}

.certs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: var(--space-4);
}

.cert-card {
  background: var(--surface);
  padding: var(--space-5);
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.cert-card:hover {
  border-color: var(--accent-border);
  transform: translateY(-3px);
}

.cert-icon {
  width: 38px;
  height: 38px;
  background: var(--accent-soft);
  color: var(--accent);
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  margin-bottom: var(--space-4);
}

.cert-title {
  font-weight: 600;
  font-size: 0.98rem;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.cert-category {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.cert-view-link {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  margin-top: var(--space-4);
  color: var(--accent);
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
}

/* ===================== MODAL ===================== */
.cert-modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3000;
  padding: var(--space-6);
}

.modal-content {
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  max-width: 900px;
  width: 100%;
  padding: var(--space-6);
  color: var(--text-primary);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-5);
}

.modal-title {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 600;
}

.modal-close {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text-primary);
  padding: 0.5rem 1rem;
  border-radius: var(--radius-sm);
  cursor: pointer;
  font-weight: 600;
}

.modal-close:hover {
  border-color: var(--accent-border);
  color: var(--accent);
}

.cert-embed {
  width: 100%;
  height: 600px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border);
}

@media (max-width: 768px) {
  .cert-embed {
    height: 400px;
  }
  .edu-card {
    flex-wrap: wrap;
  }
  .edu-year {
    margin-left: 0;
  }
}
      `}</style>

      <section id="certifications" className="section">
        <div className="section-inner">
          <motion.div className="eyebrow" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
            Education & Certifications
          </motion.div>
          <motion.h2 className="section-heading" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
            Formal foundation.
          </motion.h2>

          <div className="edu-list">
            {EDUCATION.map((edu) => (
              <motion.div key={edu.title} className="edu-card" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
                <div className="edu-icon"><FiBookOpen /></div>
                <div>
                  <div className="edu-title">{edu.title}</div>
                  <div className="edu-sub">{edu.sub}</div>
                </div>
                <div className="edu-year">{edu.year}</div>
              </motion.div>
            ))}
          </div>

          <div className="cert-filters">
            {CATEGORIES.map(cat => (
              <motion.button
                key={cat}
                className={`filter-btn ${category === cat ? "active" : ""}`}
                onClick={() => setCategory(cat)}
                whileTap={{ scale: 0.95 }}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          <motion.div className="certs-grid" layout>
            <AnimatePresence mode="popLayout">
              {filteredCerts.map((cert) => (
                <motion.div
                  key={cert.title}
                  className="cert-card"
                  layout
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setActiveCert(cert)}
                >
                  <div className="cert-icon"><FiAward /></div>
                  <div className="cert-title">{cert.title}</div>
                  <div className="cert-category">{cert.category}</div>
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noreferrer"
                    className="cert-view-link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Certificate <FiArrowUpRight />
                  </a>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {activeCert && (
          <motion.div
            className="cert-modal"
            onClick={() => setActiveCert(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="modal-header">
                <h3 className="modal-title">{activeCert.title}</h3>
                <button onClick={() => setActiveCert(null)} className="modal-close">
                  <FiX /> Close
                </button>
              </div>
              {activeCert.file.endsWith('.pdf') ? (
                <iframe
                  src={activeCert.file}
                  className="cert-embed"
                  title={activeCert.title}
                  loading="lazy"
                />
              ) : (
                <img
                  src={activeCert.file}
                  alt={activeCert.title}
                  style={{ width: '100%', borderRadius: 'var(--radius-sm)' }}
                  loading="lazy"
                  decoding="async"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Certifications;
