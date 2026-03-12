import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiSend, FiMail, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi';
import './Contact.css';

const socials = [
  { label: 'GitHub', href: 'https://github.com/gopinathmurugan23', icon: <FiGithub /> },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gopinathmurugan23', icon: <FiLinkedin /> },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section contact-section" ref={ref}>
      <div className="container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">Let's <span className="gradient-text">Work Together</span></h2>
          <p className="section-subtitle">
            I'm currently open to new opportunities. Whether you have a project in mind or just want
            to say hi — my inbox is always open!
          </p>
          <div className="divider" />
        </motion.div>

        <div className="contact-grid">
          {/* Info column */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="info-item">
              <span className="info-icon"><FiMail /></span>
              <div>
                <p className="info-label">Email</p>
                <a href="mailto:gopidev23@gmail.com" className="info-value">gopidev23@gmail.com</a>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon"><FiMapPin /></span>
              <div>
                <p className="info-label">Location</p>
                <p className="info-value">Bangalore, Karnataka, India 🇮🇳</p>
              </div>
            </div>

            <div className="contact-socials">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="social-btn" aria-label={s.label}>
                  {s.icon}
                  <span>{s.label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form column */}
          <motion.form
            className="contact-form glass-card"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="form-row">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Your name"
                  value={form.name} onChange={handleChange} required />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="your@email.com"
                  value={form.email} onChange={handleChange} required />
              </div>
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} placeholder="Tell me about your project…"
                value={form.message} onChange={handleChange} required />
            </div>
            <button type="submit" className={`btn btn-primary submit-btn ${sent ? 'sent' : ''}`}>
              {sent ? '✓ Message Sent!' : (<><FiSend /> Send Message</>)}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
