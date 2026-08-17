import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { FiArrowUpRight } from "react-icons/fi";
import { fadeInLeft, fadeInRight, viewportOnce } from "../lib/motion";

const SERVICE_ID = "service_i1q57i7";
const TEMPLATE_ID = "template_0vt15qa";
const PUBLIC_KEY = "oiDKR2_yVkL7Xva9o";

const Contact = () => {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, []);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email";
    if (form.message.trim().length < 10)
      e.message = "Message must be at least 10 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;

    setLoading(true);

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
      to_name: "Hariharan"
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams)
      .then(() => {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatus("error");
      })
      .finally(() => {
        setLoading(false);
        setTimeout(() => setStatus(null), 4000);
      });
  };

  return (
    <>
      <style>{`
#contact {
  background: var(--bg-elevated);
  color: var(--text-primary);
  scroll-margin-top: 100px;
  border-top: 1px solid var(--border);
}

.contact-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: var(--space-10);
}

.contact-statement {
  font-family: var(--font-display);
  font-size: var(--fs-2xl);
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: var(--text-primary);
  margin-bottom: var(--space-6);
}

.contact-statement .muted {
  color: var(--text-muted);
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  margin-bottom: var(--space-6);
}

.detail-row {
  display: flex;
  gap: var(--space-3);
  font-size: 0.95rem;
}

.detail-row .label {
  font-family: var(--font-mono);
  color: var(--text-muted);
  width: 90px;
  flex-shrink: 0;
}

.detail-row .value {
  color: var(--text-secondary);
}

.detail-row a {
  color: var(--accent);
  text-decoration: none;
}

.social-links {
  display: flex;
  gap: 0.6rem;
}

.social-link {
  width: 44px;
  height: 44px;
  border: 1px solid var(--border);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 1.15rem;
  transition: all var(--transition-fast);
}

.social-link:hover {
  border-color: var(--accent-border);
  color: var(--accent);
}

/* ===================== FORM ===================== */
.contact-form-wrapper {
  background: var(--surface);
  padding: var(--space-6);
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
}

.form-group {
  margin-bottom: var(--space-5);
}

.form-label {
  display: block;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted);
  margin-bottom: 0.5rem;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 0.8rem 1rem;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  color: var(--text-primary);
  font-size: 0.95rem;
  font-family: var(--font-body);
  transition: border-color var(--transition-fast);
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--accent-border);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.form-error {
  color: var(--danger);
  font-size: 0.82rem;
  margin-top: 0.3rem;
}

.form-submit {
  width: 100%;
  padding: 0.9rem;
  background: var(--text-primary);
  color: var(--bg);
  border: none;
  border-radius: var(--radius-sm);
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background var(--transition-fast);
}

.form-submit:disabled {
  opacity: 0.55;
  cursor: not-allowed;
}

.form-submit:not(:disabled):hover {
  background: var(--accent);
  color: #fff;
}

.form-status {
  padding: 0.9rem;
  border-radius: var(--radius-sm);
  text-align: center;
  font-weight: 600;
  font-size: 0.9rem;
}

.form-status.success {
  background: rgba(52, 211, 153, 0.1);
  color: var(--success);
  border: 1px solid var(--success);
}

.form-status.error {
  background: rgba(255, 107, 107, 0.1);
  color: var(--danger);
  border: 1px solid var(--danger);
}

.char-count {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--text-muted);
  margin-top: 0.3rem;
}

@media (max-width: 900px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }
}
      `}</style>

      <section id="contact" className="section">
        <div className="section-inner">
          <div className="contact-grid">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <div className="eyebrow">Contact</div>
              <h2 className="contact-statement">
                Have a problem <span className="muted">worth solving?</span>
              </h2>

              <div className="contact-details">
                <div className="detail-row">
                  <span className="label">Status</span>
                  <span className="value">SDE Intern @ Kapture CX</span>
                </div>
                <div className="detail-row">
                  <span className="label">Focus</span>
                  <span className="value">Backend / AI Systems</span>
                </div>
                <div className="detail-row">
                  <span className="label">Location</span>
                  <span className="value">Coimbatore, India</span>
                </div>
                <div className="detail-row">
                  <span className="label">Email</span>
                  <a href="mailto:hari2726h@gmail.com">hari2726h@gmail.com</a>
                </div>
                <div className="detail-row">
                  <span className="label">Phone</span>
                  <a href="tel:+919943105704">+91 99431 05704</a>
                </div>
              </div>

              <div className="social-links">
                <motion.a href="https://linkedin.com/in/hariharan-c" target="_blank" rel="noreferrer" className="social-link" whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }} aria-label="LinkedIn">
                  <FaLinkedin />
                </motion.a>
                <motion.a href="https://github.com/Hari2726h" target="_blank" rel="noreferrer" className="social-link" whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }} aria-label="GitHub">
                  <FaGithub />
                </motion.a>
                <motion.a href="https://leetcode.com/Hari2726H" target="_blank" rel="noreferrer" className="social-link" whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }} aria-label="LeetCode">
                  <SiLeetcode />
                </motion.a>
                <motion.a href="/resume.pdf" download="Hariharan_C_Resume.pdf" className="social-link" whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }} aria-label="Resume">
                  <FiArrowUpRight />
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              className="contact-form-wrapper"
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-input"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                  />
                  {errors.name && <div className="form-error">{errors.name}</div>}
                </div>

                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-input"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <div className="form-error">{errors.email}</div>}
                </div>

                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-textarea"
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    maxLength="500"
                  />
                  <div className="char-count">{form.message.length}/500</div>
                  {errors.message && <div className="form-error">{errors.message}</div>}
                </div>

                <motion.button
                  type="submit"
                  className="form-submit"
                  disabled={loading}
                  whileHover={!loading ? { y: -2 } : {}}
                  whileTap={!loading ? { scale: 0.97 } : {}}
                >
                  {loading ? "Sending..." : "Send Message"}
                </motion.button>

                <AnimatePresence>
                  {status && (
                    <motion.div
                      className={`form-status ${status}`}
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: "1rem" }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      {status === "success"
                        ? "Message sent successfully! I'll get back to you soon."
                        : "Something went wrong. Please try again."}
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
