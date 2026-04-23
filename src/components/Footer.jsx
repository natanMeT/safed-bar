import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer section">
      <div className="container footer-container">
        
        <div className="footer-brand">
          <Link to="/" className="brand">
            <span className="brand-title">מרתף צפת</span>
            <span className="brand-subtitle" style={{color: 'var(--color-dark-gold)'}}>BAR & WINE CELLAR</span>
          </Link>
          <p className="footer-desc">
            חוויה חושית של טעמים, ניחוחות ורגעים בלתי נשכחים בלב צפת העתיקה.
          </p>
        </div>

        <div className="footer-links">
          <h4 className="footer-heading">תפריט</h4>
          <Link to="/">בית</Link>
          <Link to="/about">אודות</Link>
          <Link to="/menu">תפריטים</Link>
          <Link to="/events">אירועים</Link>
        </div>

        <div className="footer-contact">
          <h4 className="footer-heading">צרו קשר</h4>
          <p>סמטת גלריה, העיר העתיקה, צפת</p>
          <p>טלפון: 04-123-4567</p>
          <p>info@safedcellar.co.il</p>
        </div>

      </div>
      
      <div className="footer-bottom container">
        <p>© {new Date().getFullYear()} מרתף צפת. כל הזכויות שמורות.</p>
        <p className="credit">עוצב על ידי <a href="#" style={{color: 'var(--color-gold)', fontWeight: '600'}}>Dev Luxe</a></p>
      </div>
    </footer>
  );
}
