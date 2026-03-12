import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { RiMenu4Line, RiCloseLine } from 'react-icons/ri';
import './Navbar.css';

const navLinks = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="nav-inner container">
        <Link to="hero" smooth duration={600} className="nav-logo">
          GM<span className="accent-dot">.</span>
        </Link>

        {/* Desktop links */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link}>
              <Link
                to={link.toLowerCase()}
                smooth
                duration={600}
                spy
                activeClass="active"
                offset={-80}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        <Link to="contact" smooth duration={600} className="btn btn-primary nav-cta" offset={-80}>
          Hire Me
        </Link>

        {/* Hamburger */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="toggle menu">
          {menuOpen ? <RiCloseLine size={24} /> : <RiMenu4Line size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {navLinks.map((link) => (
              <Link
                key={link}
                to={link.toLowerCase()}
                smooth
                duration={600}
                offset={-80}
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
