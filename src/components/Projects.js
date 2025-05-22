import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    title: "Fashion Rental Platform",
    description: "Spring Boot backend for renting pre-owned fashion items with CRUD, JPQL, paging, and sorting.",
    link: "https://github.com/Hari2726h/FASHION_RESALE_PLATFORM-",
    category: "Backend",
    modalContent: "Detailed case study: Built a backend to handle product listings, user management, and rental transactions.",
  },
  {
    title: "Administrative Tool",
    description: "Student management dashboard with attendance, test marks, PDF/Excel export.",
    link: "https://github.com/Hari2726h/StudentProfileManagement",
    category: "React",
    modalContent: "Detailed case study: Created an admin dashboard to manage student data, including attendance and grades.",
  },
  {
    title: "Ecommerce Platform",
    description: "Full-stack platform for seamless online buying/selling of products.",
    link: "https://github.com/Hari2726h/E-commerce-Platform",
    category: "Fullstack",
    modalContent: "Detailed case study: Integrated backend, dynamic frontend, and cloud storage for performance and scalability.",
  },
  {
  title: "Portfolio",
  description: "Personal portfolio website showcasing projects, skills, and experience.",
  link: "https://github.com/Hari2726h/Portfolio",
  category: "Fullstack",
  modalContent: "Comprehensive showcase of frontend design, responsive UI, and integration with external APIs to highlight coding profiles and achievements."
},

  {
    title: "Personal Finance Manager",
    description: "Web app to efficiently track and manage personal expenses and income.",
    link: "https://github.com/Hari2726h/personalfinancemanager",
    category: "React",
    modalContent: "Detailed case study: Real-time data updates and focus on usability for financial tracking.",
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedProject(null);
  };

  const filteredProjects = filter === 'All' ? projects : projects.filter(proj => proj.category === filter);

  return (
    <section className="projects" id="projects">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
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
        Projects
      </motion.h2>

      {/* Filter Buttons */}
      <motion.div
        className="filter-buttons"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <button onClick={() => handleFilterChange('All')}>All</button>
        <button onClick={() => handleFilterChange('React')}>Frontend</button>
        <button onClick={() => handleFilterChange('Fullstack')}>Fullstack</button>
        <button onClick={() => handleFilterChange('Backend')}>Backend</button>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="projects-grid"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {filteredProjects.map((proj, index) => (
          <motion.div
            key={index}
            className="project-card"
            onClick={() => handleOpenModal(proj)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 * index }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <a href={proj.link} target="_blank" rel="noreferrer">View on GitHub</a>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      {modalVisible && selectedProject && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.modalContent}</p>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
