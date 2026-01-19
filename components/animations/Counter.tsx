"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface CounterProps {
  from?: number;
  to: number;
  duration?: number; // in seconds
  className?: string;
}

export default function Counter({
  from = 0,
  to,
  duration = 1.5,
  className,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true });
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!isInView) return;

    let start: number | null = null;
    let frameId: number;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / (duration * 1000), 1);

      const current = from + (to - from) * progress;
      setValue(Math.floor(current));

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      }
    };

    frameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(frameId);
  }, [isInView, from, to, duration]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
