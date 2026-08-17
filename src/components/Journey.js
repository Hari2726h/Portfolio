import React from "react";
import { motion } from "framer-motion";
import { fadeUp, fadeInLeft, staggerContainer, viewportOnce } from "../lib/motion";

const TIMELINE = [
  {
    year: "2023 — 2027",
    title: "B.E Computer Science",
    place: "Sri Krishna College of Technology",
    desc: "DSA, Operating Systems, DBMS, Computer Networks, Cloud Computing, and Software Engineering.",
    tags: ["DSA", "OS", "DBMS", "Cloud Computing"],
  },
  {
    year: "2024",
    title: "Competitive Programming",
    place: "LeetCode · HackerRank",
    desc: "Advanced problem solving with optimized solutions — the foundation for 900+ DSA problems solved to date.",
    tags: ["Trees", "Graphs", "DP", "Greedy"],
  },
  {
    year: "2025",
    title: "Full Stack Engineering",
    place: "React + Spring Boot",
    desc: "End-to-end application development with a focus on security, scalability, and clean architecture.",
    tags: ["React", "Spring Boot", "JWT", "MySQL"],
  },
  {
    year: "2026 — Present",
    title: "Software Development Engineer Intern",
    place: "Kapture CX · Bengaluru, India",
    desc: "Contributing to SRE-GPT, an enterprise AI platform for automated incident investigation, root cause analysis, and operational knowledge discovery. Building backend services for conversation orchestration, context selection, and retrieval planning, with integrations into StarRocks and ClickHouse for enterprise data.",
    tags: ["Python", "FastAPI", "PostgreSQL", "RAG", "React"],
    current: true,
  },
];

const Journey = () => {
  return (
    <>
      <style>{`
#journey {
  background: var(--bg);
  color: var(--text-primary);
  scroll-margin-top: 100px;
}

.journey-list {
  position: relative;
  margin-top: var(--space-10);
}

.journey-row {
  display: grid;
  grid-template-columns: 160px minmax(0, 1fr);
  gap: var(--space-8);
  padding: var(--space-8) 0;
  border-top: 1px solid var(--border);
}

.journey-row:last-child {
  border-bottom: 1px solid var(--border);
}

.journey-year {
  font-family: var(--font-mono);
  font-size: 0.9rem;
  color: var(--text-muted);
  padding-top: 0.2rem;
}

.journey-title {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-family: var(--font-display);
  font-size: var(--fs-lg);
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.35rem;
}

.journey-current-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--success);
  border: 1px solid var(--success);
  border-radius: var(--radius-full);
  padding: 0.15rem 0.6rem;
}

.journey-current-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--success);
  box-shadow: 0 0 8px var(--success);
}

.journey-place {
  font-size: 0.9rem;
  color: var(--accent);
  margin-bottom: 0.9rem;
}

.journey-desc {
  font-size: 0.98rem;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 620px;
  margin-bottom: var(--space-4);
}

.journey-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

@media (max-width: 640px) {
  .journey-row {
    grid-template-columns: 1fr;
    gap: var(--space-3);
  }
}
      `}</style>

      <section id="journey" className="section">
        <div className="section-inner">
          <motion.div className="eyebrow" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
            Experience
          </motion.div>
          <motion.h2 className="section-heading" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
            How I got here.
          </motion.h2>

          <motion.div
            className="journey-list"
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {TIMELINE.map((item) => (
              <motion.div key={item.title} className="journey-row" variants={fadeInLeft}>
                <div className="journey-year">{item.year}</div>
                <div>
                  <div className="journey-title">
                    {item.title}
                    {item.current && (
                      <span className="journey-current-badge">
                        <span className="journey-current-dot" /> Present
                      </span>
                    )}
                  </div>
                  <div className="journey-place">{item.place}</div>
                  <p className="journey-desc">{item.desc}</p>
                  <div className="journey-tags">
                    {item.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Journey;
