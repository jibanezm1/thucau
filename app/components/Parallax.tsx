"use client";

import { useEffect, useRef } from "react";

type ParallaxProps = {
  speed?: number;
  className?: string;
  children: React.ReactNode;
};

export function Parallax({ speed = 0.12, className = "", children }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      const rect = node.getBoundingClientRect();
      const center = rect.top + rect.height / 2 - window.innerHeight / 2;
      node.style.transform = `translate3d(0, ${(-center * speed).toFixed(2)}px, 0)`;
      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);

    return () => cancelAnimationFrame(raf);
  }, [speed]);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}
