import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, Zap, Shield, Heart, BookOpen, Headset, MonitorPlay } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 }
};

const steps = [
  { num: '01', icon: <Headset size={28} />, title: 'הרכבת המשקפיים', desc: 'תוך שניות אתם עוטים את משקפי ה-VR המתקדמים ונכנסים למצב מלא.' },
  { num: '02', icon: <BookOpen size={28} />, title: 'בחירת הסיפור', desc: 'בחרו את הפרשה או האירוע שרוצים לחוות – מספרייה גדלה של חוויות.' },
  { num: '03', icon: <MonitorPlay size={28} />, title: 'היכנסו להיסטוריה', desc: 'סרטי תלת-מימד מרהיבים, קול וסאונד מקיף – אתם שם, ממש שם.' }
];

const values = [
  { icon: <Zap size={24} />, title: 'חדשנות', desc: 'שימוש בטכנולוגיות VR מתקדמות ביותר, עם עדכונים שוטפים ותכנים חדשים.' },
  { icon: <Heart size={24} />, title: 'אהבה למקורות', desc: 'כל תוכן נבנה בשיתוף רבנים ומחנכים, מתוך כבוד עמוק למסורת.' },
  { icon: <Shield size={24} />, title: 'בטיחות מלאה', desc: 'ציוד בטיחותי ומחוטא, מותאם לילדים, עם מנחים מקצועיים בכל חוויה.' },
  { icon: <BookOpen size={24} />, title: 'ערך חינוכי', desc: 'כל חוויה מלווה בדפי עבודה, חומר העשרה ושאלות לדיון בכיתה.' },
];

const features = [
  'סרטוני 360 מעלות ברזולוציה מלאה',
  'סאונד מרחבי שמוביל אתכם אל תוך הסצנה',
  'מתאים לכל גיל – ילדים, נוער ומבוגרים',
  'לאירועים, בתי ספר, בתי כנסת ומשפחות',
  'מספרייה מתרחבת של חוויות חדשות',
  'ציוד מקצועי – 30 משקפיים לכל אירוע',
  'מנחים מקצועיים עם ניסיון בחינוך',
  'חומרי העשרה מלווים לכל חוויה',
];

export default function About() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="page-header-bg" style={{ backgroundImage: 'url(/images/kids-vr.png)' }} />
        <div className="page-header-overlay" />
        <div className="page-header-content">
          <motion.div {...fadeUp}>
            <span className="section-tag">אודות</span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem' }}>
              הסיפור <em style={{ fontStyle: 'normal', color: 'var(--color-accent)' }}>שלנו</em>
            </h1>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.15rem', maxWidth: '600px', lineHeight: 1.7 }}>
              אנחנו מאמינים שהדרך הטובה ביותר ללמוד היסטוריה – היא לחוות אותה.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MISSION */}
      <section className="section">
        <div className="section-inner">
          <div className="cinematic-block">
            <motion.div className="cinematic-img-wrap"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src="/images/exodus-vr.png" alt="Exodus VR" />
            </motion.div>

            <motion.div {...fadeUp}>
              <span className="section-tag">המשימה שלנו</span>
              <h2 className="section-title">להפוך את התנ"ך לחוויה חיה</h2>
              <p className="section-sub">
                Genesis VR נולד מתוך חלום פשוט – לתת לכל ילד ומבוגר לחוות את סיפורי התנ"ך כאילו הם שם. 
                לא רק לקרוא, לא רק לשמוע – אלא להרגיש, לראות ולחוות.
              </p>
              <p className="section-sub" style={{ marginTop: '1rem' }}>
                באמצעות טכנולוגיית VR מתקדמת, אנחנו יוצרים סרטי תלת-מימד 360 מעלות 
                שמשחזרים את הרגעים הגדולים בהיסטוריה היהודית ברמת פירוט סינמטית.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section how-bg">
        <div className="section-inner">
          <motion.div {...fadeUp} style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-tag">הערכים שלנו</span>
            <h2 className="section-title">מה מנחה אותנו</h2>
          </motion.div>
          <div className="values-grid">
            {values.map((v, i) => (
              <motion.div key={i} className="value-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <div className="section-inner">
          <motion.div {...fadeUp} style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-tag">איך זה עובד</span>
            <h2 className="section-title">שלושה שלבים לחוויה</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>מהרגע שמגיעים ועד שהחוויה מסתיימת – הכל פשוט, מהיר ומרשים</p>
          </motion.div>
          <div className="steps-grid">
            {steps.map((s, i) => (
              <motion.div key={i} className="step-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <div className="step-num">{s.num}</div>
                <div style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}>{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES LIST */}
      <section className="section how-bg">
        <div className="section-inner">
          <div className="cinematic-block" style={{ direction: 'rtl' }}>
            <motion.div {...fadeUp}>
              <span className="section-tag">מה כולל השירות</span>
              <h2 className="section-title">הכל כלול. רק להגיע.</h2>
              <p className="section-sub" style={{ marginBottom: '2rem' }}>
                אנחנו מגיעים עם הכל – ציוד מקצועי, מנחים מיומנים, וחוויה שלמה מהרגע הראשון.
              </p>
              <ul className="features-list">
                {features.map((f, i) => (
                  <li key={i}>
                    <CheckCircle className="feat-icon" size={18} />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div className="cinematic-img-wrap"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src="/images/vr-headset.png" alt="VR Headset" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="section-inner" style={{ textAlign: 'center' }}>
          <motion.div {...fadeUp}>
            <h2 className="section-title">מוכנים להפוך את הלמידה לחוויה?</h2>
            <p className="section-sub" style={{ margin: '0 auto 2.5rem' }}>
              הצטרפו למאות בתי הספר, הקהילות והמשפחות שכבר חוו את Genesis VR.
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
              צרו קשר עכשיו
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
