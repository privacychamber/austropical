"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  withArrow?: boolean;
  magnetic?: boolean;
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  withArrow = false,
  magnetic = true,
  children,
  ...props
}: ButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!magnetic || !buttonRef.current) return;
    
    const { clientX, clientY } = e;
    const { height, width, left, top } = buttonRef.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const baseStyles = "relative inline-flex items-center justify-center font-sans font-bold transition-all duration-300 overflow-hidden rounded-full hover:-translate-y-1";
  
  const variants = {
    primary: "bg-brand-mango text-brand-acai-dark hover:bg-brand-mango-light shadow-lg hover:shadow-xl border-b-4 border-brand-mango-light/50",
    secondary: "bg-brand-dragonfruit text-white hover:bg-brand-dragonfruit-light shadow-lg hover:shadow-xl border-b-4 border-brand-dragonfruit-light/50",
    outline: "border-2 border-brand-acai text-brand-acai hover:bg-brand-acai hover:text-white",
    ghost: "bg-transparent text-brand-acai hover:bg-brand-acai/10",
  };

  const sizes = {
    sm: "px-6 py-3 text-sm",
    md: "px-8 py-4 text-base uppercase tracking-wide",
    lg: "px-12 py-5 text-lg uppercase tracking-wide",
  };

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {withArrow && (
          <motion.span
            animate={{ x: isHovered ? 4 : 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <ArrowRight size={size === 'lg' ? 20 : 18} />
          </motion.span>
        )}
      </span>
      {variant === 'primary' && isHovered && (
        <motion.div
          layoutId="glow"
          className="absolute inset-0 bg-white/20 blur-md rounded-btn"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </motion.button>
  );
}
