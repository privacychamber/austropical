"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

const BANNER_IMAGES = [
  "/unmatched-excellence-buckets.jpg",
  "/mornings-made-smoothie.jpg",
  "/range-ledge.png"
];

export default function DreamlandHomepage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentBanner, setCurrentBanner] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % BANNER_IMAGES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

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

  return (
    <main ref={containerRef} className="relative bg-[#1A0B2E] text-brand-ivory min-h-[350vh] font-sans overflow-clip selection:bg-brand-orange selection:text-white">
      <Navbar />
      
      {/* 
        ========================================
        SCENE 01: THE NEW HERO BANNER
        ========================================
      */}
      <section className="relative w-full min-h-screen bg-[#FDFBF7] flex flex-col pt-0 z-10 overflow-hidden">
        
        {/* Top Notification Bar */}
        <div className="w-full bg-[#B2D235] py-2 overflow-hidden flex whitespace-nowrap">
          <motion.div 
            animate={{ x: [0, -1000] }} 
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex gap-8 text-[10px] md:text-xs font-bold text-[#1A5D2C] uppercase tracking-widest"
          >
            {[...Array(10)].map((_, i) => (
              <span key={i}>TRY BEFORE YOU BUY - TAKE OUR QUIZ FOR A FREE SAMPLE</span>
            ))}
          </motion.div>
        </div>

        {/* Hero Content */}
        <div className="flex-1 flex flex-col items-center justify-center pt-20 pb-40 px-4 relative z-20 text-center">
          
          {/* Tilted Chunky Header */}
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="font-display text-5xl md:text-[7rem] leading-[0.85] text-[#1A5D2C] uppercase -rotate-3 drop-shadow-md z-20 relative max-w-4xl mx-auto"
          >
            AUSTRALIA&apos;S <br/> BRIGHTER <br/> SNACK CHOICE
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 font-sans text-[#1A5D2C]/80 text-lg md:text-xl max-w-lg mx-auto z-20"
          >
            Packed with tropical flavour, made for everyday
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 z-20"
          >
            <Button className="bg-white text-[#1A5D2C] hover:bg-[#1A5D2C] hover:text-white border-none shadow-[0_8px_30px_rgba(26,93,44,0.15)] rounded-full px-8 py-6 text-sm font-bold transition-all duration-300">
              SHOP NOW
            </Button>
          </motion.div>

          {/* Floating Product Arch (Mocked with existing assets) */}
          <div className="absolute -bottom-20 left-0 w-full flex justify-center items-end gap-2 md:gap-8 z-10 pointer-events-none">
            
            <motion.img 
              animate={{ y: [0, -15, 0], rotate: [-15, -12, -15] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              src="/acai-zero-sugar-original.png" 
              className="w-40 md:w-72 h-auto drop-shadow-2xl -mb-10" 
              alt="Tub 1" 
            />
            
            <motion.img 
              animate={{ y: [0, -10, 0], rotate: [5, 2, 5] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }}
              src="/dragonfruit_pack.png" 
              className="w-48 md:w-80 h-auto drop-shadow-2xl mb-10 z-20" 
              alt="Tub 2" 
            />
            
            <motion.img 
              animate={{ y: [0, -12, 0], rotate: [-8, -5, -8] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
              src="/mango_pack.png" 
              className="w-48 md:w-80 h-auto drop-shadow-2xl mb-5" 
              alt="Tub 3" 
            />

            <motion.img 
              animate={{ y: [0, -20, 0], rotate: [12, 15, 12] }}
              transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 0.2 }}
              src="/acai-passionfruit-legs.png" 
              className="w-40 md:w-72 h-auto drop-shadow-2xl -mb-12" 
              alt="Tub 4" 
            />
          </div>

        </div>
      </section>

      {/* 
        ========================================
        SCENE 02: FLOATING WORLDS
        ========================================
      */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 space-y-[30vh] pb-[20vh]">
        
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
        SCENE 03: STORYTELLING TIMELINE
        ========================================
      */}
      <section className="relative w-full z-20 bg-brand-charcoal py-32 rounded-t-[80px] overflow-hidden border-t border-white/5">
        
        {/* Background Australian Beach Lifestyle */}
        <div className="absolute inset-0 bg-[url('/australian_morning_surf.png')] bg-cover bg-center opacity-20 mix-blend-luminosity blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/80 to-brand-charcoal/20" />

        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center space-y-16">
          <div className="space-y-6">
            <span className="text-brand-orange font-bold uppercase tracking-[0.3em] text-sm">The Journey</span>
            <h2 className="font-display text-5xl md:text-7xl text-white drop-shadow-lg leading-tight">
              From the Amazon Canopy <br/><span className="italic text-white/70 font-light">to the Australian Coast</span>
            </h2>
            <p className="font-sans text-lg text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
              We travel to the heart of the Amazon to sustainably wild-harvest the most nutrient-dense superfoods on earth, freezing them instantly to lock in their magic before they reach your breakfast table.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            <div className="bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-[40px] text-left hover:bg-white/10 transition-colors">
              <span className="text-4xl mb-4 block">01</span>
              <h3 className="text-2xl font-display font-bold text-white mb-3">Wild Harvest</h3>
              <p className="text-sm text-white/70">Hand-picked by local families in the Amazon rainforest, ensuring sustainability and fair trade.</p>
            </div>
            <div className="bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-[40px] text-left hover:bg-white/10 transition-colors mt-0 md:mt-12">
              <span className="text-4xl mb-4 block">02</span>
              <h3 className="text-2xl font-display font-bold text-white mb-3">Flash Frozen</h3>
              <p className="text-sm text-white/70">Instantly frozen at the source to preserve the vibrant nutrients, taste, and magical energy.</p>
            </div>
            <div className="bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-[40px] text-left hover:bg-white/10 transition-colors mt-0 md:mt-24">
              <span className="text-4xl mb-4 block">03</span>
              <h3 className="text-2xl font-display font-bold text-white mb-3">Pure Joy</h3>
              <p className="text-sm text-white/70">Blended into perfect portions for your morning rituals, post-surf fuel, and family breakfasts.</p>
            </div>
          </div>
          
          <div className="pt-20">
            <Button variant="primary" size="lg" className="shadow-[0_0_40px_rgba(247,147,30,0.4)]">Discover Our Goodness</Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
