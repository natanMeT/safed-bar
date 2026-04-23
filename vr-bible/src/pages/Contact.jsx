import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle, MapPin, Clock, Send } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 }
};

const contactMethods = [
  { icon: <Phone size={28} />, title: 'טלפון', value: '050-000-0000', href: 'tel:+972500000000', color: '#2d7aed' },
  { icon: <MessageCircle size={28} />, title: 'וואטסאפ', value: 'שלחו הודעה', href: 'https://wa.me/972500000000', color: '#00d4aa' },
  { icon: <Mail size={28} />, title: 'אימייל', value: 'hello@genesis-vr.co.il', href: 'mailto:hello@genesis-vr.co.il', color: '#7b2ff7' },
  { icon: <MapPin size={28} />, title: 'מיקום', value: 'מגיעים לכל הארץ', href: '#', color: '#d4af37' },
];

const packages = [
  { name: 'אירוע פרטי', desc: 'בר/בת מצווה, חגים, מסיבות', price: 'החל מ-1,500 ₪', features: ['עד 20 משתתפים', '3 חוויות לבחירה', 'שעה וחצי פעילות', 'מנחה מקצועי'] },
  { name: 'בית ספר', desc: 'כיתות ד׳-ו׳, חוגים', price: 'החל מ-2,500 ₪', features: ['עד 35 תלמידים', 'כל 6 החוויות', 'שעתיים פעילות', 'דפי עבודה מלווים'], popular: true },
  { name: 'אירוע גדול', desc: 'כנסים, קהילות, פסטיבלים', price: 'בהתאמה אישית', features: ['ללא הגבלת משתתפים', 'התאמה מלאה', 'יום שלם', 'צוות מנחים'] },
];

export default function Contact() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="page-header" style={{ minHeight: '50vh' }}>
        <div className="page-header-bg" style={{ backgroundImage: 'url(/images/noah-ark.png)' }} />
        <div className="page-header-overlay" />
        <div className="page-header-content">
          <motion.div {...fadeUp} style={{ textAlign: 'center' }}>
            <span className="section-tag">צרו קשר</span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem' }}>
              מוכנים <em style={{ fontStyle: 'normal', color: 'var(--color-accent)' }}>לחוויה?</em>
            </h1>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.15rem', maxWidth: '600px', lineHeight: 1.7, margin: '0 auto' }}>
              השאירו פרטים ונחזור אליכם תוך שעות. אנחנו מגיעים לכל מקום בארץ!
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT METHODS */}
      <section className="section">
        <div className="section-inner">
          <div className="contact-methods-grid">
            {contactMethods.map((c, i) => (
              <motion.a key={i} href={c.href} className="contact-method-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="contact-method-icon" style={{ color: c.color }}>{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.value}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="section how-bg">
        <div className="section-inner">
          <motion.div {...fadeUp} style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-tag">חבילות מחירים</span>
            <h2 className="section-title">בחרו את החבילה שלכם</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>חבילות גמישות לכל סוג אירוע – ממסיבה משפחתית ועד כנס גדול</p>
          </motion.div>

          <div className="packages-grid">
            {packages.map((pkg, i) => (
              <motion.div key={i} className={`package-card ${pkg.popular ? 'popular' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                {pkg.popular && <div className="popular-badge">הכי פופולרי</div>}
                <h3>{pkg.name}</h3>
                <p className="package-desc">{pkg.desc}</p>
                <div className="package-price">{pkg.price}</div>
                <ul className="package-features">
                  {pkg.features.map((f, j) => (
                    <li key={j}>
                      <span className="check-dot">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="https://wa.me/972500000000" className={`btn ${pkg.popular ? 'btn-primary' : 'btn-ghost'}`} style={{ width: '100%' }}>
                  <MessageCircle size={18} />
                  הזמינו עכשיו
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="section-inner" style={{ maxWidth: '800px' }}>
          <motion.div {...fadeUp} style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-tag">שאלות נפוצות</span>
            <h2 className="section-title">יש שאלות? יש תשובות.</h2>
          </motion.div>

          {[
            { q: 'האם זה מתאים לילדים קטנים?', a: 'כן! רוב החוויות מתאימות מגיל 6 ומעלה. הסרטים מותאמים לגילאים ומלווים במנחה מקצועי שמנהל את החוויה.' },
            { q: 'כמה זמן לוקחת חוויה?', a: 'חוויה בודדת אורכת 6-10 דקות. חבילה שלמה לבית ספר כוללת מספר חוויות ואורכת שעה עד שעתיים.' },
            { q: 'אתם מגיעים אלינו?', a: 'בהחלט! אנחנו מגיעים לכל מקום בארץ – בתי ספר, אולמות אירועים, בתי כנסת, ואפילו הביתה.' },
            { q: 'מה כולל הציוד?', a: 'אנחנו מגיעים עם כל הציוד הנדרש – משקפי VR מקצועיים, מסכי הקרנה, מערכת סאונד, וצוות טכני.' },
            { q: 'האם החוויה בטוחה?', a: 'לחלוטין. הציוד מחוטא בין שימושים, משקפיים מותאמים לילדים, והמנחים שלנו מוסמכים ומנוסים.' },
          ].map((faq, i) => (
            <motion.div key={i} className="faq-item"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section contact-section">
        <div className="section-inner" style={{ textAlign: 'center' }}>
          <motion.div {...fadeUp}>
            <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              בואו נהפוך את האירוע הבא שלכם לבלתי נשכח
            </h2>
            <p className="section-sub" style={{ margin: '0 auto 2.5rem', maxWidth: '500px' }}>
              שיחה קצרה ונתאים לכם את החבילה המושלמת. ללא התחייבות.
            </p>
            <a href="https://wa.me/972500000000" className="btn btn-primary" style={{ fontSize: '1.15rem', padding: '1.1rem 3rem' }}>
              <MessageCircle size={22} />
              דברו איתנו בוואטסאפ
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
