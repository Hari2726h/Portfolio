import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

// Add the logo path for each skill
const skillsData = [
  { name: 'Java', category: 'Backend', experience: 3, progress: 70, logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/java.svg' },
  { name: 'Spring Boot', category: 'Backend', experience: 2, progress: 60, logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/springboot.svg' },
  { name: 'React', category: 'Frontend', experience: 2, progress: 80, logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/react.svg' },
  // { name: 'Axios', category: 'Frontend', experience: 1, progress: 50, logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/axios.svg' },
  { name: 'REST API', category: 'Backend', experience: 3, progress: 75, logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/api.svg' },
  { name: 'HTML', category: 'Frontend', experience: 5, progress: 90, logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/html5.svg' },
  { name: 'CSS', category: 'Frontend', experience: 4, progress: 80, logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/css3.svg' },
  { name: 'MySQL', category: 'Backend', experience: 2, progress: 65, logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/mysql.svg' },
  { name: 'GitHub', category: 'Tools', experience: 4, progress: 85, logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/github.svg' },
];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter skills based on selected category
  const filteredSkills = selectedCategory === 'All'
    ? skillsData
    : skillsData.filter(skill => skill.category === selectedCategory);

  return (
    <section className="skills">
      <h2>Skills</h2>

      {/* Category Filter */}
      <div className="filter-buttons">
        <button onClick={() => setSelectedCategory('All')}>All</button>
        <button onClick={() => setSelectedCategory('Frontend')}>Frontend</button>
        <button onClick={() => setSelectedCategory('Backend')}>Backend</button>
        <button onClick={() => setSelectedCategory('Tools')}>Tools</button>
      </div>

      <div className="skills-list">
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
      </div>
    </section>
  );
};

export default Skills;
