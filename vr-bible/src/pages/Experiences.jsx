import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Eye, Star, MessageCircle, X, Clock, Users } from 'lucide-react';
import ExperienceCarousel from '../components/ExperienceCarousel';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 }
};

const experiences = [
  {
    img: '/images/exodus-vr.png',
    badge: 'קריעת ים סוף',
    title: 'מסע בני ישראל',
    desc: 'עמדו בין קירות המים הגבוהים וחוו את הנס הגדול ביותר בהיסטוריה.',
    fullDesc: 'חוו את הרגע שבו משה רבנו הרים את מטהו וקרע את ים סוף לשניים. קירות מים ענקיים מתנשאים משני צדיכם, דגים שוחים מסביב, ובני ישראל עוברים בגבורה. סאונד מרחבי עוצמתי משלים את החוויה ויוצר רגע בלתי נשכח.',
    duration: '8 דקות',
    audience: 'כל הגילאים',
    difficulty: 'קלה'
  },
  {
    img: '/images/burning-bush.png',
    badge: 'הסנה הבוער',
    title: 'משה בהר סיני',
    desc: 'חוו את הרגע המכונן – משה עומד מול הסנה הבוער ושומע את קול ה׳.',
    fullDesc: 'טיפסו עם משה רבנו על הר סיני, הרגישו את הרוח במדבר, וראו מול עיניכם את הסנה שבוער באש אך אינו אוכל. קול אלוקי מהדהד בכל המרחב. חוויה רוחנית עוצמתית שמחברת כל צופה למקורות.',
    duration: '6 דקות',
    audience: 'גיל 6+',
    difficulty: 'קלה'
  },
  {
    img: '/images/david-goliath.png',
    badge: 'דוד וגוליית',
    title: 'הקרב המכריע',
    desc: 'עמדו לצד דוד הרועה הצעיר מול גוליית הענק בשדה הקרב.',
    fullDesc: 'הרגישו את הרעד כשגוליית הענק צועד לעברכם, ואת האומץ של דוד הצעיר שעומד מולו עם קלע ואבן בלבד. צפו בקרב ההיסטורי מכל זווית – מעל, מהצד, ומתוך שורות הלוחמים. אפוס צבאי-רוחני מרהיב.',
    duration: '7 דקות',
    audience: 'גיל 8+',
    difficulty: 'בינונית'
  },
  {
    img: '/images/noah-ark.png',
    badge: 'תיבת נוח',
    title: 'המבול הגדול',
    desc: 'הצטרפו לנוח בבניית התיבה, כניסת בעלי החיים והמבול הגדול.',
    fullDesc: 'סערה אדירה מכסה את כל הארץ. אתם על סיפון תיבת נוח, מוקפים בזוגות של חיות מכל מין. הגלים מתנפצים, ברקים חוצים את השמיים, ובפנים – שלווה ותקווה. חוויה דרמטית שמלמדת על אמונה וגבורה.',
    duration: '9 דקות',
    audience: 'כל הגילאים',
    difficulty: 'בינונית'
  },
  {
    img: '/images/hero-vr.png',
    badge: 'מלאכי הנוסע בזמנים',
    title: 'מסע במדבר',
    desc: 'מסע 360 מעלות אל תוך מסע המדבר של בני ישראל.',
    fullDesc: 'ארבעים שנה של נדודים – מרוכזים לחוויה אחת מרהיבה. עמוד האש בלילה, עמוד הענן ביום, קריעת האדמה, המן שיורד מהשמיים. כל זה בתלת מימד 360 מעלות שמקיף אתכם לגמרי.',
    duration: '10 דקות',
    audience: 'כל הגילאים',
    difficulty: 'קלה'
  },
  {
    img: '/images/kids-vr.png',
    badge: 'חבילת חינוך',
    title: 'חוויות לבתי ספר',
    desc: 'הופכים שיעורי תנ"ך לחוויה בלתי נשכחת.',
    fullDesc: 'חבילה מלאה לבתי ספר הכוללת מספר חוויות VR, הדרכה מקצועית, ודפי עבודה מלווים. מיועד לכיתות ד׳-ו׳. אנחנו מגיעים עם כל הציוד – 30 משקפיים, מסכי הקרנה ומנחה מקצועי.',
    duration: 'שעה-שעתיים',
    audience: 'כיתות ד׳-ו׳',
    difficulty: 'מונחית'
  }
];

export default function Experiences() {
  const [selectedExp, setSelectedExp] = useState(null);

  return (
    <>
      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="page-header-bg" style={{ backgroundImage: 'url(/images/exodus-vr.png)' }} />
        <div className="page-header-overlay" />
        <div className="page-header-content">
          <motion.div {...fadeUp}>
            <span className="section-tag">ספריית החוויות</span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem' }}>
              היכנסו אל תוך <em style={{ fontStyle: 'normal', color: 'var(--color-accent)' }}>הסיפור</em>
            </h1>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.15rem', maxWidth: '600px', lineHeight: 1.7 }}>
              כל חוויה מעוצבת בקפידה לשחזר את הרגע ההיסטורי בצורה הכי מרגשת, מדויקת ועוצמתית שיש.
            </p>
          </motion.div>
        </div>
      </section>

      {/* AUTO CAROUSEL */}
      <section className="section" style={{ paddingTop: '4rem', paddingBottom: '2rem' }}>
        <div className="section-inner">
          <motion.div {...fadeUp} style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <span className="section-tag">מתחלף אוטומטית</span>
            <h2 className="section-title">הצצה לחוויות</h2>
          </motion.div>
          <ExperienceCarousel />
        </div>
      </section>

      {/* EXPERIENCES GRID */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="section-inner">
          <motion.div {...fadeUp} style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-tag">כל החוויות</span>
            <h2 className="section-title">לחצו לפרטים נוספים</h2>
          </motion.div>
          <div className="exp-grid">
            {experiences.map((exp, i) => (
              <motion.div key={i} className="exp-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                onClick={() => setSelectedExp(exp)}
              >
                <img src={exp.img} alt={exp.title} className="exp-card-img" />
                <div className="exp-card-overlay" />
                <div className="exp-card-badge">{exp.badge}</div>
                <div className="exp-card-title">
                  <h3>{exp.title}</h3>
                  <p>{exp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMING SOON */}
      <section className="section how-bg">
        <div className="section-inner" style={{ textAlign: 'center' }}>
          <motion.div {...fadeUp}>
            <span className="section-tag">בקרוב</span>
            <h2 className="section-title">חוויות חדשות בדרך</h2>
            <p className="section-sub" style={{ margin: '0 auto 3rem' }}>
              הצוות שלנו עובד על סצנות חדשות שיתווספו לספרייה בקרוב – עקיבת יעקב, יוסף במצרים, שלמה המלך ועוד.
            </p>
            <Link to="/contact" className="btn btn-primary">
              <MessageCircle size={18} />
              רוצים להיות הראשונים לדעת?
            </Link>
          </motion.div>
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {selectedExp && (
          <motion.div className="modal-overlay"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedExp(null)}
          >
            <motion.div className="modal-content"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.35 }}
              onClick={e => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setSelectedExp(null)}>
                <X size={24} />
              </button>
              <div className="modal-img-wrap">
                <img src={selectedExp.img} alt={selectedExp.title} />
                <div className="modal-img-overlay" />
              </div>
              <div className="modal-body">
                <span className="hero-badge" style={{ marginBottom: '1rem' }}>{selectedExp.badge}</span>
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{selectedExp.title}</h2>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                  {selectedExp.fullDesc}
                </p>
                <div className="modal-meta">
                  <div className="modal-meta-item">
                    <Clock size={18} />
                    <span>משך: {selectedExp.duration}</span>
                  </div>
                  <div className="modal-meta-item">
                    <Users size={18} />
                    <span>קהל: {selectedExp.audience}</span>
                  </div>
                </div>
                <Link to="/contact" className="btn btn-primary" style={{ width: '100%', marginTop: '1.5rem' }}
                  onClick={() => setSelectedExp(null)}>
                  <MessageCircle size={18} />
                  הזמינו חוויה זו
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
