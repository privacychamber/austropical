"use client";

import React from "react";
import { motion } from "framer-motion";
import { TextSplit } from "@/components/ui/TextSplit";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  className?: string;
  light?: boolean;
}

export function SectionHeading({ subtitle, title, description, className = "", light = false }: SectionHeadingProps) {
  return (
    <div className={`text-center max-w-3xl mx-auto space-y-4 mb-20 ${className}`}>
      {subtitle && (
        <span className={`font-display font-bold uppercase tracking-widest text-xs ${light ? "text-white/80" : "text-brand-purple/80"}`}>
          {subtitle}
        </span>
      )}
      <h2 className={`font-display font-extrabold text-4xl md:text-6xl uppercase tracking-tight leading-none ${light ? "text-white" : "text-brand-purple"}`}>
        <TextSplit text={title} />
      </h2>
      {description && (
        <p className={`text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto ${light ? "text-white/70" : "text-brand-purple/70"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
