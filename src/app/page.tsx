"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useStore } from "@/context/StoreContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Leaf,
  Heart,
  Star,
  CheckCircle2,
  Clock,
  Flame,
  ChevronLeft,
  ChevronRight,
  X,
  Play
} from "lucide-react";

// Premium Motion presets
const revealVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function Homepage() {
  const { products, recipes, cms, addToCart, toggleWishlist, isInWishlist } = useStore();
  const [activeRecipe, setActiveRecipe] = useState<any>(null);
  
  // Custom Slider State for "OUR FAVOURITES"
  const [favIndex, setFavIndex] = useState(0);

  // Mouse parallax positioning
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Magnetic CTA offsets
  const [ctaOffset, setCtaOffset] = useState({ x: 0, y: 0 });
  const handleCtaMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setCtaOffset({ x: x * 0.4, y: y * 0.4 });
  };
  const handleCtaLeave = () => {
    setCtaOffset({ x: 0, y: 0 });
  };

  const favouritesList = [
    {
      name: "ACAI",
      sub: "Original Sensation",
      image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=400&q=80",
      tag: "NEW",
    },
    {
      name: "DRAGON FRUIT",
      sub: "Superfood Blend",
      image: "https://images.unsplash.com/photo-1527324688151-0e627063f2b1?auto=format&fit=crop&w=400&q=80",
      tag: "POPULAR",
    },
    {
      name: "MANGO",
      sub: "Tropical Delight",
      image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=400&q=80",
      tag: "BEST SELLER",
    },
    {
      name: "PINEAPPLE",
      sub: "Island Crush",
      image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=400&q=80",
      tag: "FRESH",
    }
  ];

  return (
    <div className="bg-[#FFF9F2] text-[#1A1A1A] min-h-screen relative overflow-x-hidden font-sans">
      <Navbar />

      {/* Hero Section with Purple Wavy Gradient & Slow moving gradient animation */}
      <section className="relative pt-36 pb-24 md:pt-48 md:pb-36 bg-gradient-to-br from-[#8A2BE2] via-[#4D2677] to-[#2A1147] text-white overflow-hidden">
        {/* Soft floating background glow elements */}
        <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] bg-brand-pink/20 rounded-full blur-[100px] pointer-events-none animate-float-slow" />
        <div className="absolute bottom-10 left-10 w-[280px] h-[280px] bg-brand-orange/15 rounded-full blur-[80px] pointer-events-none animate-float-reverse" />
        
        {/* Floating particles */}
        <div className="absolute top-24 left-1/4 w-3 h-3 bg-brand-yellow rounded-full animate-ping pointer-events-none" />
        <div className="absolute bottom-32 left-10 w-2 h-2 bg-brand-orange rounded-full animate-bounce pointer-events-none" />
        
        {/* Parallax fruits & leaves */}
        <motion.div
          className="absolute top-24 left-10 w-20 h-20 pointer-events-none opacity-60 hidden md:block"
          style={{ x: mousePos.x * -0.6, y: mousePos.y * -0.6, rotate: 12 }}
        >
          <Leaf className="w-full h-full text-brand-green fill-brand-green/20" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 left-1/3 w-16 h-16 pointer-events-none opacity-40 hidden md:block"
          style={{ x: mousePos.x * 0.9, y: mousePos.y * 0.9 }}
        >
          <div className="w-6 h-6 rounded-full bg-brand-pink shadow-lg" />
        </motion.div>

        <div className="max-w-container mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50, filter: "blur(8px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            <h1 className="text-5xl md:text-[80px] font-black tracking-tight leading-[0.95] text-white">
              HEALTH FOODS <br />
              <span className="text-[#FFC531]">THAT MOVE</span> <br />
              WITH YOU
            </h1>
            <p className="text-white/90 text-base md:text-lg font-bold max-w-md leading-relaxed">
              Wildly natural superfoods. Real nutrition. <br />
              Feel good, move more, live better.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <motion.div
                style={{ x: ctaOffset.x, y: ctaOffset.y }}
                onMouseMove={handleCtaMove}
                onMouseLeave={handleCtaLeave}
                className="inline-block"
              >
                <Link
                  href="/shop"
                  className="px-8 py-4 bg-[#FFC531] hover:bg-[#FF9F1C] text-[#2A1147] font-black text-sm uppercase tracking-widest rounded-full transition-colors shadow-md hover:shadow-lg flex items-center gap-2"
                >
                  <span>Shop Collection</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  href="/about"
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-black text-sm uppercase tracking-widest rounded-full transition-all duration-300 border border-white/20 flex items-center gap-2"
                >
                  <Play className="w-4 h-4 text-brand-yellow fill-brand-yellow" />
                  <span>Discover Our Story</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Product Composition with Interactive Parallax */}
          <div className="lg:col-span-6 flex justify-center relative pt-10 lg:pt-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="relative w-72 h-72 md:w-[480px] md:h-[400px] flex items-center justify-center"
              style={{ x: mousePos.x * 0.5, y: mousePos.y * 0.5 }}
            >
              {/* Rotating Vegan stamp badge */}
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 15 }}
                className="absolute top-0 right-4 md:right-10 w-24 h-24 bg-[#FFC531] text-[#2A1147] rounded-full p-2 flex flex-col items-center justify-center font-black text-[9px] uppercase tracking-wider animate-spin-slow shadow-lg border-4 border-[#2A1147] z-20 cursor-pointer"
              >
                <span>★ 100% VEGAN ★</span>
                <span className="text-[7px]">Certified Organic</span>
              </motion.div>

              {/* Star-burst minerals badge */}
              <motion.div 
                whileHover={{ scale: 1.1, y: -5 }}
                className="absolute top-24 left-0 bg-[#FF9F1C] text-white px-3.5 py-1.5 rounded-full font-black text-[10px] uppercase tracking-widest shadow-md rotate-[-8deg] z-20 animate-bounce cursor-pointer"
              >
                Essential Minerals
              </motion.div>

              {/* Lower Sugar bubble */}
              <motion.div 
                whileHover={{ scale: 1.1, y: 5 }}
                className="absolute bottom-12 left-10 bg-[#E9418A] text-white px-4 py-2 rounded-full font-black text-[10px] uppercase tracking-widest shadow-md rotate-[12deg] z-20 animate-pulse cursor-pointer"
              >
                Lower Sugar
              </motion.div>

              {/* Gluten Free tag */}
              <div className="absolute bottom-16 right-0 bg-[#4F8F46] text-white px-3.5 py-1.5 rounded-full font-black text-[10px] uppercase tracking-widest shadow-md rotate-[-6deg] z-20">
                Gluten Free
              </div>

              {/* Sourced Product Mockups overlapping with slight individual movement */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* 1. Large Tub in Center */}
                <motion.img
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  src="https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=400&q=80"
                  alt="Açaí smoothie cubes tub"
                  className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-2xl z-10 transform translate-x-[-20px] translate-y-[-10px]"
                />
                
                {/* 2. Packs on right */}
                <motion.img
                  animate={{ y: [0, 8, 0], rotate: [12, 14, 12] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
                  src="https://images.unsplash.com/photo-1628557044797-f21a177c37ec?auto=format&fit=crop&w=300&q=80"
                  alt="Açaí pure packs"
                  className="w-36 h-36 md:w-48 md:h-48 object-contain drop-shadow-2xl absolute right-0 bottom-4 z-10"
                />

                {/* 3. Smoothie Cup */}
                <motion.img
                  animate={{ y: [0, -6, 0], rotate: [-12, -10, -12] }}
                  transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.2 }}
                  src="https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=300&q=80"
                  alt="Smoothie Cup"
                  className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-2xl absolute left-0 bottom-0 z-20"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wavy bottom divider transition */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-[#FFF9F2] rounded-t-3xl" style={{ borderTopRightRadius: '100% 40px', borderTopLeftRadius: '100% 40px' }} />
      </section>

      {/* Badges / Brand Values Row */}
      <section className="py-6 bg-white border-b border-[#2A1147]/5 overflow-x-auto no-scrollbar">
        <div className="max-w-container mx-auto px-6 flex items-center justify-between gap-12 whitespace-nowrap">
          {[
            "100% REAL FRUIT",
            "NO ADDED SUGAR",
            "PLANT BASED",
            "GLUTEN FREE",
            "AUSTRALIAN MADE"
          ].map((val, idx) => (
            <div key={val} className="flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" />
              <span className="text-xs font-black text-brand-purple uppercase tracking-widest">{val}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Section: SQUEEZE IN SOME GOODNESS (Reveals smoothly while in view) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
        className="py-24 max-w-container mx-auto px-6 md:px-12 text-center space-y-16 relative"
      >
        {/* Floating Fruit Assets on sides */}
        <motion.div 
          style={{ y: mousePos.y * -0.4 }}
          className="absolute top-10 left-4 w-12 h-12 opacity-60 hidden md:block animate-float"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&w=80&q=80" alt="berry" className="w-full h-full object-cover rounded-full" />
        </motion.div>
        <motion.div 
          style={{ y: mousePos.y * 0.4 }}
          className="absolute bottom-10 right-4 w-14 h-14 opacity-60 hidden md:block animate-float-reverse"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=80&q=80" alt="blueberry" className="w-full h-full object-cover rounded-full" />
        </motion.div>

        <div className="space-y-4 max-w-2xl mx-auto">
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-black text-[#2A1147] uppercase tracking-tight">
            SQUEEZE IN SOME GOODNESS
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "ACAI SUPERBERRY",
              desc: "Packed with antioxidants, healthy fats and natural energy.",
              color: "text-brand-pink bg-brand-pink/10 border-brand-pink/20"
            },
            {
              title: "PURE & NATURAL",
              desc: "No artificial colors, flavors or preservatives. Just real fruit.",
              color: "text-brand-orange bg-brand-orange/10 border-brand-orange/20"
            },
            {
              title: "FROZEN AT PEAK",
              desc: "Our superfruits are frozen fresh to lock in nutrients and flavour.",
              color: "text-brand-green bg-brand-green/10 border-brand-green/20"
            },
            {
              title: "GOOD FOR YOU",
              desc: "Plant-based, gluten-free, dairy-free and made for every lifestyle.",
              color: "text-[#E9418A] bg-[#E9418A]/10 border-[#E9418A]/20"
            }
          ].map((item, idx) => (
            <motion.div
              variants={itemVariants}
              key={item.title}
              whileHover={{ 
                scale: 1.03, 
                rotate: idx % 2 === 0 ? 1 : -1,
                boxShadow: "0px 15px 35px rgba(42, 17, 71, 0.08)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`bg-white border p-8 rounded-card text-left space-y-4 shadow-sm transition-all duration-300 flex flex-col justify-between group ${item.color.split(" ")[2]}`}
            >
              <div className="space-y-4">
                <div className={`w-12 h-12 rounded-btn flex items-center justify-center ${item.color.split(" ")[1]}`}>
                  <Leaf className={`w-6 h-6 ${item.color.split(" ")[0]}`} />
                </div>
                <h3 className="text-lg font-black tracking-wide text-brand-purple uppercase">{item.title}</h3>
                <p className="text-brand-purple/80 text-xs font-semibold leading-relaxed">{item.desc}</p>
              </div>
              <div className="pt-4">
                <span className="text-[10px] font-black text-brand-orange uppercase tracking-wider cursor-pointer group-hover:underline flex items-center gap-1">
                  Read Benefit <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Section: OUR FAVOURITES Slider (Golden Yellow / Orange background) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
        className="py-24 bg-gradient-to-r from-[#FF9F1C] to-[#FFC531] text-white relative overflow-hidden"
      >
        {/* Soft wavy border masks */}
        <div className="absolute inset-x-0 top-0 h-6 bg-[#FFF9F2] rounded-b-2xl pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-6 bg-[#FFF9F2] rounded-t-2xl pointer-events-none" />

        <div className="max-w-container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 text-left">
          
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-black uppercase tracking-widest text-[#2A1147]">OUR FAVOURITES</span>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-none">
              POPS OF FLAVOUR. <br />
              BOOST OF GOODNESS.
            </h2>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#2A1147] hover:bg-[#4D2677] text-white text-xs font-black uppercase tracking-widest rounded-full transition-colors shadow-md"
              >
                <span>View All Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* Right Carousel Slider with Framer Motion Slide transitions */}
          <div className="lg:col-span-7 relative flex items-center gap-4">
            
            {/* Left arrow controls */}
            <button
              onClick={() => setFavIndex((prev) => (prev - 1 + favouritesList.length) % favouritesList.length)}
              className="w-10 h-10 rounded-full bg-white text-[#2A1147] flex items-center justify-center shadow-md hover:bg-brand-cream transition-colors z-20 flex-shrink-0"
              aria-label="Previous favourite"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Slider cards container */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 overflow-hidden w-full py-4">
              <AnimatePresence mode="popLayout">
                {favouritesList.slice(favIndex, favIndex + 2).concat(favouritesList).slice(0, 3).map((item, idx) => (
                  <motion.div
                    key={`${item.name}-${idx}`}
                    initial={{ opacity: 0, x: 50, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -50, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ 
                      y: -8, 
                      rotate: idx % 2 === 0 ? 1.5 : -1.5,
                      boxShadow: "0px 20px 40px rgba(42,17,71,0.15)" 
                    }}
                    className="bg-white text-brand-purple rounded-card p-5 border border-brand-purple/5 shadow-md flex flex-col justify-between text-center aspect-[3/4] group transition-all duration-300 cursor-pointer"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-black text-brand-orange bg-brand-orange/15 px-2.5 py-1 rounded-btn uppercase">
                          {item.tag || "POPULAR"}
                        </span>
                        <Heart className="w-4 h-4 text-brand-purple/20 hover:text-brand-pink transition-colors cursor-pointer" />
                      </div>

                      <div className="aspect-square w-full rounded-img bg-brand-cream overflow-hidden flex items-center justify-center p-2">
                        <motion.img
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.4 }}
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-contain rounded-img"
                        />
                      </div>
                    </div>

                    <div className="space-y-1 mt-4">
                      <h4 className="text-base font-black tracking-wide uppercase leading-none">{item.name}</h4>
                      <p className="text-[10px] font-bold text-brand-purple/65">{item.sub}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Right arrow controls */}
            <button
              onClick={() => setFavIndex((prev) => (prev + 1) % favouritesList.length)}
              className="w-10 h-10 rounded-full bg-white text-[#2A1147] flex items-center justify-center shadow-md hover:bg-brand-cream transition-colors z-20 flex-shrink-0"
              aria-label="Next favourite"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.section>

      {/* Section: WILDLY FLAVOURFUL, TOTALLY ADDICTIVE */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
        className="py-24 max-w-container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center text-left"
      >
        {/* Left Copy */}
        <div className="lg:col-span-5 space-y-6">
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-black text-[#2A1147] leading-none uppercase">
            WILDLY FLAVOURFUL, <br />
            TOTALLY ADDICTIVE. <br />
            PACKED WITH TASTE
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.05, rotate: -3 }}
            className="inline-block bg-[#FFC531] text-[#2A1147] font-black text-xl px-4 py-2 rounded-btn shadow-sm rotate-[-2deg] cursor-pointer"
          >
            YOUR NEW FROZEN CRUSH
          </motion.div>
          <motion.p variants={itemVariants} className="text-brand-purple/90 text-sm md:text-base font-black uppercase tracking-wider">
            SAVER IT, CRAVE IT, LOVE IT!
          </motion.p>
        </div>

        {/* Middle Image happy smiling girl */}
        <div className="lg:col-span-4 relative group">
          <div className="absolute inset-0 bg-brand-pink/15 rounded-card blur-md scale-95 pointer-events-none" />
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="rounded-card overflow-hidden border border-brand-purple/5 aspect-[3/4] shadow-lg relative cursor-pointer"
          >
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
              src="https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=500&q=80" 
              alt="Happy girl drinking acai smoothie" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Right side Pill badges */}
        <div className="lg:col-span-3 space-y-4">
          {[
            {
              title: "ZERO DAIRY",
              color: "bg-[#E9418A]"
            },
            {
              title: "ZERO SUGAR",
              color: "bg-[#4F8F46]"
            },
            {
              title: "LOW IN CALORIES",
              color: "bg-[#FF9F1C]"
            }
          ].map((pill, idx) => (
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              key={idx}
              className={`p-4 rounded-full flex items-center justify-center text-white text-sm font-black uppercase tracking-widest shadow-md cursor-pointer ${pill.color}`}
            >
              {pill.title}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Find Your Routine (Horizontal category cutout section) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
        className="py-24 bg-[#FF9F1C] text-white relative"
      >
        <div className="absolute inset-x-0 top-0 h-6 bg-[#FFF9F2] rounded-b-2xl pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-6 bg-[#FFF9F2] rounded-t-2xl pointer-events-none" />
        
        <div className="max-w-container mx-auto px-6 md:px-12 space-y-12 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            FIND YOUR ROUTINE
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center pt-6">
            {[
              {
                name: "ALL PRODUCTS",
                image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=400&q=80",
                link: "/shop"
              },
              {
                name: "AÇAÍ RANGE",
                image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=400&q=80",
                link: "/shop?category=SUPER+FRUITS+SORBET"
              },
              {
                name: "SMOOTHIE CUBES",
                image: "https://images.unsplash.com/photo-1628557044797-f21a177c37ec?auto=format&fit=crop&w=400&q=80",
                link: "/shop?category=OTHER+FRUITS+SMOOTHIE+CUBES"
              },
              {
                name: "ICE POPS",
                image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=400&q=80",
                link: "/shop?category=SUPERFRUITS+ICE+POP+LINE"
              },
              {
                name: "SUPERFRUIT SORBETS",
                image: "https://images.unsplash.com/photo-1527324688151-0e627063f2b1?auto=format&fit=crop&w=400&q=80",
                link: "/shop?category=SUPER+FRUITS+SORBET"
              },
              {
                name: "BULK TUBS",
                image: "https://images.unsplash.com/photo-1610970881699-44a5587caa9a?auto=format&fit=crop&w=400&q=80",
                link: "/shop?category=ACAÍ+BUCKET"
              }
            ].map((cat, idx) => (
              <Link 
                key={idx} 
                href={cat.link}
                className="group flex flex-col items-center gap-4 cursor-pointer text-center"
              >
                <motion.div 
                  variants={itemVariants}
                  whileHover={{ scale: 1.06, rotate: idx % 2 === 0 ? 2 : -2 }}
                  className="w-36 h-36 md:w-40 md:h-40 rounded-full bg-white relative overflow-hidden flex items-end justify-center shadow-lg border-4 border-white/20 transition-all duration-500"
                >
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-[#FFC531]/40 rounded-b-full transition-all duration-500 group-hover:h-1/2 group-hover:rotate-12" />
                  <motion.img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="w-24 h-24 md:w-28 md:h-28 object-contain z-10 transition-all duration-500 transform translate-y-1 group-hover:-translate-y-3 group-hover:scale-110"
                  />
                </motion.div>
                <span className="text-white text-xs font-black tracking-widest uppercase transition-colors group-hover:text-brand-yellow">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Recipes Masonry Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
        className="py-24 max-w-container mx-auto px-6 md:px-12 space-y-16"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-4 text-left">
            <h2 className="text-xs font-black text-brand-orange uppercase tracking-widest">Recipes &amp; Inspiration</h2>
            <p className="text-4xl md:text-5xl font-black font-display text-[#2A1147] tracking-tight">
              Elevate Your Daily Ritual.
            </p>
          </div>
          <Link
            href="/recipes"
            className="text-xs font-black text-brand-orange uppercase tracking-widest hover:underline flex items-center gap-1"
          >
            View All Recipes →
          </Link>
        </div>

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {recipes.slice(0, 5).map((recipe, idx) => (
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -6, boxShadow: "0px 15px 30px rgba(42, 17, 71, 0.06)" }}
              key={recipe.id}
              onClick={() => setActiveRecipe(recipe)}
              className="bg-white rounded-card overflow-hidden border border-[#2A1147]/5 shadow-sm transition-all duration-300 cursor-pointer group"
            >
              <div className="aspect-[3/4] w-full bg-brand-cream overflow-hidden relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                  <span className="text-[9px] font-black bg-brand-purple/85 text-white px-2 py-0.5 rounded-btn flex items-center gap-1 backdrop-blur-sm">
                    {recipe.time}
                  </span>
                  <span className="text-[9px] font-black bg-white/85 text-brand-purple px-2 py-0.5 rounded-btn flex items-center gap-1 backdrop-blur-sm border border-brand-purple/5">
                    {recipe.calories} kcal
                  </span>
                </div>
              </div>
              <div className="p-4 text-left space-y-2">
                <span className="text-[9px] font-black text-brand-orange uppercase tracking-wider">{recipe.difficulty}</span>
                <h4 className="text-sm font-black text-brand-purple group-hover:text-brand-orange transition-colors line-clamp-2">
                  {recipe.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Sleek Yellow Trust Banner bar */}
      <section className="py-6 bg-[#FFC531] border-y border-[#2A1147]/5 overflow-x-auto no-scrollbar">
        <div className="max-w-container mx-auto px-6 flex items-center justify-between gap-12 whitespace-nowrap text-[#2A1147]">
          {[
            "FREE SHIPPING On orders over $75",
            "SECURE PAYMENTS 100% Safe & Encrypted",
            "30 DAY RETURNS Hassle-free returns",
            "LOYALTY REWARDS Earn points & save",
            "SUSTAINABLE PACKAGING Good for you, good for Earth"
          ].map((val, idx) => (
            <div key={idx} className="flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-brand-purple flex-shrink-0" />
              <span className="text-xs font-black uppercase tracking-widest">{val}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Fun Campaign cards grid */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
        className="py-20 max-w-container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {/* Card 1: School Days */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ y: -8, boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.05)" }}
          className="bg-[#e9f3eb] rounded-card border border-brand-green/10 overflow-hidden flex flex-col justify-between shadow-sm transition-all text-left"
        >
          <div className="p-8 space-y-6">
            <h3 className="text-2xl font-black text-brand-purple uppercase">MADE FOR SCHOOL DAYS</h3>
            <p className="text-brand-purple/80 text-xs font-semibold leading-relaxed">
              Nutritious, tasty and made for growing minds and busy days. Packaged for kids lunch boxes.
            </p>
            <div className="w-full aspect-[4/3] rounded-card overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80" alt="school days kids" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="p-6 border-t border-brand-green/10">
            <Link href="/shop" className="text-xs font-black text-brand-green uppercase tracking-wider hover:underline flex items-center gap-1">
              Shop Now <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.div>

        {/* Card 2: Partnerships */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ y: -8, boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.05)" }}
          className="bg-[#f0eaf5] rounded-card border border-brand-purple/10 overflow-hidden flex flex-col justify-between shadow-sm transition-all text-left"
        >
          <div className="p-8 space-y-6">
            <h3 className="text-2xl font-black text-brand-purple uppercase">PARTNERSHIPS FOR A BETTER PLANET</h3>
            <p className="text-brand-purple/80 text-xs font-semibold leading-relaxed">
              Working with local farmers and communities to protect the Amazon and its people.
            </p>
            <div className="w-full aspect-[4/3] rounded-card overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=400&q=80" alt="amazon rainforest partnerships" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="p-6 border-t border-brand-purple/10">
            <Link href="/sustainability" className="text-xs font-black text-brand-purple/60 uppercase tracking-wider hover:underline flex items-center gap-1">
              Learn More <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.div>

        {/* Card 3: Join Community */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ y: -8, boxShadow: "0px 20px 40px rgba(42, 17, 71, 0.15)" }}
          className="bg-brand-purple text-white rounded-card overflow-hidden flex flex-col justify-between shadow-sm transition-all text-left"
        >
          <div className="p-8 space-y-6">
            <h3 className="text-2xl font-black text-white uppercase">JOIN THE AUSTROPICAL COMMUNITY</h3>
            <p className="text-white/80 text-xs font-semibold leading-relaxed">
              Share, inspire, empower. Be part of a global community eating better, living better.
            </p>
            <div className="w-full aspect-[4/3] rounded-card overflow-hidden bg-white/5 flex flex-col justify-center p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Star className="w-5 h-5 text-brand-yellow" />
                </div>
                <p className="text-xs font-bold text-white/95">Unlock 10% off your next purchase!</p>
              </div>
              <div className="space-y-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-input text-xs outline-none focus:border-brand-orange text-white"
                />
                <button className="w-full py-2 bg-brand-orange hover:bg-brand-yellow text-brand-purple font-black text-xs uppercase tracking-widest rounded-btn transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="p-6 border-t border-white/10 text-xs font-semibold text-white/50 text-center">
            Tag @austropical_superfoods
          </div>
        </motion.div>
      </motion.section>

      {/* Recipe Modal Overlay */}
      {activeRecipe && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-brand-purple/50 backdrop-blur-md flex items-center justify-center p-6">
          <div className="bg-brand-cream border border-brand-purple/10 rounded-card max-w-2xl w-full max-h-[85vh] overflow-y-auto flex flex-col">
            <div className="relative h-64 bg-brand-purple">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeRecipe.image}
                alt={activeRecipe.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setActiveRecipe(null)}
                className="absolute top-4 right-4 p-2 bg-brand-purple text-brand-cream rounded-full hover:bg-brand-purple-light transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-8 text-left space-y-6">
              <div className="flex items-center justify-between text-xs font-black text-brand-orange uppercase tracking-wider">
                <span>{activeRecipe.time} Prep Time</span>
                <span>{activeRecipe.calories} Calories</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-black font-display text-brand-purple">
                {activeRecipe.title}
              </h3>

              <div className="space-y-3">
                <h4 className="text-sm font-black text-brand-purple uppercase tracking-widest border-b border-brand-purple/10 pb-1">
                  Ingredients
                </h4>
                <ul className="list-disc pl-5 space-y-1.5 text-brand-purple/80 text-sm font-semibold">
                  {activeRecipe.ingredients.map((ing: string, i: number) => (
                    <li key={i}>{ing}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-black text-brand-purple uppercase tracking-widest border-b border-brand-purple/10 pb-1">
                  Method
                </h4>
                <ol className="list-decimal pl-5 space-y-2.5 text-brand-purple/80 text-sm font-semibold">
                  {activeRecipe.instructions.map((step: string, i: number) => (
                    <li key={i} className="pl-1">{step}</li>
                  ))}
                </ol>
              </div>

              <div className="pt-4 border-t border-brand-purple/5 flex justify-end">
                <button
                  onClick={() => setActiveRecipe(null)}
                  className="px-6 py-3 bg-brand-purple hover:bg-brand-purple-light text-white text-sm font-bold rounded-btn transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
