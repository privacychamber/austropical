"use client";

import React from "react";
import { motion } from "framer-motion";

interface FloatingElementProps {
  src: string;
  alt: string;
  className: string;
  depth?: number;
  speed?: "slow" | "normal" | "fast";
}

export function FloatingElement({ src, alt, className, depth = 1, speed = "normal" }: FloatingElementProps) {
  const speedClass = 
    speed === "slow" ? "animate-float-slow" : 
    speed === "fast" ? "animate-float-fast" : "animate-float";

  return (
    <motion.div
      whileHover={{ y: -10 * depth, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className={`absolute z-30 select-none pointer-events-auto ${speedClass} ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="w-full h-full object-contain filter drop-shadow-md" />
    </motion.div>
  );
}
