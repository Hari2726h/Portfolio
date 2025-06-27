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
        <h2 className="about-title">👋 Get to Know Me</h2>
        <p className="about-description">
          I'm Hariharan C, a Computer Science student passionate about full-stack development. I enjoy building apps and solving algorithmic problems on LeetCode. Always open to internships, collaborations, and exciting tech chats. Let’s innovate together!
        </p>
      </motion.div>

      <VerticalTimeline lineColor="#6a11cb">
        <VerticalTimelineElement
          contentStyle={{ background: '#f3f0ff', color: '#333', borderRadius: '12px' }}
          contentArrowStyle={{ borderRight: '7px solid #6a11cb' }}
          date="2023 – 2027"
          iconStyle={{ background: '#6a11cb', color: '#fff' }}
          icon={<FaGraduationCap />}
        >
          <h3 className="timeline-title">B.E. in Computer Science</h3>
          <h4 className="timeline-subtitle">Sri Krishna College of Technology</h4>
          <p>
            Pursuing core CS subjects including DSA, DBMS, OS, and Cloud Computing through hands-on learning.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: '#e7f3ff', color: '#333', borderRadius: '12px' }}
          contentArrowStyle={{ borderRight: '7px solid #6a11cb' }}
          date="2024"
          iconStyle={{ background: '#6a11cb', color: '#fff' }}
          icon={<FaLaptopCode />}
        >
          <h3 className="timeline-title">LeetCode Achievements</h3>
          <h4 className="timeline-subtitle">Username: Hari2726H</h4>
          <p>
            Solved 400+ problems across topics like DP, trees, and graphs. Developing strong problem-solving skills daily.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: '#fef3e7', color: '#333', borderRadius: '12px' }}
          contentArrowStyle={{ borderRight: '7px solid #6a11cb' }}
          date="2025 – Present"
          iconStyle={{ background: '#6a11cb', color: '#fff' }}
          icon={<FaRocket />}
        >
          <h3 className="timeline-title">Full Stack Project</h3>
          <h4 className="timeline-subtitle">E-Commerce Web Application</h4>
          <p>
            Built using React, Spring Boot, and MySQL. Features product browsing, user login, and secure order processing.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default About;
