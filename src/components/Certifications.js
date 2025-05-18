import React from "react";
import "./Certifications.css";
const certs = [
  {
    title: "Operating System - NPTEL (2024)",
    imgSrc: "https://picsum.photos/300/200?random=1",
    downloadLink: "#",
  },
  {
    title: "Effective Writing - NPTEL (2024)",
    imgSrc: "https://picsum.photos/300/200?random=2",
    downloadLink: "#",
  },
];


const Certifications = () => {
  return (
    <section className="certifications-section">
      <h2 className="certifications-title">📜 Certifications</h2>
      <div className="certifications-container">
        {certs.map((cert, index) => (
          <div className="cert-card-glass" key={index}>
            <img
              src={cert.imgSrc}
              alt={cert.title}
              className="cert-image-glass"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/300x200?text=No+Image";
              }}
            />
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
