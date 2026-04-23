import { motion } from 'framer-motion';
import Button from '../components/Button';

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('טופס נשלח בהצלחה! ניצור קשר בהקדם.');
  }

  return (
    <main className="contact-page">
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('/hero-bg.png')" }}></div>
        <div className="page-hero-overlay"></div>
        <div className="container page-hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >צור קשר</motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >נשמח לשמוע מכם ולדאוג לחוויה מושלמת</motion.p>
        </div>
      </section>

      <section className="section container">
        <div className="contact-layout">
          
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="category-title" style={{textAlign: 'right', fontSize: '2rem'}}>פרטי יצירת קשר</h2>
            <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
              <div>
                <strong style={{color: 'var(--color-gold)'}}>כתובת:</strong><br />
                סמטת גלריה, העיר העתיקה, צפת
              </div>
              <div>
                <strong style={{color: 'var(--color-gold)'}}>טלפון:</strong><br />
                04-123-4567
              </div>
              <div>
                <strong style={{color: 'var(--color-gold)'}}>אימייל:</strong><br />
                info@safedcellar.co.il
              </div>
              <div>
                <strong style={{color: 'var(--color-gold)'}}>שעות פעילות:</strong><br />
                א' - ה': 18:00 - 02:00<br />
                מוצ"ש: חצי שעה לאחר צאת השבת - 03:00
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="category-title" style={{textAlign: 'right', fontSize: '2rem'}}>שלחו לנו הודעה</h2>
            <form onSubmit={handleSubmit} style={{ marginTop: '2rem' }}>
              <div className="form-group">
                <label>שם מלא</label>
                <input type="text" className="form-input" required placeholder="הכנס את שמך" />
              </div>
              <div className="form-group">
                <label>אימייל</label>
                <input type="email" className="form-input" required placeholder="name@domain.com" />
              </div>
              <div className="form-group">
                <label>טלפון</label>
                <input type="tel" className="form-input" placeholder="05X-XXXXXXX" />
              </div>
              <div className="form-group">
                <label>הודעה / סיבת הפנייה</label>
                <textarea className="form-input" rows="4" required placeholder="כיצד נוכל לעזור?"></textarea>
              </div>
              <Button variant="solid" className="w-100" style={{width: '100%'}}>שלח הודעה</Button>
            </form>
          </motion.div>

        </div>
      </section>
    </main>
  );
}
