"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { QuizModal } from "@/components/ui/QuizModal";
import { CategorySection } from "@/components/sections/CategorySection";
import { FloatingElement } from "@/components/ui/FloatingElement";
import Link from "next/link";
import { ArrowRight, Star, Heart, CheckCircle2 } from "lucide-react";

export default function PremiumFMCGHomepage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Hero Parallax Transforms
  const heroY = useTransform(scrollYProgress, [0, 0.2], ["0%", "40%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  
  const originY = useTransform(scrollYProgress, [0.6, 0.9], ["20%", "0%"]);

  return (
    <main ref={containerRef} className="relative bg-[#FDFBF7] text-[#1A5D2C] min-h-[350vh] font-sans overflow-clip selection:bg-[#B2D235] selection:text-[#1A5D2C]">
      <Navbar />
      
      {/* 
        ========================================
        SCENE 01: THE UNFORGETTABLE HERO
        ========================================
      */}
      <section className="relative w-full min-h-[110vh] flex flex-col pt-0 z-10 overflow-hidden bg-black">
        
        {/* Top Notification Bar */}
        <div 
          className="w-full bg-[#B2D235] py-2 overflow-hidden flex whitespace-nowrap cursor-pointer hover:bg-white transition-colors group z-50 absolute top-0 left-0"
          onClick={() => setIsQuizOpen(true)}
        >
          <motion.div 
            animate={{ x: [0, -1000] }} 
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex gap-8 text-[10px] md:text-xs font-bold text-[#1A5D2C] uppercase tracking-widest group-hover:text-[#F7931E] transition-colors"
          >
            {[...Array(10)].map((_, i) => (
              <span key={i}>TRY BEFORE YOU BUY - TAKE OUR QUIZ FOR A FREE SAMPLE</span>
            ))}
          </motion.div>
        </div>

        {/* Hero Content */}
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="flex-1 flex flex-col items-center justify-center pt-24 pb-40 px-4 relative z-20 text-center w-full max-w-[1400px] mx-auto mt-20">
          
          {/* Opaque Background Image with Darker Overlay for Contrast */}
          <div className="absolute inset-0 bg-[url('/hero_explosion.png')] bg-cover bg-center bg-no-repeat pointer-events-none -z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 pointer-events-none -z-10" />

          {/* Tilted Chunky Header - Solid White for better readability */}
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="font-display text-5xl md:text-[7rem] lg:text-[8.5rem] leading-[0.9] text-white uppercase drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20 relative max-w-6xl mx-auto"
          >
            AUSTRALIA'S <br/> BRIGHTER <br/> SNACK CHOICE
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 font-sans text-white text-lg md:text-2xl max-w-2xl mx-auto z-20 font-bold drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
          >
            Sustainably wild-harvested. Instantly frozen. Packed with joyful tropical energy.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 z-20"
          >
            <Button className="bg-[#B2D235] text-[#1A5D2C] hover:bg-white border-none shadow-[0_20px_50px_rgba(0,0,0,0.4)] rounded-full px-16 py-8 text-lg font-black transition-all duration-300 transform hover:scale-105 uppercase tracking-wider">
              Shop The Amazon
            </Button>
          </motion.div>

          {/* Grouped Trust Stickers below the CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 flex flex-wrap justify-center items-center gap-6 md:gap-12 z-20"
          >
            <TrustBadge type="circle" text="100% Vegan" color="#8B217D" rotate={-5} />
            <TrustBadge type="arch" text="Grab 'N' Go" color="#F49A8F" rotate={10} />
            <TrustBadge type="pill" text="Fat-Free" color="#B2D235" textColor="#1A5D2C" rotate={-5} />
            <TrustBadge type="starburst" text="Real Fruit" color="#1A5D2C" rotate={8} />
          </motion.div>

          {/* Floating Ledge Image */}
          <div className="absolute bottom-10 -right-20 md:-right-10 w-72 md:w-[450px] z-20 pointer-events-none opacity-80 md:opacity-100 hidden md:block">
            <FloatingElement yOffset={30} duration={8}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/range-ledge.png" alt="Austropical Range" className="w-full h-auto object-contain drop-shadow-2xl" />
            </FloatingElement>
          </div>

        </motion.div>
        
        {/* Smooth Sweeping Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-30 translate-y-[1px]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[120px]">
            <path fill="#FBB03B" fillOpacity="1" d="M0,128L80,122.7C160,117,320,107,480,128C640,149,800,203,960,213.3C1120,224,1280,192,1360,176L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* 
        ========================================
        SCENE 02: CATEGORY ECOSYSTEM
        ========================================
      */}
      <div className="bg-[#FBB03B] relative z-20 pb-12">
        <div className="text-center pb-8 pt-4">
          <p className="text-[#1A5D2C] font-black uppercase tracking-widest text-sm flex justify-center items-center gap-2">
            <Star className="w-4 h-4 fill-[#1A5D2C]" /> Trusted by families Australia-wide <Star className="w-4 h-4 fill-[#1A5D2C]" />
          </p>
        </div>
        <CategorySection />
      </div>

      {/* 
        ========================================
        SCENE 03: PRODUCT WORLDS
        ========================================
      */}
      <section className="relative z-20 w-full max-w-7xl mx-auto px-6 space-y-32 py-24">
        
        {/* World 1: Smoothie Cubes */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center relative group">
            <div className="absolute inset-0 bg-[#29ABE2]/20 blur-[60px] rounded-full group-hover:bg-[#29ABE2]/40 transition-colors duration-700" />
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <img 
                src="/smoothie_cubes_splash.png" 
                alt="Smoothie Cubes Splash" 
                className="relative z-10 w-full max-w-lg h-auto rounded-[40px] shadow-2xl border-4 border-white transform transition-transform group-hover:scale-105" 
              />
            </motion.div>
          </div>
          <div className="text-left space-y-6">
            <span className="inline-block px-4 py-2 bg-[#F7931E]/10 text-[#F7931E] rounded-full font-bold text-xs uppercase tracking-widest">
              Blender Ready
            </span>
            <h2 className="font-display text-5xl md:text-7xl text-[#1A5D2C] uppercase leading-[0.9]">
              Sunshine <br/> in a Cube
            </h2>
            <p className="font-sans text-lg font-light text-[#1A5D2C]/80 max-w-md">
              Real mango and pineapple, perfectly portioned. Skip the prep and blend a world-class tropical smoothie in 30 seconds. Perfect for busy mornings.
            </p>
            <ul className="space-y-3 text-[#1A5D2C] font-bold text-sm">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#B2D235]" /> 100% Real Fruit</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#B2D235]" /> Zero Added Sugar</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#B2D235]" /> Perfect Portions</li>
            </ul>
            <Button className="mt-4 bg-[#F7931E] text-white hover:bg-[#1A5D2C] hover:text-white shadow-[0_8px_30px_rgba(247,147,30,0.3)] rounded-full px-10 py-6 font-bold transition-colors">
              Shop Smoothie Cubes
            </Button>
          </div>
        </div>

        {/* World 2: Ice Pops */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-6 order-2 md:order-1 md:pl-20">
            <span className="inline-block px-4 py-2 bg-[#E71D85]/10 text-[#E71D85] rounded-full font-bold text-xs uppercase tracking-widest">
              Summer Classic
            </span>
            <h2 className="font-display text-5xl md:text-7xl text-[#1A5D2C] uppercase leading-[0.9]">
              The Ultimate <br/> Beach Treat
            </h2>
            <p className="font-sans text-lg font-light text-[#1A5D2C]/80 max-w-md">
              Dragon fruit and mixed berry ice pops that actually taste like real fruit. The guilt-free summer cooler your family will beg for.
            </p>
            <ul className="space-y-3 text-[#1A5D2C] font-bold text-sm">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#E71D85]" /> Kid Approved</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#E71D85]" /> High in Antioxidants</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#E71D85]" /> Dairy Free</li>
            </ul>
            <Button className="mt-4 bg-[#E71D85] text-white hover:bg-[#1A5D2C] shadow-[0_8px_30px_rgba(231,29,133,0.3)] rounded-full px-10 py-6 font-bold transition-colors">
              Shop Ice Pops
            </Button>
          </div>
          <div className="flex justify-center relative order-1 md:order-2 group">
            <div className="absolute inset-0 bg-[#E71D85]/20 blur-[60px] rounded-full group-hover:bg-[#E71D85]/40 transition-colors duration-700" />
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <img 
                src="/ice_pops_beach.png" 
                alt="Ice Pops Beach" 
                className="relative z-10 w-full max-w-lg h-auto rounded-[40px] shadow-2xl border-4 border-white transform transition-transform group-hover:scale-105" 
              />
            </motion.div>
          </div>
        </div>

      </section>

      {/* 
        ========================================
        SCENE 04: LIFESTYLE STORYTELLING
        ========================================
      */}
      <section className="bg-white py-32 border-y border-[#1A5D2C]/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-display text-4xl md:text-6xl text-[#1A5D2C] uppercase leading-[0.9]">
              Fuelling The <br/> Australian Lifestyle
            </h2>
            <p className="text-[#1A5D2C]/70 max-w-lg mx-auto text-lg font-light">From the surf to the school run, we provide the clean, vibrant energy to make every day brighter.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 rounded-[40px] overflow-hidden relative group h-[400px]">
              <img src="/family_breakfast.png" alt="Family Breakfast" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A5D2C]/80 to-transparent flex items-end p-8">
                <p className="text-white font-display text-3xl">Happy Mornings</p>
              </div>
            </div>
            <div className="md:col-span-4 rounded-[40px] overflow-hidden relative group h-[400px] bg-[#B2D235] p-8 flex flex-col justify-center items-center text-center">
              <Heart className="w-16 h-16 text-white mb-6" />
              <h3 className="font-display text-3xl text-white mb-4">Join The Club</h3>
              <p className="text-white/90 text-sm mb-8">Get 10% off your first order when you join the Austropical family.</p>
              <Button className="bg-white text-[#1A5D2C] rounded-full font-bold px-8 py-4">Sign Up Now</Button>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================
        SCENE 05: THE ORIGIN STORY
        ========================================
      */}
      <section className="relative w-full z-20 bg-[#FDFBF7] py-32 overflow-hidden">
        
        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center space-y-16">
          <div className="space-y-6">
            <span className="text-[#F7931E] font-bold uppercase tracking-[0.2em] text-sm bg-[#F7931E]/10 px-6 py-2 rounded-full">Sustainably Sourced</span>
            <h2 className="font-display text-5xl md:text-[5rem] text-[#1A5D2C] leading-[0.9] uppercase">
              From the Amazon <br/>to Australia
            </h2>
            <p className="font-sans text-lg text-[#1A5D2C]/80 font-light max-w-2xl mx-auto leading-relaxed mt-6">
              We travel to the heart of the Amazon to sustainably wild-harvest the most nutrient-dense superfoods on earth, freezing them instantly to lock in their magic before they reach your breakfast table.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            <div className="bg-white border-2 border-[#1A5D2C]/5 p-10 rounded-[40px] text-left hover:shadow-[0_20px_50px_rgba(26,93,44,0.1)] transition-all duration-300 group hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#B2D235] rounded-full flex items-center justify-center text-[#1A5D2C] text-2xl font-black mb-6 group-hover:rotate-12 transition-transform">01</div>
              <h3 className="text-2xl font-display uppercase text-[#1A5D2C] mb-3">Wild Harvest</h3>
              <p className="text-sm text-[#1A5D2C]/70">Hand-picked by local families in the Amazon rainforest, ensuring sustainability and fair trade.</p>
            </div>
            <div className="bg-white border-2 border-[#1A5D2C]/5 p-10 rounded-[40px] text-left hover:shadow-[0_20px_50px_rgba(247,147,30,0.1)] transition-all duration-300 mt-0 md:mt-12 group hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#F7931E] rounded-full flex items-center justify-center text-white text-2xl font-black mb-6 group-hover:rotate-12 transition-transform">02</div>
              <h3 className="text-2xl font-display uppercase text-[#1A5D2C] mb-3">Flash Frozen</h3>
              <p className="text-sm text-[#1A5D2C]/70">Instantly frozen at the source to preserve the vibrant nutrients, taste, and natural energy.</p>
            </div>
            <div className="bg-white border-2 border-[#1A5D2C]/5 p-10 rounded-[40px] text-left hover:shadow-[0_20px_50px_rgba(41,171,226,0.1)] transition-all duration-300 mt-0 md:mt-24 group hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#29ABE2] rounded-full flex items-center justify-center text-white text-2xl font-black mb-6 group-hover:rotate-12 transition-transform">03</div>
              <h3 className="text-2xl font-display uppercase text-[#1A5D2C] mb-3">Pure Joy</h3>
              <p className="text-sm text-[#1A5D2C]/70">Blended into perfect portions for your morning rituals, post-surf fuel, and family breakfasts.</p>
            </div>
          </div>
          
          <div className="pt-20">
            <Button className="bg-[#1A5D2C] text-white hover:bg-[#F7931E] hover:text-[#1A5D2C] shadow-[0_8px_30px_rgba(247,147,30,0.3)] rounded-full px-12 py-6 font-bold transition-colors text-lg">
              Learn About Sustainability
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Interactive Flow */}
      <QuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </main>
  );
}
