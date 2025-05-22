import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import "./Coding.css";

const Coding = () => {
  const [githubStats, setGithubStats] = useState(null);
  const githubUsername = "Hari2726h";

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${githubUsername}`);
        setGithubStats(response.data);
      } catch (error) {
        console.error("Error fetching GitHub stats", error);
      }
    };

    fetchGitHubStats();
  }, []);

  return (
    <section className="coding">
      {/* Animated heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Coding Profiles
      </motion.h2>

      {/* GitHub Link */}
      <motion.p
        className="coding-link-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <span role="img" aria-label="developer">👨‍💻</span> GitHub:{" "}
        <a
          href="https://github.com/Hari2726h"
          target="_blank"
          rel="noopener noreferrer"
          className="coding-link"
        >
          Hari2726H
        </a>
      </motion.p>

      {/* GitHub Stats */}
      {githubStats && (
        <motion.div
          className="github-stats"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3>{githubStats.name}</h3>
          <p>🌟 {githubStats.public_repos} Repositories</p>
          <p>🍴 {githubStats.public_gists} Gists</p>
          <p>🔭 {githubStats.bio}</p>
        </motion.div>
      )}

      {/* GitHub Readme Stats */}
      <motion.img
        src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=radical`}
        alt="GitHub Stats"
        className="github-stats-card"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      />

      <motion.img
        src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=radical`}
        alt="GitHub Streak"
        className="github-streak-card"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      />

      {/* LeetCode Badge */}
      <motion.div
        className="badge-container"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <a
          href="https://leetcode.com/Hari2726H"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.shields.io/badge/LeetCode-Hari2726H-orange?style=for-the-badge&logo=leetcode"
            alt="LeetCode Badge"
            className="badge"
          />
        </a>
      </motion.div>

      {/* LeetCode Contributions */}
      <motion.div
        className="leetcode-contributions"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <h3>LeetCode Contributions</h3>
        <img
          src="https://leetcard.jacoblin.cool/Hari2726H?ext=contest"
          alt="LeetCode Card"
          className="leetcode-card"
        />
      </motion.div>
    </section>
  );
};

export default Coding;
