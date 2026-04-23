import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">
      <div className="footer-brand">
        <h3>Genesis <span style={{ color: 'var(--color-accent)' }}>VR</span></h3>
        <p>התנ"ך קם לתחייה בתלת מימד</p>
      </div>
      <div className="footer-links">
        <Link to="/">בית</Link>
        <Link to="/experiences">חוויות</Link>
        <Link to="/about">אודות</Link>
        <Link to="/contact">צור קשר</Link>
      </div>
      <div className="footer-bottom-line">
        <p>© {new Date().getFullYear()} Genesis VR. כל הזכויות שמורות. | עוצב על ידי <a href="https://dev-luxe.netlify.app" target="_blank" rel="noopener noreferrer">Dev Luxe</a></p>
      </div>
    </div>
  </footer>
);

export default Footer;
