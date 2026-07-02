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
      image: "/acai-zero-sugar-original.png",
      tag: "NEW",
    },
    {
      name: "DRAGON FRUIT",
      sub: "Superfood Blend",
      image: "/mornings-made-smoothie.jpg",
      tag: "POPULAR",
    },
    {
      name: "MANGO",
      sub: "Tropical Delight",
      image: "/acai-passionfruit-legs.png",
      tag: "BEST SELLER",
    },
    {
      name: "PINEAPPLE",
      sub: "Island Crush",
      image: "/range-ledge.png",
      tag: "FRESH",
    }
  ];

  return (
    <div className="bg-[#FFF9F2] text-[#1A1A1A] min-h-screen relative overflow-x-hidden font-sans">
      <Navbar />

      {/* Hero Section with Purple/Magenta/Blue Gradient, Watermark Leaves & Sticker Headers */}
      <section className="relative pt-40 pb-36 bg-gradient-to-br from-[#0062C4] via-[#7B2CBF] to-[#2A1147] bg-leaf-pattern text-white overflow-hidden">
        {/* Soft floating background glow elements */}
        <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] bg-brand-yellow/20 rounded-full blur-[120px] pointer-events-none animate-float-slow" />
        <div className="absolute bottom-10 left-10 w-[280px] h-[280px] bg-brand-orange/20 rounded-full blur-[100px] pointer-events-none animate-float-reverse" />
        
        {/* Floating particles */}
        <div className="absolute top-24 left-1/4 w-3 h-3 bg-brand-yellow rounded-full animate-ping pointer-events-none" />
        <div className="absolute bottom-32 left-10 w-2 h-2 bg-brand-orange rounded-full animate-bounce pointer-events-none" />
        
        {/* Parallax fruits & leaves */}
        <motion.div
          className="absolute top-28 left-12 w-20 h-20 pointer-events-none opacity-40 hidden md:block"
          style={{ x: mousePos.x * -0.5, y: mousePos.y * -0.5, rotate: 15 }}
        >
          <Leaf className="w-full h-full text-brand-yellow fill-brand-yellow/20" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-24 left-1/3 w-16 h-16 pointer-events-none opacity-30 hidden md:block"
          style={{ x: mousePos.x * 0.8, y: mousePos.y * 0.8 }}
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
            <h1 className="text-5xl md:text-[80px] font-black tracking-tight leading-[0.95] text-white text-sticker">
              HEALTH FOODS <br />
              <span className="text-[#FFC531]">THAT MOVE</span> <br />
              WITH YOU
            </h1>
            <p className="text-white/95 text-sm md:text-base font-medium max-w-md leading-relaxed">
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
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-black text-sm uppercase tracking-widest rounded-full transition-all duration-300 border border-white/20 flex items-center gap-2 backdrop-blur-sm"
                >
                  <Play className="w-4 h-4 text-brand-yellow fill-brand-yellow" />
                  <span>Discover Our Story</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Product Composition with Parallax Ledge Collage */}
          <div className="lg:col-span-6 flex justify-center relative pt-10 lg:pt-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="relative w-full max-w-[480px] aspect-[4/3] flex items-center justify-center"
              style={{ x: mousePos.x * 0.4, y: mousePos.y * 0.4 }}
            >
              {/* Rotating Vegan stamp badge */}
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 15 }}
                className="absolute top-0 right-0 md:right-4 w-20 h-20 md:w-24 md:h-24 bg-[#FFC531] text-[#2A1147] rounded-full p-2 flex flex-col items-center justify-center font-black text-[9px] uppercase tracking-wider animate-spin-slow shadow-lg border-4 border-[#2A1147] z-20 cursor-pointer"
              >
                <span>★ 100% VEGAN ★</span>
                <span className="text-[7px]">Certified Organic</span>
              </motion.div>

              {/* Star-burst minerals badge */}
              <motion.div 
                whileHover={{ scale: 1.1, y: -5 }}
                className="absolute top-16 left-0 bg-[#FF9F1C] text-white px-3.5 py-1.5 rounded-full font-black text-[9px] uppercase tracking-widest shadow-md rotate-[-8deg] z-20 animate-bounce cursor-pointer"
              >
                Essential Minerals
              </motion.div>

              {/* Lower Sugar bubble */}
              <motion.div 
                whileHover={{ scale: 1.1, y: 5 }}
                className="absolute bottom-20 left-4 bg-[#E9418A] text-white px-3.5 py-1.5 rounded-full font-black text-[9px] uppercase tracking-widest shadow-md rotate-[12deg] z-20 animate-pulse cursor-pointer"
              >
                Lower Sugar
              </motion.div>

              {/* Gluten Free tag */}
              <div className="absolute bottom-16 right-0 bg-[#E9418A] text-white px-3.5 py-1.5 rounded-full font-black text-[9px] uppercase tracking-widest shadow-md rotate-[-6deg] z-20">
                Gluten Free
              </div>

              {/* Mossy Ledge Collage visual - matches Image 1 and Hero mockup visual */}
              <div className="relative w-full h-full flex items-center justify-center">
                <motion.img
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  src="/range-ledge.png"
                  alt="Austropical product range on ledge"
                  className="w-full h-auto max-h-[420px] object-contain drop-shadow-2xl z-10"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wavy bottom divider transition - matches mockup wave transition */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] text-[#FFF9F2] fill-[#FFF9F2]">
            <path d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,120L1320,120C1200,120,960,120,720,120C480,120,240,120,120,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Trust Badges Row */}
      <section className="py-8 bg-[#FFF9F2] border-b border-[#2A1147]/5">
        <div className="max-w-container mx-auto px-6 flex flex-wrap items-center justify-center md:justify-between gap-8 md:gap-4 whitespace-nowrap">
          {[
            "100% REAL FRUIT",
            "NO ADDED SUGAR",
            "PLANT BASED",
            "GLUTEN FREE",
            "AUSTRALIAN MADE"
          ].map((val, idx) => (
            <div key={val} className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full border border-brand-purple flex items-center justify-center">
                <span className="text-[9px] font-black text-brand-purple">✓</span>
              </div>
              <span className="text-[11px] font-black text-brand-purple uppercase tracking-widest">{val}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Section: SQUEEZE IN SOME GOODNESS (Feature Grid with floating assets) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
        className="py-24 max-w-container mx-auto px-6 md:px-12 text-center space-y-16 relative"
      >
        {/* Floating Fruit Assets on sides - matches mockup decoration */}
        <motion.div 
          style={{ y: mousePos.y * -0.4 }}
          className="absolute top-10 left-4 w-12 h-12 opacity-60 hidden md:block animate-float"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&w=80&q=80" alt="strawberry" className="w-full h-full object-cover rounded-full" />
        </motion.div>
        <motion.div 
          style={{ y: mousePos.y * 0.4 }}
          className="absolute bottom-10 right-4 w-14 h-14 opacity-60 hidden md:block animate-float-reverse"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=80&q=80" alt="blueberry" className="w-full h-full object-cover rounded-full" />
        </motion.div>

        <div className="space-y-4 max-w-2xl mx-auto">
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-black uppercase tracking-tight text-sticker">
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

      {/* Section: OUR FAVOURITES Slider (Orange Section with wave bottom) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
        className="py-24 bg-[#FF7A00] bg-leaf-pattern text-white relative overflow-hidden"
      >
        {/* Soft wavy border masks */}
        <div className="absolute inset-x-0 top-0 h-6 bg-[#FFF9F2] rounded-b-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] text-[#FFF9F2] fill-[#FFF9F2]">
            <path d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,120L1320,120C1200,120,960,120,720,120C480,120,240,120,120,120L0,120Z"></path>
          </svg>
        </div>

        <div className="max-w-container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 text-left">
          
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-black uppercase tracking-widest text-[#2A1147]">OUR FAVOURITES</span>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-none text-sticker">
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

          {/* Right Carousel Slider */}
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
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
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

      {/* Section: WILDLY FLAVOURFUL (Teal split background with central pill image) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
        className="py-32 bg-gradient-to-r from-[#00b4d8] to-[#0077b6] bg-leaf-pattern text-white relative overflow-hidden"
      >
        {/* Soft wavy border dividers */}
        <div className="absolute inset-x-0 top-0 h-6 bg-[#FFF9F2] rounded-b-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] text-[#FFF9F2] fill-[#FFF9F2]">
            <path d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,120L1320,120C1200,120,960,120,720,120C480,120,240,120,120,120L0,120Z"></path>
          </svg>
        </div>

        <div className="max-w-container mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center text-left relative z-10">
          {/* Left Column Text */}
          <div className="lg:col-span-5 space-y-6">
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-black leading-none uppercase text-sticker">
              WILDLY FLAVOURFUL, <br />
              TOTALLY ADDICTIVE. <br />
              PACKED WITH TASTE
            </motion.h2>
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="inline-block bg-[#FFC531] text-[#2A1147] font-black text-xl px-4 py-2 rounded-btn shadow-md rotate-[-2deg] cursor-pointer"
            >
              YOUR NEW FROZEN CRUSH
            </motion.div>
            <motion.p variants={itemVariants} className="text-white text-sm md:text-base font-black uppercase tracking-wider">
              SAVER IT, CRAVE IT, LOVE IT!
            </motion.p>
          </div>

          {/* Middle Pillar Image - Happy smiling girl */}
          <div className="lg:col-span-4 flex justify-center">
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="rounded-full overflow-hidden border-8 border-white/20 aspect-[2/3] w-64 md:w-72 shadow-2xl relative cursor-pointer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=600&q=80" 
                alt="Happy girl drinking acai smoothie" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Right Column Pill Badges */}
          <div className="lg:col-span-3 space-y-4">
            {[
              {
                title: "ZERO DAIRY",
                color: "bg-[#7B2CBF]"
              },
              {
                title: "ZERO SUGAR",
                color: "bg-[#0096C7]"
              },
              {
                title: "LOW IN CALORIES",
                color: "bg-[#FF7A00]"
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
        </div>
      </motion.section>

      {/* Find Your Routine (Horizontal Category circle select list) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
        className="py-24 bg-[#FF9F1C] bg-leaf-pattern text-white relative"
      >
        <div className="absolute inset-x-0 top-0 h-6 bg-[#FFF9F2] rounded-b-2xl pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-6 bg-[#FFF9F2] rounded-t-2xl pointer-events-none" />
        
        <div className="max-w-container mx-auto px-6 md:px-12 space-y-12 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight text-sticker">
            FIND YOUR ROUTINE
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center pt-6">
            {[
              {
                name: "ALL PRODUCTS",
                image: "/range-ledge.png",
                link: "/shop"
              },
              {
                name: "AÇAÍ RANGE",
                image: "/acai-zero-sugar-original.png",
                link: "/shop?category=SUPER+FRUITS+SORBET"
              },
              {
                name: "SMOOTHIE CUBES",
                image: "/mornings-made-smoothie.jpg",
                link: "/shop?category=OTHER+FRUITS+SMOOTHIE+CUBES"
              },
              {
                name: "ICE POPS",
                image: "/acai-passionfruit-legs.png",
                link: "/shop?category=SUPERFRUITS+ICE+POP+LINE"
              },
              {
                name: "SUPERFRUIT SORBETS",
                image: "/acai-zero-sugar-original.png",
                link: "/shop?category=SUPER+FRUITS+SORBET"
              },
              {
                name: "BULK TUBS",
                image: "/unmatched-excellence-buckets.jpg",
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

      {/* Polaroid & Trust Banner layout styled to match bottom mockup section */}
      <section className="px-6 md:px-12 my-12">
        <div className="max-w-container mx-auto py-6 bg-[#FFC531] text-[#2A1147] rounded-[28px] shadow-lg overflow-x-auto no-scrollbar">
          <div className="px-8 flex items-center justify-between gap-12 whitespace-nowrap">
            {[
              "FREE SHIPPING On orders over $75",
              "SECURE PAYMENTS 100% Safe & Encrypted",
              "30 DAY RETURNS Hassle-free returns",
              "LOYALTY REWARDS Earn points & save",
              "SUSTAINABLE PACKAGING Good for you, good for Earth"
            ].map((val, idx) => (
              <div key={idx} className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full border border-brand-purple flex items-center justify-center flex-shrink-0">
                  <span className="text-[10px] font-bold text-brand-purple">✓</span>
                </div>
                <span className="text-xs font-black uppercase tracking-widest">{val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Fun Campaign cards grid - fully matches Image 5 and purple page footer bottom layout */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
        className="py-24 bg-[#2A1147] bg-leaf-pattern text-white overflow-hidden"
      >
        <div className="max-w-container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: School Days */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -8, boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.15)" }}
            className="bg-[#4D2677] rounded-[28px] border border-white/10 overflow-hidden flex flex-col justify-between shadow-md transition-all text-left p-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-white uppercase tracking-wide">MADE FOR SCHOOL DAYS</h3>
              <p className="text-white/80 text-xs font-medium leading-relaxed">
                Nutritious, tasty and made for growing minds and busy days. Packaged for kids lunch boxes.
              </p>
              <div className="w-full aspect-[4/3] rounded-[24px] overflow-hidden border border-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/acai-passionfruit-legs.png" alt="school days kids tubs" className="w-full h-full object-contain p-2" />
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-white/10">
              <Link href="/shop" className="text-xs font-black text-brand-yellow uppercase tracking-widest hover:underline flex items-center gap-1">
                Shop Now <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

          {/* Card 2: Partnerships */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -8, boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.15)" }}
            className="bg-[#4D2677] rounded-[28px] border border-white/10 overflow-hidden flex flex-col justify-between shadow-md transition-all text-left p-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-white uppercase tracking-wide">PARTNERSHIPS FOR A BETTER PLANET</h3>
              <p className="text-white/80 text-xs font-medium leading-relaxed">
                Working with local farmers and communities to protect the Amazon and its people.
              </p>
              <div className="w-full aspect-[4/3] rounded-[24px] overflow-hidden border border-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/unmatched-excellence-buckets.jpg" alt="amazon rainforest partnerships" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-white/10">
              <Link href="/sustainability" className="text-xs font-black text-brand-yellow uppercase tracking-widest hover:underline flex items-center gap-1">
                Learn More <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

          {/* Card 3: Polaroid Deck - Community Snapshots */}
          <motion.div 
            variants={itemVariants}
            className="bg-[#4D2677] rounded-[28px] border border-white/10 overflow-hidden flex flex-col justify-between shadow-md text-left p-8 relative"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-white uppercase tracking-wide">JOIN THE AUSTROPICAL COMMUNITY</h3>
              <p className="text-white/80 text-xs font-medium leading-relaxed">
                Share, inspire, empower. Be part of a global community eating better, living better.
              </p>
              
              {/* Polaroid Snapshot deck stack - rotated with animations */}
              <div className="relative h-44 w-full flex items-center justify-center overflow-visible mt-2">
                <motion.div 
                  whileHover={{ scale: 1.08, zIndex: 10, rotate: -2 }}
                  className="absolute left-4 w-28 bg-white p-2 pb-4 shadow-lg border border-black/5 rotate-[-8deg] rounded-sm"
                >
                  <div className="aspect-square bg-gray-100 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=150&q=80" alt="pic1" className="w-full h-full object-cover" />
                  </div>
                  <p className="text-[7px] text-gray-500 font-bold mt-2 text-center">#bowlgoals</p>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.08, zIndex: 10, rotate: 2 }}
                  className="absolute right-4 w-28 bg-white p-2 pb-4 shadow-lg border border-black/5 rotate-[8deg] rounded-sm"
                >
                  <div className="aspect-square bg-gray-100 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=150&q=80" alt="pic2" className="w-full h-full object-cover" />
                  </div>
                  <p className="text-[7px] text-gray-500 font-bold mt-2 text-center">#smoothieglow</p>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.08, zIndex: 10, rotate: 0 }}
                  className="absolute w-28 bg-white p-2 pb-4 shadow-xl border border-black/5 z-0 rounded-sm"
                >
                  <div className="aspect-square bg-gray-100 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/mornings-made-smoothie.jpg" alt="pic3" className="w-full h-full object-cover" />
                  </div>
                  <p className="text-[7px] text-gray-500 font-bold mt-2 text-center">#superfoodlife</p>
                </motion.div>
              </div>
            </div>
            
            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-bold text-white/60">
              <span>Tag @austropical_superfoods</span>
              <div className="flex gap-2">
                <span className="hover:text-brand-yellow cursor-pointer">IG</span>
                <span className="hover:text-brand-yellow cursor-pointer">FB</span>
                <span className="hover:text-brand-yellow cursor-pointer">YT</span>
              </div>
            </div>
          </motion.div>

        </div>
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
