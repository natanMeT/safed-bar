import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Clock, Users } from 'lucide-react';
import './ExperienceCarousel.css';

const experiences = [
  {
    img: '/images/exodus-vr.png',
    badge: 'קריעת ים סוף',
    title: 'מסע בני ישראל',
    desc: 'חוו את הרגע שבו משה רבנו הרים את מטהו וקרע את ים סוף לשניים. קירות מים ענקיים מתנשאים משני צדיכם.',
    duration: '8 דקות',
    audience: 'כל הגילאים'
  },
  {
    img: '/images/burning-bush.png',
    badge: 'הסנה הבוער',
    title: 'משה בהר סיני',
    desc: 'טיפסו עם משה רבנו על הר סיני וראו מול עיניכם את הסנה שבוער באש אך אינו אוכל.',
    duration: '6 דקות',
    audience: 'גיל 6+'
  },
  {
    img: '/images/david-goliath.png',
    badge: 'דוד וגוליית',
    title: 'הקרב המכריע',
    desc: 'הרגישו את הרעד כשגוליית הענק צועד לעברכם, ואת האומץ של דוד הצעיר שעומד מולו.',
    duration: '7 דקות',
    audience: 'גיל 8+'
  },
  {
    img: '/images/noah-ark.png',
    badge: 'תיבת נוח',
    title: 'המבול הגדול',
    desc: 'סערה אדירה מכסה את כל הארץ. אתם על סיפון תיבת נוח, מוקפים בזוגות של חיות מכל מין.',
    duration: '9 דקות',
    audience: 'כל הגילאים'
  },
  {
    img: '/images/hero-vr.png',
    badge: 'מלאכי הנוסע בזמנים',
    title: 'מסע במדבר',
    desc: 'ארבעים שנה של נדודים – מרוכזים לחוויה אחת מרהיבה. עמוד האש, המן מהשמיים.',
    duration: '10 דקות',
    audience: 'כל הגילאים'
  },
  {
    img: '/images/kids-vr.png',
    badge: 'חבילת חינוך',
    title: 'חוויות לבתי ספר',
    desc: 'חבילה מלאה לבתי ספר – הדרכה מקצועית, 30 משקפיים, מנחה ודפי עבודה.',
    duration: 'שעה-שעתיים',
    audience: 'כיתות ד׳-ו׳'
  }
];

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? 400 : -400, opacity: 0, scale: 0.92 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (dir) => ({ x: dir < 0 ? 400 : -400, opacity: 0, scale: 0.92 })
};

export default function ExperienceCarousel() {
  const [[current, direction], setCurrent] = useState([0, 0]);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent(([c]) => [(c + 1) % experiences.length, 1]);
  }, []);

  const prev = useCallback(() => {
    setCurrent(([c]) => [(c - 1 + experiences.length) % experiences.length, -1]);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [paused, next]);

  const exp = experiences[current];

  return (
    <div className="carousel-wrapper" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      
      {/* Background image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${current}`}
          className="carousel-bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          style={{ backgroundImage: `url(${exp.img})` }}
        />
      </AnimatePresence>
      <div className="carousel-bg-overlay" />

      <div className="carousel-content">
        {/* Slide */}
        <div className="carousel-slide-area">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              className="carousel-card"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="carousel-img-wrap">
                <img src={exp.img} alt={exp.title} />
                <div className="carousel-img-overlay" />
                <div className="carousel-badge">{exp.badge}</div>
              </div>
              <div className="carousel-info">
                <h3>{exp.title}</h3>
                <p>{exp.desc}</p>
                <div className="carousel-meta">
                  <span><Clock size={14} /> {exp.duration}</span>
                  <span><Users size={14} /> {exp.audience}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="carousel-controls">
          <button className="carousel-arrow" onClick={prev}><ChevronRight size={22} /></button>
          <div className="carousel-dots">
            {experiences.map((_, i) => (
              <button 
                key={i} 
                className={`carousel-dot ${i === current ? 'active' : ''}`}
                onClick={() => setCurrent([i, i > current ? 1 : -1])}
              />
            ))}
          </div>
          <button className="carousel-arrow" onClick={next}><ChevronLeft size={22} /></button>
        </div>
      </div>
    </div>
  );
}
