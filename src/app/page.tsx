"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export default function DreamlandHomepage() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Hero Parallax Transforms
  const heroY = useTransform(scrollYProgress, [0, 0.2], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const leafLeftX = useTransform(scrollYProgress, [0, 0.2], ["0%", "-50%"]);
  const leafRightX = useTransform(scrollYProgress, [0, 0.2], ["0%", "50%"]);

  // Floating Worlds Transforms
  const world1Y = useTransform(scrollYProgress, [0.1, 0.4], ["100%", "0%"]);
  const world2Y = useTransform(scrollYProgress, [0.2, 0.6], ["100%", "0%"]);
  const world3Y = useTransform(scrollYProgress, [0.4, 0.8], ["100%", "0%"]);

  // Zero-Gravity Harvest Transforms
  const fruit1Y = useTransform(scrollYProgress, [0.7, 1], ["0%", "-200%"]);
  const fruit2Y = useTransform(scrollYProgress, [0.7, 1], ["0%", "-100%"]);
  const fruit3Y = useTransform(scrollYProgress, [0.7, 1], ["0%", "-150%"]);
  const fruitRotate = useTransform(scrollYProgress, [0.7, 1], [0, 180]);

  return (
    <main ref={containerRef} className="relative bg-[#1A0B2E] text-brand-ivory min-h-[400vh] font-sans overflow-clip selection:bg-brand-orange selection:text-white">
      <Navbar />
      
      {/* 
        ========================================
        SCENE 01: THE CANOPY ENTRANCE
        ========================================
      */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Deep Dreamland Background */}
        <div className="absolute inset-0 bg-[url('/rainforest_canopy_hero.png')] bg-cover bg-center opacity-60 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A0B2E]/70 via-[#2D0B38]/60 to-[#1A0B2E]" />
        
        {/* Floating Bioluminescent Spores */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-brand-green rounded-full blur-[2px] animate-ping opacity-50" />
        <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-brand-blue rounded-full blur-[3px] animate-pulse opacity-40" />
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-brand-orange rounded-full blur-[1px] animate-ping opacity-60" />
      </div>

      <motion.section style={{ y: heroY, opacity: heroOpacity }} className="relative h-screen w-full flex flex-col items-center justify-center z-10 pt-20">
        
        {/* Floating Banner */}
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-20 w-full max-w-5xl mx-auto px-4 mt-12"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/unmatched-excellence-buckets.jpg" 
            alt="Unmatched Excellence" 
            className="w-full h-auto object-contain rounded-[40px] shadow-[0_0_80px_rgba(45,11,56,0.8)]"
          />
        </motion.div>

        {/* Parallax Foreground Leaves */}
        <motion.img 
          style={{ x: leafLeftX }}
          src="/leaves_foreground_placeholder.png" 
          alt="" 
          className="absolute -bottom-20 -left-20 w-[600px] opacity-90 blur-[4px] z-30 pointer-events-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]" 
        />
        <motion.img 
          style={{ x: leafRightX }}
          src="/leaves_foreground_placeholder.png" 
          alt="" 
          className="absolute -bottom-20 -right-20 w-[600px] opacity-90 blur-[5px] z-30 pointer-events-none scale-x-[-1] drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]" 
        />
      </motion.section>

      {/* 
        ========================================
        SCENE 02: FLOATING WORLDS
        ========================================
      */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 space-y-[30vh] pb-[30vh]">
        
        {/* World 1: Açaí */}
        <motion.div style={{ y: world1Y }} className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center relative">
            <div className="absolute inset-0 bg-[url('/mossy_rainforest_cave.png')] bg-cover bg-center opacity-40 blur-[40px] rounded-[60px]" />
            <motion.img 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0 }}
              src="/acai-passionfruit-legs.png" 
              alt="Açaí Superberry" 
              className="relative z-10 w-full max-w-md h-auto drop-shadow-[0_40px_60px_rgba(0,0,0,0.8)]" 
            />
          </div>
          <div className="text-left">
            <span className="font-sans text-xs tracking-[0.4em] text-brand-green uppercase mb-6 block drop-shadow-md">The Original</span>
            <h2 className="font-display text-5xl md:text-7xl mb-6 text-white drop-shadow-lg">Açaí Bowls</h2>
            <p className="font-sans text-lg font-light text-white/80 max-w-md mb-8">
              Deep purple antioxidant power. Wild-harvested directly from the Amazon canopy.
            </p>
            <Button variant="outline" size="md" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">Shop Tubs</Button>
          </div>
        </motion.div>

        {/* World 2: Cubes */}
        <motion.div style={{ y: world2Y }} className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-left order-2 md:order-1 md:pl-20">
            <span className="font-sans text-xs tracking-[0.4em] text-brand-blue uppercase mb-6 block drop-shadow-md">Flash Frozen</span>
            <h2 className="font-display text-5xl md:text-7xl mb-6 text-white drop-shadow-lg">Smoothie Cubes</h2>
            <p className="font-sans text-lg font-light text-white/80 max-w-md mb-8">
              A perfectly portioned blend of raw, tropical energy. Just drop, blend, and glow.
            </p>
            <Button variant="outline" size="md" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">Shop Cubes</Button>
          </div>
          <div className="flex justify-center relative order-1 md:order-2">
            <div className="absolute inset-0 bg-[url('/crushed_ice_macro.png')] bg-cover bg-center opacity-50 blur-[50px] rounded-[60px]" />
            <motion.img 
              animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              src="/dragonfruit_pack.png" 
              alt="Smoothie Cubes" 
              className="relative z-10 w-full max-w-md h-auto drop-shadow-[0_40px_60px_rgba(0,0,0,0.8)]" 
            />
          </div>
        </motion.div>

        {/* World 3: Ice Pops */}
        <motion.div style={{ y: world3Y }} className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center relative">
            <div className="absolute inset-0 bg-[url('/australian_summer_timber.png')] bg-cover bg-center opacity-60 blur-[40px] rounded-[60px]" />
            <motion.img 
              animate={{ y: [0, -25, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              src="/acai-zero-sugar-original.png" 
              alt="Ice Pops" 
              className="relative z-10 w-full max-w-md h-auto drop-shadow-[0_40px_60px_rgba(0,0,0,0.8)]" 
            />
          </div>
          <div className="text-left">
            <span className="font-sans text-xs tracking-[0.4em] text-brand-orange uppercase mb-6 block drop-shadow-md">Summer Classic</span>
            <h2 className="font-display text-5xl md:text-7xl mb-6 text-white drop-shadow-lg">Ice Pops</h2>
            <p className="font-sans text-lg font-light text-white/80 max-w-md mb-8">
              The healthy Australian summer classic. Zero added sugar, 100% real fruit joy.
            </p>
            <Button variant="outline" size="md" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">Shop Pops</Button>
          </div>
        </motion.div>

      </div>

      {/* 
        ========================================
        SCENE 03: ZERO-GRAVITY HARVEST
        ========================================
      */}
      <section className="relative h-[120vh] w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-transparent to-[#10041C]">
        
        {/* Background Australian Beach Lifestyle */}
        <div className="absolute inset-0 bg-[url('/australian_morning_surf.png')] bg-cover bg-center opacity-20 mix-blend-luminosity" />

        {/* Floating Fruits */}
        <motion.div style={{ y: fruit1Y, rotate: fruitRotate }} className="absolute top-[20%] left-[10%] w-32 h-32 bg-[url('/recipe_bowl.png')] bg-contain bg-no-repeat drop-shadow-2xl opacity-80" />
        <motion.div style={{ y: fruit2Y, rotate: fruitRotate }} className="absolute top-[40%] right-[15%] w-48 h-48 bg-[url('/mango_pack.png')] bg-contain bg-no-repeat drop-shadow-2xl opacity-90" />
        <motion.div style={{ y: fruit3Y, rotate: fruitRotate }} className="absolute top-[60%] left-[20%] w-40 h-40 bg-[url('/recipe_smoothie.png')] bg-contain bg-no-repeat drop-shadow-2xl opacity-70" />

        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-6xl md:text-[100px] text-white leading-none mb-8 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
            Taste the Magic.
          </h2>
          <p className="font-sans text-xl text-white/70 font-light mb-12">
            Experience the wildest, purest superfoods on earth.
          </p>
          <Button variant="primary" size="lg" className="shadow-[0_0_40px_rgba(247,147,30,0.4)]">Enter the Shop</Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
