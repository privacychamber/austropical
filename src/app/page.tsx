"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useStore } from "@/context/StoreContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Sparkles,
  ArrowRight,
  Leaf,
  Heart,
  Star,
  CheckCircle2,
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

export default function Homepage() {
  const { products, recipes, cms, addToCart, toggleWishlist, isInWishlist } = useStore();
  const [activeRecipe, setActiveRecipe] = useState<any>(null);
  
  // Custom Slider State for "OUR FAVOURITES"
  const [favIndex, setFavIndex] = useState(0);

  // Routine Category Selection filter state
  const [selectedRoutine, setSelectedRoutine] = useState("Morning");

  // GSAP animation container ref
  const mainRef = useRef<HTMLDivElement>(null);

  // Register GSAP ScrollTrigger
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const ctx = gsap.context(() => {
      // 1. Hero Animations (Entrance)
      gsap.fromTo(
        ".hero-text-anim",
        { opacity: 0, y: 50, filter: "blur(5px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, stagger: 0.15, ease: "power3.out" }
      );

      gsap.fromTo(
        ".hero-btn-anim",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, delay: 0.6, stagger: 0.1, ease: "back.out(1.7)" }
      );

      gsap.fromTo(
        ".hero-collage-anim",
        { opacity: 0, y: 60, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, delay: 0.4, ease: "power4.out" }
      );

      gsap.fromTo(
        ".hero-sticker-anim",
        { opacity: 0, scale: 0, rotate: -45 },
        { opacity: 1, scale: 1, rotate: 0, duration: 0.8, delay: 0.9, stagger: 0.12, ease: "back.out(2)" }
      );

      // 2. Goodness Section trigger
      gsap.fromTo(
        ".goodness-card-anim",
        { opacity: 0, y: 50 },
        {
          scrollTrigger: {
            trigger: ".goodness-trigger",
            start: "top 75%",
          },
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out"
        }
      );

      // 3. Featured Smoothie trigger
      gsap.fromTo(
        ".cubes-visual-anim",
        { opacity: 0, x: -60, rotate: -5 },
        {
          scrollTrigger: {
            trigger: ".cubes-trigger",
            start: "top 70%",
          },
          opacity: 1,
          x: 0,
          rotate: 0,
          duration: 1.2,
          ease: "power3.out"
        }
      );

      gsap.fromTo(
        ".cubes-content-anim",
        { opacity: 0, x: 60 },
        {
          scrollTrigger: {
            trigger: ".cubes-trigger",
            start: "top 70%",
          },
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out"
        }
      );

      // 4. Timeline (As it should be) trigger
      gsap.fromTo(
        ".timeline-step-anim",
        { opacity: 0, y: 40 },
        {
          scrollTrigger: {
            trigger: ".timeline-trigger",
            start: "top 75%",
          },
          opacity: 1,
          y: 0,
          stagger: 0.18,
          duration: 0.8,
          ease: "power3.out"
        }
      );

      // 5. Routine tabs trigger
      gsap.fromTo(
        ".routine-tab-anim",
        { opacity: 0, scale: 0.8, y: 20 },
        {
          scrollTrigger: {
            trigger: ".routine-trigger",
            start: "top 75%",
          },
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.08,
          duration: 0.6,
          ease: "power2.out"
        }
      );

      gsap.fromTo(
        ".routine-card-anim",
        { opacity: 0, x: 40 },
        {
          scrollTrigger: {
            trigger: ".routine-trigger",
            start: "top 75%",
          },
          opacity: 1,
          x: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out"
        }
      );

      // 6. Recipes Grid trigger
      gsap.fromTo(
        ".recipe-card-anim",
        { opacity: 0, y: 30 },
        {
          scrollTrigger: {
            trigger: ".recipes-trigger",
            start: "top 75%",
          },
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.7,
          ease: "power3.out"
        }
      );

      // 7. Promotion Cards
      gsap.fromTo(
        ".promo-card-anim",
        { opacity: 0, y: 40 },
        {
          scrollTrigger: {
            trigger: ".promo-trigger",
            start: "top 75%",
          },
          opacity: 1,
          y: 0,
          stagger: 0.18,
          duration: 0.8,
          ease: "power3.out"
        }
      );
    }, mainRef);

    return () => ctx.revert();
  }, []);

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

  // Routine categories tab configuration
  const routineTabs = [
    { id: "Morning", name: "Morning Boost", icon: Sun },
    { id: "Workout", name: "Workout Fuel", icon: Dumbbell },
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
    <div ref={mainRef} className="bg-[var(--background)] text-[var(--foreground)] min-h-screen relative overflow-x-hidden font-sans transition-colors duration-500">
      <Navbar />

      {/* SECTION 2 — Hero Banner */}
      <section className="relative min-h-screen pt-40 pb-28 bg-gradient-to-br from-[#7B2CBF] via-[#E9418A] to-[#FF7A00] text-white flex items-center overflow-hidden bg-leaf-pattern">
        {/* Soft background lighting element */}
        <div className="absolute top-10 right-10 w-[450px] h-[450px] bg-brand-yellow/15 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-white/10 rounded-full blur-[90px] pointer-events-none" />

        {/* Floating Fruit Photographic PNGs */}
        <div className="absolute left-[8%] top-[25%] pointer-events-none z-10 animate-float-slow hidden md:block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://pngimg.com/uploads/blueberries/blueberries_PNG11.png" alt="blueberry" className="w-14 h-14 object-contain drop-shadow-2xl opacity-90" />
        </div>

        <div className="absolute right-[10%] top-[20%] pointer-events-none z-10 animate-float-fast hidden md:block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://pngimg.com/uploads/strawberry/strawberry_PNG40.png" alt="strawberry" className="w-16 h-16 object-contain drop-shadow-2xl opacity-90" />
        </div>

        <div className="absolute left-[5%] bottom-[20%] pointer-events-none z-10 animate-float-reverse hidden md:block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://pngimg.com/uploads/banana/banana_PNG841.png" alt="banana" className="w-14 h-14 object-contain drop-shadow-2xl opacity-90" />
        </div>

        <div className="absolute right-[6%] bottom-[25%] pointer-events-none z-10 animate-float-slow hidden md:block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://pngimg.com/uploads/mint/mint_PNG9.png" alt="mint leaf" className="w-12 h-12 object-contain drop-shadow-2xl opacity-90" />
        </div>

        <div className="max-w-container mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Text Column (45%) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="relative inline-block">
              {/* Doodle Arrows on the Left */}
              <svg width="40" height="70" viewBox="0 0 40 70" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="absolute -left-14 top-2 opacity-80 hidden sm:block text-white/90">
                <path d="M10,8 Q28,10 32,12" />
                <path d="M6,32 Q25,35 28,38" />
                <path d="M10,56 Q28,58 32,60" />
                <path d="M22,5 L32,12 L22,18" />
                <path d="M18,30 L28,38 L18,44" />
                <path d="M22,53 L32,60 L22,66" />
              </svg>
              <h1 className="text-6xl md:text-[88px] font-black tracking-tight leading-[0.95] text-white text-sticker hero-text-anim uppercase">
                HEALTH FOODS <br />
                <span className="text-[#FFC531]">THAT MOVE</span> <br />
                WITH YOU
              </h1>
            </div>
            
            <p className="text-white/95 text-base md:text-lg font-semibold max-w-md leading-relaxed hero-text-anim">
              Wildly natural superfoods. Real nutrition. <br />
              Feel good, move more, live better.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/shop"
                className="px-8 py-4 bg-[#FFC531] hover:bg-[#FF9F1C] text-[#2A1147] font-black text-sm uppercase tracking-widest rounded-full transition-all shadow-md hover:shadow-lg flex items-center gap-2 hero-btn-anim hover:scale-105"
              >
                <span>SHOP COLLECTION</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <Link
                href="/about"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-black text-sm uppercase tracking-widest rounded-full transition-all duration-300 border border-white/20 flex items-center gap-4 backdrop-blur-sm hero-btn-anim hover:scale-105"
              >
                <span>DISCOVER OUR STORY</span>
                <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <Play className="w-3.5 h-3.5 text-[#E9418A] fill-[#E9418A] translate-x-[1.5px]" />
                </div>
              </Link>
            </div>
          </div>

          {/* Right Product Composition Column (55%, 650px container with overlapping details) */}
          <div className="lg:col-span-7 flex justify-center relative pt-10 lg:pt-0">
            <div className="relative w-full max-w-[650px] aspect-[4/3] flex items-center justify-center hero-collage-anim">
              
              {/* Sticker 1: ESSENTIAL MINERALS spiky starburst SVG */}
              <div className="absolute top-[28%] left-[-6%] md:left-[4%] z-20 rotate-[-8deg] hero-sticker-anim scale-95 md:scale-100">
                <svg viewBox="0 0 100 100" width="115" height="115" className="drop-shadow-lg filter">
                  <path d="M50 0 L58 10 L70 5 L73 17 L85 15 L83 27 L93 29 L87 40 L95 45 L87 54 L92 65 L82 70 L83 82 L71 83 L69 95 L58 92 L50 100 L42 92 L31 95 L29 83 L17 82 L18 70 L8 65 L13 54 L5 45 L13 40 L7 29 L17 27 L15 15 L27 17 L30 5 L42 10 Z" fill="#FFC531" stroke="#2A1147" strokeWidth="2.5" />
                  <text x="50" y="47" textAnchor="middle" fill="#2A1147" fontSize="8" fontWeight="900" fontFamily="Fredoka, sans-serif">ESSENTIAL</text>
                  <text x="50" y="58" textAnchor="middle" fill="#2A1147" fontSize="8" fontWeight="900" fontFamily="Fredoka, sans-serif">MINERALS</text>
                </svg>
              </div>

              {/* Sticker 2: 100% VEGAN circular stamp SVG with palm tree */}
              <div className="absolute top-[-5%] right-[16%] md:right-[20%] z-20 hero-sticker-anim scale-95 md:scale-100">
                <svg viewBox="0 0 100 100" width="105" height="105" className="animate-spin-slow drop-shadow-md">
                  <circle cx="50" cy="50" r="45" fill="#FFC531" stroke="#2A1147" strokeWidth="3" />
                  <circle cx="50" cy="50" r="38" fill="none" stroke="#2A1147" strokeWidth="1.5" strokeDasharray="3 2.5" />
                  <path d="M50 72 L50 45 Q50 35 44 32 M50 50 Q50 35 56 32 M50 55 Q42 42 38 48 M50 55 Q58 42 62 48" stroke="#2A1147" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                  <path id="vegan-text-path-hero" d="M 50,50 m -29,0 a 29,29 0 1,1 58,0 a 29,29 0 1,1 -58,0" fill="none" />
                  <text fill="#2A1147" fontSize="8" fontWeight="900" letterSpacing="1.8">
                    <textPath href="#vegan-text-path-hero" startOffset="0%">★ 100% VEGAN ★ 100% VEGAN</textPath>
                  </text>
                </svg>
              </div>

              {/* Sticker 3: GLUTEN FREE spiky starburst SVG */}
              <div className="absolute bottom-[6%] right-[-5%] md:right-[2%] z-20 rotate-[12deg] hero-sticker-anim scale-95 md:scale-100">
                <svg viewBox="0 0 100 100" width="115" height="115" className="drop-shadow-lg filter">
                  <path d="M50 0 L58 10 L70 5 L73 17 L85 15 L83 27 L93 29 L87 40 L95 45 L87 54 L92 65 L82 70 L83 82 L71 83 L69 95 L58 92 L50 100 L42 92 L31 95 L29 83 L17 82 L18 70 L8 65 L13 54 L5 45 L13 40 L7 29 L17 27 L15 15 L27 17 L30 5 L42 10 Z" fill="#E9418A" stroke="#ffffff" strokeWidth="2.5" />
                  <text x="50" y="47" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="900" fontFamily="Fredoka, sans-serif">GLUTEN</text>
                  <text x="50" y="58" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="900" fontFamily="Fredoka, sans-serif">FREE</text>
                </svg>
              </div>

              {/* Mossy Ledge Collage visual containing tub, cup, smoothie glass & fruits */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/range-ledge.png"
                  alt="Austropical product collage on ledge"
                  className="w-full h-auto max-h-[460px] object-contain drop-shadow-2xl z-10"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Wavy bottom divider transition */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] text-[var(--background)] fill-[var(--background)] transition-colors duration-500">
            <path d="M0,60 C300,110 700,20 1200,80 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* SECTION 3 — Trust Bar */}
      <section className="h-[90px] bg-[var(--card-bg)] border-b border-[var(--border-color)] flex items-center justify-center transition-colors duration-500">
        <div className="max-w-container mx-auto px-6 md:px-12 w-full flex items-center justify-center gap-12 md:gap-20 whitespace-nowrap overflow-x-auto no-scrollbar">
          {[
            {
              name: "100% Real Fruit",
              icon: (
                <svg className="w-5 h-5 text-[var(--foreground)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              )
            },
            {
              name: "No Added Sugar",
              icon: (
                <svg className="w-5 h-5 text-[var(--foreground)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
              )
            },
            {
              name: "Plant Based",
              icon: (
                <svg className="w-5 h-5 text-[var(--foreground)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              )
            },
            {
              name: "Gluten Free",
              icon: (
                <svg className="w-5 h-5 text-[var(--foreground)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )
            },
            {
              name: "Australian Made",
              icon: (
                <svg className="w-5 h-5 text-[var(--foreground)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2m4-3.5a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )
            }
          ].map((item, idx) => (
            <div key={item.name} className="flex items-center gap-2.5">
              <div className="flex-shrink-0">{item.icon}</div>
              <span className="text-sm font-black text-[var(--foreground)] uppercase tracking-widest">{item.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4 — Goodness Cards */}
      <section className="py-28 max-w-container mx-auto px-6 md:px-12 text-center space-y-16 relative goodness-trigger pt-20">
        
        {/* Top organic wave divider separating Section 3 and Section 4 */}
        <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[45px] text-[var(--card-bg)] fill-[var(--card-bg)] transition-colors duration-500">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,42.4V0Z"></path>
          </svg>
        </div>

        {/* Floating Fruit Decoration left/right */}
        <div className="absolute top-24 left-6 pointer-events-none opacity-85 hidden md:block animate-float-slow">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://pngimg.com/uploads/strawberry/strawberry_PNG40.png" alt="strawberry" className="w-14 h-14 object-contain drop-shadow-2xl opacity-90" />
        </div>
        <div className="absolute bottom-24 right-6 pointer-events-none opacity-85 hidden md:block animate-float-reverse">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://pngimg.com/uploads/blueberries/blueberries_PNG11.png" alt="blueberry" className="w-14 h-14 object-contain drop-shadow-2xl opacity-90" />
        </div>

        <div className="space-y-4 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-sticker text-brand-purple">
            SQUEEZE IN SOME GOODNESS
          </h2>
        </div>

        {/* 4 Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {[
            {
              title: "AÇAÍ SUPERBERRY",
              desc: "Packed with antioxidants, healthy fats and natural energy.",
              color: "text-brand-purple bg-brand-purple/10 border-brand-purple/20"
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
              color: "text-brand-pink bg-brand-pink/10 border-brand-pink/20"
            }
          ].map((item, idx) => (
            <div
              key={item.title}
              className="w-full max-w-[300px] h-[320px] bg-[var(--card-bg)] border border-[var(--border-color)] p-8 rounded-[28px] text-center flex flex-col justify-between group shadow-sm hover:shadow-md transition-all duration-300 goodness-card-anim hover:-translate-y-2 cursor-pointer"
            >
              <div className="space-y-4 flex flex-col items-center">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center ${item.color.split(" ")[1]}`}>
                  <Leaf className={`w-7 h-7 ${item.color.split(" ")[0]}`} />
                </div>
                <h3 className={`text-lg font-black tracking-wide uppercase ${item.color.split(" ")[0]}`}>{item.title}</h3>
                <p className="text-[var(--foreground)]/75 text-xs font-semibold leading-relaxed line-clamp-3">{item.desc}</p>
              </div>
              <div className="pt-2">
                <span className="text-[10px] font-black text-brand-orange uppercase tracking-wider cursor-pointer group-hover:underline flex items-center justify-center gap-1">
                  Read Benefit <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 4 dots row indicator */}
        <div className="flex items-center justify-center gap-2.5 pt-4">
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--foreground)]" />
          <span className="w-2.5 h-2.5 rounded-full border border-[var(--foreground)]" />
          <span className="w-2.5 h-2.5 rounded-full border border-[var(--foreground)]" />
          <span className="w-2.5 h-2.5 rounded-full border border-[var(--foreground)]" />
        </div>
      </section>

      {/* SECTION 5 — Featured Product Section (Smoothie Cubes) */}
      <section className="py-28 bg-gradient-to-br from-[#FF9F1C] to-[#FFC531] text-white relative overflow-hidden cubes-trigger">
        {/* Soft wave top divider */}
        <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-20">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[30px] text-[var(--background)] fill-[var(--background)] transition-colors duration-500">
            <path d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,120L1320,120C1200,120,960,120,720,120C480,120,240,120,120,120L0,120Z"></path>
          </svg>
        </div>

        <div className="max-w-container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Column: Product Visual Render */}
          <div className="lg:col-span-4 flex justify-center relative cubes-visual-anim">
            <div className="relative w-full max-w-[380px] aspect-square flex items-center justify-center">
              {/* Product tub */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/acai-zero-sugar-original.png"
                alt="Featured Product"
                className="w-full h-auto object-contain drop-shadow-2xl z-10"
              />
              {/* Floating strawberry decoration */}
              <div className="absolute -bottom-4 -left-4 bg-brand-yellow text-brand-purple rounded-full px-3 py-1 font-black text-[10px] shadow-md z-20 rotate-[-12deg] border border-brand-purple/20">
                ★ 100% REAL FRUIT ★
              </div>
            </div>
          </div>

          {/* Center Column: Descriptions, checkmarks & CTA */}
          <div className="lg:col-span-5 text-left space-y-5 cubes-content-anim">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#2A1147] bg-[#FFC531] px-3 py-1 rounded-full border border-[#2A1147]">
              BLEND. SIP. GLOW. EVERY DAY.
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-brand-purple uppercase leading-none">
              Smoothie Cubes
            </h2>
            <p className="text-[#2A1147] text-sm md:text-base font-semibold leading-relaxed">
              Made with organic açai and superfruits for a natural boost of energy, immunity and glow.
            </p>

            <ul className="space-y-2.5">
              {[
                "Certified organic & sustainably sourced",
                "Antioxidant-rich for immunity & skin health",
                "Healthy fats for lasting energy",
                "No added sugar or preservatives",
                "Perfect for smoothies, bowls & more"
              ].map((bullet, i) => (
                <li key={i} className="flex items-start gap-2 text-xs font-bold text-brand-purple">
                  <span className="w-4 h-4 rounded-full bg-brand-purple text-white flex items-center justify-center text-[9px] mt-0.5 mr-1 flex-shrink-0">✓</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Link 
                href="/shop"
                className="px-6 py-3.5 bg-[#2A1147] hover:bg-[#4D2677] text-white font-black text-xs uppercase tracking-widest rounded-full transition-colors shadow-md inline-flex items-center gap-2"
              >
                <span>DISCOVER SMOOTHIE CUBES</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Badges pills */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              {["ORGANIC", "SUSTAINABLE", "NUTRIENT RICH"].map((badge) => (
                <span key={badge} className="px-3 py-1 border-2 border-brand-purple/40 text-brand-purple rounded-full text-[9px] font-black tracking-wider">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Smoothie bowl picture circle */}
          <div className="lg:col-span-3 flex justify-center cubes-content-anim">
            <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-white shadow-2xl relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/mornings-made-smoothie.jpg" 
                alt="Açai bowl topping banana strawberry" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — Timeline (AÇAI AS IT SHOULD BE.) */}
      <section className="py-28 bg-[#2A1147] bg-leaf-pattern text-white relative overflow-hidden timeline-trigger">
        {/* Soft wave top divider */}
        <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-20">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[30px] text-[var(--background)] fill-[var(--background)] transition-colors duration-500">
            <path d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,120L1320,120C1200,120,960,120,720,120C480,120,240,120,120,120L0,120Z"></path>
          </svg>
        </div>

        <div className="max-w-container mx-auto px-6 md:px-12 text-center space-y-16 relative z-10">
          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-sticker">
              AÇAÍ AS IT SHOULD BE.
            </h2>
            <p className="text-white/70 text-sm font-semibold">From the Amazon to your bowl. Pure. Powerful. Packed with purpose.</p>
          </div>

          {/* horizontal steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative items-start">
            {[
              { title: "SOURCED WITH CARE", desc: "Handpicked from the Amazon rainforest.", icon: "/mornings-made-smoothie.jpg" },
              { title: "FROZEN FRESH", desc: "Frozen at the peak of ripeness to lock in nutrients.", icon: "/acai-zero-sugar-original.png" },
              { title: "READY TO ENJOY", desc: "Delivered to you fresh & delicious.", icon: "/range-ledge.png" },
              { title: "FEEL THE DIFFERENCE", desc: "More energy, better mood, healthier you.", icon: "/acai-passionfruit-legs.png" }
            ].map((node, i) => (
              <div 
                key={node.title}
                className="relative flex flex-col items-center space-y-4 timeline-step-anim"
              >
                <div className="w-24 h-24 rounded-full bg-white/10 border border-white/20 p-2 flex items-center justify-center shadow-lg relative group overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={node.icon} alt={node.title} className="w-full h-full object-contain" />
                </div>
                
                <h3 className="text-sm font-black text-brand-yellow uppercase tracking-wide">{node.title}</h3>
                <p className="text-white/70 text-xs font-semibold max-w-[200px] mx-auto">{node.desc}</p>
                
                {/* Connection arrows */}
                {i < 3 && (
                  <div className="absolute top-12 -right-4 translate-y-[-50%] text-brand-orange text-2xl hidden md:block z-20">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Soft wave bottom divider transition */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[30px] text-[var(--background)] fill-[var(--background)] transition-colors duration-500">
            <path d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,120L1320,120C1200,120,960,120,720,120C480,120,240,120,120,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* SECTION 7 — Find Your Routine & Built Around Real Fruit */}
      <section className="py-24 max-w-container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start bg-[var(--card-bg)] border border-[var(--border-color)] rounded-[32px] p-8 md:p-12 transition-colors duration-500 routine-trigger relative overflow-hidden">
        
        {/* Floating Fruit PNGs */}
        <div className="absolute top-8 left-4 pointer-events-none opacity-80 hidden md:block animate-float-reverse">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://pngimg.com/uploads/banana/banana_PNG841.png" alt="banana" className="w-12 h-12 object-contain drop-shadow-md opacity-90" />
        </div>
        <div className="absolute bottom-8 right-4 pointer-events-none opacity-80 hidden md:block animate-float-slow">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://pngimg.com/uploads/mint/mint_PNG9.png" alt="mint leaf" className="w-10 h-10 object-contain drop-shadow-md opacity-90" />
        </div>
        
        {/* Left Column: Routine category selector list */}
        <div className="lg:col-span-5 space-y-8 text-left">
          <div className="space-y-2">
            <h2 className="text-4xl font-black uppercase text-[var(--foreground)]">
              FIND YOUR ROUTINE
            </h2>
          </div>
          
          <div className="flex flex-col gap-3">
            {routineTabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedRoutine(tab.id)}
                  className={`flex items-center gap-4 px-5 py-3 rounded-full border transition-all text-left routine-tab-anim ${
                    selectedRoutine === tab.id
                      ? "bg-brand-purple text-white border-brand-purple scale-102"
                      : "bg-[var(--background)] text-[var(--foreground)] hover:opacity-90 border-[var(--border-color)]"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    selectedRoutine === tab.id ? "bg-[#FFC531] text-[#2A1147]" : "bg-brand-purple/10 text-brand-purple"
                  }`}>
                    <IconComponent className="w-4.5 h-4.5" />
                  </div>
                  <span className="font-black text-xs uppercase tracking-wider">{tab.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Slide cards */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <h2 className="text-2xl font-black text-[var(--foreground)] uppercase tracking-tight">
            BUILT AROUND REAL FRUIT
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredProducts.slice(0, 3).map((prod) => (
              <div
                key={prod.id}
                className="bg-[var(--background)] text-[var(--foreground)] rounded-[28px] p-5 border border-[var(--border-color)] shadow-sm flex flex-col justify-between text-center aspect-[3/4.2] group cursor-pointer routine-card-anim transition-all duration-500"
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
                    <p className="text-[10px] font-bold text-[var(--foreground)]/65">{prod.category}</p>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-[var(--border-color)]">
                    <span className="text-sm font-black text-brand-orange">${prod.price}</span>
                    <button 
                      onClick={() => addToCart(prod, 1)}
                      className="px-3 py-1 bg-brand-purple hover:bg-brand-orange hover:text-brand-purple text-white text-[10px] font-black uppercase tracking-wider rounded-full transition-colors"
                    >
                      + Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
            
            {filteredProducts.length === 0 && (
              <div className="col-span-full py-16 text-center text-[var(--foreground)]/50 font-bold">
                No products found matching this routine filter.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 8 — Recipes + Testimonials */}
      <section className="py-24 max-w-container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-10 gap-12 items-start recipes-trigger relative overflow-hidden">
        
        {/* Floating Fruit PNGs */}
        <div className="absolute top-4 left-2 pointer-events-none opacity-80 hidden md:block animate-float-slow">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://pngimg.com/uploads/strawberry/strawberry_PNG40.png" alt="strawberry" className="w-12 h-12 object-contain drop-shadow-md opacity-90" />
        </div>
        <div className="absolute bottom-8 right-2 pointer-events-none opacity-80 hidden md:block animate-float-fast">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://pngimg.com/uploads/blueberries/blueberries_PNG11.png" alt="blueberry" className="w-12 h-12 object-contain drop-shadow-md opacity-90" />
        </div>

        {/* Left Side: Recipes Slider (70%) */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-4">
            <h2 className="text-3xl font-black uppercase text-[var(--foreground)]">
              RECIPES & INSPIRATION
            </h2>
            <Link href="/recipes" className="text-xs font-black text-brand-orange uppercase hover:underline">
              VIEW ALL RECIPES →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {recipes.slice(0, 5).map((recipe) => (
              <div
                key={recipe.id}
                onClick={() => setActiveRecipe(recipe)}
                className="bg-[var(--card-bg)] text-[var(--foreground)] rounded-card overflow-hidden border border-[var(--border-color)] shadow-sm transition-all duration-300 cursor-pointer group recipe-card-anim"
              >
                <div className="aspect-square w-full overflow-hidden relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="text-[8px] font-black bg-brand-purple text-white px-1.5 py-0.5 rounded-full">
                      {recipe.time}
                    </span>
                  </div>
                </div>
                <div className="p-3 text-left space-y-1">
                  <h4 className="text-xs font-black text-[var(--foreground)] group-hover:text-brand-orange transition-colors line-clamp-2">
                    {recipe.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Testimonial Card (30%) */}
        <div className="lg:col-span-3 space-y-6 text-left testimonial-card">
          <div className="border-b border-[var(--border-color)] pb-4">
            <h2 className="text-3xl font-black uppercase text-[var(--foreground)]">
              LOVED BY THOUSANDS
            </h2>
          </div>

          <div className="bg-[var(--card-bg)] text-[var(--foreground)] border border-[var(--border-color)] p-6 rounded-[28px] shadow-sm space-y-4 transition-all duration-500">
            <div className="flex gap-1 text-[#FFC531]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            
            <p className="text-[var(--foreground)]/80 text-xs font-semibold leading-relaxed italic">
              &ldquo;Austropical has completely changed my mornings. Fresh, convenient and absolutely delicious!&rdquo;
            </p>

            <div className="flex items-center justify-between gap-3 pt-3 border-t border-[var(--border-color)]">
              <div>
                <h4 className="text-xs font-black text-[var(--foreground)] uppercase">— Jessica M.</h4>
              </div>
              <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80" alt="Jessica" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 — Three Columns Promotion */}
      <section className="py-24 max-w-container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 promo-trigger relative overflow-hidden">
        
        {/* Floating Fruit PNGs */}
        <div className="absolute top-6 left-2 pointer-events-none opacity-80 hidden md:block animate-float-reverse">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://pngimg.com/uploads/banana/banana_PNG841.png" alt="banana" className="w-12 h-12 object-contain drop-shadow-md opacity-90" />
        </div>
        <div className="absolute bottom-12 right-2 pointer-events-none opacity-80 hidden md:block animate-float-slow">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://pngimg.com/uploads/mint/mint_PNG9.png" alt="mint leaf" className="w-10 h-10 object-contain drop-shadow-md opacity-90" />
        </div>

        {/* Card 1: School Days */}
        <div className="bg-[#4D2677]/20 rounded-[28px] border border-[var(--border-color)] flex flex-col justify-between shadow-sm transition-all text-left p-8 promo-card-anim">
          <div className="space-y-4">
            <h3 className="text-2xl font-black text-[var(--foreground)] uppercase">MADE FOR SCHOOL DAYS</h3>
            <p className="text-[var(--foreground)]/80 text-xs font-medium leading-relaxed">
              Nutritious, tasty and made for growing minds and busy days.
            </p>
            <div className="w-full aspect-[4/3] rounded-[24px] overflow-hidden border border-[var(--border-color)] bg-white p-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/acai-passionfruit-legs.png" alt="school days kids tubs" className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="pt-4 border-t border-[var(--border-color)] mt-4">
            <Link href="/shop" className="text-xs font-black text-brand-orange uppercase hover:underline flex items-center gap-1">
              SHOP NOW →
            </Link>
          </div>
        </div>

        {/* Card 2: Partnerships */}
        <div className="bg-[#4D2677]/20 rounded-[28px] border border-[var(--border-color)] flex flex-col justify-between shadow-sm transition-all text-left p-8 promo-card-anim">
          <div className="space-y-4">
            <h3 className="text-2xl font-black text-[var(--foreground)] uppercase">PARTNERSHIPS FOR A BETTER PLANET</h3>
            <p className="text-[var(--foreground)]/80 text-xs font-medium leading-relaxed">
              Working with local farmers and communities to protect the Amazon.
            </p>
            <div className="w-full aspect-[4/3] rounded-[24px] overflow-hidden border border-[var(--border-color)] relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1602491453977-1b3991288411?auto=format&fit=crop&w=400&q=80" alt="jaguar" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="pt-4 border-t border-[var(--border-color)] mt-4">
            <Link href="/sustainability" className="text-xs font-black text-brand-orange uppercase hover:underline flex items-center gap-1">
              LEARN MORE →
            </Link>
          </div>
        </div>

        {/* Card 3: Join community rotated photos */}
        <div className="bg-[#4D2677]/20 rounded-[28px] border border-[var(--border-color)] flex flex-col justify-between shadow-sm text-left p-8 promo-card-anim">
          <div className="space-y-4">
            <h3 className="text-2xl font-black text-[var(--foreground)] uppercase">JOIN THE AUSTROPICAL COMMUNITY</h3>
            <p className="text-[var(--foreground)]/80 text-xs font-medium leading-relaxed">
              Share, inspire, empower. Be part of a global community.
            </p>
            
            <div className="relative h-32 w-full flex items-center justify-center overflow-visible mt-2">
              <div className="absolute left-2 w-20 bg-white p-1 pb-3 shadow-md border border-black/5 rotate-[-8deg] rounded-sm">
                <div className="aspect-square bg-gray-100 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=150&q=80" alt="pic1" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="absolute right-2 w-20 bg-white p-1 pb-3 shadow-md border border-black/5 rotate-[8deg] rounded-sm">
                <div className="aspect-square bg-gray-100 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=150&q=80" alt="pic2" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="absolute w-20 bg-white p-1 pb-3 shadow-lg border border-black/5 rounded-sm">
                <div className="aspect-square bg-gray-100 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/mornings-made-smoothie.jpg" alt="pic3" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-4 border-t border-[var(--border-color)] mt-4 flex items-center justify-between text-[11px] font-bold text-[var(--foreground)]/70">
            <span>FOLLOW US →</span>
            <div className="flex gap-2">
              <span className="hover:text-brand-orange cursor-pointer">IG</span>
              <span className="hover:text-brand-orange cursor-pointer">FB</span>
              <span className="hover:text-brand-orange cursor-pointer">YT</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 — Benefits Strip */}
      <section className="py-6 bg-[var(--card-bg)] border-y border-[var(--border-color)] overflow-x-auto no-scrollbar transition-colors duration-500">
        <div className="max-w-container mx-auto px-6 flex items-center justify-between gap-12 whitespace-nowrap text-[var(--foreground)]">
          {[
            { icon: Truck, title: "FREE SHIPPING", detail: "On orders over $75" },
            { icon: ShieldCheck, title: "SECURE PAYMENTS", detail: "100% Safe & Encrypted" },
            { icon: RotateCcw, title: "30 DAY RETURNS", detail: "Hassle-Free Returns" },
            { icon: Award, title: "LOYALTY REWARDS", detail: "Earn points & save" },
            { icon: Package, title: "SUSTAINABLE PACKAGING", detail: "Good for you, good for Earth" }
          ].map((val, idx) => {
            const IconComponent = val.icon;
            return (
              <div key={idx} className="flex items-center gap-2.5">
                <IconComponent className="w-5 h-5 text-brand-orange flex-shrink-0" />
                <div className="text-left">
                  <p className="text-[10px] font-black uppercase tracking-widest leading-none">{val.title}</p>
                  <p className="text-[9px] font-bold text-[var(--foreground)]/60 leading-none mt-1">{val.detail}</p>
                </div>
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
                <h4 className="text-sm font-black text-[#2A1147] uppercase tracking-widest border-b border-brand-purple/10 pb-1">
                  Ingredients
                </h4>
                <ul className="list-disc pl-5 space-y-1.5 text-brand-purple/80 text-sm font-semibold">
                  {activeRecipe.ingredients.map((ing: string, i: number) => (
                    <li key={i}>{ing}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-black text-[#2A1147] uppercase tracking-widest border-b border-brand-purple/10 pb-1">
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
