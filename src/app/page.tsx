"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { TrustBadge } from "@/components/ui/TrustBadge";

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
    <main ref={containerRef} className="relative bg-[#FDFBF7] text-[#1A5D2C] min-h-[350vh] font-sans overflow-clip selection:bg-[#B2D235] selection:text-[#1A5D2C]">
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
            className="mt-12 z-20"
          >
            <Button className="bg-white text-[#1A5D2C] hover:bg-[#1A5D2C] hover:text-white border-none shadow-[0_8px_30px_rgba(26,93,44,0.15)] rounded-full px-12 py-8 text-sm font-bold transition-all duration-300">
              SHOP NOW
            </Button>
          </motion.div>

          {/* Trust Badges scattered around the Hero */}
          <TrustBadge type="circle" text="100% Vegan" color="#8B217D" className="top-10 left-[15%] md:left-[25%]" rotate={-10} />
          <TrustBadge type="arch" text="Grab 'N' Go" color="#F49A8F" className="top-[30%] left-[5%] md:left-[10%]" rotate={15} />
          <TrustBadge type="starburst" text="Wildly Natural" color="#29ABE2" className="bottom-[40%] left-[8%] md:left-[15%]" rotate={-5} />
          <TrustBadge type="pill" text="Fat-Free" color="#E71D85" className="top-20 right-[15%] md:right-[25%]" rotate={5} />
          <TrustBadge type="circle" text="Highest Grade Acai" color="#2A1147" className="top-[35%] right-[5%] md:right-[10%]" rotate={-12} />
          <TrustBadge type="starburst" text="The Amazon Feels Good" color="#F7931E" className="bottom-[30%] right-[8%] md:right-[15%]" rotate={8} />

          {/* Floating Product Arch (With Mix-Blend to remove white BG) */}
          <div className="absolute -bottom-20 left-0 w-full flex justify-center items-end gap-2 md:gap-8 z-10 pointer-events-none">
            
            <motion.img 
              animate={{ y: [0, -15, 0], rotate: [-15, -12, -15] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              src="/acai-zero-sugar-original.png" 
              className="w-40 md:w-72 h-auto -mb-10 mix-blend-multiply" 
              alt="Tub 1" 
            />
            
            <motion.img 
              animate={{ y: [0, -10, 0], rotate: [5, 2, 5] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }}
              src="/dragonfruit_pack.png" 
              className="w-48 md:w-80 h-auto mb-10 z-20 mix-blend-multiply" 
              alt="Tub 2" 
            />
            
            <motion.img 
              animate={{ y: [0, -12, 0], rotate: [-8, -5, -8] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
              src="/mango_pack.png" 
              className="w-48 md:w-80 h-auto mb-5 mix-blend-multiply" 
              alt="Tub 3" 
            />

            <motion.img 
              animate={{ y: [0, -20, 0], rotate: [12, 15, 12] }}
              transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 0.2 }}
              src="/acai-passionfruit-legs.png" 
              className="w-40 md:w-72 h-auto -mb-12 mix-blend-multiply" 
              alt="Tub 4" 
            />
          </div>

        </div>
      </section>

      {/* 
        ========================================
        SCENE 02: THE LIFESTYLE GALLERY
        ========================================
      */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 space-y-[15vh] py-[15vh]">
        
        {/* Highlight 1 */}
        <motion.div style={{ y: world1Y }} className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center relative">
            <div className="absolute inset-0 bg-[#B2D235]/20 blur-[40px] rounded-full" />
            <motion.img 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0 }}
              src="/bright_acai_bowl.png" 
              alt="Bright Acai Bowl" 
              className="relative z-10 w-full max-w-md h-auto rounded-[40px] drop-shadow-xl border-4 border-white" 
            />
          </div>
          <div className="text-left">
            <span className="font-sans text-sm tracking-[0.2em] text-[#B2D235] uppercase mb-4 block font-bold drop-shadow-sm">Fresh & Achievable</span>
            <h2 className="font-display text-5xl md:text-7xl mb-6 text-[#1A5D2C] uppercase leading-[0.9]">Start Your <br/> Morning Right</h2>
            <p className="font-sans text-lg font-light text-[#1A5D2C]/80 max-w-md mb-8">
              Real food for real people. Our Açaí is sustainably wild-harvested and flash-frozen so you can create café-quality bowls in your own kitchen.
            </p>
            <Button className="bg-[#1A5D2C] text-white hover:bg-[#B2D235] hover:text-[#1A5D2C] shadow-[0_8px_30px_rgba(26,93,44,0.15)] rounded-full px-8 py-6 font-bold transition-colors">
              Explore Açaí
            </Button>
          </div>
        </motion.div>

        {/* Highlight 2 */}
        <motion.div style={{ y: world2Y }} className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-left order-2 md:order-1 md:pl-20">
            <span className="font-sans text-sm tracking-[0.2em] text-[#F7931E] uppercase mb-4 block font-bold drop-shadow-sm">Sunshine in a cup</span>
            <h2 className="font-display text-5xl md:text-7xl mb-6 text-[#1A5D2C] uppercase leading-[0.9]">Joyful <br/> Living</h2>
            <p className="font-sans text-lg font-light text-[#1A5D2C]/80 max-w-md mb-8">
              Healthy eating shouldn't be a chore. It should be vibrant, effortless, and full of bright tropical energy to fuel your outdoor adventures.
            </p>
            <Button className="bg-[#1A5D2C] text-white hover:bg-[#F7931E] hover:text-[#1A5D2C] shadow-[0_8px_30px_rgba(26,93,44,0.15)] rounded-full px-8 py-6 font-bold transition-colors">
              Discover Cubes
            </Button>
          </div>
          <div className="flex justify-center relative order-1 md:order-2">
            <div className="absolute inset-0 bg-[#F7931E]/20 blur-[40px] rounded-full" />
            <motion.img 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              src="/smiling_woman_smoothie.png" 
              alt="Woman with smoothie" 
              className="relative z-10 w-full max-w-md h-auto rounded-[40px] drop-shadow-xl border-4 border-white" 
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
        SCENE 03: THE BRIGHT TIMELINE
        ========================================
      */}
      <section className="relative w-full z-20 bg-white py-32 rounded-t-[80px] overflow-hidden border-t border-[#1A5D2C]/5 shadow-[0_-20px_50px_rgba(0,0,0,0.02)]">
        
        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center space-y-16">
          <div className="space-y-6">
            <span className="text-[#F7931E] font-bold uppercase tracking-[0.2em] text-sm">The Journey</span>
            <h2 className="font-display text-5xl md:text-[5rem] text-[#1A5D2C] leading-[0.9] uppercase">
              From the Amazon <br/>to Australia
            </h2>
            <p className="font-sans text-lg text-[#1A5D2C]/80 font-light max-w-2xl mx-auto leading-relaxed mt-6">
              We travel to the heart of the Amazon to sustainably wild-harvest the most nutrient-dense superfoods on earth, freezing them instantly to lock in their magic before they reach your breakfast table.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            <div className="bg-[#FDFBF7] border border-[#1A5D2C]/10 p-8 rounded-[40px] text-left hover:bg-white hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-[#B2D235] rounded-full flex items-center justify-center text-[#1A5D2C] text-2xl font-black mb-6 group-hover:scale-110 transition-transform">01</div>
              <h3 className="text-2xl font-display uppercase text-[#1A5D2C] mb-3">Wild Harvest</h3>
              <p className="text-sm text-[#1A5D2C]/70">Hand-picked by local families in the Amazon rainforest, ensuring sustainability and fair trade.</p>
            </div>
            <div className="bg-[#FDFBF7] border border-[#1A5D2C]/10 p-8 rounded-[40px] text-left hover:bg-white hover:shadow-xl transition-all duration-300 mt-0 md:mt-12 group">
              <div className="w-16 h-16 bg-[#F7931E] rounded-full flex items-center justify-center text-white text-2xl font-black mb-6 group-hover:scale-110 transition-transform">02</div>
              <h3 className="text-2xl font-display uppercase text-[#1A5D2C] mb-3">Flash Frozen</h3>
              <p className="text-sm text-[#1A5D2C]/70">Instantly frozen at the source to preserve the vibrant nutrients, taste, and natural energy.</p>
            </div>
            <div className="bg-[#FDFBF7] border border-[#1A5D2C]/10 p-8 rounded-[40px] text-left hover:bg-white hover:shadow-xl transition-all duration-300 mt-0 md:mt-24 group">
              <div className="w-16 h-16 bg-[#29ABE2] rounded-full flex items-center justify-center text-white text-2xl font-black mb-6 group-hover:scale-110 transition-transform">03</div>
              <h3 className="text-2xl font-display uppercase text-[#1A5D2C] mb-3">Pure Joy</h3>
              <p className="text-sm text-[#1A5D2C]/70">Blended into perfect portions for your morning rituals, post-surf fuel, and family breakfasts.</p>
            </div>
          </div>
          
          <div className="pt-20">
            <Button className="bg-[#1A5D2C] text-white hover:bg-[#F7931E] hover:text-[#1A5D2C] shadow-[0_8px_30px_rgba(247,147,30,0.3)] rounded-full px-12 py-6 font-bold transition-colors">
              Discover Our Goodness
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
