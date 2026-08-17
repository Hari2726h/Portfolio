import React from "react";
import { motion } from "framer-motion";
import { fadeUp, fadeInLeft, fadeInRight, staggerContainer, viewportOnce } from "../lib/motion";

const META = [
  { label: "Location", value: "Coimbatore, India" },
  { label: "Focus", value: "Backend / AI Systems" },
  { label: "Status", value: "SDE Intern @ Kapture CX" },
  { label: "Education", value: "Sri Krishna College of Technology" },
];

const About = () => {
  return (
    <>
      <style>{`
#about {
  background: var(--bg);
  color: var(--text-primary);
  scroll-margin-top: 100px;
}

.about-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: var(--space-10);
  align-items: start;
}

.about-statement {
  font-family: var(--font-display);
  font-size: var(--fs-2xl);
  font-weight: 600;
  line-height: 1.25;
  letter-spacing: -0.015em;
  color: var(--text-primary);
}

.about-statement .muted {
  color: var(--text-muted);
}

.about-intro {
  font-size: var(--fs-md);
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: var(--space-8);
}

.about-meta {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: var(--space-5) var(--space-6);
  padding-top: var(--space-6);
  border-top: 1px solid var(--border);
}

.about-meta-item .label {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-muted);
  margin-bottom: 0.35rem;
}

.about-meta-item .value {
  font-size: 0.98rem;
  color: var(--text-primary);
  font-weight: 500;
}

@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }
}

@media (max-width: 480px) {
  .about-meta {
    grid-template-columns: 1fr;
  }
}
      `}</style>

      <section id="about" className="section">
        <div className="section-inner">
          <motion.div
            className="eyebrow"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            About
          </motion.div>

          <div className="about-grid">
            <motion.p
              className="about-statement"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeInLeft}
            >
              I'm Hariharan C — a Computer Science engineer focused on{" "}
              <span className="muted">building scalable systems</span>, mastering
              problem solving, and delivering clean, production-ready software.
            </motion.p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerContainer(0.1)}
            >
              <motion.p className="about-intro" variants={fadeInRight}>
                I'm currently a Software Development Engineer Intern at
                Kapture CX, building backend services for an enterprise AI
                platform used for automated incident investigation. Outside
                of that, my work centers on full-stack engineering — React on
                the front end, Spring Boot and REST APIs on the back end —
                and I've solved 900+ DSA problems and shipped 10+
                production-grade projects, including a machine-learning
                platform that placed Top 4 among 200+ teams at a hackathon.
              </motion.p>

              <motion.div className="about-meta" variants={staggerContainer(0.08)}>
                {META.map((item) => (
                  <motion.div key={item.label} className="about-meta-item" variants={fadeUp}>
                    <div className="label">{item.label}</div>
                    <div className="value">{item.value}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
