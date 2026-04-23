import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('/wine-cellar-bg.png')" }}></div>
        <div className="page-hero-overlay"></div>
        <div className="container page-hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >הסיפור שלנו</motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >איך ההיסטוריה פוגשת את ההווה אצלנו במרתף</motion.p>
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
          <h2 className="category-title" style={{marginBottom: '2rem'}}>שורשים עתיקים, תשוקה מודרנית</h2>
          <p>
            מרתף היין של צפת שוכן במבנה אבן עתיק בן מאות שנים, ששימש בעבר לאחסון חביות יין ושמן זית של תושבי צפת העתיקה.
            החזון שלנו היה לקחת את הקסם ההיסטורי של קירות האבן ולהפיח בו חיים חדשים, דרך מיקסולוגיה מדויקת ואוסף יינות מהטובים בארץ.
          </p>
          <p style={{ marginTop: '1.5rem' }}>
            הצוות שלנו מורכב מאנשי אירוח עם ניסיון ומומחיות בייננות, קוקטיילים ואהבת אדם.
            אנו מאמינים ששתייה היא הרבה יותר מפעולה פיזית - היא חוויה חושית שמרחיבה את הלב, מחברת בין אנשים ומייצרת זיכרונות.
          </p>

          <div className="visual-grid" style={{ marginTop: '4rem' }}>
            <div className="visual-card">
              <div className="visual-image" style={{ backgroundImage: "url('/safed-alley-bg.png')" }}></div>
            </div>
            <div className="visual-card">
              <div className="visual-image" style={{ backgroundImage: "url('/wine-cellar-bg.png')" }}></div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
