import { motion } from 'framer-motion';
import Button from '../components/Button';
import './SignatureCocktails.css';

export default function SignatureCocktails() {
  return (
    <section className="cocktails-section section">
      <div className="container cocktails-container">
        
        <motion.div 
          className="cocktails-image-wrapper"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <div className="cocktails-image"></div>
        </motion.div>

        <div className="cocktails-content">
          <motion.p 
            className="section-supertitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            אמנות הלגימה
          </motion.p>
          
          <motion.h2 
            className="cocktails-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            אמנות<br />בכל לגימה
          </motion.h2>
          
          <motion.p 
            className="cocktails-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            קוקטיילים מדויקים, יינות מיוחדים<br />ואווירה שאין שנייה לה
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button href="/contact" variant="solid">
              הזמינו מקום
              <span className="arrow">←</span>
            </Button>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
