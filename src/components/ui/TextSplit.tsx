"use client";

import React from "react";
import { motion } from "framer-motion";

interface TextSplitProps {
  text: string;
  className?: string;
  delay?: number;
}

export function TextSplit({ text, className = "", delay = 0 }: TextSplitProps) {
  const letters = Array.from(text);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: delay,
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: "40%",
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: "0%",
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 18,
        stiffness: 150,
      },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`inline-flex flex-wrap ${className}`}
    >
      {letters.map((char, index) => (
        <motion.span
          key={index}
          variants={childVariants}
          style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}
