import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skillsData = [
  // Backend & Programming Languages
  { name: 'Java', category: 'Backend', experience: 3, progress: 70, logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/java.svg' },
  { name: 'Spring Boot', category: 'Backend', experience: 3, progress: 60, logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/springboot.svg' },
  { name: 'MySQL', category: 'Backend', experience: 3, progress: 65, logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/mysql.svg' },
  { name: 'REST API', category: 'Backend', experience: 3, progress: 75, logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/api.svg' },
  { name: 'C++', category: 'Backend', experience: 1, progress: 50, logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/cplusplus.svg' },

  // Frontend
  { name: 'React', category: 'Frontend', experience: 2, progress: 80, logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/react.svg' },
  { name: 'HTML', category: 'Frontend', experience: 5, progress: 90, logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/html5.svg' },
  { name: 'CSS', category: 'Frontend', experience: 4, progress: 80, logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/css3.svg' },

  // Tools
  { name: 'VS Code', category: 'Tools', experience: 4, progress: 85, logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/visualstudiocode.svg' },
  { name: 'GitHub', category: 'Tools', experience: 4, progress: 85, logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/github.svg' },
  { name: 'Eclipse', category: 'Tools', experience: 3, progress: 70, logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/eclipseide.svg' },
  { name: 'AWS', category: 'Tools', experience: 1, progress: 50, logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/amazonaws.svg' },
  { name: 'Figma', category: 'Tools', experience: 2, progress: 60, logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/figma.svg' },
];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('Main'); // Default shows Frontend + Backend

  const filteredSkills =
    selectedCategory === 'Main'
      ? skillsData.filter(skill => skill.category === 'Frontend' || skill.category === 'Backend')
      : selectedCategory === 'All'
        ? skillsData
        : skillsData.filter(skill => skill.category === selectedCategory);

  return (
    <section className="skills" id="skills">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{
          fontSize: '2.8rem',
          fontWeight: 'bold',
          color: '#6a11cb',
          marginBottom: '40px',
          textAlign: 'center',
        }}
      >
        Skills
      </motion.h2>

      {/* Filter Buttons */}
      <motion.div
        className="filter-buttons"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <button onClick={() => setSelectedCategory('Main')}>Frontend + Backend</button>
        <button onClick={() => setSelectedCategory('Tools')}>Tools</button>
        <button onClick={() => setSelectedCategory('All')}>All</button>
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        className="skills-list"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <div className="circle-progress">
              <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" />
            </div>
            <div className="skill-info">
              <h3>{skill.name}</h3>
              <p title={`${skill.experience} years of experience`}>{skill.name}</p>
              <p>{`Used in ${skill.experience + 2} projects`}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
