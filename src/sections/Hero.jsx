import { motion } from 'framer-motion';
import Button from '../components/Button';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-bg-container">
        <motion.div 
          className="hero-bg"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content container">
        <div className="hero-text">
          <motion.p 
            className="hero-supertitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            מרתף צפת
          </motion.p>
          
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            בר יין וקוקטיילים<br />בלב צפת העתיקה
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            חוויה חושית של טעמים, ניחוחות ורגעים בלתי נשכחים
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <Button href="/contact" variant="outline" className="hero-btn">
              הזמינו מקום
              <span className="arrow">←</span>
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="scroll-line"></div>
        <span className="scroll-text">גלו למטה</span>
      </motion.div>
    </section>
  );
}
