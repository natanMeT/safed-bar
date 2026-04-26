import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

const ScrollSequenceHero = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [images, setImages] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const frameCount = 32;

  // Preload images
  useEffect(() => {
    const loadedImages = [];
    let loadedCount = 0;

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      const frameNum = i.toString().padStart(4, '0');
      img.src = `/wine_flow_assets/frames_jpg_best/frame_${frameNum}.jpg`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          setImages(loadedImages);
          setIsLoaded(true);
        }
      };
      loadedImages.push(img);
    }
  }, []);

  // Framer motion scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map scroll progress (0 to 1) to frame index (0 to 31)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);

  const drawImage = (index) => {
    if (!canvasRef.current || !images[index] || !isLoaded) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = images[index];

    // Handle high DPI displays
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    // Object-fit: contain logic (to show the whole bottle)
    const imgRatio = img.width / img.height;
    const canvasRatio = rect.width / rect.height;
    
    let renderWidth, renderHeight, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      // Canvas is wider than image (Fit to height)
      renderHeight = rect.height;
      renderWidth = rect.height * imgRatio;
      offsetX = (rect.width - renderWidth) / 2;
      offsetY = 0;
    } else {
      // Canvas is taller than image (Fit to width)
      renderWidth = rect.width;
      renderHeight = rect.width / imgRatio;
      offsetX = 0;
      offsetY = (rect.height - renderHeight) / 2;
    }

    ctx.clearRect(0, 0, rect.width, rect.height);
    ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
  };

  // Draw first frame when loaded, and handle window resize
  useEffect(() => {
    if (isLoaded) {
      drawImage(Math.round(frameIndex.get()));
      
      const handleResize = () => drawImage(Math.round(frameIndex.get()));
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [isLoaded]);

  // Update canvas when frameIndex changes
  useMotionValueEvent(frameIndex, "change", (latest) => {
    drawImage(Math.round(latest));
  });

  return (
    <div 
      ref={containerRef} 
      style={{ 
        height: '300vh', 
        position: 'relative',
        backgroundColor: '#050f14' // Match theme
      }}
    >
      <div 
        style={{ 
          position: 'sticky', 
          top: 0, 
          height: '100vh', 
          width: '100%',
          overflow: 'hidden'
        }}
      >
        <canvas 
          ref={canvasRef} 
          style={{ 
            width: '100%', 
            height: '100%', 
            display: 'block' 
          }} 
        />
        
        {/* Dark overlay for text readability */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(5,15,20,0.8) 0%, rgba(5,15,20,0.3) 50%, rgba(5,15,20,0.9) 100%)',
          pointerEvents: 'none'
        }}></div>

        {/* Hero Text Content */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          pointerEvents: 'none',
          width: '100%',
          padding: '0 2rem'
        }}>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ 
              color: 'var(--color-gold)', 
              fontSize: 'clamp(3rem, 8vw, 6rem)', 
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: '400',
              marginBottom: '1rem',
              textShadow: '0 10px 30px rgba(0,0,0,0.8)'
            }}
          >
            המיוחדים שלנו
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            style={{
              color: '#ffffff',
              fontSize: '1.2rem',
              letterSpacing: '4px',
              textTransform: 'uppercase'
            }}
          >
            גלו את האוסף הנדיר
          </motion.p>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
            opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0])
          }}
        >
          <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', letterSpacing: '2px' }}>גללו מטה</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            style={{ width: '1px', height: '40px', background: 'var(--color-gold)' }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollSequenceHero;
