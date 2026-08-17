import React from "react";
import { motion } from "framer-motion";
import { FiServer, FiLayers, FiDatabase, FiCloud, FiCpu, FiShare2 } from "react-icons/fi";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";

const CAPABILITIES = [
  {
    icon: <FiServer />,
    title: "Backend Engineering",
    desc: "Designing REST APIs and secure services with Spring Boot, FastAPI, JWT authentication, and relational databases.",
    tags: ["Spring Boot", "FastAPI", "REST API", "JWT", "PostgreSQL"],
  },
  {
    icon: <FiCpu />,
    title: "AI & LLM Systems",
    desc: "Building enterprise AI features at Kapture CX — conversation orchestration, retrieval planning, and knowledge discovery powered by RAG.",
    tags: ["RAG", "Vector Search", "LLM Applications", "Deep Learning"],
  },
  {
    icon: <FiShare2 />,
    title: "Distributed Systems",
    desc: "Designing event-driven workflows with Kafka, Redis caching, and distributed locking for reliable, scalable systems.",
    tags: ["Kafka", "Event-Driven", "Redis", "Caching"],
  },
  {
    icon: <FiLayers />,
    title: "Full-Stack Development",
    desc: "Building end-to-end products by pairing React front ends with Spring Boot and FastAPI backends — from UI to API.",
    tags: ["React", "Spring Boot", "HTML/CSS"],
  },
  {
    icon: <FiDatabase />,
    title: "Data & Machine Learning",
    desc: "Applying Python and Scikit-learn to build predictive systems, including a student risk-prediction platform that placed Top 4 among 200+ teams.",
    tags: ["Python", "Pandas", "NumPy", "Scikit-learn"],
  },
  {
    icon: <FiCloud />,
    title: "Cloud & DevOps",
    desc: "Containerizing and deploying applications with Docker and AWS, with CI/CD pipelines via GitHub Actions.",
    tags: ["Docker", "AWS EC2", "AWS S3", "GitHub Actions", "CI/CD"],
  },
];

const Capabilities = () => {
  return (
    <>
      <style>{`
#capabilities {
  background: var(--bg-elevated);
  color: var(--text-primary);
  scroll-margin-top: 100px;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.cap-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: var(--space-6);
  margin-bottom: var(--space-10);
  flex-wrap: wrap;
}

.cap-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.cap-card {
  background: var(--bg-elevated);
  padding: var(--space-6) var(--space-5);
  transition: background var(--transition-fast);
}

.cap-card:hover {
  background: var(--surface);
}

.cap-icon {
  width: 42px;
  height: 42px;
  border-radius: var(--radius-sm);
  background: var(--accent-soft);
  color: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  margin-bottom: var(--space-5);
}

.cap-title {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.6rem;
}

.cap-desc {
  font-size: 0.92rem;
  line-height: 1.65;
  color: var(--text-secondary);
  margin-bottom: var(--space-5);
}

.cap-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

@media (max-width: 900px) {
  .cap-grid {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  }
}

@media (max-width: 560px) {
  .cap-grid {
    grid-template-columns: 1fr;
  }
}
      `}</style>

      <section id="capabilities" className="section">
        <div className="section-inner">
          <div className="cap-head">
            <div>
              <motion.div className="eyebrow" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
                Engineering Capabilities
              </motion.div>
              <motion.h2 className="section-heading" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
                Systems, not just screens.
              </motion.h2>
            </div>
            <motion.p className="section-desc" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
              A snapshot of where I focus my engineering effort — from backend
              architecture to the data and infrastructure layers underneath it.
            </motion.p>
          </div>

          <motion.div
            className="cap-grid"
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {CAPABILITIES.map((cap) => (
              <motion.div key={cap.title} className="cap-card" variants={fadeUp}>
                <div className="cap-icon">{cap.icon}</div>
                <div className="cap-title">{cap.title}</div>
                <div className="cap-desc">{cap.desc}</div>
                <div className="cap-tags">
                  {cap.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Capabilities;
