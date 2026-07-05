"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ParticlesCanvas } from "@/components/ui/ParticlesCanvas";

export function HeroAtmosphere() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none overflow-hidden z-20 mix-blend-screen">
      <motion.div style={{ y: y1, opacity: opacityFade }} className="absolute inset-0">
        <ParticlesCanvas />
      </motion.div>
      
      {/* Sun rays overlay */}
      <motion.div style={{ y: y2, opacity: opacityFade }} className="absolute -top-[10%] -left-[10%] w-[120%] h-[120%] pointer-events-none">
        <div className="sun-ray left-[20%]"></div>
        <div className="sun-ray left-[45%] delay-150"></div>
        <div className="sun-ray left-[70%] delay-300"></div>
      </motion.div>

      {/* Fog layers */}
      <motion.div style={{ y: y1, opacity: opacityFade }} className="absolute inset-0 pointer-events-none">
        <div className="fog-layer w-[800px] h-[400px] left-[-10%] top-[30%]"></div>
        <div className="fog-layer w-[600px] h-[300px] right-[-5%] top-[50%] animation-delay-500"></div>
      </motion.div>
    </div>
  );
}
