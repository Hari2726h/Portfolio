import React from "react";
import { motion } from "framer-motion";
import "./Certifications.css";

const certs = [
  {
    title: "Operating System - NPTEL (2024)",
    downloadLink: "#",
  },
  {
    title: "Effective Writing - NPTEL (2024)",
    downloadLink: "#",
  },
];

const Certifications = () => {
  return (
    <section className="certifications-section">
      {/* Animated heading */}
      <motion.h2
        className="certifications-title"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Certifications
      </motion.h2>

      {/* Animated container */}
      <motion.div
        className="certifications-container"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {certs.map((cert, index) => (
          <motion.div
            key={index}
            className="cert-card-glass"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 180 }}
          >
            <div className="cert-content">
              <span className="cert-badge">{cert.title}</span>
              <a
                href={cert.downloadLink}
                className="download-btn-glass"
                download
              >
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
