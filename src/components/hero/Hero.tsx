"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HeroBackground } from "./HeroBackground";
import { HeroAtmosphere } from "./HeroAtmosphere";
import { HeroProductScene } from "./HeroProductScene";
import { Magnetic } from "@/components/ui/Magnetic";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen pt-44 pb-32 overflow-hidden flex items-center"
    >
      <HeroBackground />
      <HeroAtmosphere />

      <div className="relative z-30 w-full mx-auto max-w-container px-6 md:px-16 lg:px-[120px] grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Content (50%) */}
        <motion.div 
          style={{ y: yText, opacity: opacityText }}
          className="lg:col-span-6 flex flex-col items-start gap-12"
        >
          <h1 className="font-display font-medium text-5xl md:text-7xl lg:text-[80px] leading-[1.1] tracking-wide text-white drop-shadow-2xl">
            <span className="block mb-2">Wildly Natural.</span>
            <span className="block mb-2 text-brand-accent italic">Crafted by Rainforests.</span>
            <span className="block">Loved by Australians.</span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="text-white/80 text-lg md:text-xl font-light tracking-widest max-w-lg leading-relaxed uppercase"
          >
            Premium organic superfoods. Real nutrition. Feel good, move more, live better.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-6"
          >
            <Magnetic>
              <Button variant="primary" size="lg" withArrow>
                Shop Collection
              </Button>
            </Magnetic>
            <Magnetic>
              <Button variant="ghost" size="lg" className="gap-4 text-white hover:bg-white/10">
                <span className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                  <Play size={16} className="ml-1 fill-white text-white" />
                </span>
                Discover Origin
              </Button>
            </Magnetic>
          </motion.div>
        </motion.div>

        {/* Right Composition (50%) */}
        <div className="lg:col-span-6 relative h-[600px] w-full mt-10 lg:mt-0 z-20">
          <HeroProductScene />
        </div>

      </div>
      
      {/* Organic Bottom Mask (Replaces WaveDivider) */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-brand-cream to-transparent z-40 pointer-events-none" />
    </section>
  );
}
