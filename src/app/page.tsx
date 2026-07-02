"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useStore, Product } from "@/context/StoreContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ShoppingBag,
  ArrowRight,
  Leaf,
  Heart,
  Star,
  CheckCircle2,
  Clock,
  Flame,
  Activity,
  ChevronLeft,
  ChevronRight,
  Edit2,
  X
} from "lucide-react";

const InstagramIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);


export default function Homepage() {
  const { products, recipes, cms, addToCart, toggleWishlist, isInWishlist } = useStore();
  const [activeRoutine, setActiveRoutine] = useState("Morning Boost");
  const [activeRecipe, setActiveRecipe] = useState<any>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Animations states for floating items
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const routines = [
    { name: "Morning Boost", desc: "Energy focused snacks to kickstart your schedule.", productIds: ["acai-superberry", "smoothie-cubes"] },
    { name: "Workout Fuel", desc: "Amino-rich and omega-packed muscle recovery blends.", productIds: ["smoothie-cubes", "green-boost"] },
    { name: "Healthy Snacks", desc: "Low calorie, high satisfaction fruit treats.", productIds: ["mango-tropical", "dragon-fruit"] },
    { name: "Breakfast", desc: "Full meal superfood bowls and quick prep parfaits.", productIds: ["acai-superberry", "acai-packs"] },
    { name: "Desserts", desc: "Indulgent guilt-free nice creams and parfaits.", productIds: ["acai-superberry", "dragon-fruit"] },
    { name: "Wellness", desc: "Antioxidant protection and skin radiance boosters.", productIds: ["dragon-fruit", "green-boost"] }
  ];

  const highlights = [
    { title: "Açaí Superberry", text: "Packed with antioxidants, healthy fats, and natural energy.", color: "border-brand-pink text-brand-pink", iconBg: "bg-brand-pink/15" },
    { title: "Pure & Natural", text: "No artificial colors, flavors, or preservatives. Just real fruit.", color: "border-brand-orange text-brand-orange", iconBg: "bg-brand-orange/15" },
    { title: "Frozen at Peak", text: "Our superfruits are flash-frozen to lock in nutrients and flavor.", color: "border-brand-green text-brand-green", iconBg: "bg-brand-green/15" },
    { title: "Good For You", text: "Plant-based, gluten-free, dairy-free, and made for every lifestyle.", color: "border-brand-yellow text-brand-yellow", iconBg: "bg-brand-yellow/15" }
  ];

  const storySteps = [
    { title: "Sourced with Care", text: "Handpicked from sustainable organic cooperatives in the Amazon rainforest.", image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=300&q=80" },
    { title: "Frozen Fresh", text: "Processed and flash-frozen at peak ripeness to lock in active nutrients.", image: "https://images.unsplash.com/photo-1628557044797-f21a177c37ec?auto=format&fit=crop&w=300&q=80" },
    { title: "Ready to Enjoy", text: "Delivered straight to you, pre-portioned and ready to blend or scoop.", image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=300&q=80" },
    { title: "Feel the Difference", text: "Experience more energy, a clear mind, and vibrant skin radiance.", image: "https://images.unsplash.com/photo-1527324688151-0e627063f2b1?auto=format&fit=crop&w=300&q=80" }
  ];

  const testimonials = [
    { text: "Austropical has completely changed my mornings. Fresh, convenient, and absolutely delicious! I pop the smoothie cubes in my oat milk every single day.", author: "Jessica M.", role: "Verified Customer", rating: 5, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" },
    { text: "Best acai I've ever had outside of Brazil! Naturally sweet and full of nutrients. Highly recommend the unsweetened pure packs for making custom bowls.", author: "Daniel K.", role: "Açaí Enthusiast", rating: 5, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" },
    { text: "Love that it's 100% real fruit with no hidden preservatives. Perfect for my kids' after-school snacks. They adore the dragon fruit and mango blend.", author: "Sarah T.", role: "Mother of Two", rating: 5, avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80" }
  ];

  const selectedRoutineProducts = products.filter(p =>
    routines.find(r => r.name === activeRoutine)?.productIds.includes(p.id)
  );

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-brand-cream text-brand-purple min-h-screen relative overflow-x-hidden font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 md:py-48 flex items-center justify-between min-h-screen bg-[#2A1147] text-white">
        {/* Parallax fruits & leaves */}
        <div
          className="absolute top-24 left-10 w-24 h-24 pointer-events-none transition-transform duration-300 opacity-60 hidden md:block"
          style={{ transform: `translate(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px)` }}
        >
          <Leaf className="w-full h-full text-brand-green fill-brand-green/20 rotate-45" />
        </div>
        <div
          className="absolute bottom-20 left-1/3 w-16 h-16 pointer-events-none transition-transform duration-300 opacity-40 hidden md:block"
          style={{ transform: `translate(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px)` }}
        >
          <div className="w-6 h-6 rounded-full bg-brand-pink shadow-lg" />
        </div>
        <div
          className="absolute top-1/3 right-1/4 w-20 h-20 pointer-events-none transition-transform duration-300 opacity-60 hidden md:block"
          style={{ transform: `translate(${mousePos.x * -0.3}px, ${mousePos.y * -0.3}px)` }}
        >
          <div className="w-8 h-8 rounded-full bg-brand-orange shadow-lg" />
        </div>

        {/* Ambient background glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-pink/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-container mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-btn">
              <Sparkles className="w-4 h-4 text-brand-orange animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-brand-yellow">
                Australia&apos;s Premium Superfoods
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black font-display leading-[1.05] tracking-tight">
              {cms.heroTitle.split(" ").slice(0, -2).join(" ")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-yellow">
                {cms.heroTitle.split(" ").slice(-2).join(" ")}
              </span>
            </h1>

            <p className="text-white/80 text-lg md:text-xl font-medium max-w-xl leading-relaxed">
              {cms.heroSubtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
              <Link
                href="/shop"
                className="px-8 py-4 bg-brand-orange hover:bg-brand-yellow text-brand-purple font-bold text-base rounded-btn transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2 group"
              >
                <span>Shop Collection</span>
                <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-base rounded-btn transition-all duration-300 border border-white/10 flex items-center gap-2"
              >
                <span>Discover the Story</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Right Product Image render */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div
              className="relative w-72 h-72 md:w-96 md:h-96 transition-transform duration-300"
              style={{ transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)` }}
            >
              {/* Outer decorative rings */}
              <div className="absolute inset-0 border-2 border-white/5 rounded-full scale-110 animate-spin-slow pointer-events-none" />
              <div className="absolute inset-0 border border-brand-orange/20 rounded-full scale-125 pointer-events-none" />

              {/* Main product representation */}
              <div className="w-full h-full rounded-full bg-gradient-to-tr from-brand-purple-light to-brand-pink/20 p-6 flex items-center justify-center relative overflow-hidden shadow-2xl">
                {/* Background image representing vibrant superfoods */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=600&q=80"
                  alt="Açaí Bowl"
                  className="w-full h-full object-cover rounded-full mix-blend-luminosity hover:mix-blend-normal transition-all duration-500 hover:scale-105"
                />
                
                {/* Glowing Overlay badge */}
                <div className="absolute -top-3 -right-3 bg-brand-orange text-brand-purple text-xs font-black px-4 py-3 rounded-full shadow-lg rotate-12 uppercase tracking-wider animate-bounce">
                  Pure Goodness
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Badges / Brand Values Row */}
      <section className="bg-brand-cream border-y border-brand-purple/10 py-6 overflow-x-auto no-scrollbar">
        <div className="max-w-container mx-auto px-6 flex items-center justify-between gap-12 whitespace-nowrap">
          {["100% Real Fruit", "No Added Sugar", "Plant Based", "Gluten Free", "Dairy Free", "Australian Made"].map((val, idx) => (
            <div key={val} className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" />
              <span className="text-sm font-black text-brand-purple uppercase tracking-wider">{val}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Squeeze In Some Goodness (Product Highlights) */}
      <section className="py-24 max-w-container mx-auto px-6 md:px-12 text-center space-y-16">
        <div className="space-y-4 max-w-2xl mx-auto">
          <h2 className="text-xs font-black text-brand-orange uppercase tracking-widest">Squeeze In Some Goodness</h2>
          <p className="text-4xl md:text-5xl font-black font-display text-brand-purple tracking-tight">
            Nourish Your Body With Pure Ingredients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => (
            <div
              key={item.title}
              className="glass-card p-8 rounded-card text-left space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className={`w-12 h-12 rounded-btn ${item.iconBg} flex items-center justify-center`}>
                  <Leaf className={`w-6 h-6 ${item.color.split(" ")[1]}`} />
                </div>
                <h3 className="text-xl font-bold font-display text-brand-purple">{item.title}</h3>
                <p className="text-brand-purple/70 text-sm font-medium leading-relaxed">{item.text}</p>
              </div>
              <div className="pt-4">
                <span className="text-xs font-black text-brand-orange uppercase tracking-wider cursor-pointer hover:underline">
                  Read Benefit →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Product story editorial split layout */}
      <section className="py-24 bg-brand-purple text-white relative">
        <div className="max-w-container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left image column */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute inset-0 bg-brand-orange/15 rounded-card blur-md scale-95 pointer-events-none" />
            <div className="rounded-card overflow-hidden border border-white/10 aspect-square shadow-2xl relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1628557044797-f21a177c37ec?auto=format&fit=crop&w=700&q=80"
                alt="Harvesting Acai"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs font-bold text-brand-yellow uppercase tracking-widest">Sustainability First</p>
                <h4 className="text-lg font-bold font-display text-white mt-1">100% Wild-Harvested Euterpe Palms</h4>
              </div>
            </div>
          </div>

          {/* Right text column */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-4">
              <h2 className="text-xs font-black text-brand-orange uppercase tracking-widest">{cms.storyTitle}</h2>
              <h3 className="text-3xl md:text-5xl font-black font-display leading-tight">
                Amazon Roots. <br />
                Australian Energy.
              </h3>
            </div>
            <p className="text-white/80 text-base md:text-lg font-medium leading-relaxed max-w-xl">
              {cms.storyText}
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/10">
              <div className="space-y-1">
                <p className="text-brand-orange text-3xl font-extrabold font-display">10x</p>
                <p className="text-xs font-bold text-white/60 uppercase">Antioxidants of Blueberries</p>
              </div>
              <div className="space-y-1">
                <p className="text-brand-yellow text-3xl font-extrabold font-display">100%</p>
                <p className="text-xs font-bold text-white/60 uppercase">Organic Wild-Harvested</p>
              </div>
            </div>
            <div>
              <Link
                href="/shop?category=Tubs"
                className="inline-flex items-center gap-2 text-brand-orange font-bold hover:text-brand-yellow hover:translate-x-1.5 transition-all text-sm uppercase tracking-wider"
              >
                <span>Discover Smoothie Cubes</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Routine Routine Selector / Routines highlights */}
      <section className="py-24 bg-[#FF9F1C] text-white relative">
        {/* Soft top-bottom curved border masks */}
        <div className="absolute inset-x-0 top-0 h-8 bg-brand-cream rounded-b-3xl pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-8 bg-brand-cream rounded-t-3xl pointer-events-none" />
        
        <div className="max-w-container mx-auto px-6 md:px-12 space-y-12 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black font-display text-white uppercase tracking-tight">
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
                {/* Outer Circular frame with hover dynamic scale and rotation */}
                <div className="w-36 h-36 md:w-40 md:h-40 rounded-full bg-white relative overflow-hidden flex items-end justify-center shadow-lg border-4 border-white/20 transition-all duration-500 group-hover:scale-108 group-hover:shadow-2xl">
                  
                  {/* Styled liquid wave/organic shape in circle bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-[#FFC531]/40 rounded-b-full transition-all duration-500 group-hover:h-1/2 group-hover:rotate-12" />
                  
                  {/* Sourced Product Image overlay peaking out */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="w-24 h-24 md:w-28 md:h-28 object-contain z-10 transition-all duration-500 transform translate-y-1 group-hover:-translate-y-3 group-hover:scale-110 group-hover:rotate-2"
                  />
                </div>

                {/* Subtitle Label */}
                <span className="text-white text-xs font-black tracking-widest uppercase transition-colors group-hover:text-brand-yellow">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Infobar banner section */}
      <section className="py-24 bg-brand-yellow text-brand-purple relative overflow-hidden">
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-brand-orange/20 rounded-full blur-2xl pointer-events-none" />
        <div className="max-w-container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 text-left space-y-4">
            <h2 className="text-xs font-black uppercase tracking-widest text-brand-purple/60">From Nature. Nothing in this Mix.</h2>
            <h3 className="text-3xl md:text-5xl font-black font-display tracking-tight leading-tight">
              Wildly Natural. Bold by Nature.
            </h3>
            <p className="text-brand-purple/80 text-base md:text-lg font-semibold max-w-xl">
              Our superfruits come straight from the Amazon, where nature intends them to grow. Zero fillers, zero stabilizers.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Link
              href="/shop"
              className="inline-block px-8 py-4 bg-brand-purple hover:bg-brand-purple-light text-white font-bold text-base rounded-btn transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Explore Our Range →
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Products Carousel */}
      <section className="py-24 bg-white/40">
        <div className="max-w-container mx-auto px-6 md:px-12 space-y-16">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div className="space-y-4 text-left">
              <h2 className="text-xs font-black text-brand-orange uppercase tracking-widest">Our Best Sellers</h2>
              <p className="text-4xl md:text-5xl font-black font-display text-brand-purple tracking-tight">
                Taste the Pure Amazon.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCarouselIndex(Math.max(0, carouselIndex - 1))}
                className="w-11 h-11 rounded-full border border-brand-purple/10 flex items-center justify-center text-brand-purple hover:bg-brand-purple/5 transition-colors disabled:opacity-30"
                disabled={carouselIndex === 0}
                aria-label="Previous products"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setCarouselIndex(Math.min(products.length - 3, carouselIndex + 1))}
                className="w-11 h-11 rounded-full border border-brand-purple/10 flex items-center justify-center text-brand-purple hover:bg-brand-purple/5 transition-colors disabled:opacity-30"
                disabled={carouselIndex >= products.length - 3}
                aria-label="Next products"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Carousel Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-500">
            {products.slice(carouselIndex, carouselIndex + 3).map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-card border border-brand-purple/5 p-6 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="space-y-6">
                  {/* Image container */}
                  <div className="relative aspect-square w-full rounded-img bg-brand-cream overflow-hidden border border-brand-purple/5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className="absolute top-4 right-4 p-2.5 rounded-full bg-white/80 hover:bg-white text-brand-purple/60 hover:text-brand-pink transition-colors shadow-md"
                      aria-label="Toggle wishlist"
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          isInWishlist(product.id) ? "fill-brand-pink text-brand-pink" : ""
                        }`}
                      />
                    </button>
                  </div>

                  <div className="space-y-2 text-left">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-brand-orange uppercase tracking-wider">
                        {product.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 fill-brand-yellow text-brand-yellow" />
                        <span className="text-xs font-bold text-brand-purple">
                          {product.rating} ({product.reviewsCount})
                        </span>
                      </div>
                    </div>
                    <Link href={`/shop/${product.id}`} className="block">
                      <h4 className="text-xl font-bold font-display text-brand-purple hover:text-brand-orange transition-colors">
                        {product.name}
                      </h4>
                    </Link>
                    <p className="text-brand-purple/75 text-sm font-medium line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-brand-purple/5 mt-6">
                  <span className="text-2xl font-black text-brand-purple">
                    ${product.price.toFixed(2)}
                  </span>
                  <button
                    onClick={() => addToCart(product, 1)}
                    className="px-6 py-3 bg-brand-purple hover:bg-brand-purple-light text-brand-cream font-bold text-xs rounded-btn transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2"
                  >
                    <span>Quick Add</span>
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Immersive Counter */}
      <section className="py-28 bg-[#1f3e1b] text-white relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="max-w-container mx-auto px-6 md:px-12 relative z-10 text-center space-y-12">
          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-xs font-black text-brand-yellow uppercase tracking-widest">Our Goodness Carbon Impact</h2>
            <h3 className="text-4xl md:text-6xl font-black font-display leading-tight">
              {cms.sustainabilityTitle}
            </h3>
            <p className="text-white/70 text-base md:text-lg font-medium max-w-lg mx-auto">
              Every package of Austropical smoothie cubes or açaí pulp supports native families, helps preserve critical flora biodiversity, and seeds local nurseries.
            </p>
          </div>

          <div className="max-w-md mx-auto bg-white/10 backdrop-blur-md rounded-card border border-white/15 p-8 shadow-xl">
            <p className="text-xs font-bold text-brand-yellow uppercase tracking-wider mb-2">
              Trees Protected &amp; Planted
            </p>
            <p className="text-5xl md:text-6xl font-black font-display tracking-tight text-white animate-pulse">
              {cms.sustainabilityNumber.toLocaleString()}
            </p>
            <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden mt-6">
              <div className="bg-brand-yellow h-full w-[85%] rounded-full" />
            </div>
            <p className="text-xs text-white/50 font-semibold mt-4">
              Goal: 20,000 trees by December 2026
            </p>
          </div>

          <div>
            <Link
              href="/sustainability"
              className="inline-flex items-center gap-2 text-brand-yellow font-bold text-sm uppercase tracking-widest hover:underline"
            >
              <span>Explore Our Active Mapping Impact</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Recipes Masonry / Filtering Section */}
      <section className="py-24 max-w-container mx-auto px-6 md:px-12 space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-xs font-black text-brand-orange uppercase tracking-widest">Recipes &amp; Inspiration</h2>
          <p className="text-4xl md:text-5xl font-black font-display text-brand-purple tracking-tight">
            Elevate Your Daily Ritual.
          </p>
        </div>

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.slice(0, 3).map((recipe) => (
            <div
              key={recipe.id}
              onClick={() => setActiveRecipe(recipe)}
              className="bg-white rounded-card overflow-hidden border border-brand-purple/5 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <div className="aspect-[4/3] w-full bg-brand-cream overflow-hidden relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="text-[10px] font-bold bg-brand-purple/85 text-white px-2.5 py-1 rounded-btn flex items-center gap-1 backdrop-blur-sm">
                    <Clock className="w-3 h-3 text-brand-orange" />
                    {recipe.time}
                  </span>
                  <span className="text-[10px] font-bold bg-white/85 text-brand-purple px-2.5 py-1 rounded-btn flex items-center gap-1 backdrop-blur-sm border border-brand-purple/5">
                    <Flame className="w-3 h-3 text-brand-pink" />
                    {recipe.calories} kcal
                  </span>
                </div>
              </div>
              <div className="p-6 text-left space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-brand-orange uppercase tracking-wider">
                  <span>Recipe</span>
                  <span className="text-brand-green">{recipe.difficulty}</span>
                </div>
                <h4 className="text-xl font-bold font-display text-brand-purple leading-snug group-hover:text-brand-orange transition-colors">
                  {recipe.title}
                </h4>
                <p className="text-xs font-bold text-brand-purple/50 uppercase tracking-widest pt-2">
                  Click to View Method →
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Client Feedback Testimonials */}
      <section className="py-24 bg-brand-purple text-white relative">
        <div className="max-w-container mx-auto px-6 md:px-12 text-center space-y-16">
          <div className="space-y-4">
            <h2 className="text-xs font-black text-brand-orange uppercase tracking-widest">Client Feedback</h2>
            <p className="text-4xl md:text-5xl font-black font-display tracking-tight text-white">
              What the Community Says.
            </p>
          </div>

          <div className="max-w-3xl mx-auto relative px-4">
            <div className="absolute top-0 left-0 text-7xl font-serif text-brand-orange/20 leading-none">
              “
            </div>
            
            <div className="min-h-56 flex flex-col justify-center py-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 text-left"
                >
                  <p className="text-lg md:text-2xl font-medium italic leading-relaxed text-white/90 text-center">
                    {testimonials[currentTestimonial].text}
                  </p>
                  
                  <div className="flex items-center justify-center gap-4 pt-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-orange/30">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={testimonials[currentTestimonial].avatar}
                        alt={testimonials[currentTestimonial].author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-base text-white">{testimonials[currentTestimonial].author}</p>
                      <p className="text-xs text-white/50 font-semibold uppercase tracking-wider">
                        {testimonials[currentTestimonial].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider controls */}
            <div className="flex items-center justify-center gap-3 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center border border-white/10 transition-colors"
                aria-label="Previous feedback"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <div className="flex gap-1.5">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentTestimonial(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentTestimonial === idx ? "bg-brand-orange w-5" : "bg-white/20"
                    }`}
                    aria-label={`Go to feedback ${idx + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center border border-white/10 transition-colors"
                aria-label="Next feedback"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* UGC Instagram Community collage */}
      <section className="py-24 max-w-container mx-auto px-6 md:px-12 text-center space-y-16">
        <div className="space-y-4 max-w-2xl mx-auto">
          <h2 className="text-xs font-black text-brand-orange uppercase tracking-widest font-sans">Join The Community</h2>
          <p className="text-4xl md:text-5xl font-black font-display text-brand-purple tracking-tight">
            Share, Inspire, Empower.
          </p>
          <p className="text-brand-purple/70 text-sm font-semibold max-w-md mx-auto">
            Tag <span className="text-brand-orange font-bold">@austropical_superfoods</span> in your healthy creations to get featured!
          </p>
        </div>

        {/* Instagrid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=300&q=80",
            "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=300&q=80",
            "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=300&q=80",
            "https://images.unsplash.com/photo-1610970881699-44a5587caa9a?auto=format&fit=crop&w=300&q=80",
            "https://images.unsplash.com/photo-1527324688151-0e627063f2b1?auto=format&fit=crop&w=300&q=80",
            "https://images.unsplash.com/photo-1628557044797-f21a177c37ec?auto=format&fit=crop&w=300&q=80",
          ].map((url, idx) => (
            <div
              key={idx}
              className="relative aspect-square rounded-img overflow-hidden border border-brand-purple/5 shadow-sm group cursor-pointer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={url}
                alt="Community Post"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-brand-purple/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-2">
                <InstagramIcon className="w-5 h-5 text-brand-orange" />
                <span className="text-xs font-bold font-sans">View Post</span>
              </div>
            </div>
          ))}
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

      <Footer />
    </div>
  );
}
