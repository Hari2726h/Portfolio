import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";

const STATS = [
  { end: 900, suffix: "+", label: "DSA Problems Solved" },
  { end: 10, suffix: "+", label: "Projects Shipped" },
  { end: 7, suffix: "+", label: "Hackathons" },
  { end: 1657, suffix: "", label: "LeetCode Rating" },
];

const Counter = ({ end, suffix, active }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 1400;
    const step = Math.max(1, Math.floor(end / (duration / 16)));

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, 16);

    return () => clearInterval(timer);
  }, [active, end]);

  return <>{count}{suffix}</>;
};

const Achievements = () => {
  const [active, setActive] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setActive(true),
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
#achievements {
  background: var(--bg-elevated);
  color: var(--text-primary);
  scroll-margin-top: 100px;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.stats-row {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.stat-block {
  padding: var(--space-8) var(--space-5);
  text-align: center;
  border-left: 1px solid var(--border);
}

.stat-block:first-child {
  border-left: none;
}

.stat-value {
  font-family: var(--font-display);
  font-size: clamp(2.25rem, 5vw, 3.25rem);
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.02em;
}

.stat-caption {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted);
  margin-top: 0.6rem;
}

@media (max-width: 720px) {
  .stats-row {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  }

  .stat-block:nth-child(2) {
    border-left: 1px solid var(--border);
  }

  .stat-block:nth-child(odd) {
    border-left: none;
  }

  .stat-block:nth-child(n+3) {
    border-top: 1px solid var(--border);
  }
}
      `}</style>

      <section id="achievements" ref={ref}>
        <motion.div
          className="stats-row"
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {STATS.map((s) => (
            <motion.div key={s.label} className="stat-block" variants={fadeUp}>
              <div className="stat-value">
                <Counter end={s.end} suffix={s.suffix} active={active} />
              </div>
              <div className="stat-caption">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default Achievements;
