import React from 'react';

const projects = [
  {
    title: "Fashion Rental Platform",
    description: "Spring Boot backend for renting pre-owned fashion items with CRUD, JPQL, paging, and sorting.",
    link: "https://github.com/Hari2726h/FASHION_RESALE_PLATFORM-"
  },
  {
    title: "Administrative Tool",
    description: "Student management dashboard with attendance, test marks, PDF/Excel export.",
    link: "https://github.com/Hari2726h/Hari2726h"
  }
];

const Projects = () => (
  <section className="projects">
    <h2>Projects</h2>
    {projects.map((proj, index) => (
      <div key={index} className="project-card">
        <h3>{proj.title}</h3>
        <p>{proj.description}</p>
        <a href={proj.link} target="_blank" rel="noreferrer">View on GitHub</a>
      </div>
    ))}
  </section>
);

export default Projects;
