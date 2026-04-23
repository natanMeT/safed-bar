import { motion } from 'framer-motion';
import Button from '../components/Button';
import './Events.css';

export default function Events() {
  return (
    <section className="events-section section">
      <div className="container">
        
        <motion.div 
          className="events-box"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="events-content">
            <h2 className="events-title">אירועי בוטיק מחשמלים</h2>
            <p className="events-text">
              לחגוג במרתף היין של צפת זו חוויה בלתי נשכחת. 
              אנו מציעים חלל פרטי לאירועים עסקיים, ימי הולדת, ערבי יין ומפגשי VIP באווירה יוקרתית.
            </p>
            <div className="events-actions">
              <Button href="/events" variant="solid">קראו עוד</Button>
              <Button href="/contact" variant="outline">הזמינו אירוע</Button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
