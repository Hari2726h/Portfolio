import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaRocket } from 'react-icons/fa';
import './About.css'; // Create this for extra styling if needed

const About = () => {
  return (
    <section className="about" id="about">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>About Me</h2>
        <p>
          I’m a CSE undergraduate passionate about building full-stack applications, exploring
          DevOps, and solving real-world problems through software engineering.
        </p>
      </motion.div>

      <VerticalTimeline lineColor="#6a11cb">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: '#f3f0ff', color: '#333' }}
          contentArrowStyle={{ borderRight: '7px solid #6a11cb' }}
          date="2021 - Present"
          iconStyle={{ background: '#6a11cb', color: '#fff' }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">Bachelor of Engineering - CSE</h3>
          <h4 className="vertical-timeline-element-subtitle">XYZ University</h4>
          <p title="Achieved 9+ CGPA consistently">Learning DSA, DBMS, OS, and Cloud computing.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#e7f3ff', color: '#333' }}
          contentArrowStyle={{ borderRight: '7px solid #6a11cb' }}
          date="2023"
          iconStyle={{ background: '#6a11cb', color: '#fff' }}
          icon={<FaLaptopCode />}
        >
          <h3 className="vertical-timeline-element-title">Full Stack Project</h3>
          <h4 className="vertical-timeline-element-subtitle">Hackathon - College</h4>
          <p title="React, Spring Boot, MongoDB">
            Built a fashion rental platform with login, CRUD, filtering, and REST APIs.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--achievement"
          contentStyle={{ background: '#fef3e7', color: '#333' }}
          contentArrowStyle={{ borderRight: '7px solid #6a11cb' }}
          date="2024"
          iconStyle={{ background: '#6a11cb', color: '#fff' }}
          icon={<FaRocket />}
        >
          <h3 className="vertical-timeline-element-title">Smart India Hackathon</h3>
          <h4 className="vertical-timeline-element-subtitle">Final Round</h4>
          <p title="Developed a scalable academic admin dashboard">
            Designed a responsive tutor-student tracker with PDF export, filters, and graphs.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default About;
