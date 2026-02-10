import { useState, useEffect, useRef } from 'react';

export default function FadeUp({ children, className = '' }) {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`fade-up ${inView ? 'fade-up-visible' : ''} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
