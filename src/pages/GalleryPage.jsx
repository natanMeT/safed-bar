import { motion } from 'framer-motion';

export default function GalleryPage() {
  const images = [
    '/hero-bg.png',
    '/safed-alley-bg.png',
    '/martini-bg.png',
    '/wine-bottle-bg.png',
    '/luxury-beer-bg.png',
    '/events-vip-bg.png',
    '/wine-cellar-bg.png',
    '/menu-divider-bg.png',
  ];

  return (
    <main className="gallery-page">
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('/wine-bottle-bg.png')" }}></div>
        <div className="page-hero-overlay"></div>
        <div className="container page-hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >גלריה</motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >הצצה לחוויה מחכה לכם במרתף</motion.p>
        </div>
      </section>

      <section className="section container">
        <div className="visual-grid">
          {images.map((src, idx) => (
            <motion.div 
              key={idx}
              className="visual-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <div className="visual-image" style={{ backgroundImage: `url('${src}')` }}></div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
