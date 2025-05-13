import React from 'react';

const skills = ["Java", "Spring Boot", "React", "Axios", "REST API", "HTML", "CSS", "MySQL", "GitHub"];

const Skills = () => (
  <section className="skills">
    <h2>Skills</h2>
    <ul className="skills-list">
      {skills.map((skill, index) => <li key={index}>{skill}</li>)}
    </ul>
  </section>
);

export default Skills;
