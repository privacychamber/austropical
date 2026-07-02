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
  Play,
  Sun,
  Dumbbell,
  Coffee,
  IceCream,
  Truck,
  RotateCcw,
  Award,
  Package,
  ThumbsUp,
  ShieldCheck
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

  // Routine Category Selection filter state
  const [selectedRoutine, setSelectedRoutine] = useState("Morning");

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

  // Routine lists matching Section 7 specs
  const routineTabs = [
    { id: "Morning", name: "Morning", icon: Sun },
    { id: "Workout", name: "Workout", icon: Dumbbell },
    { id: "Snacks", name: "Healthy Snacks", icon: Sparkles },
    { id: "Breakfast", name: "Breakfast", icon: Coffee },
    { id: "Desserts", name: "Desserts", icon: IceCream },
    { id: "Wellness", name: "Wellness", icon: Heart }
  ];

  // Filter products by routine category tags
  const filteredProducts = products.filter(p => {
    if (selectedRoutine === "Morning") return p.category.includes("SORBET") || p.category.includes("CUBES");
    if (selectedRoutine === "Workout") return p.badges.includes("Energy Boost") || p.badges.includes("Organic");
    if (selectedRoutine === "Snacks") return p.category.includes("ICE POP") || p.price < 20;
    if (selectedRoutine === "Breakfast") return p.category.includes("PACKS") || p.category.includes("CUBES");
    if (selectedRoutine === "Desserts") return p.category.includes("SORBET") || p.category.includes("BUCKET");
    return p.specs.organic; // Wellness defaults to organic
  });

  return (
    <div className="bg-[#FFF9F2] text-[#1A1A1A] min-h-screen relative overflow-x-hidden font-sans">
      <Navbar />

      {/* SECTION 2 — Hero Banner (Height 100vh, Purple-Pink-Orange Gradient, Mixed sticker headers, wave bottom) */}
      <section className="relative min-h-screen pt-40 pb-36 bg-gradient-to-br from-[#7B2CBF] via-[#E9418A] to-[#FF7A00] text-white flex items-center overflow-hidden">
        {/* Soft background lighting element */}
        <div className="absolute top-10 right-10 w-[450px] h-[450px] bg-brand-yellow/15 rounded-full blur-[130px] pointer-events-none animate-float-slow" />
        <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-[#FFF9F2]/10 rounded-full blur-[90px] pointer-events-none animate-float-reverse" />
        
        {/* Parallax fruits & leaves */}
        <motion.div
          className="absolute top-28 left-12 w-20 h-20 pointer-events-none opacity-40 hidden md:block"
          style={{ x: mousePos.x * -0.5, y: mousePos.y * -0.5, rotate: 15 }}
        >
          <Leaf className="w-full h-full text-brand-yellow fill-brand-yellow/20" />
        </motion.div>

        <div className="max-w-container mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Text Column (45%) */}
          <motion.div 
            initial={{ opacity: 0, x: -50, filter: "blur(8px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6 text-left"
          >
            <h1 className="text-6xl md:text-[88px] font-black tracking-tight leading-[0.95] text-white text-sticker">
              HEALTH FOODS <br />
              <span className="text-[#FFC531]">THAT MOVE</span> <br />
              WITH YOU
            </h1>
            <p className="text-white/95 text-base md:text-lg font-semibold max-w-md leading-relaxed">
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

          {/* Right Product Composition Column (55%, 650px container with overlapping details) */}
          <div className="lg:col-span-7 flex justify-center relative pt-10 lg:pt-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="relative w-full max-w-[650px] aspect-[4/3] flex items-center justify-center"
              style={{ x: mousePos.x * 0.4, y: mousePos.y * 0.4 }}
            >
              {/* Star-burst minerals badge */}
              <motion.div 
                whileHover={{ scale: 1.1, y: -5 }}
                className="absolute top-10 left-0 bg-[#FF9F1C] text-white px-3.5 py-1.5 rounded-full font-black text-[10px] uppercase tracking-widest shadow-md rotate-[-8deg] z-20 animate-bounce cursor-pointer"
              >
                Essential Minerals
              </motion.div>

              {/* Lower Sugar bubble */}
              <motion.div 
                whileHover={{ scale: 1.1, y: 5 }}
                className="absolute bottom-20 left-4 bg-[#E9418A] text-white px-3.5 py-1.5 rounded-full font-black text-[10px] uppercase tracking-widest shadow-md rotate-[12deg] z-20 animate-pulse cursor-pointer"
              >
                Lower Sugar
              </motion.div>

              {/* 100% Vegan sticker */}
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 15 }}
                className="absolute -top-6 right-8 w-24 h-24 bg-[#FFC531] text-[#2A1147] rounded-full p-2 flex flex-col items-center justify-center font-black text-[9px] uppercase tracking-wider animate-spin-slow shadow-lg border-4 border-[#2A1147] z-20 cursor-pointer"
              >
                <span>★ 100% VEGAN ★</span>
                <span className="text-[7px]">Certified Organic</span>
              </motion.div>

              {/* Gluten Free tag */}
              <div className="absolute bottom-16 right-0 bg-[#4F8F46] text-white px-3.5 py-1.5 rounded-full font-black text-[10px] uppercase tracking-widest shadow-md rotate-[-6deg] z-20">
                Gluten Free
              </div>

              {/* Mossy Ledge Collage visual containing tub, cup, smoothie glass & fruits */}
              <div className="relative w-full h-full flex items-center justify-center">
                <motion.img
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  src="/range-ledge.png"
                  alt="Austropical product collage on ledge"
                  className="w-full h-auto max-h-[460px] object-contain drop-shadow-2xl z-10"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wavy bottom divider transition */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] text-[#FFF9F2] fill-[#FFF9F2]">
            <path d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,120L1320,120C1200,120,960,120,720,120C480,120,240,120,120,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* SECTION 3 — Trust Bar (White Background, height 90px, 5 icons centered) */}
      <section className="h-[90px] bg-white border-b border-[#2A1147]/5 flex items-center justify-center">
        <div className="max-w-container mx-auto px-6 md:px-12 w-full flex items-center justify-center gap-12 md:gap-20 whitespace-nowrap overflow-x-auto no-scrollbar">
          {[
            "100% Real Fruit",
            "No Added Sugar",
            "Plant Based",
            "Gluten Free",
            "Australian Made"
          ].map((val, idx) => (
            <div key={val} className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full border-2 border-brand-purple flex items-center justify-center flex-shrink-0">
                <span className="text-[10px] font-black text-brand-purple">✓</span>
              </div>
              <span className="text-xs font-black text-brand-purple uppercase tracking-widest">{val}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4 — Goodness Cards (Heading, 4 cards 320x300, shadow, lift on hover, floating berries) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
        className="py-28 max-w-container mx-auto px-6 md:px-12 text-center space-y-16 relative"
      >
        {/* Floating Fruit Decoration left/right */}
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
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-black uppercase tracking-tight text-sticker text-brand-purple">
            SQUEEZE IN SOME GOODNESS
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
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
                y: -12, 
                boxShadow: "0px 20px 40px rgba(42, 17, 71, 0.12)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className={`w-full max-w-[320px] h-[300px] bg-white border p-8 rounded-[30px] text-left flex flex-col justify-between group shadow-sm transition-all duration-300 border-brand-purple/5`}
            >
              <div className="space-y-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${item.color.split(" ")[1]}`}>
                  <Leaf className={`w-6 h-6 ${item.color.split(" ")[0]}`} />
                </div>
                <h3 className="text-lg font-black tracking-wide text-brand-purple uppercase">{item.title}</h3>
                <p className="text-brand-purple/80 text-xs font-semibold leading-relaxed line-clamp-3">{item.desc}</p>
              </div>
              <div className="pt-2">
                <span className="text-[10px] font-black text-brand-orange uppercase tracking-wider cursor-pointer group-hover:underline flex items-center gap-1">
                  Read Benefit <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* SECTION 5 — Featured Product (Gradient Orange to Yellow, wave top, split 50/50, product details & bullet lists) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
        className="py-28 bg-gradient-to-br from-[#FF7A00] to-[#FFC531] text-white relative overflow-hidden"
      >
        {/* Soft wave top divider */}
        <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-20">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[30px] text-[#FFF9F2] fill-[#FFF9F2]">
            <path d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,120L1320,120C1200,120,960,120,720,120C480,120,240,120,120,120L0,120Z"></path>
          </svg>
        </div>

        <div className="max-w-container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Column: Product Visual Render */}
          <div className="lg:col-span-6 flex justify-center relative">
            <motion.div 
              style={{ y: mousePos.y * -0.3 }}
              className="relative w-full max-w-[460px] aspect-square flex items-center justify-center"
            >
              {/* Product tub */}
              <motion.img 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                src="/mornings-made-smoothie.jpg"
                alt="Featured Product"
                className="w-full h-full object-cover rounded-[30px] shadow-2xl z-10 border-4 border-white/20"
              />
              {/* Floating mango fruit slices & leaves */}
              <div className="absolute -bottom-6 -left-6 bg-brand-yellow text-brand-purple rounded-full p-2 font-black text-xs shadow-md z-20 rotate-[-12deg]">
                ★ 100% REAL MANGO ★
              </div>
            </motion.div>
          </div>

          {/* Right Column: Descriptions, badging & CTA */}
          <div className="lg:col-span-6 text-left space-y-6">
            <span className="text-xs font-black uppercase tracking-widest text-[#2A1147]">SUPERFOOD INNOVATION</span>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase text-sticker leading-tight">
              AÇAÍ SMOOTHIE CUBES BLEND
            </h2>
            <p className="text-white/95 text-sm md:text-base font-semibold leading-relaxed">
              No mess, no blenders required. Just drop our pre-portioned, flash-frozen superfood cubes into a shaker with coconut water or your favorite milk, shake, and enjoy your morning glow!
            </p>

            <ul className="space-y-3">
              {[
                "Freeze-dried fresh to preserve antioxidant enzymes.",
                "Loaded with active prebiotics and essential daily minerals.",
                "Zero artificial additives, colors, or refined cane sugars."
              ].map((bullet, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Product Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {["Organic", "Sustainable", "Nutrient Rich"].map((badge) => (
                <span key={badge} className="px-3.5 py-1.5 bg-[#2A1147]/30 border border-white/10 rounded-full text-xs font-black uppercase tracking-wider">
                  {badge}
                </span>
              ))}
            </div>

            <div className="pt-4">
              <Link 
                href="/shop"
                className="px-8 py-4 bg-[#2A1147] hover:bg-[#4D2677] text-white font-black text-sm uppercase tracking-widest rounded-full transition-colors shadow-md inline-flex items-center gap-2"
              >
                <span>Shop Cubes Range</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* SECTION 6 — Story Timeline (Dark Purple background, wave top, 4 steps connected by arrows) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
        className="py-28 bg-[#2A1147] bg-leaf-pattern text-white relative overflow-hidden"
      >
        {/* Soft wave top divider */}
        <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-20">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[30px] text-[#FFF9F2] fill-[#FFF9F2]">
            <path d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,120L1320,120C1200,120,960,120,720,120C480,120,240,120,120,120L0,120Z"></path>
          </svg>
        </div>

        <div className="max-w-container mx-auto px-6 md:px-12 text-center space-y-16 relative z-10">
          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-sticker">
              AÇAÍ AS IT SHOULD BE
            </h2>
            <p className="text-white/80 text-sm font-semibold">Our step-by-step commitment to raw quality and natural freshness.</p>
          </div>

          {/* Timeline Row (4 steps with connecting arrow badges) */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {[
              { step: "Harvest", desc: "Wild-harvested at peak ripeness in the Amazon rainforest." },
              { step: "Freeze", desc: "Flash-frozen within hours to lock in raw nutrients." },
              { step: "Deliver", desc: "Shipped frozen directly to local Australian stores." },
              { step: "Enjoy", desc: "Blend or scoop at home for pure natural energy." }
            ].map((node, i) => (
              <motion.div 
                variants={itemVariants}
                key={node.step}
                className="relative bg-white/5 border border-white/10 p-6 rounded-[28px] text-center space-y-4 shadow-sm hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-brand-orange text-[#2A1147] font-black text-lg flex items-center justify-center mx-auto shadow-md">
                  {i + 1}
                </div>
                <h3 className="text-lg font-black tracking-wide text-brand-yellow uppercase">{node.step}</h3>
                <p className="text-white/70 text-xs font-semibold leading-relaxed">{node.desc}</p>
                
                {/* Arrow connector visible on desktop */}
                {i < 3 && (
                  <div className="absolute top-1/2 -right-6 translate-y-[-50%] text-brand-orange text-2xl hidden md:block z-20">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* SECTION 7 — Routine (White bg. Left: "Find Your Routine" categories list. Right: "Built Around Real Fruit" 3 cards horizontal slider) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
        className="py-28 max-w-container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start bg-white"
      >
        {/* Left Column (40%) Categories Filter list */}
        <div className="lg:col-span-5 space-y-8 text-left">
          <div className="space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-brand-orange">DAILY SOLUTIONS</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase text-sticker text-brand-purple">
              Find Your Routine
            </h2>
          </div>
          
          <div className="flex flex-col gap-3">
            {routineTabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedRoutine(tab.id)}
                  className={`flex items-center gap-4 px-6 py-4 rounded-full border transition-all text-left shadow-sm ${
                    selectedRoutine === tab.id
                      ? "bg-brand-purple text-white border-brand-purple scale-102"
                      : "bg-[#FFF9F2] text-brand-purple hover:bg-brand-cream border-brand-purple/10"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    selectedRoutine === tab.id ? "bg-brand-orange text-brand-purple" : "bg-brand-purple/10 text-brand-purple"
                  }`}>
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <span className="font-black text-sm uppercase tracking-wider">{tab.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column (60%) Product Cards Slider */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <h2 className="text-2xl font-black text-brand-purple uppercase tracking-tight">
            Built Around Real Fruit
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProducts.slice(0, 3).map((prod) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -6, boxShadow: "0px 15px 30px rgba(42, 17, 71, 0.08)" }}
                  key={prod.id}
                  className="bg-[#FFF9F2] text-brand-purple rounded-[28px] p-5 border border-brand-purple/5 shadow-sm flex flex-col justify-between text-center aspect-[3/4.2] group cursor-pointer"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-black text-brand-orange bg-brand-orange/15 px-2.5 py-1 rounded-btn uppercase">
                        {prod.badges[0]}
                      </span>
                      <Heart 
                        onClick={(e) => {
                          e.preventDefault();
                          toggleWishlist(prod.id);
                        }}
                        className={`w-4 h-4 cursor-pointer transition-colors ${
                          isInWishlist(prod.id) ? "text-brand-pink fill-brand-pink" : "text-brand-purple/20 hover:text-brand-pink"
                        }`} 
                      />
                    </div>
                    
                    <div className="aspect-square w-full rounded-img bg-white overflow-hidden flex items-center justify-center p-2">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={prod.image} 
                        alt={prod.name} 
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-3 mt-4">
                    <div className="space-y-1">
                      <h4 className="text-sm font-black tracking-wide uppercase leading-none truncate">{prod.name}</h4>
                      <p className="text-[10px] font-bold text-brand-purple/65">{prod.category}</p>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-brand-purple/5">
                      <span className="text-sm font-black text-brand-orange">${prod.price}</span>
                      <button 
                        onClick={() => addToCart(prod, 1)}
                        className="px-3 py-1 bg-brand-purple hover:bg-brand-orange hover:text-brand-purple text-white text-[10px] font-black uppercase tracking-wider rounded-full transition-colors"
                      >
                        + Add
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {filteredProducts.length === 0 && (
              <div className="col-span-full py-16 text-center text-brand-purple/50 font-bold">
                No products found matching this routine filter.
              </div>
            )}
          </div>
        </div>
      </motion.section>

      {/* SECTION 8 — Recipes + Testimonials (70% Recipes horizontal slider, 30% Testimonial white card) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={revealVariants}
        className="py-28 max-w-container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-10 gap-12 items-start"
      >
        {/* Left Side: Recipes Slider (70%) */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="flex items-center justify-between border-b border-brand-purple/5 pb-4">
            <h2 className="text-4xl font-black uppercase text-sticker text-brand-purple">
              RECIPES & INSPIRATION
            </h2>
            <Link href="/recipes" className="text-xs font-black text-brand-orange uppercase hover:underline">
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recipes.slice(0, 3).map((recipe) => (
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -6, boxShadow: "0px 15px 30px rgba(42, 17, 71, 0.08)" }}
                key={recipe.id}
                onClick={() => setActiveRecipe(recipe)}
                className="bg-white rounded-card overflow-hidden border border-brand-purple/5 shadow-sm transition-all duration-300 cursor-pointer group"
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
        </div>

        {/* Right Side: Testimonial Card (30%) */}
        <div className="lg:col-span-3 space-y-6 text-left h-full flex flex-col justify-between">
          <div className="border-b border-brand-purple/5 pb-4">
            <h2 className="text-4xl font-black uppercase text-sticker text-brand-purple">
              REVIEWS
            </h2>
          </div>

          <motion.div 
            whileHover={{ y: -6 }}
            className="bg-white border border-brand-purple/5 p-8 rounded-[30px] shadow-md space-y-6 flex-grow flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#FFC531] fill-[#FFC531]" />
                ))}
              </div>
              
              <p className="text-brand-purple text-sm font-semibold leading-relaxed italic">
                &ldquo;Austropical has completely changed my mornings! The unsweetened açaí packs blend perfectly every single day.&rdquo;
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-brand-purple/5">
              <div className="w-10 h-10 rounded-full bg-brand-purple/10 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80" alt="Sarah" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-xs font-black text-brand-purple uppercase">Sarah K.</h4>
                <p className="text-[10px] font-bold text-brand-purple/50">Verified Customer, Sydney</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* SECTION 9 — Three Feature Cards (School Days, Sustainability Panther, Community snapshots, height same, radius 30px) */}
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
            className="bg-[#4D2677] rounded-[30px] border border-white/10 overflow-hidden flex flex-col justify-between shadow-md transition-all text-left p-8"
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

          {/* Card 2: Sustainability with Jungle Panther */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -8, boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.15)" }}
            className="bg-[#4D2677] rounded-[30px] border border-white/10 overflow-hidden flex flex-col justify-between shadow-md transition-all text-left p-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-white uppercase tracking-wide">PARTNERSHIPS FOR A BETTER PLANET</h3>
              <p className="text-white/80 text-xs font-medium leading-relaxed">
                Working with local farmers and communities to protect the Amazon and its people.
              </p>
              <div className="w-full aspect-[4/3] rounded-[24px] overflow-hidden border border-white/10 relative bg-black/40">
                {/* Unsplash Rainforest Jaguar/Panther visually matches specifications */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="https://images.unsplash.com/photo-1602491453977-1b3991288411?auto=format&fit=crop&w=400&q=80" 
                  alt="black jaguar panther amazon" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-white/10">
              <Link href="/sustainability" className="text-xs font-black text-brand-yellow uppercase tracking-widest hover:underline flex items-center gap-1">
                Learn More <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

          {/* Card 3: Community Snapshot Polaroid stack */}
          <motion.div 
            variants={itemVariants}
            className="bg-[#4D2677] rounded-[30px] border border-white/10 overflow-hidden flex flex-col justify-between shadow-md text-left p-8 relative"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-white uppercase tracking-wide">JOIN THE AUSTROPICAL COMMUNITY</h3>
              <p className="text-white/80 text-xs font-medium leading-relaxed">
                Share, inspire, empower. Be part of a global community eating better, living better.
              </p>
              
              {/* Polaroid snapshot deck stacks */}
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

      {/* SECTION 10 — Benefits Strip (Horizontal, white, 6 indicators evenly spaced) */}
      <section className="py-8 bg-white border-y border-[#2A1147]/5 overflow-x-auto no-scrollbar">
        <div className="max-w-container mx-auto px-6 flex items-center justify-between gap-12 whitespace-nowrap text-brand-purple">
          {[
            { icon: Truck, text: "Free Shipping" },
            { icon: ShieldCheck, text: "Secure Payments" },
            { icon: RotateCcw, text: "Easy Returns" },
            { icon: Award, text: "Loyalty Rewards" },
            { icon: Package, text: "Sustainable Packaging" },
            { icon: ThumbsUp, text: "Guarantee Approved" }
          ].map((val, idx) => {
            const IconComponent = val.icon;
            return (
              <div key={idx} className="flex items-center gap-2.5">
                <IconComponent className="w-5 h-5 text-brand-orange flex-shrink-0" />
                <span className="text-xs font-black uppercase tracking-widest">{val.text}</span>
              </div>
            );
          })}
        </div>
      </section>

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

      {/* SECTION 11 — Footer */}
      <Footer />
    </div>
  );
}
