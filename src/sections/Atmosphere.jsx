import { motion } from 'framer-motion';
import Button from '../components/Button';
import './Atmosphere.css';

export default function Atmosphere() {
  return (
    <section className="atmosphere-section section">
      <div className="container atmosphere-container">
        
        <div className="atmosphere-content">
          <motion.p 
            className="section-supertitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6 }}
          >
            מרתף צפת
          </motion.p>
          
          <motion.h2 
            className="atmosphere-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            מרתף יין<br />חוויה עתיקה.<br />טעם עכשווי.
          </motion.h2>
          
          <motion.p 
            className="atmosphere-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            מקום בו ההיסטוריה של צפת פוגשת את תרבות הקוקטיילים המודרנית.
            חלל קסום עם קשתות אבן עתיקות, תאורה חמימה ואווירה שעוטפת את כל החושים.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button href="/contact" variant="outline">
              הזמינו מקום
              <span className="arrow">←</span>
            </Button>
          </motion.div>
        </div>

        <motion.div 
          className="atmosphere-image-wrapper"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <div className="atmosphere-image"></div>
          <div className="image-accent-border"></div>
        </motion.div>
        
      </div>
    </section>
  );
}
