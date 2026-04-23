import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

function AnimatedCounter({ target, suffix = '', duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const num = parseInt(target.replace(/[^0-9]/g, ''));
    if (isNaN(num)) { setCount(target); return; }

    let start = 0;
    const step = Math.ceil(num / (duration * 60));
    const timer = setInterval(() => {
      start += step;
      if (start >= num) {
        setCount(num);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [inView, target, duration]);

  const formatted = typeof count === 'number' 
    ? count.toLocaleString() + suffix 
    : count;

  return (
    <span ref={ref} className="stat-num">
      {inView ? formatted : '0'}
    </span>
  );
}

export default AnimatedCounter;
