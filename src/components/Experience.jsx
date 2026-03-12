import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Experience.css';

const experiences = [
  {
    role: 'Senior Engineer – Frontend Developer (React.js)',
    company: 'Tata Elxsi Ltd., Bangalore',
    period: 'Aug 2022 – Present',
    type: 'Full-time',
    desc: [
      'Developed and engineered scalable frontend applications using React.js, Redux, and TypeScript, ensuring high performance and reusability.',
      'Designed reusable UI component libraries, reducing duplicated logic across projects and improving long-term maintainability.',
      'Translated Figma designs into responsive, pixel-perfect UI screens aligned with UX standards.',
      'Integrated REST APIs and optimized data fetching, implementing lazy loading and code splitting, resulting in 30% faster page load times.',
      'Collaborated with back-end teams to define API contracts and ensure seamless frontend-backend integration.',
      'Performed UI validation, debugging, component-level testing, and peer code reviews, maintaining high engineering quality.',
      'Worked cross-functionally with QA, UX, and backend teams during sprint planning, estimation, and delivery execution.',
    ],
    tags: ['React.js', 'Redux', 'TypeScript', 'JavaScript', 'Angular', 'Figma', 'REST APIs'],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="experience" className="section experience-section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Career</p>
          <h2 className="section-title">Work <span className="gradient-text">Experience</span></h2>
          <div className="divider" />
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <motion.div
              className="timeline-item"
              key={exp.role}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.2, ease: 'easeOut' }}
            >
              <div className="timeline-dot">
                <div className="dot-inner" />
              </div>
              <div className="exp-card glass-card">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <span className="exp-company">{exp.company}</span>
                  </div>
                  <div className="exp-meta">
                    <span className="exp-period">{exp.period}</span>
                    <span className="tag">{exp.type}</span>
                  </div>
                </div>
                <ul className="exp-list">
                  {exp.desc.map((d, j) => (
                    <li key={j}>{d}</li>
                  ))}
                </ul>
                <div className="exp-tags">
                  {exp.tags.map((t) => <span className="skill-pill" key={t}>{t}</span>)}
                </div>
              </div>
            </motion.div>
          ))}
          <div className="timeline-line" />
        </div>
      </div>
    </section>
  );
}
