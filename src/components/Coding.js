import React, { useState, useEffect } from "react";
import axios from "axios";
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
      <h2>Coding Profiles</h2>

      {/* LeetCode Profile */}
      <p>
        <span role="img" aria-label="developer">👨‍💻</span> GitHub:{" "}
        <a
          href="https://github.com/Hari2726h"
          target="_blank"
          rel="noopener noreferrer"
          className="coding-link"
        >
          Hari2726H
        </a>
      </p>

      {/* GitHub Stats */}
      {githubStats && (
        <div className="github-stats">
          <h3>{githubStats.name}</h3>
          <p>
            <span role="img" aria-label="star">🌟</span> {githubStats.public_repos} Repositories
          </p>
          <p>
            <span role="img" aria-label="fork">🍴</span> {githubStats.public_gists} Gists
          </p>
          <p>
            <span role="img" aria-label="telescope">🔭</span> {githubStats.bio}
          </p>
        </div>
      )}

      {/* GitHub Readme Stats */}
      <img
        src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=radical`}
        alt="GitHub Stats"
        className="github-stats-card"
      />

      <img
        src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=radical`}
        alt="GitHub Streak"
        className="github-streak-card"
      />

      {/* LeetCode Badge */}
      <div className="badge-container">
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
      </div>

      {/* LeetCode Contributions Chart */}
      <div className="leetcode-contributions">
        <h3>LeetCode Contributions</h3>
        <img
          src="https://leetcard.jacoblin.cool/Hari2726H?ext=contest"
          alt="LeetCode Card"
          className="leetcode-card"
        />
      </div>
    </section>
  );
};

export default Coding;
