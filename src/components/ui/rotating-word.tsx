'use client';

import { useEffect, useState } from 'react';

export function RotatingWord({
  words,
  intervalMs = 2800,
  cursorClassName,
}: {
  words: string[];
  intervalMs?: number;
  cursorClassName?: string;
}) {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);

  useEffect(() => {
    if (words.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => {
        setPrevIndex(i);
        return (i + 1) % words.length;
      });
    }, intervalMs);
    return () => clearInterval(id);
  }, [words.length, intervalMs]);

  useEffect(() => {
    if (prevIndex === null) return;
    const timeout = setTimeout(() => setPrevIndex(null), 500);
    return () => clearTimeout(timeout);
  }, [prevIndex]);

  return (
    <span className="relative -mb-[0.2em] inline-block overflow-hidden pb-[0.2em] align-bottom">
      <span key={`in-${index}`} className="motion-safe:animate-word-slide-in">
        {words[index]}
      </span>
      {prevIndex !== null && (
        <span key={`out-${prevIndex}`} aria-hidden="true" className="absolute left-0 top-0 whitespace-nowrap motion-safe:animate-word-slide-out">
          {words[prevIndex]}
        </span>
      )}
      {cursorClassName && <span className={cursorClassName}>_</span>}
    </span>
  );
}
