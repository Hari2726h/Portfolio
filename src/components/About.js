import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaRocket } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <section className="about section" id="about">
      <motion.div
        className="about-intro"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="about-title">✨ About Me</h2>
        <p className="about-description">
          Aspiring Software Developer Intern with strong problem-solving, critical thinking, and teamwork skills. Experienced in Java, Spring Boot,
 MySQL, and scalable application development. Active hackathon participant, solving real-world challenges under tight deadlines. </p>
      </motion.div>

      <VerticalTimeline lineColor="#6a11cb">
        <VerticalTimelineElement
          contentStyle={{ background: '#f3f0ff', color: '#333', borderRadius: '12px' }}
          contentArrowStyle={{ borderRight: '7px solid #6a11cb' }}
          date="2023 - 2027"
          iconStyle={{ background: '#6a11cb', color: '#fff' }}
          icon={<FaGraduationCap />}
        >
          <h3 className="timeline-title">Bachelor of Engineering - CSE</h3>
          <h4 className="timeline-subtitle">Sri Krishna College Of Technology </h4>
          <p>Learning DSA, DBMS, OS, and Cloud computing.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: '#e7f3ff', color: '#333', borderRadius: '12px' }}
          contentArrowStyle={{ borderRight: '7px solid #6a11cb' }}
          date="2024"
          iconStyle={{ background: '#6a11cb', color: '#fff' }}
          icon={<FaLaptopCode />}
        >
          <h3 className="timeline-title">Leetcode</h3>
          <h4 className="timeline-subtitle">Coding Profile - Hari2726H</h4>
          <p>I have solved 360+ problems on LeetCode and my
profile reflects strong problem-solving skills across various topics including data structures, algorithms, and demonstrating consistency.  </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: '#fef3e7', color: '#333', borderRadius: '12px' }}
          contentArrowStyle={{ borderRight: '7px solid #6a11cb' }}
          date="2025 - present"
          iconStyle={{ background: '#6a11cb', color: '#fff' }}
          icon={<FaRocket />}
        >
          <h3 className="timeline-title">Full Stack Project</h3>
          <h4 className="timeline-subtitle">Ecommerce Project - College</h4>
          <p>
          Developing a full-stack eCommerce web application that enables users to browse, search, and purchase products online.   </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default About;
