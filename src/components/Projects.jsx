import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import './Projects.css';

const projects = [
  {
    title: 'ShopSphere',
    desc: 'A full-stack e-commerce platform with real-time inventory, Stripe payments, and an admin dashboard.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    color: '#00d4ff',
    emoji: '🛍️',
  },
  {
    title: 'TaskFlow',
    desc: 'Kanban-style project management app with drag-and-drop, collaboration, and deadline tracking.',
    tags: ['Next.js', 'PostgreSQL', 'Prisma', 'TypeScript'],
    color: '#7c3aed',
    emoji: '📋',
  },
  {
    title: 'DevConnect',
    desc: 'A developer networking platform with GitHub integration, project showcasing, and real-time chat.',
    tags: ['React', 'Express', 'Socket.io', 'Redis'],
    color: '#06b6d4',
    emoji: '🔗',
  },
  {
    title: 'AIPulse',
    desc: 'AI-powered analytics dashboard consuming OpenAI API to generate insight summaries from datasets.',
    tags: ['Python', 'FastAPI', 'React', 'OpenAI'],
    color: '#8b5cf6',
    emoji: '🤖',
  },
  {
    title: 'WeatherNow',
    desc: 'Beautiful weather application with animated conditions, hourly forecasts, and location detection.',
    tags: ['React', 'REST API', 'CSS Animations'],
    color: '#0ea5e9',
    emoji: '🌤️',
  },
  {
    title: 'BlogCraft',
    desc: 'A headless CMS-powered blog with MDX support, search, dark mode, and RSS feed.',
    tags: ['Next.js', 'MDX', 'Tailwind', 'Vercel'],
    color: '#ec4899',
    emoji: '✍️',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };
  const card = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="projects" className="section projects-section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          <div className="divider" />
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {projects.map((p) => (
            <motion.div className="project-card glass-card" variants={card} key={p.title}>
              <div className="project-thumb" style={{ '--pcolor': p.color }}>
                <span className="project-emoji">{p.emoji}</span>
                <div className="thumb-glow" />
              </div>
              <div className="project-body">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
              <div className="project-links">
                <a href="#" aria-label="GitHub" className="icon-link">
                  <FiGithub />
                </a>
                <a href="#" aria-label="Live" className="icon-link">
                  <FiExternalLink />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
