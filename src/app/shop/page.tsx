"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useStore, Product } from "@/context/StoreContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ShoppingBag, Heart, Search } from "lucide-react";

// Framer Motion Presets
const gridReveal = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 }
  }
};

const cardReveal = {
  hidden: { opacity: 0, y: 25, filter: "blur(4px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } 
  }
};

function ShopContent() {
  const searchParams = useSearchParams();
  const { products, addToCart, toggleWishlist, isInWishlist } = useStore();

  // Search & Filter States
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  // Read URL query params on mount
  useEffect(() => {
    const cat = searchParams.get("category");
    const q = searchParams.get("search");
    if (cat) setSelectedCategory(cat);
    if (q) setSearchQuery(q);
  }, [searchParams]);

  // Categories list exactly matching the user's screenshot specification
  const categories = [
    "All",
    "ACAÍ BUCKET",
    "ACAÍ PACKS OR PACK",
    "ACAÍ FOOD LINE",
    "ACAÍ ROOTS (RAW)",
    "ACAÍ DRINK LINE",
    "ACAÍ SEED",
    "ICE BOX",
    "SUPERFRUITS BUCKETS",
    "SUPERFRUITS ICE POP LINE",
    "OTHER FRUITS SMOOTHIE CUBES",
    "SUPER FRUITS SORBET"
  ];

  // Filter products
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return 0; // featured (default)
  });

  const resetFilters = () => {
    setSelectedCategory("All");
    setSearchQuery("");
    setSortBy("featured");
  };

  return (
    <div className="bg-[#FFF9F2] text-[#1A1A1A] min-h-screen relative overflow-x-hidden font-sans">
      <Navbar />

      {/* Hero Header with floating fruits */}
      <section className="pt-40 pb-20 bg-[#2A1147] text-white text-center relative overflow-hidden">
        {/* Ambient glow backgrounds */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-pink/20 rounded-full blur-[100px] pointer-events-none" />
        
        {/* Floating Fruit Elements matching the mockup */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute top-10 left-10 w-16 h-16 pointer-events-none opacity-80 hidden md:block"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=100&q=80" alt="acai" className="w-full h-full object-cover rounded-full" />
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.3 }}
          className="absolute top-20 right-16 w-14 h-14 pointer-events-none opacity-80 hidden md:block"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=100&q=80" alt="strawberry" className="w-full h-full object-cover rounded-full" />
        </motion.div>
        
        <div className="max-w-container mx-auto px-6 relative z-10 space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-black font-display tracking-tight text-white leading-none"
          >
            PRODUCTS
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/80 text-sm md:text-base font-semibold max-w-lg mx-auto leading-relaxed"
          >
            Smooth, fruity, and naturally fresh, bringing you pure flavor satisfaction with every single bite.
          </motion.p>
        </div>
      </section>

      {/* Main Catalog Area */}
      <section className="py-12 max-w-container mx-auto px-6 md:px-12 space-y-10">
        
        {/* Horizontal Category Filters Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 py-4 border-b border-[#2A1147]/10">
          <span className="text-xs font-black uppercase tracking-widest text-[#1A1A1A]/60 flex-shrink-0">
            Filter by:
          </span>
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-[10px] md:text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full border transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-[#2A1147] border-[#2A1147] text-white shadow-md"
                    : "bg-white border-[#2A1147]/20 text-[#2A1147] hover:border-[#2A1147] hover:bg-[#2A1147]/5"
                }`}
              >
                {cat === "All" ? "ALL PRODUCTS" : cat}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Toolbar & Grid */}
        <div className="space-y-8">
          {/* Sorting / Search header */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Search Input bar */}
            <div className="relative w-full sm:w-80">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-white border border-[#2A1147]/10 rounded-input text-xs font-semibold focus:border-[#2A1147] outline-none"
              />
              <Search className="absolute left-3 top-3 w-4 h-4 text-[#2A1147]/40" />
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <span className="text-xs font-black text-[#1A1A1A]/50 uppercase tracking-widest">
                Sort By
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-[#2A1147]/10 px-3 py-2 rounded-lg text-xs font-bold text-[#2A1147] focus:border-[#2A1147] outline-none cursor-pointer"
              >
                <option value="featured">Featured Product</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>

          {/* Grid View of Purple Cards (exactly like the mockup with entrance reveal) */}
          <AnimatePresence mode="wait">
            {sortedProducts.length === 0 ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-20 bg-white border border-brand-purple/5 rounded-card space-y-4"
              >
                <Search className="w-16 h-16 text-[#2A1147]/20 mx-auto" />
                <div>
                  <p className="text-lg font-bold text-[#2A1147]">No products match your criteria</p>
                  <button
                    onClick={resetFilters}
                    className="mt-4 px-6 py-2.5 bg-[#2A1147] hover:bg-brand-purple-light text-white text-xs font-bold rounded-btn transition-colors"
                  >
                    Reset Filters
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                variants={gridReveal}
                initial="hidden"
                animate="visible"
                key={selectedCategory + searchQuery + sortBy}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {sortedProducts.map((product, idx) => (
                  <motion.div
                    variants={cardReveal}
                    whileHover={{ 
                      scale: 1.03, 
                      rotate: idx % 2 === 0 ? 1 : -1,
                      boxShadow: "0px 20px 40px rgba(42, 17, 71, 0.25)" 
                    }}
                    transition={{ type: "spring", stiffness: 350, damping: 20 }}
                    key={product.id}
                    className="bg-[#4D2677] text-white p-6 rounded-card shadow-lg flex flex-col justify-between group relative overflow-hidden"
                  >
                    {/* Top Header of Card */}
                    <div className="space-y-4 text-center">
                      <h3 className="text-base font-black tracking-wide uppercase line-clamp-1">
                        {product.name}
                      </h3>

                      {/* Image Area with container */}
                      <div className="relative aspect-square w-full rounded-img bg-[#FFF9F2] overflow-hidden border-4 border-[#2A1147]/20 p-4 flex items-center justify-center">
                        <motion.img
                          whileHover={{ scale: 1.06 }}
                          transition={{ duration: 0.4 }}
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain rounded-img"
                        />
                        
                        {/* Quick Add Overlay on hover */}
                        <div className="absolute inset-0 bg-[#2A1147]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 gap-3 z-10">
                          <p className="text-xs font-bold text-white/95 text-center leading-relaxed">
                            {product.description}
                          </p>
                          <span className="text-lg font-black text-brand-yellow">${product.price}</span>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => addToCart(product, 1)}
                              className="px-4 py-2 bg-brand-orange hover:bg-brand-yellow text-[#2A1147] text-xs font-black rounded-btn transition-colors flex items-center gap-1.5"
                            >
                              <ShoppingBag className="w-3.5 h-3.5" />
                              Add to Cart
                            </button>
                            <Link
                              href={`/shop/${product.id}`}
                              className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white text-xs font-black rounded-btn transition-colors"
                            >
                              Details
                            </Link>
                          </div>
                        </div>

                        {/* Wishlist Heart Button */}
                        <button
                          onClick={() => toggleWishlist(product.id)}
                          className="absolute top-4 right-4 p-2.5 rounded-full bg-white/80 hover:bg-white text-brand-purple hover:text-brand-pink transition-colors shadow-md z-20"
                          aria-label="Toggle wishlist"
                        >
                          <Heart
                            className={`w-4 h-4 ${
                              isInWishlist(product.id) ? "fill-brand-pink text-brand-pink" : ""
                            }`}
                          />
                        </button>
                      </div>
                    </div>

                    {/* Rating / Meta display at bottom */}
                    <div className="flex items-center justify-between mt-4 text-[10px] text-white/70 font-semibold px-1">
                      <span className="uppercase tracking-widest">{product.category}</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-brand-yellow text-brand-yellow" />
                        <span>{product.rating}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Subscription banner */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-[#2A1147] text-white py-16"
      >
        <div className="max-w-container mx-auto px-6 md:px-12 text-center space-y-8">
          <span className="text-xs font-black text-brand-orange uppercase tracking-widest">Smart Refill, Better Savings</span>
          <h2 className="text-3xl md:text-5xl font-black font-display leading-tight">Smart Refill, Better Savings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto pt-4">
            <div className="p-4 bg-white/5 rounded-card border border-white/10 space-y-2">
              <p className="text-sm font-bold">1. Choose a frequency</p>
              <p className="text-xs text-white/60">Every 7, 14, or 30 days.</p>
            </div>
            <div className="p-4 bg-white/5 rounded-card border border-white/10 space-y-2">
              <p className="text-sm font-bold">2. Save up to 15%</p>
              <p className="text-xs text-white/60">Discount on every single refill order.</p>
            </div>
            <div className="p-4 bg-white/5 rounded-card border border-white/10 space-y-2">
              <p className="text-sm font-bold">3. Pause or cancel anytime</p>
              <p className="text-xs text-white/60">Zero fees, full control.</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Squeeze the Day UGC slider */}
      <section className="py-20 bg-white/40 border-t border-brand-purple/5">
        <div className="max-w-container mx-auto px-6 md:px-12 text-center space-y-12">
          <div className="space-y-4 max-w-xl mx-auto">
            <span className="text-xs font-black text-brand-orange uppercase tracking-widest">Squeeze the day</span>
            <h3 className="text-3xl md:text-5xl font-black font-display text-[#2A1147]">Squeeze the day</h3>
            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-brand-yellow text-brand-yellow" />
              ))}
              <span className="text-xs font-bold text-[#1A1A1A]/70 ml-2">Over 10,000+ positive reviews</span>
            </div>
          </div>

          {/* Social grid pictures */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                url: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=400&q=80",
                text: "So yummy and clean! Best breakfast choice."
              },
              {
                url: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=400&q=80",
                text: "My morning routines are complete now."
              },
              {
                url: "https://images.unsplash.com/photo-1628557044797-f21a177c37ec?auto=format&fit=crop&w=400&q=80",
                text: "Perfect blend of mango and passionfruit."
              }
            ].map((ugc, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                key={i} 
                className="space-y-4"
              >
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="aspect-square rounded-card overflow-hidden border border-brand-purple/10 shadow-sm cursor-pointer"
                >
                  <img src={ugc.url} alt="UGC social" className="w-full h-full object-cover" />
                </motion.div>
                <p className="text-xs font-bold text-[#2A1147] italic">“{ugc.text}”</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-brand-cream flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-brand-orange border-t-transparent rounded-full animate-spin"></div>
      </div>
    }>
      <ShopContent />
    </Suspense>
  );
}
