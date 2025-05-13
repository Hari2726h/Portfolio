import React, { useState } from "react";
import "./Certifications.css"; // Ensure you have this CSS file for styling

const certs = [
  { title: "Operating System - NPTEL (2024)", imgSrc: "path_to_image_1.jpg" },
  { title: "Effective Writing - NPTEL (2024)", imgSrc: "path_to_image_2.jpg" },
  // Add other certifications with an image if applicable
];

const Certifications = () => {
  const [currentCert, setCurrentCert] = useState(0);

  const handleNext = () => {
    setCurrentCert((prev) => (prev + 1) % certs.length);
  };

  const handlePrev = () => {
    setCurrentCert(
      (prev) => (prev - 1 + certs.length) % certs.length
    );
  };

  return (
    <section className="certifications">
      <h2>Certifications</h2>
      <div className="carousel">
        <button className="prev" onClick={handlePrev}>←</button>

        <div className="cert-card">
          <img
            src={certs[currentCert].imgSrc}
            alt={certs[currentCert].title}
            className="cert-image"
          />
          <h3>{certs[currentCert].title}</h3>
          <button className="download-btn">Download</button>
        </div>

        <button className="next" onClick={handleNext}>→</button>
      </div>
    </section>
  );
};

export default Certifications;
