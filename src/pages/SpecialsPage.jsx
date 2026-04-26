import React from 'react';
import ScrollSequenceHero from '../components/ScrollSequenceHero';

export default function SpecialsPage() {
  return (
    <main style={{ backgroundColor: '#050f14', minHeight: '100vh', paddingBottom: '10rem' }}>
      {/* Scroll-tied Animation Hero */}
      <ScrollSequenceHero />

      {/* Rest of the Specials Menu Content (Placeholder) */}
      <section 
        className="container" 
        style={{ 
          marginTop: '5rem',
          textAlign: 'center',
          color: '#fff'
        }}
      >
        <h2 
          style={{ 
            fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
            color: 'var(--color-gold)',
            fontFamily: "'Cormorant Garamond', serif",
            marginBottom: '2rem'
          }}
        >
          קולקציית הרזרב שלנו
        </h2>
        <p 
          style={{ 
            fontSize: '1.2rem', 
            color: 'rgba(255,255,255,0.7)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.8
          }}
        >
          כאן נבנה את תפריט היינות המיוחדים והמשקאות הנדירים שלנו.
          החלק הזה מופיע בדיוק אחרי שהאנימציה של הבקבוק מסיימת את הסיבוב המלא שלה.
        </p>

        {/* Temporary grid for visualization */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginTop: '5rem'
          }}
        >
          {[1, 2, 3].map(i => (
            <div 
              key={i} 
              style={{
                height: '300px',
                border: '1px solid rgba(212,175,55,0.2)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(255,255,255,0.02)'
              }}
            >
              <span style={{ color: 'var(--color-gold)', opacity: 0.5 }}>פריט פרימיום {i}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
