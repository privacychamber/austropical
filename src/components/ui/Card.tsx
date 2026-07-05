"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { TILT_VARIANTS } from "@/lib/animations";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  animate?: boolean;
}

export function Card({ children, className, animate = true, ...props }: CardProps) {
  if (!animate) {
    return (
      <div className={cn("bg-white rounded-[28px] p-8 shadow-sm border border-brand-purple/5", className)} {...props}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      variants={TILT_VARIANTS}
      initial="rest"
      whileHover="hover"
      className={cn("bg-white rounded-[28px] p-8 shadow-sm border border-brand-purple/5 cursor-pointer relative overflow-hidden", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
