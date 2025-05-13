import React from 'react';

const certs = [
  "Operating System - NPTEL (2024)",
  "Effective Writing - NPTEL (2024)"
];

const Certifications = () => (
  <section className="certifications">
    <h2>Certifications</h2>
    <ul>
      {certs.map((cert, index) => <li key={index}>{cert}</li>)}
    </ul>
  </section>
);

export default Certifications;
