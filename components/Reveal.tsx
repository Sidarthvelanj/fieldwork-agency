"use client";

import { useEffect, useRef, useState, ReactNode, CSSProperties } from "react";

/**
 * Wraps any section/element in a fade-up reveal that triggers once,
 * when it scrolls into view. Uses IntersectionObserver directly (no
 * extra dependency) and respects prefers-reduced-motion via the
 * .reveal rules in globals.css. Accepts an optional delayMs for
 * staggering multiple items — passed as an inline style, since
 * Tailwind can't statically detect dynamically-built class names.
 */
export default function Reveal({
  children,
  className = "",
  delayMs = 0,
}: {
  children: ReactNode;
  className?: string;
  delayMs?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const style: CSSProperties = delayMs ? { transitionDelay: `${delayMs}ms` } : {};

  return (
    <div
      ref={ref}
      style={style}
      className={`reveal ${inView ? "in-view" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
