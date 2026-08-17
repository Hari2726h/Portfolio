import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";

const GITHUB_USERNAME = "Hari2726h";

const CODING_PROFILES = [
  {
    name: "GitHub",
    desc: "Open source projects, commits & collaborations",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/github.svg",
    link: "https://github.com/Hari2726h",
    stats: ["Repos", "Followers", "Stars"]
  },
  {
    name: "LeetCode",
    desc: "DSA problem solving & contests",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/leetcode.svg",
    link: "https://leetcode.com/Hari2726H",
    stats: ["900+ Problems", "1657 Rating", "Streak"]
  },
  {
    name: "GeeksforGeeks",
    desc: "DSA practice & technical articles",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/geeksforgeeks.svg",
    link: "https://www.geeksforgeeks.org/user/hari2qi5b/",
    stats: ["Articles", "Problems", "Rank"]
  },
  {
    name: "Coding Ninjas / Code360",
    desc: "Structured coding paths & assessments",
    logo: "https://ninjasfiles.s3.amazonaws.com/0000000000000723.jpg",
    link: "https://www.naukri.com/code360/profile/55dbb5cb-84d8-43b5-8fbf-82b55b749994",
    stats: ["Courses", "Skill Score", "Progress"]
  }
];

const Coding = () => {
  const [githubStats, setGithubStats] = useState(null);
  const [githubStatus, setGithubStatus] = useState("loading");

  useEffect(() => {
    let cancelled = false;

    async function loadGithubStats() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`),
        ]);

        if (!userRes.ok || !reposRes.ok) throw new Error("GitHub API request failed");

        const user = await userRes.json();
        const repos = await reposRes.json();
        const totalStars = Array.isArray(repos)
          ? repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0)
          : 0;

        if (!cancelled) {
          setGithubStats({
            repos: `${user.public_repos}+ Repos`,
            followers: `${user.followers}+ Followers`,
            stars: `${totalStars}+ Stars`,
          });
          setGithubStatus("ready");
        }
      } catch (err) {
        if (!cancelled) setGithubStatus("error");
      }
    }

    loadGithubStats();
    return () => { cancelled = true; };
  }, []);

  return (
    <>
      <style>{`
#coding {
  background: var(--bg);
  color: var(--text-primary);
  scroll-margin-top: 100px;
}

.coding-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  overflow: hidden;
  margin-top: var(--space-10);
}

.coding-card {
  background: var(--bg);
  padding: var(--space-6) var(--space-5);
  text-decoration: none;
  display: block;
  transition: background var(--transition-fast);
}

.coding-card:hover {
  background: var(--surface);
}

.coding-logo {
  width: 32px;
  height: 32px;
  margin-bottom: var(--space-4);
  filter: var(--icon-mono-filter);
  opacity: 0.85;
}

.coding-name {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1.05rem;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.coding-desc {
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin-bottom: var(--space-5);
  line-height: 1.55;
  min-height: 2.6em;
}

.coding-stats {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  padding-top: var(--space-4);
  border-top: 1px solid var(--border);
  margin-bottom: var(--space-4);
}

.stat-item {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--text-muted);
}

.stat-item.skeleton {
  display: inline-block;
  width: 60px;
  height: 0.78rem;
  border-radius: 4px;
  background: var(--surface-2);
  animation: skeletonPulse 1.2s ease-in-out infinite;
}

@keyframes skeletonPulse {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

.visit-link {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  color: var(--accent);
  font-weight: 600;
  font-size: 0.85rem;
}

@media (max-width: 900px) {
  .coding-grid {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  }
}

@media (max-width: 560px) {
  .coding-grid {
    grid-template-columns: 1fr;
  }
}

/* ===================== LEETCODE SECTION ===================== */
.leetcode-box {
  margin-top: var(--space-10);
}

.leetcode-title {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-muted);
  margin-bottom: var(--space-4);
}

.leetcode-frame {
  max-width: 720px;
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid var(--border);
}

.leetcode-frame img {
  display: block;
  width: 100%;
}
      `}</style>

      <section id="coding" className="section">
        <div className="section-inner">
          <motion.div className="eyebrow" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
            Coding Profiles
          </motion.div>
          <motion.h2 className="section-heading" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
            Proof of practice.
          </motion.h2>

          <motion.div className="coding-grid" variants={staggerContainer(0.08)} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            {CODING_PROFILES.map((profile, i) => {
              const isGithub = profile.name === "GitHub";
              const displayStats = isGithub && githubStatus === "ready"
                ? [githubStats.repos, githubStats.followers, githubStats.stars]
                : profile.stats;

              return (
                <motion.a
                  key={i}
                  href={profile.link}
                  target="_blank"
                  rel="noreferrer"
                  className="coding-card"
                  variants={fadeUp}
                >
                  <img src={profile.logo} alt={profile.name} className="coding-logo" loading="lazy" decoding="async" />
                  <div className="coding-name">{profile.name}</div>
                  <div className="coding-desc">{profile.desc}</div>
                  <div className="coding-stats">
                    {isGithub && githubStatus === "loading"
                      ? [0, 1, 2].map(j => <span key={j} className="stat-item skeleton" />)
                      : displayStats.map((stat, j) => (
                          <div key={j} className="stat-item">{stat}</div>
                        ))
                    }
                  </div>
                  <div className="visit-link">Visit Profile <FiArrowUpRight /></div>
                </motion.a>
              );
            })}
          </motion.div>

          <motion.div className="leetcode-box" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
            <div className="leetcode-title">LeetCode Performance</div>
            <div className="leetcode-frame">
              <img
                src="https://leetcard.jacoblin.cool/Hari2726H?ext=contest&theme=dark"
                alt="LeetCode Stats"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Coding;
