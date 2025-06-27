import React from 'react';
import { motion } from 'framer-motion';
import './Coding.css';

const codingProfiles = [
  {
    name: 'GitHub',
    description: 'Open source projects and contributions',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/github.svg',
    link: 'https://github.com/Hari2726h',
  },
  {
    name: 'LeetCode',
    description: 'Problem solving and contest ranking',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/leetcode.svg',
    link: 'https://leetcode.com/Hari2726H',
  },
  {
    name: 'GeeksforGeeks',
    description: 'DSA practice and coding articles',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/geeksforgeeks.svg',
    link: 'https://www.geeksforgeeks.org/user/hari2qi5b/',
  },
  {
    name: 'Coding Ninjas / Code360',
    description: 'Coding challenges and progress tracking',
    logo: 'https://ninjasfiles.s3.amazonaws.com/0000000000000723.jpg',
    link: 'https://www.naukri.com/code360/profile/55dbb5cb-84d8-43b5-8fbf-82b55b749994',
  },
];

const Coding = () => {
  return (
    <section className="coding" id="coding">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Coding Profiles
      </motion.h2>

      <motion.div
        className="coding-profiles"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {codingProfiles.map((profile, index) => (
          <motion.a
            key={index}
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            className="coding-profile-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <img src={profile.logo} alt={`${profile.name} logo`} />
            <h3>{profile.name}</h3>
            <p>{profile.description}</p>
          </motion.a>
        ))}
      </motion.div>

      <motion.div
        className="leetcode-contributions"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <h3>LeetCode Contributions</h3>
        <img
          src="https://leetcard.jacoblin.cool/Hari2726H?ext=contest"
          alt="LeetCode Stats"
          style={{ maxWidth: '100%' }}
        />
      </motion.div>
    </section>
  );
};

export default Coding;
