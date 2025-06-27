import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    title: "Fashion Rental Platform",
    description: "Spring Boot backend for renting pre-owned fashion items with CRUD, JPQL, paging, and sorting.",
    github: "https://github.com/Hari2726h/FASHION_RESALE_PLATFORM-",
    live: "https://spectacular-klepon-0fd01d.netlify.app/",
    image: "/images/fashion-rental.png",
    category: "Backend",
    modalContent: "Fashion Product Selling Website – E-Commerce Full-Stack Platform (Project Overview ) - This e-commerce platform began as a backend project with basic admin functions. I later expanded it into a full-stack application supporting both admin and user roles. The backend, built with Spring Boot, was extended to include 7–8 REST controllers for products, orders, users, and categories. I implemented fixed admin login and user registration with role-based access handling. To simplify deployment, I skipped full JWT integration. On the frontend, I used React + Bootstrap for rapid development and built separate dashboards for admin and users. Admins can manage products, users, and transactions, while users can browse and place orders. Designing UI/UX for dual roles was a challenge, which I solved through layout iterations and logic separation. The project was completed in 10 days. This project helped me strengthen full-stack development skills, especially in managing complex user flows and admin interfaces.",  },
  {
    title: "Personal Finance Manager",
    description: "Web app to efficiently track and manage personal expenses and income.",
    github: "https://github.com/Hari2726h/personalfinancemanager",
    live: "https://taupe-shortbread-4071b4.netlify.app/",
    image: "/images/finance-manager.png",
    category: "React",
    modalContent: "🔹 2️⃣ Personal Finance Manager – Full-Stack Web App with JWT Auth - This project is a full-stack Personal Finance Manager built with Spring Boot (backend), React (frontend), and MySQL for data storage. Initially started in my third semester, I rebuilt it in the fourth after learning Spring Boot. I aimed to implement core finance features like income/expense tracking and secure user authentication. For security, I chose JWT authentication over Firebase for better backend control. The backend includes three main controllers: User (for auth), Transaction (for finance records), and Category (for organizing data). Integrating the frontend with the backend was challenging, especially handling CORS and secure API calls. I used Axios in React and configured Spring Boot’s WebConfig to enable cross-origin requests. The UI consists of four simple pages—Login, Register, Transactions, and Subscription—styled with CSS. Though development took 5–7 days, I paused full deployment due to issues with environment variables and CORS, which I later solved in my next project. This project sharpened my full-stack integration and backend security skills." ,
  },
  {
    title: "Portfolio",
    description: "Personal portfolio website showcasing projects, skills, and experience.",
    github: "https://github.com/Hari2726h/Portfolio",
    live: "https://portfolio-2pit.vercel.app/",
    image: "/images/portfolio.png",
    category: "Fullstack",
    modalContent: " Personal Portfolio – React-Based Multi-Page Website - This is a React-based personal portfolio built to showcase my skills and journey as a developer. As someone focused on backend development, I initially had limited frontend experience, but I envisioned my portfolio as an interactive, structured extension of my resume. It includes multiple sections like Hero, Coding Profiles, Projects, Achievements, and Certificates, with a clean card-based layout and subtle animations for better user engagement. I integrated EmailJS in the Contact section for direct messaging and added a ChatLink AI chatbot to assist visitors. Real-time stats from GitHub and LeetCode are displayed in the Coding Profiles section using public APIs. Projects and Certificates pages feature category filters for better usability. Designing the Hero section was challenging, especially balancing visuals with key info like CTA buttons. I ensured full responsiveness across devices, and deployed the app seamlessly using Vercel. This project significantly",
  },
  {
    title: "Administrative Tool",
    description: "Student management dashboard with attendance, test marks, PDF/Excel export.",
    github: "https://github.com/Hari2726h/StudentProfileManagement",
    live: "https://hackforgep-git-main-hariharans-projects-d5bd8d51.vercel.app/",
    image: "/images/admin-tool.png",
    category: "React",
    modalContent: "Created a complete admin tool to manage students with filtering, export, and responsive UI.",
  },
  {
    title: "Ecommerce Platform",
    description: "Full-stack platform for seamless online buying/selling of products.",
    github: "https://github.com/Hari2726h/E-commerce-Platform",
    live: "",
    image: "/images/ecommerce.png",
    category: "Fullstack",
    modalContent: "🔹 1️⃣ 🔧Deployment Phase – Docker + Free-Tier Hosting (Deployment Overview ) The deployment phase was the most challenging and rewarding. I Dockerized the Spring Boot backend and deployed it on Render, while hosting the frontend on Netlify. My local database, MySQL, wasn’t supported by Render’s free tier, so I switched to PostgreSQL and hosted it on Neon.tech. I used Maven to build the backend, created a Dockerfile, pushed the image to Docker Hub, and configured .env and application.properties. After deploying, I discovered Render’s cold start issue, which makes the backend inactive after 15 mins. To resolve this, I used FastCron to ping the backend periodically. However, this conflicted with the JWT-secured Finance Manager project. I addressed this by modifying Spring Security to allow unauthenticated pings to /ping endpoints. Overall, deployment took 5 days and involved 10–15 redeployments. Both apps are now live, responsive, and fully functional using only free-tier services.",
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleFilterChange = (category) => setFilter(category);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedProject(null);
  };

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(proj => proj.category === filter);

  return (
    <section className="projects" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

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
            whileHover={{ scale: 1.05 }}
          >
            <img src={proj.image} alt={proj.title} className="project-image" />
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <div className="project-links">
              <a href={proj.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={proj.live} target="_blank" rel="noreferrer" className="live-link">              Live Demo</a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {modalVisible && selectedProject && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
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
