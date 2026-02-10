import { useState, useEffect, useRef } from 'react';

function parseValue(str) {
  const match = String(str).match(/^([\d,]+)(.*)$/);
  if (!match) return { num: 0, suffix: str };
  const num = parseInt(match[1].replace(/,/g, ''), 10) || 0;
  const suffix = match[2] || '';
  return { num, suffix };
}

function easeOutCubic(t) {
  return 1 - (1 - t) ** 3;
}

export default function CountUpStat({ value, label, className = '' }) {
  const [inView, setInView] = useState(false);
  const [displayNum, setDisplayNum] = useState(0);
  const ref = useRef(null);
  const { num: target, suffix } = parseValue(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || target <= 0) {
      if (inView && target === 0) setDisplayNum(0);
      return;
    }
    const duration = 1200;
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(t);
      setDisplayNum(Math.round(eased * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);

  const displayValue = target > 0 ? `${displayNum.toLocaleString()}${suffix}` : value;

  return (
    <div ref={ref} className={className}>
      <p className="font-serif text-5xl md:text-6xl lg:text-7xl text-waten-accent font-semibold tabular-nums mb-4">
        {displayValue}
      </p>
      <p className="text-stone-600 text-sm md:text-base">{label}</p>
    </div>
  );
}
