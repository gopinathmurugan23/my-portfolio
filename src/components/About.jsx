import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './About.css';

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '5+', label: 'Projects Delivered' },
  { value: '3+', label: 'Happy Clients' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };
  const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 } },
  };

  return (
    <section id="about" className="section about-section" ref={ref}>
      <div className="container about-grid">
        {/* Visual side */}
        <motion.div
          className="about-visual"
          variants={fadeLeft}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <div className="about-avatar">
            <img src="/passport.jpeg" alt="Gopinath Murugan" className="about-profile-img" />
          </div>
          <div className="stats-row">
            {stats.map((s) => (
              <div className="stat-card glass-card" key={s.label}>
                <span className="stat-value gradient-text">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Text side */}
        <motion.div
          className="about-text"
          variants={fadeRight}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <p className="section-label">About Me</p>
          <h2 className="section-title">Turning Ideas Into<br /><span className="gradient-text">Digital Reality</span></h2>
          <div className="divider" />
          <p className="about-bio">
            I'm a passionate <strong>Full Stack Developer</strong> based in India, with deep expertise in
            building modern web applications from the database to the browser.
          </p>
          <p className="about-bio">
            My journey started with curiosity about how websites work, and evolved into a career
            crafting elegant, high-performance software. I thrive at the intersection of clean code
            and beautiful design.
          </p>
          <p className="about-bio">
            When I'm not coding, you'll find me exploring new technologies, contributing to open-source,
            or enjoying a strong cup of coffee ☕.
          </p>
          <div className="about-tags">
            {['Component-Driven Dev', 'State Management', 'API Integration', 'Performance Optimization', 'Responsive UI'].map((t) => (
              <span className="tag" key={t}>{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
