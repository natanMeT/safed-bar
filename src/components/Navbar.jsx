import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container container">
        
        <div className="nav-right">
          <Link to="/" className="brand">
            <span className="brand-title">מרתף צפת</span>
            <span className="brand-subtitle">BAR & WINE CELLAR • SAFED</span>
          </Link>
        </div>

        <div className={`nav-links ${mobileOpen ? 'open' : ''}`}>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>בית</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>אודות</Link>
          <Link to="/menu" className={location.pathname === '/menu' ? 'active' : ''}>תפריטים</Link>
          <Link to="/events" className={location.pathname === '/events' ? 'active' : ''}>אירועים</Link>
          <Link to="/gallery" className={location.pathname === '/gallery' ? 'active' : ''}>גלריה</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>צור קשר</Link>
        </div>

        <div className="nav-actions">
           <Button href="/contact">הזמינו מקום</Button>
           <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
           </button>
        </div>

      </div>
    </nav>
  );
}
