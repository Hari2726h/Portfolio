import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Certifications.css";

const certsData = [
  { title: "Cloud Computing - NPTEL (2025)", downloadLink: "/certificates/Cloud_Computing.pdf", category: "NPTEL" },
  { title: "Operating System - NPTEL (2024)", downloadLink: "/certificates/Operating Systems.pdf", category: "NPTEL" },
  { title: "Effective Writing - NPTEL (2024)", downloadLink: "/certificates/Effective Writing.pdf", category: "NPTEL" },
  { title: "Cloud_Practioner Essentials - AWS (2025)", downloadLink: "/certificates/Cloud_Practioner.pdf", category: "AWS" },
  { title: "GFG 160 DAYS OF PROBLEM SOLVING - CFG (2025)", downloadLink: "/certificates/CFG_160_Days_Problem_Solving.pdf", category: "Coding Platforms" },
  { title: "Hacker Rank - Java Basic", downloadLink: "/certificates/java_basic certificate.pdf", category: "Coding Platforms" },
  { title: "Hacker Rank - SDE Intern", downloadLink: "/certificates/software_engineer_intern certificate (1).pdf", category: "Coding Platforms" },
  { title: "Hacker Rank - SQL Basic", downloadLink: "/certificates/sql_basic certificate.pdf", category: "Coding Platforms" },
  { title: "Hacker Rank - SQL Intermediate", downloadLink: "/certificates/sql_intermediate certificate.pdf", category: "Coding Platforms" },
  { title: "College_Level_Hackathon - (2024)", downloadLink: "/certificates/Hackathon_Participation.pdf", category: "College" },
  { title: "Code_Quest_Certificate - (2024)", downloadLink: "/certificates/Code_Quest_Runner_Certificate.png", category: "College" },
];

const categories = ["Main", "All", "NPTEL", "AWS", "Coding Platforms", "College"];

const Certifications = () => {
  const [selectedCategory, setSelectedCategory] = useState("Main");

  const filteredCerts =
    selectedCategory === "Main"
      ? certsData.filter(cert => cert.category === "NPTEL" || cert.category === "Coding Platforms")
      : selectedCategory === "All"
        ? certsData
        : certsData.filter(cert => cert.category === selectedCategory);

  return (
    <section className="certifications-section" id="certifications">
      <motion.h2
        className="certifications-title"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Certifications
      </motion.h2>

      <div className="filter-buttons">
        {categories.map(category => (
          <button
            key={category}
            className={selectedCategory === category ? "active" : ""}
            onClick={() => setSelectedCategory(category)}
          >
            {category === "Main" ? "NPTEL + Coding Platforms" : category}
          </button>
        ))}
      </div>

      <motion.div
        className="certifications-container"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {filteredCerts.map((cert, index) => (
          <motion.div
            key={index}
            className="cert-card-glass"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 180 }}
          >
            <div className="cert-content">
              <span className="cert-badge">{cert.title}</span>
              <a href={cert.downloadLink} className="download-btn-glass" download>
                ⬇ Download
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Certifications;
