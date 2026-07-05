"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart, Zap } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";

const STORIES = [
  {
    tabTitle: "Açaí Has Changed",
    heading: "Açai has changed. And perhaps you haven't noticed.",
    description: "Discover our certified organic Zero Sugar Açaí blend—pure Amazonian superfood straight from the wild palms to your daily routine. Clean energy, zero compromises.",
    image: "/images/story-change.jpg",
    icon: Sparkles,
    tag: "ZERO SUGAR & ORGANIC",
    color: "text-[#E9418A]",
  },
  {
    tabTitle: "Daily Ritual",
    heading: "Your daily ritual, straight from nature.",
    description: "Scoop, blend, and glow. Indulge in frozen pure açaí pulp loaded with antioxidants, active fibers, and delicious tropical fruit combinations crafted to fuel your day.",
    image: "/images/story-ritual.jpg",
    icon: Heart,
    tag: "AMAZON SUPERFRUIT",
    color: "text-[#7A2155]",
  },
  {
    tabTitle: "Natural Energy",
    heading: "The true size of natural energy.",
    description: "Go big on wellness. Experience our traditional food-service scoopable bulk size tubs, perfect for families, juice bars, and true açaí legends. Taste the legend today.",
    image: "/images/story-legend.jpg",
    icon: Zap,
    tag: "BULK SCOOP TUBS",
    color: "text-[#F3A010]",
  },
];

export function StoryShowcase() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-brand-cream py-36 lg:py-52 relative overflow-hidden bg-noise border-y border-brand-purple/10">
      <div className="mx-auto max-w-container px-6 md:px-16 lg:px-[120px]">
        <SectionHeading
          subtitle="IMMERSE IN NUTRITION"
          title="Austropical Legends"
          description="Click through our brand chapters and discover why Austropical is Australia's brightest choice for wild, natural superfood nutrition."
          className="mb-24"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24 items-center">
          
          {/* Left Column (40%): Selectors & Text */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            
            {/* Tab Selectors */}
            <div className="flex flex-col gap-4 border-l-2 border-brand-purple/10 pl-6">
              {STORIES.map((story, idx) => {
                const Icon = story.icon;
                const isActive = idx === activeTab;
                return (
                  <button
                    key={story.tabTitle}
                    onClick={() => setActiveTab(idx)}
                    className="flex items-center gap-4 text-left py-2 group focus:outline-none"
                  >
                    <span className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      isActive 
                        ? "bg-brand-purple border-brand-purple text-brand-yellow scale-110 shadow-md" 
                        : "border-brand-purple/20 text-brand-purple/40 group-hover:border-brand-purple/40 group-hover:text-brand-purple"
                    }`}>
                      <Icon size={14} />
                    </span>
                    <span className={`font-display font-black text-lg uppercase tracking-tight transition-colors ${
                      isActive ? "text-brand-purple" : "text-brand-purple/40 group-hover:text-brand-purple"
                    }`}>
                      {story.tabTitle}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Content details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <span className={`text-xs font-black tracking-widest uppercase ${STORIES[activeTab].color}`}>
                  {STORIES[activeTab].tag}
                </span>
                <h3 className="font-display font-black text-3xl md:text-4xl text-brand-purple uppercase leading-tight tracking-tight">
                  {STORIES[activeTab].heading}
                </h3>
                <p className="text-brand-purple/80 font-medium leading-relaxed">
                  {STORIES[activeTab].description}
                </p>
                
                <div className="pt-4">
                  <Magnetic>
                    <Button variant="primary" size="lg" withArrow className="px-8 py-4 text-sm font-bold shadow-md">
                      SHOP COLLECTION
                    </Button>
                  </Magnetic>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

          {/* Right Column (60%): Immersive Graphic Frame */}
          <div className="lg:col-span-7 relative h-[500px] w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.55, ease: [0.25, 1, 0.5, 1] }}
                className="relative w-full h-full rounded-[40px] overflow-hidden shadow-2xl border border-brand-purple/5"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={STORIES[activeTab].image} 
                  alt={STORIES[activeTab].tabTitle} 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Floating leaf helper elements */}
            <div className="absolute -top-10 -right-10 w-24 h-24 rotate-[15deg] pointer-events-none hidden md:block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/recipe_smoothie.png" alt="Açaí Cup" className="w-full h-full object-contain filter drop-shadow-lg" />
            </div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 -rotate-[22deg] pointer-events-none hidden md:block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/recipe_bowl.png" alt="Açaí Bowl" className="w-full h-full object-contain filter drop-shadow-lg" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
