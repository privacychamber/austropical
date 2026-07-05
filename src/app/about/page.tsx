"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { TrustBadge } from "@/components/ui/TrustBadge";

export default function AboutPage() {
  return (
    <div className="bg-[#FDFBF7] text-[#1A5D2C] min-h-screen font-sans selection:bg-[#B2D235] selection:text-[#1A5D2C]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden flex items-center justify-center min-h-[60vh] bg-white">
        <div className="absolute inset-0 bg-[#B2D235]/10" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-sm font-bold tracking-[0.2em] text-[#F7931E] uppercase block">Our Story</span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-[5rem] font-black font-display text-[#1A5D2C] leading-[0.9] uppercase"
            >
              Real Food. <br/> Pure Joy.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-[#1A5D2C]/80 max-w-lg leading-relaxed"
            >
              We believe that healthy eating shouldn't be a chore. It should be vibrant, effortless, and full of bright tropical energy to fuel your everyday life.
            </motion.p>
          </div>
          
          <div className="relative h-[400px] w-full flex items-center justify-center">
            <TrustBadge type="circle" text="100% Vegan" color="#8B217D" className="-top-5 -left-5" rotate={-10} />
            <TrustBadge type="starburst" text="The Amazon Feels Good" color="#F7931E" className="-bottom-5 -right-5" rotate={15} />
            
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              src="/woman_blending_smoothie.png" 
              alt="Woman blending smoothie" 
              className="w-full h-full object-cover rounded-[40px] shadow-xl border-4 border-white"
            />
          </div>
        </div>
      </section>

      {/* The Journey Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-[#F7931E]/20 blur-[40px] rounded-full" />
            <img 
              src="/fresh_tropical_fruits.png" 
              alt="Fresh tropical fruits" 
              className="w-full h-auto rounded-[40px] shadow-xl border-4 border-white relative z-10"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-black font-display text-[#1A5D2C] uppercase leading-[0.9]">
              Wild-Harvested Goodness
            </h2>
            <p className="text-[#1A5D2C]/80 leading-relaxed text-lg">
              Our journey starts deep in the Amazon Rainforest. We partner directly with local families to sustainably wild-harvest the most nutrient-dense superfoods on earth. 
            </p>
            <p className="text-[#1A5D2C]/80 leading-relaxed text-lg">
              By flash-freezing the fruits within hours of picking, we lock in the maximum amount of antioxidants, vitamins, and that undeniably fresh, joyful taste. Zero added sugar, just 100% natural energy.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
