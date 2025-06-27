import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_qapb4ht';
const TEMPLATE_ID = 'template_0vt15qa';
const PUBLIC_KEY = 'oiDKR2_yVkL7Xva9o';

const Contact = () => {
  const [formStatus, setFormStatus] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const formErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      formErrors.name = 'Name is required';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      formErrors.email = 'Valid email is required';
      isValid = false;
    }

    if (!formData.message.trim()) {
      formErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
        .then(() => {
          setFormStatus('success');
          setFormData({ name: '', email: '', message: '' });
          setErrors({ name: '', email: '', message: '' });
          setTimeout(() => setFormStatus(null), 4000);
        })
        .catch(() => setFormStatus('error'));
    } else {
      setFormStatus('error');
    }
  };

  return (
    <motion.section className="contact-container" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <div className="contact-wrapper">

        {/* Left Info Panel */}
        <motion.div className="contact-info-panel" initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
          <h2>About Me</h2>
          <p><strong>Name:</strong> Hariharan C</p>
          <p><strong>Status:</strong> BE CSE Student</p>
          <p><strong>Looking for:</strong> Internships / Projects</p>
          <p><strong>Location:</strong> Tamil Nadu, India</p>
          <p><strong>Email:</strong> <a href="mailto:hari2726h@gmail.com">hari2726h@gmail.com</a></p>
          <p><strong>Phone:</strong> <a href="tel:+919943105704">+91 99431 05704</a></p>
          <a href="./resume.pdf" download className="resume-download">📄 Download Resume</a>
          <div className="info-social">
            <a href="https://www.linkedin.com/in/hariharan-c/" target="_blank" rel="noreferrer">🔗 LinkedIn</a>
            <a href="https://github.com/Hari2726h" target="_blank" rel="noreferrer">🐙 GitHub</a>
            <a href="https://leetcode.com/hari2726h/" target="_blank" rel="noreferrer">🧠 LeetCode</a>
          </div>
        </motion.div>

        {/* Right Form Panel */}
        <motion.div className="contact-form-panel" initial={{ x: 30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
          <h2>Let's Connect</h2>
          <p>Feel free to reach out to me. I’d love to hear from you.</p>
          <form onSubmit={handleSubmit} noValidate className="contact-form">
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange}></textarea>
              {errors.message && <span className="error">{errors.message}</span>}
            </div>
            <button type="submit" className="submit-btn">Send</button>
            {formStatus && (
              <div className={`form-status ${formStatus}`}>
                {formStatus === 'success' ? 'Message sent successfully!' : 'Please fill all fields correctly.'}
              </div>
            )}
          </form>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Contact;
