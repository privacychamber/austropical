"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WavyDivider from "@/components/layout/WavyDivider";
import { motion } from "framer-motion";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { Leaf, Sun, Heart, Recycle } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-[#FDFBF7] text-[#1A5D2C] min-h-screen font-sans selection:bg-[#B2D235] selection:text-[#1A5D2C] overflow-hidden relative">
      <Navbar />

      {/* 
        ========================================
        SCENE 01: THE BRAND MANIFESTO HERO
        ========================================
      */}
      <section className="pt-40 pb-32 relative overflow-hidden flex items-center justify-center min-h-[70vh] bg-black">
        {/* Rainforest Background */}
        <div className="absolute inset-0 bg-[url('/rainforest_bg.png')] bg-cover bg-center opacity-80 pointer-events-none" />
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left relative z-20">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-xs font-black tracking-[0.2em] text-[#B2D235] uppercase bg-black/30 px-4 py-2 rounded-full border border-[#B2D235]/30 backdrop-blur-sm"
            >
              Our Story
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-[6rem] font-black font-display text-white leading-[0.9] uppercase drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
            >
              Real Food. <br/> <span className="text-[#F7931E]">Pure Joy.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-white/90 max-w-lg leading-relaxed font-medium drop-shadow-md mx-auto lg:mx-0"
            >
              We believe that healthy eating shouldn't be a chore. It should be vibrant, effortless, and full of bright tropical energy to fuel your everyday life.
            </motion.p>
          </div>
          
          <div className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center">
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-[#E71D85]/40 rounded-full blur-[80px] pointer-events-none" />
            
            <TrustBadge type="circle" text="100% Vegan" color="#B2D235" textColor="#1A5D2C" className="absolute top-10 left-0 z-30" rotate={-15} />
            <TrustBadge type="starburst" text="Zero Sugar" color="#E71D85" textColor="white" className="absolute bottom-10 right-0 z-30" rotate={15} />
            
            <motion.img 
              initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              src="/woman_blending_smoothie.png" 
              alt="Woman blending smoothie" 
              className="w-full h-full object-cover rounded-[40px] shadow-[0_20px_50px_rgba(231,29,133,0.3)] border-4 border-white relative z-20"
            />
          </div>
        </div>
      </section>
      
      <WavyDivider src="/dividers/wave1.png" alt="Hero divider" className="absolute left-0 right-0 w-full h-[40px] -mt-[39px] z-20" />

      {/* 
        ========================================
        SCENE 02: THE JOURNEY (STAGGERED GRID)
        ========================================
      */}
      <section className="py-32 relative bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-5xl md:text-7xl font-black font-display text-[#1A5D2C] uppercase leading-[0.9]">
              Wild-Harvested <br/> Goodness
            </h2>
            <p className="text-[#1A5D2C]/70 text-lg font-medium max-w-2xl mx-auto">
              Our journey starts deep in the Amazon Rainforest. We partner directly with local families to sustainably wild-harvest the most nutrient-dense superfoods on earth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-10 right-10 h-2 bg-gradient-to-r from-[#F7931E] via-[#E71D85] to-[#B2D235] -translate-y-1/2 rounded-full opacity-30 z-0" />
            
            {[
              {
                step: "01",
                title: "Hand-Picked",
                desc: "Sustainably harvested by our partner communities in Brazil, ensuring fair trade and ecosystem protection.",
                color: "bg-[#F7931E]",
                delay: 0
              },
              {
                step: "02",
                title: "Flash Frozen",
                desc: "Frozen within hours of picking to lock in the maximum amount of antioxidants, vitamins, and fresh taste.",
                color: "bg-[#E71D85]",
                delay: 0.2
              },
              {
                step: "03",
                title: "Pure Energy",
                desc: "Delivered straight to your freezer with zero added sugar or fillers. Just 100% natural, tropical joy.",
                color: "bg-[#B2D235]",
                delay: 0.4
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: item.delay }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[40px] p-10 shadow-[0_10px_40px_rgba(0,0,0,0.05)] border-2 border-black/5 relative z-10 text-center flex flex-col items-center group"
              >
                <div className={`w-20 h-20 ${item.color} rounded-full flex items-center justify-center text-white text-3xl font-black mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {item.step}
                </div>
                <h3 className="text-2xl font-black font-display text-[#1A5D2C] uppercase mb-4">{item.title}</h3>
                <p className="text-[#1A5D2C]/80 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        ========================================
        SCENE 03: CORE VALUES POP SECTION
        ========================================
      */}
      <section className="py-32 relative bg-[#F7931E] overflow-hidden">
        {/* Dynamic Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#000 2px, transparent 2px)", backgroundSize: "30px 30px" }} />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8 text-center md:text-left">
              <h2 className="text-5xl md:text-7xl font-black font-display text-white uppercase leading-[0.9] drop-shadow-md">
                Why We Do <br/> What We Do
              </h2>
              <p className="text-white/90 text-xl font-bold max-w-md mx-auto md:mx-0">
                We're on a mission to completely revolutionize the frozen aisle with bold, unapologetic freshness.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-[32px] text-left">
                  <Leaf className="w-8 h-8 text-white mb-4" />
                  <h4 className="text-xl font-black text-white uppercase mb-2">Clean Label</h4>
                  <p className="text-white/80 text-sm font-semibold">No weird gums. No artificial sweeteners. Just the stuff that grew in the dirt.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-[32px] text-left">
                  <Sun className="w-8 h-8 text-[#B2D235] mb-4" />
                  <h4 className="text-xl font-black text-white uppercase mb-2">Morning Fuel</h4>
                  <p className="text-white/80 text-sm font-semibold">Sustained energy that helps you attack the day, not crash by 11 AM.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-[32px] text-left">
                  <Heart className="w-8 h-8 text-[#E71D85] mb-4" />
                  <h4 className="text-xl font-black text-white uppercase mb-2">Family First</h4>
                  <p className="text-white/80 text-sm font-semibold">Crafted for busy households that refuse to compromise on nutrition.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-[32px] text-left">
                  <Recycle className="w-8 h-8 text-white mb-4" />
                  <h4 className="text-xl font-black text-white uppercase mb-2">Earth Kind</h4>
                  <p className="text-white/80 text-sm font-semibold">Packaging and practices designed to respect the planet we pull from.</p>
                </div>
              </div>
            </div>

            <div className="relative h-[600px] hidden md:flex items-center justify-center">
              <motion.img 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                src="/range-ledge.png" 
                alt="Austropical Product Range" 
                className="w-[120%] max-w-none object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.3)] relative z-20"
              />
            </div>
            
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
