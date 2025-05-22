import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';
import emailjs from '@emailjs/browser';

// Make sure these keys are correct and kept secret in env for production
const SERVICE_ID = 'service_qapb4ht';
const TEMPLATE_ID = 'template_0vt15qa';
const PUBLIC_KEY = 'oiDKR2_yVkL7Xva9o';

const Contact = () => {
  const [formStatus, setFormStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

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
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          setFormStatus('success');
          setFormData({ name: '', email: '', message: '' });
          setErrors({ name: '', email: '', message: '' });
          setTimeout(() => setFormStatus(null), 4000);
        })
        .catch((err) => {
          console.error('FAILED...', err);
          setFormStatus('error');
        });
    } else {
      setFormStatus('error');
    }
  };

  return (
    <motion.section
      className="contact"
      aria-label="Contact section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.h2
        tabIndex={-1}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Let's Connect!
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Feel free to reach out to me. I’d love to hear from you.
      </motion.p>

      <motion.div
        className="contact-methods"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <a
          href="mailto:hari2726h@gmail.com"
          className="floating-btn"
          aria-label="Send email"
          target="_blank"
          rel="noopener noreferrer"
        >
          📧
        </a>
        <a
          href="tel:+919943105704"
          className="floating-btn"
          aria-label="Call phone"
        >
          📞
        </a>
        <a
          href="#contact-form"
          className="floating-btn"
          aria-label="Chat message form"
        >
          💬
        </a>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        className="contact-form"
        id="contact-form"
        noValidate
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            aria-describedby="name-error"
            aria-invalid={!!errors.name}
            required
          />
          {errors.name && <span id="name-error" className="error" role="alert">{errors.name}</span>}
        </div>

        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            aria-describedby="email-error"
            aria-invalid={!!errors.email}
            required
          />
          {errors.email && <span id="email-error" className="error" role="alert">{errors.email}</span>}
        </div>

        <div className="form-field">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            aria-describedby="message-error"
            aria-invalid={!!errors.message}
            required
          />
          {errors.message && <span id="message-error" className="error" role="alert">{errors.message}</span>}
        </div>

        <button type="submit" className="submit-btn">Send</button>
      </motion.form>

      {formStatus && (
        <motion.div
          className={`form-status ${formStatus}`}
          role="alert"
          aria-live="polite"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {formStatus === 'success' ? (
            <span>
              Message Sent!
              <span className="checkmark" aria-hidden="true">✔️</span>
            </span>
          ) : (
            <span>Something went wrong, please try again.</span>
          )}
        </motion.div>
      )}

      <motion.div
        className="social-icons"
        aria-label="Social media links"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        viewport={{ once: true }}
      >
        {[
          {
            href: "https://www.linkedin.com/in/hariharan-c/",
            label: "LinkedIn",
            svgPath: "M4.98 3.5C3.34 3.5 2 4.84 2 6.48c0 1.62 1.32 2.96 2.94 2.96h.03c1.64 0 2.97-1.34 2.97-2.96-.03-1.64-1.33-2.98-2.96-2.98zM2 20.5h6v-10H2v10zm7.5-9.5c-2.5 0-3.4 1.2-4 2v-1.9H5v10h6v-5.5c0-3.1 4-3.3 4 0v5.5h6v-6c0-6.8-7.5-6.6-9.5-3.3v-.3z"
          },
          {
            href: "https://github.com/Hari2726h",
            label: "GitHub",
            svgPath: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.086-.743.084-.728.084-.728 1.205.085 1.84 1.234 1.84 1.234 1.07 1.835 2.807 1.304 3.495.997.108-.776.42-1.305.763-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.47-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.62-5.475 5.92.435.37.81 1.096.81 2.215 0 1.6-.015 2.88-.015 3.27 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
          },
          {
            href: "https://leetcode.com/hariharan2726h/",
            label: "LeetCode",
            svgPath: "M2.46 7.72 5.4 9.56l4.46-6.8-3.08-1.7a1.28 1.28 0 0 0-1.77.44L2.46 7.72zM20.18 9.54l-7.7 2.58-3.43 1.7 3.3 1.7 7.36-3.37c.5-.22.64-.85.27-1.23l-1.8-1.04zM12 22.68c1.34 0 2.37-1.26 2.37-2.8 0-1.54-1.08-2.79-2.37-2.79-1.32 0-2.37 1.25-2.37 2.79 0 1.56 1.06 2.8 2.37 2.8z"
          }
        ].map(({ href, label, svgPath }, idx) => (
          <motion.a
            key={idx}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            whileHover={{ scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#6E52F5"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              role="img"
              aria-hidden="true"
              focusable="false"
            >
              <path d={svgPath} />
            </svg>
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Contact;
