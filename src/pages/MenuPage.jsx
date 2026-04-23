import { motion } from 'framer-motion';

export default function MenuPage() {
  return (
    <main className="menu-page">
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('/martini-bg.png')" }}></div>
        <div className="page-hero-overlay"></div>
        <div className="container page-hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >תפריט</motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >אמנות בכל לגימה - קוקטיילים קלאסיים ומקוריים</motion.p>
        </div>
      </section>

      <section className="menu-content section container">
        <motion.div 
          className="menu-category"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="category-title">קוקטיילים חתימה שף</h2>
          <div className="menu-list">
            
            <div className="menu-item">
              <div className="menu-item-header">
                <h3 className="menu-item-title">הסוד של צפת</h3>
                <span className="menu-item-price">68 ₪</span>
              </div>
              <p className="menu-item-desc">ג'ין, ליקר אלדרפלאור, סירופ תאנים, לימון סחוט, נגיעות ורדים, עשן רוזמרין.</p>
            </div>

            <div className="menu-item">
              <div className="menu-item-header">
                <h3 className="menu-item-title">מרתף מיושן (Smoked Old Fashioned)</h3>
                <span className="menu-item-price">74 ₪</span>
              </div>
              <p className="menu-item-desc">בורבון מובחר מיושן במרתף, טריפל סק, ביטרס, עשן עץ אלון.</p>
            </div>

            <div className="menu-item">
              <div className="menu-item-header">
                <h3 className="menu-item-title">ויסקי סאוור זהב</h3>
                <span className="menu-item-price">65 ₪</span>
              </div>
              <p className="menu-item-desc">ויסקי אירי, מיץ לימון טרי, סירופ אגבה, חלבון, אבק זהב אכיל.</p>
            </div>

          </div>
        </motion.div>
      </section>

      <section className="menu-divider" style={{ backgroundImage: "url('/menu-divider-bg.png')" }}></section>

      <section className="menu-content section container">
        <motion.div 
          className="menu-category"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="category-title">יינות מיוחדים</h2>
          <div className="menu-list">
            
            <div className="menu-item">
              <div className="menu-item-header">
                <h3 className="menu-item-title">קברנה סוביניון - יקב הרי גליל</h3>
                <span className="menu-item-price">55 / 220 ₪</span>
              </div>
              <p className="menu-item-desc">אדום עדין עם ארומות של פירות יער שחורים ושוקולד מריר.</p>
            </div>

            <div className="menu-item">
              <div className="menu-item-header">
                <h3 className="menu-item-title">שרדונה רזרב</h3>
                <span className="menu-item-price">60 / 240 ₪</span>
              </div>
              <p className="menu-item-desc">לבן אלגנטי בעל גוף מלא, יושן חופי עץ אלון צרפתי, נגיעות וניל.</p>
            </div>

          </div>
        </motion.div>
      </section>

      <section className="menu-divider" style={{ backgroundImage: "url('/luxury-beer-bg.png')" }}></section>

      <section className="menu-content section container">
        <motion.div 
          className="menu-category"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="category-title">בירות פרימיום מהחבית</h2>
          <div className="menu-list">
            
            <div className="menu-item">
              <div className="menu-item-header">
                <h3 className="menu-item-title">צפת סטאוט מיושן בחבית עץ</h3>
                <span className="menu-item-price">42 ₪</span>
              </div>
              <p className="menu-item-desc">בירה שחורה כבדה ועשירה שיושנה בחביות עץ אלון צרפתי. רמזים לקפה ושוקולד מריר.</p>
            </div>

            <div className="menu-item">
              <div className="menu-item-header">
                <h3 className="menu-item-title">איי בי איי פרייבט גליל (IPA)</h3>
                <span className="menu-item-price">38 ₪</span>
              </div>
              <p className="menu-item-desc">פירותית, מרירה ומרווה, מבושלת במבשלת בוטיק גלילית מכשות מובחר.</p>
            </div>

            <div className="menu-item">
              <div className="menu-item-header">
                <h3 className="menu-item-title">ביטר צרפתי פרימיום</h3>
                <span className="menu-item-price">40 ₪</span>
              </div>
              <p className="menu-item-desc">בירה צלולה וזהובה, קלילה אבל מתוחכמת עם נגיעות הדרים קלות.</p>
            </div>

          </div>
        </motion.div>
      </section>

    </main>
  );
}
