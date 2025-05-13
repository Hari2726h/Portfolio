import React, { useState } from 'react';
import './Projects.css'; // Make sure to add your custom styles

// Sample project data
const projects = [
  {
    title: "Fashion Rental Platform",
    description: "Spring Boot backend for renting pre-owned fashion items with CRUD, JPQL, paging, and sorting.",
    link: "https://github.com/Hari2726h/FASHION_RESALE_PLATFORM-",
    category: "Fullstack",
    modalContent: "Detailed case study: Built a backend to handle product listings, user management, and rental transactions.",
    image: "https://via.placeholder.com/300", // Replace with actual image URL
  },
  {
    title: "Administrative Tool",
    description: "Student management dashboard with attendance, test marks, PDF/Excel export.",
    link: "https://github.com/Hari2726h/Hari2726h",
    category: "React",
    modalContent: "Detailed case study: Created an admin dashboard to manage student data, including attendance and grades.",
    image: "https://via.placeholder.com/300", // Replace with actual image URL
  },
  // Add more projects as needed
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

  // Filter projects based on category
  const filteredProjects = filter === 'All' ? projects : projects.filter(proj => proj.category === filter);

  return (
    <section className="projects">
      <h2>Projects</h2>

      {/* Filter buttons */}
      <div className="filter-buttons">
        <button onClick={() => handleFilterChange('All')}>All</button>
        <button onClick={() => handleFilterChange('React')}>React</button>
        <button onClick={() => handleFilterChange('Fullstack')}>Fullstack</button>
        <button onClick={() => handleFilterChange('Hackathon')}>Hackathon</button>
      </div>

      {/* Projects grid */}
      <div className="projects-grid">
        {filteredProjects.map((proj, index) => (
          <div
            key={index}
            className="project-card"
            onClick={() => handleOpenModal(proj)}
          >
            <img
              src={proj.image}
              alt={proj.title}
              className="project-image"
            />
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <a href={proj.link} target="_blank" rel="noreferrer">View on GitHub</a>
          </div>
        ))}
      </div>

      {/* Modal for detailed case study */}
      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
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
