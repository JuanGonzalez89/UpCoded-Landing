'use client';

import { cn } from '@/lib/utils';
import { useEffect, useRef, useState, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
};

export function FadeInView({ children, className, delay = 0, direction = 'up' }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) { setVisible(true); observer.unobserve(el); }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        'motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out',
        direction === 'up' && 'motion-safe:translate-y-8',
        direction === 'left' && 'motion-safe:-translate-x-8',
        direction === 'right' && 'motion-safe:translate-x-8',
        visible
          ? 'motion-safe:translate-x-0 motion-safe:translate-y-0 motion-safe:opacity-100'
          : 'motion-safe:opacity-0',
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
