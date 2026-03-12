import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiArrowDown, FiGithub, FiLinkedin } from 'react-icons/fi';
import './Hero.css';

const roles = [
  'Full Stack Developer',
  'React Specialist',
  'Node.js Engineer',
  'Problem Solver',
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const timeout = useRef(null);

  useEffect(() => {
    const current = roles[roleIdx];
    if (!deleting && displayed.length < current.length) {
      timeout.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout.current = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout.current);
  }, [displayed, deleting, roleIdx]);

  const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.18 } } };
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  return (
    <section id="hero" className="hero section">
      {/* Animated gradient orbs */}
      <div className="hero-orb orb-1" />
      <div className="hero-orb orb-2" />
      <div className="hero-grid" />

      <div className="container">
        <motion.div className="hero-content" variants={stagger} initial="hidden" animate="visible">
          <motion.p className="hero-greeting" variants={fadeUp}>
            👋 Hello, I'm
          </motion.p>

          <motion.h1 className="hero-name" variants={fadeUp}>
            Gopinath <span className="gradient-text">Murugan</span>
          </motion.h1>

          <motion.div className="hero-role" variants={fadeUp}>
            <span className="role-text">{displayed}</span>
            <span className="cursor-blink">|</span>
          </motion.div>

          <motion.p className="hero-bio" variants={fadeUp}>
            I craft performant, scalable web applications with clean code and thoughtful design.
            Passionate about building products that make a real difference.
          </motion.p>

          <motion.div className="hero-actions" variants={fadeUp}>
            <Link to="projects" smooth duration={600} offset={-80} className="btn btn-primary">
              View My Work <FiArrowDown />
            </Link>
            <Link to="contact" smooth duration={600} offset={-80} className="btn btn-outline">
              Get In Touch
            </Link>
          </motion.div>

          <motion.div className="hero-social" variants={fadeUp}>
            <a href="https://github.com/gopinathmurugan23" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/gopinathmurugan23" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.6, type: 'spring', stiffness: 120 }}
        >
          <div className="badge-ring">
            <img src="/profile3.jpeg" alt="Gopinath Murugan" className="hero-profile-img" />
          </div>
          <div className="badge-status">
            <span className="status-dot" />
            Open to Work
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <motion.div
          className="scroll-arrow"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <FiArrowDown size={20} />
        </motion.div>
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  );
}
