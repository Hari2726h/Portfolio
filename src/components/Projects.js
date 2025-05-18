import React, { useState } from 'react';
import './Projects.css'; // Make sure to add your custom styles

// Sample project data
const projects = [
  {
    title: "Fashion Rental Platform",
    description: "Spring Boot backend for renting pre-owned fashion items with CRUD, JPQL, paging, and sorting.",
    link: "https://github.com/Hari2726h/FASHION_RESALE_PLATFORM-",
    category: "Backend",
    modalContent: "Detailed case study: Built a backend to handle product listings, user management, and rental transactions.",
    image: "https://images.unsplash.com/photo-1602810313329-3e08c4f94d2e?auto=format&fit=crop&w=800&q=60", // Fashion items
  },
  {
    title: "Administrative Tool",
    description: "Student management dashboard with attendance, test marks, PDF/Excel export.",
    link: "https://github.com/Hari2726h/StudentProfileManagement",
    category: "React",
    modalContent: "Detailed case study: Created an admin dashboard to manage student data, including attendance and grades.",
    image: "https://images.unsplash.com/photo-1584697964403-b1216a89b261?auto=format&fit=crop&w=800&q=60", // Admin dashboard
  },
  {
    title: "Ecommerce Platform",
    description: "This is a full-stack E-commerce Platform designed to support seamless buying and selling of products online.",
    link: "https://github.com/Hari2726h/E-commerce-Platform",
    category: "Fullstack",
    modalContent: "Detailed case study: It integrates a robust backend, dynamic frontend, and cloud storage to ensure performance, scalability, and user-friendly interaction.",
    image: "https://images.unsplash.com/photo-1515169067865-5387ec356754?auto=format&fit=crop&w=800&q=60", // E-commerce concept
  },
  {
    title: "Personal Finance Manager",
    description: "This is a web application designed to help users efficiently track and manage their personal expenses and income.",
    link: "https://github.com/Hari2726h/personalfinancemanager",
    category: "React",
    modalContent: "Detailed case study: It focuses on simplicity, usability, and real-time data updates for a smooth financial tracking experience.",
    image: "https://images.unsplash.com/photo-1556742400-b5d5aa4f23b6?auto=format&fit=crop&w=800&q=60", // Personal finance
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

  // Filter projects based on category
  const filteredProjects = filter === 'All' ? projects : projects.filter(proj => proj.category === filter);

  return (
    <section className="projects">
      <h2>Projects</h2>

      {/* Filter buttons */}
      <div className="filter-buttons">
        <button onClick={() => handleFilterChange('All')}>All</button>
        <button onClick={() => handleFilterChange('React')}>Frontend</button>
        <button onClick={() => handleFilterChange('Fullstack')}>Fullstack</button>
        <button onClick={() => handleFilterChange('Backend')}>Backend</button>
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
