import React from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";

const SKILL_GROUPS = [
  {
    label: "Languages",
    items: [
      { name: "Java", exp: 3, logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/java.svg" },
      { name: "Python", exp: 2, logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/python.svg" },
      { name: "JavaScript", exp: 2, logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg" },
      { name: "C++", exp: 1, logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/cplusplus.svg" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Spring Boot", exp: 3, logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/springboot.svg" },
      { name: "FastAPI", exp: 1, logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/fastapi.svg" },
      { name: "Flask", exp: 2, logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/flask.svg" },
      { name: "Hibernate", exp: 2, logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/hibernate.svg" },
      { name: "JWT", exp: 2, logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/jsonwebtokens.svg" },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "React", exp: 2, logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg" },
      { name: "HTML", exp: 5, logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/html5.svg" },
      { name: "CSS", exp: 4, logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/css3.svg" },
      { name: "Bootstrap", exp: 3, logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/bootstrap.svg" },
    ],
  },
  {
    label: "Databases",
    items: [
      { name: "MySQL", exp: 3, logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mysql.svg" },
      { name: "PostgreSQL", exp: 2, logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/postgresql.svg" },
      { name: "Redis", exp: 1, logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/redis.svg" },
    ],
  },
  {
    label: "Distributed Systems",
    items: [
      { name: "Kafka", exp: 1, logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/apachekafka.svg" },
    ],
  },
  {
    label: "AI & Machine Learning",
    items: [
      { name: "Pandas", exp: 2, logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/pandas.svg" },
      { name: "NumPy", exp: 2, logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/numpy.svg" },
      { name: "Scikit-learn", exp: 1, logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/scikitlearn.svg" },
    ],
  },
  {
    label: "Cloud / DevOps",
    items: [
      { name: "Docker", exp: 1, logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/docker.svg" },
      { name: "AWS", exp: 1, logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amazonaws.svg" },
      { name: "GitHub Actions", exp: 1, logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/githubactions.svg" },
    ],
  },
  {
    label: "Tools",
    items: [
      { name: "Git", exp: 3, logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/git.svg" },
      { name: "GitHub", exp: 4, logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg" },
      { name: "VS Code", exp: 4, logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/visualstudiocode.svg" },
      { name: "Figma", exp: 2, logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/figma.svg" },
      { name: "Selenium", exp: 1, logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/selenium.svg" },
    ],
  },
];

const Skills = () => {
  return (
    <>
      <style>{`
#skills {
  background: var(--bg);
  color: var(--text-primary);
  scroll-margin-top: 100px;
}

.skills-groups {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-8) var(--space-10);
  margin-top: var(--space-10);
}

.skill-group-label {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: var(--text-muted);
  margin-bottom: var(--space-4);
  padding-bottom: var(--space-3);
  border-bottom: 1px solid var(--border);
}

.skill-row-list {
  display: flex;
  flex-direction: column;
}

.skill-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem 0;
  border-bottom: 1px solid transparent;
  transition: border-color var(--transition-fast);
}

.skill-row:not(:last-child) {
  border-bottom-color: var(--border);
}

.skill-row-name {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-size: 0.98rem;
  color: var(--text-primary);
  font-weight: 500;
}

.skill-row-logo {
  width: 18px;
  height: 18px;
  filter: var(--icon-mono-filter);
  opacity: 0.75;
}

.skill-row-exp {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--text-muted);
  opacity: 0;
  transform: translateX(6px);
  transition: all var(--transition-fast);
}

.skill-row:hover .skill-row-exp {
  opacity: 1;
  transform: translateX(0);
}

.skill-row:hover .skill-row-name {
  color: var(--accent);
}

@media (max-width: 720px) {
  .skills-groups {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }

  .skill-row-exp {
    opacity: 1;
    transform: none;
  }
}
      `}</style>

      <section id="skills" className="section">
        <div className="section-inner">
          <motion.div className="eyebrow" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
            Tech Stack
          </motion.div>
          <motion.h2 className="section-heading" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
            Tools I build with.
          </motion.h2>

          <motion.div
            className="skills-groups"
            variants={staggerContainer(0.06)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {SKILL_GROUPS.map((group) => (
              <motion.div key={group.label} variants={fadeUp}>
                <div className="skill-group-label">{group.label}</div>
                <div className="skill-row-list">
                  {group.items.map((item) => (
                    <div key={item.name} className="skill-row">
                      <div className="skill-row-name">
                        <img src={item.logo} alt="" className="skill-row-logo" loading="lazy" decoding="async" />
                        {item.name}
                      </div>
                      <div className="skill-row-exp">{item.exp}+ yrs</div>
                    </div>
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

export default Skills;
