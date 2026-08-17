import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import { fadeUp, fadeInLeft, fadeInRight, viewportOnce } from "../lib/motion";

const PROJECTS = [
  {
    index: "01",
    title: "Job Portal Platform",
    category: "Fullstack",
    problem: "Role-based job portal connecting recruiters and job seekers.",
    solution: "Multi-role job portal using Spring Security, JWT, and React dashboards.",
    tags: ["Spring Security", "JWT", "React"],
    image: "/images/Screenshot 2025-08-21 202736.png",
    github: "https://github.com/Hari2726h/JobPortal.git",
    live: "",
  },
  {
    index: "02",
    title: "Enterprise Scholarship Management & Recommendation Platform",
    category: "Fullstack",
    problem: "Centralized scholarship recommendation and management system, built to enterprise-grade standards.",
    solution: "RBAC, document management, and analytics dashboards, with Kafka-based event-driven workflows, Redis caching, and distributed locking. Deployed with Docker and GitHub Actions CI/CD on AWS EC2 and S3.",
    tags: ["RBAC", "Kafka", "Redis", "Docker", "AWS", "CI/CD"],
    image: "/images/Scholarship.png",
    github: "https://github.com/Hari2726h/Intelligent-Scholarship-Recommendation-Updated-",
    live: "",
  },
  {
    index: "03",
    title: "DeserveIQ — Student Risk Prediction",
    category: "Fullstack + ML",
    problem: "Predicting which students are at risk of dropping out — Top 4 among 200+ teams at the Maatram Hackathon.",
    solution: "Random Forest-based prediction pipeline achieving 90% accuracy across 500+ student records, with automated preprocessing, feature engineering, and model explainability. Integrated with Spring Boot and React for real-time inference.",
    tags: ["Random Forest", "Scikit-learn", "90% Accuracy", "Spring Boot"],
    image: "/images/Deserveiq.png",
    github: "https://github.com/Hari2726h/DeserveIQ",
    live: "",
  },
  {
    index: "04",
    title: "Fashion Rental Platform",
    category: "Backend",
    problem: "Renting pre-owned fashion items with admin & user roles.",
    solution: "Full-stack platform evolved from a backend-only Spring Boot project — admin/user dashboards, multiple REST controllers, structured role handling.",
    tags: ["Spring Boot", "REST API"],
    image: "/images/fashion-rental.png",
    github: "https://github.com/Hari2726h/FASHION_RESALE_PLATFORM-",
    live: "https://spectacular-klepon-0fd01d.netlify.app/",
  },
  {
    index: "05",
    title: "Personal Finance Manager",
    category: "Fullstack",
    problem: "Tracking income, expenses, and categories securely.",
    solution: "JWT-secured finance tracking app built with Spring Boot, React, and MySQL.",
    tags: ["Spring Boot", "React", "JWT", "MySQL"],
    image: "/images/finance-manager.png",
    github: "https://github.com/Hari2726h/personalfinancemanager",
    live: "https://taupe-shortbread-4071b4.netlify.app/",
  },
  {
    index: "06",
    title: "Administrative Tool",
    category: "Frontend",
    problem: "Student management with attendance, marks, and exports.",
    solution: "Admin dashboard with filtering, exports, and a responsive UI.",
    tags: ["Frontend", "React"],
    image: "/images/admin-tool.png",
    github: "https://github.com/Hari2726h/StudentProfileManagement",
    live: "https://hackforgep-git-main-hariharans-projects-d5bd8d51.vercel.app/",
  },
  {
    index: "07",
    title: "This Portfolio",
    category: "Frontend",
    problem: "Showcasing projects, skills, and experience in one place.",
    solution: "Personal portfolio built with React and Framer Motion — responsive, animated, and fast.",
    tags: ["React", "Framer Motion"],
    image: "/images/image.png",
    github: "https://github.com/Hari2726h/Portfolio",
    live: "https://portfolio-97fs.vercel.app/",
  },
];

const Projects = () => {
  return (
    <>
      <style>{`
#projects {
  background: var(--bg);
  color: var(--text-primary);
  scroll-margin-top: 100px;
}

.project-case {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: var(--space-10);
  align-items: center;
  padding: var(--space-12) 0;
  border-top: 1px solid var(--border);
}

.project-case:last-child {
  border-bottom: 1px solid var(--border);
}

.project-case.reverse .project-case-visual {
  order: 2;
}

.project-case.reverse .project-case-content {
  order: 1;
}

.project-case-index {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-bottom: var(--space-3);
}

.project-case-title {
  font-family: var(--font-display);
  font-size: var(--fs-xl);
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--text-primary);
  margin-bottom: var(--space-4);
  transition: color var(--transition-fast);
}

.project-case-group {
  margin-bottom: var(--space-4);
}

.project-case-group .k {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--accent);
  margin-bottom: 0.3rem;
}

.project-case-group .v {
  font-size: 0.98rem;
  line-height: 1.65;
  color: var(--text-secondary);
}

.project-case-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin: var(--space-5) 0;
}

.project-case-links {
  display: flex;
  gap: var(--space-3);
  margin-top: var(--space-2);
}

.project-case-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-primary);
  text-decoration: none;
  padding: 0.6rem 1rem;
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-sm);
  transition: all var(--transition-fast);
}

.project-case-link:hover {
  border-color: var(--accent-border);
  color: var(--accent);
}

.project-case-visual {
  position: relative;
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
  overflow: hidden;
  background: var(--surface);
  aspect-ratio: 4 / 3;
}

.project-case-visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(15%);
  transition: transform 0.5s var(--ease), filter 0.5s var(--ease);
}

.project-case:hover .project-case-visual img {
  transform: scale(1.04);
  filter: grayscale(0%);
}

.project-case:hover .project-case-title {
  color: var(--accent);
}

@media (max-width: 900px) {
  .project-case,
  .project-case.reverse {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }

  .project-case.reverse .project-case-visual,
  .project-case.reverse .project-case-content {
    order: initial;
  }

  .project-case-visual {
    order: -1;
  }
}
      `}</style>

      <section id="projects" className="section">
        <div className="section-inner">
          <motion.div className="eyebrow" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
            Featured Projects
          </motion.div>
          <motion.h2 className="section-heading" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
            Selected work.
          </motion.h2>

          <div>
            {PROJECTS.map((p, i) => {
              const reverse = i % 2 === 1;
              return (
                <div key={p.title} className={`project-case ${reverse ? "reverse" : ""}`}>
                  <motion.div
                    className="project-case-content"
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    variants={reverse ? fadeInRight : fadeInLeft}
                  >
                    <div className="project-case-index">{p.index} — {p.category}</div>
                    <h3 className="project-case-title">{p.title}</h3>

                    <div className="project-case-group">
                      <div className="k">Problem</div>
                      <div className="v">{p.problem}</div>
                    </div>
                    <div className="project-case-group">
                      <div className="k">Solution</div>
                      <div className="v">{p.solution}</div>
                    </div>

                    <div className="project-case-tags">
                      {p.tags.map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>

                    <div className="project-case-links">
                      <a href={p.github} target="_blank" rel="noreferrer" className="project-case-link">
                        <FaGithub /> Code
                      </a>
                      {p.live && (
                        <a href={p.live} target="_blank" rel="noreferrer" className="project-case-link">
                          <FiArrowUpRight /> Live
                        </a>
                      )}
                    </div>
                  </motion.div>

                  <motion.div
                    className="project-case-visual"
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    variants={reverse ? fadeInLeft : fadeInRight}
                  >
                    <img src={p.image} alt={p.title} loading="lazy" decoding="async" />
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
