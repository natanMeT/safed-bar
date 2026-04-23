import { motion } from 'framer-motion';
import Button from '../components/Button';

export default function EventsPage() {
  return (
    <main className="events-page">
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('/events-vip-bg.png')" }}></div>
        <div className="page-hero-overlay"></div>
        <div className="container page-hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >אירועי בוטיק</motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >חגגו באווירה יוקרתית שאין שנייה לה</motion.p>
        </div>
      </section>

      <section className="section container">
        <motion.div 
          className="event-details"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="category-title" style={{marginBottom: '2rem'}}>המרחב המושלם לשלווה וחגיגה</h2>
          <p>
            בין אם מדובר בפגישת מנהלים יוקרתית, ערב השקה חגיגי, או יום הולדת בלתי נשכח, 
            מרתף היין של צפת מציע אווירה קסומה. עם תאורת נרות חמימה, בחירה אישית של יינות נדירים מקולקציית המרתף שלנו 
            וקוקטיילים הנרקחים במיוחד עבורכם - האירוע שלכם יהפוך לזיכרון של פעם בחיים.
          </p>
          
          <div className="visual-grid" style={{ marginBottom: '4rem' }}>
            <div className="visual-card">
              <div className="visual-image" style={{ backgroundImage: "url('/wine-cellar-bg.png')" }}></div>
            </div>
            <div className="visual-card">
              <div className="visual-image" style={{ backgroundImage: "url('/events-vip-bg.png')" }}></div>
            </div>
          </div>

          <p>החלל מתאים לאירועים של עד 50 אורחים בישיבה, או עד 80 בקוקטייל פארטי. אנו מציעים תפריט שף מותאם אישית לחוויה הקולינרית שלכם.</p>
          
          <div style={{ marginTop: '3rem' }}>
            <Button href="/contact" variant="solid">צרו קשר לתיאום אירוע</Button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
