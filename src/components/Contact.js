import React, { useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

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
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!formData.name) {
      formErrors.name = 'Name is required';
      isValid = false;
    }

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!formData.email || !emailRegex.test(formData.email)) {
      formErrors.email = 'Valid email is required';
      isValid = false;
    }

    if (!formData.message) {
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
          setTimeout(() => setFormStatus(null), 3000);
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
    <section className="contact">
      <h2>Let's Connect!</h2>
      <p>Feel free to reach out to me. I’d love to hear from you.</p>

      <div className="contact-methods">
        <button className="floating-btn">
          <span role="img" aria-label="email">📧</span>
        </button>
        <button className="floating-btn">
          <span role="img" aria-label="phone">📞</span>
        </button>
        <button className="floating-btn">
          <span role="img" aria-label="chat">💬</span>
        </button>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-field">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </div>

        <button type="submit" className="submit-btn">Send</button>
      </form>

      {formStatus && (
        <div className={`form-status ${formStatus}`}>
          {formStatus === 'success' ? (
            <span>
              Message Sent!{" "}
              <span role="img" aria-label="checkmark" className="checkmark">✔️</span>
            </span>
          ) : (
            <span>Something went wrong, please try again.</span>
          )}
        </div>
      )}

      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/hariharan-c/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/Hari2726h"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;
