import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, ArrowLeft, Eye, Sparkles, Users, Quote } from 'lucide-react';
import VRCube from '../components/VRCube';
import AnimatedCounter from '../components/AnimatedCounter';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 }
};

const highlights = [
  { img: '/images/exodus-vr.png', title: 'קריעת ים סוף', tag: 'הסרט הנצפה ביותר' },
  { img: '/images/david-goliath.png', title: 'דוד וגוליית', tag: 'חדש!' },
  { img: '/images/burning-bush.png', title: 'הסנה הבוער', tag: 'חוויה רוחנית' },
];

const testimonials = [
  { name: 'רחל כ.', role: 'מנהלת בית ספר', text: 'הילדים לא הפסיקו לדבר על החוויה. לראשונה ראיתי תלמידים מבקשים עוד שיעור תנ"ך!', stars: 5 },
  { name: 'יוסי מ.', role: 'אב למשפחה', text: 'הזמנו לבר מצווה של הבן. כל האורחים נשארו המומים. חוויה ברמה אחרת לגמרי.', stars: 5 },
  { name: 'שרה ל.', role: 'מורה לתנ"ך', text: 'הכלי הכי יעיל שנתקלתי בו ב-20 שנות הוראה. הילדים באמת מבינים את הסיפור כשהם חווים אותו.', stars: 5 },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <VRCube />
        <img className="hero-bg-img" src="/images/hero-vr.png" alt="" />
        <div className="hero-overlay" />

        <div className="hero-content">
          <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.2 }}>
            <div className="hero-badge">
              <span></span>
              חוויית מציאות מדומה
            </div>
            <h1>
              התנ"ך קם לתחייה<br />
              <em>בתלת מימד</em>
            </h1>
            <p className="hero-sub">
              מסע בזמן אל הרגעים הגדולים בהיסטוריה היהודית. חוויה עוצרת נשימה ומעשירה דרך משקפי מציאות מדומה מתקדמים.
            </p>
            <div className="hero-btns">
              <Link to="/experiences" className="btn btn-primary">
                <Play fill="currentColor" size={18} />
                גלו את החוויות
              </Link>
              <Link to="/contact" className="btn btn-ghost">תיאום הגעה</Link>
            </div>
          </motion.div>
        </div>

        <div className="scroll-hint">
          <div className="scroll-line" />
          גללו
        </div>
      </section>

      {/* STATS BAR - Animated Numbers */}
      <div className="stats-bar">
        <div className="stats-inner">
          {[
            { num: '3000', suffix: '+', label: 'חוויות שהועברו' },
            { num: '50', suffix: '+', label: 'בתי ספר ואירועים' },
            { num: '6', suffix: '', label: 'סרטי תלת-מימד' },
            { num: '100', suffix: '%', label: 'שביעות רצון' }
          ].map((s, i) => (
            <motion.div key={i} className="stat-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <AnimatedCounter target={s.num} suffix={s.suffix} />
              <div className="stat-label">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <section className="section">
        <div className="section-inner">
          <motion.div {...fadeUp} style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-tag">חוויות מובילות</span>
            <h2 className="section-title">הציצו אל תוך ההיסטוריה</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>
              בחרו חוויה ותוכלו לחוות אותה ישירות – בכיתה, באירוע, או בבית
            </p>
          </motion.div>

          <div className="highlights-grid">
            {highlights.map((h, i) => (
              <motion.div key={i} className="highlight-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <div className="highlight-img">
                  <img src={h.img} alt={h.title} />
                  <div className="highlight-overlay" />
                  <div className="highlight-tag">{h.tag}</div>
                </div>
                <div className="highlight-info">
                  <h3>{h.title}</h3>
                  <Link to="/experiences" className="highlight-link">
                    לפרטים נוספים <ArrowLeft size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/experiences" className="btn btn-ghost" style={{ fontSize: '1.05rem' }}>
              צפו בכל החוויות <ArrowLeft size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section how-bg">
        <div className="section-inner">
          <motion.div {...fadeUp} style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-tag">מה אומרים עלינו</span>
            <h2 className="section-title">ההמלצות מדברות</h2>
          </motion.div>

          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <motion.div key={i} className="testimonial-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <Quote className="testimonial-quote" size={28} />
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-stars">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <span key={j}>★</span>
                  ))}
                </div>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.name.charAt(0)}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY VR CTA */}
      <section className="section">
        <div className="section-inner">
          <div className="cinematic-block">
            <motion.div className="cinematic-img-wrap"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src="/images/kids-vr.png" alt="Children experiencing VR" />
            </motion.div>

            <motion.div {...fadeUp}>
              <span className="section-tag">למה VR?</span>
              <h2 className="section-title">כי ילד שרואה – זוכר לנצח</h2>
              <p className="section-sub">
                מחקרים מוכיחים שלמידה חווייתית נשמרת בזיכרון פי 4 יותר מלמידה מסורתית. 
                עם Genesis VR, הילדים לא רק שומעים על קריעת ים סוף – הם עומדים שם.
              </p>
              <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/about" className="btn btn-ghost">קראו עוד</Link>
                <Link to="/contact" className="btn btn-primary">הזמינו חוויה</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
