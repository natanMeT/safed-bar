import './Button.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Button({ children, href, onClick, variant = 'outline', className = '' }) {
  const isLink = Boolean(href);
  const classes = `btn btn-${variant} ${className}`;

  if (isLink) {
    if (href.startsWith('/')) {
      return (
        <Link to={href} className={classes}>
          <span>{children}</span>
        </Link>
      );
    }
    return (
      <a href={href} className={classes}>
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      <span>{children}</span>
    </button>
  );
}
