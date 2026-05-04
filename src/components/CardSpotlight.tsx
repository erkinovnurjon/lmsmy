"use client";

import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { motion } from "framer-motion";

interface CardSpotlightProps {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
  as?: "div" | "button";
  onClick?: () => void;
}

export default function CardSpotlight({
  children,
  className = "",
  spotlightColor = "rgba(22, 163, 74, 0.08)",
  as = "div",
  onClick,
}: CardSpotlightProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const Component = as === "button" ? motion.button : motion.div;

  return (
    <Component
      ref={ref as React.RefObject<HTMLDivElement & HTMLButtonElement>}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{ y: -6, transition: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] } }}
    >
      {/* Spotlight glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, ${spotlightColor}, transparent 40%)`,
        }}
      />

      {/* Gradient border on hover */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, rgba(22,163,74,0.15), transparent 40%)`,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1px",
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </Component>
  );
}
