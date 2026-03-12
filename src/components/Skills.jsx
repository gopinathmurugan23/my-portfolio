import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Skills.css';

const skillGroups = [
  {
    title: 'Frontend',
    icon: '🎨',
    skills: ['React.js', 'Angular', 'Redux', 'Redux Toolkit', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Hooks', 'Responsive UI'],
  },
  {
    title: 'Backend & DB',
    icon: '⚙️',
    skills: ['Node.js', 'Express.js', 'MySQL'],
  },
  {
    title: 'Tools',
    icon: '🛠️',
    skills: ['Git', 'Docker', 'Webpack', 'Babel', 'VS Code', 'ESLint', 'Prettier'],
  },
  {
    title: 'Other',
    icon: '🚀',
    skills: ['Figma-to-UI', 'REST APIs', 'Performance Optimization', 'OOP', 'DSA'],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };
  const card = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="skills" className="section skills-section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">What I Know</p>
          <h2 className="section-title">Technical <span className="gradient-text">Skills</span></h2>
          <div className="divider" />
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {skillGroups.map((group) => (
            <motion.div className="skill-group glass-card" variants={card} key={group.title}>
              <div className="group-header">
                <span className="group-icon">{group.icon}</span>
                <h3 className="group-title">{group.title}</h3>
              </div>
              <div className="skill-pills">
                {group.skills.map((skill) => (
                  <span className="skill-pill" key={skill}>{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
