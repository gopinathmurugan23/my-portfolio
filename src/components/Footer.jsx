import { FiGithub, FiLinkedin, FiTwitter, FiHeart } from 'react-icons/fi';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="footer-logo">GM<span className="accent-dot">.</span></span>
        <p className="footer-copy">
          Designed & built with <FiHeart className="heart" /> by Gopinath Murugan · {new Date().getFullYear()}
        </p>
        <div className="footer-socials">
          <a href="https://github.com/gopinathmurugan23" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FiGithub /></a>
          <a href="https://www.linkedin.com/in/gopinathmurugan23" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
        </div>
      </div>
    </footer>
  );
}
