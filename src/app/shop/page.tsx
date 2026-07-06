"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useStore, Product } from "@/context/StoreContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WavyDivider from "@/components/layout/WavyDivider";
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
    "ICE POPS",
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
    <div className="bg-[var(--background)] text-[var(--foreground)] min-h-screen relative overflow-x-hidden font-sans transition-colors duration-500">
      <Navbar />

      {/* Hero Header with Premium Rainforest aesthetic */}
      <section className="pt-40 pb-20 relative overflow-hidden flex items-center justify-center min-h-[40vh] bg-black">
        {/* Rainforest Background */}
        <div className="absolute inset-0 bg-[url('/rainforest_bg.png')] bg-cover bg-center opacity-90 pointer-events-none" />
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        
        {/* Floating Fruit Elements */}
        <motion.div 
          animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute top-10 left-[10%] w-24 h-24 pointer-events-none opacity-90 hidden md:block drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/acai-zero-sugar-original.png" alt="acai" className="w-full h-full object-contain mix-blend-multiply" />
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-10 right-[15%] w-32 h-32 pointer-events-none opacity-90 hidden md:block drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/dragonfruit_pack.png" alt="dragonfruit" className="w-full h-full object-contain mix-blend-multiply" />
        </motion.div>
        
        <div className="max-w-container mx-auto px-6 relative z-10 space-y-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl font-black font-display uppercase tracking-tight text-white drop-shadow-xl leading-none"
          >
            The Collection
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/90 text-lg font-light max-w-xl mx-auto leading-relaxed drop-shadow-md"
          >
            Experience the purest tropical flavors on earth, wild-harvested and flash-frozen for unparalleled freshness.
          </motion.p>
        </div>
      </section>
        <WavyDivider src="/dividers/wave1.png" alt="Hero bottom divider" className="absolute bottom-0 left-0 right-0 w-full h-[30px]" />

      {/* Main Catalog Area */}
      <section className="py-12 max-w-container mx-auto px-6 md:px-12 space-y-10">
        
        {/* Horizontal Category Filters Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 py-4 border-b border-[var(--border-color)]">
          <span className="text-xs font-black uppercase tracking-widest text-[#1A5D2C]/60 flex-shrink-0">
            Filter by:
          </span>
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full py-1 pr-4">
            {categories.map((cat) => (
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-[10px] md:text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full border-2 transition-all duration-300 whitespace-nowrap flex-shrink-0 active:scale-95 ${
                  selectedCategory === cat
                    ? "bg-[#F7931E] border-[#F7931E] text-white shadow-[0_8px_20px_rgba(247,147,30,0.3)]"
                    : "bg-white border-[#1A5D2C]/10 text-[#1A5D2C] hover:border-[#F7931E] hover:text-[#F7931E]"
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
                className="w-full pl-10 pr-4 py-3 bg-white border-2 border-[#1A5D2C]/10 text-[#1A5D2C] rounded-full text-sm font-bold focus:border-[#F7931E] outline-none transition-colors"
              />
              <Search className="absolute left-4 top-3.5 w-4 h-4 text-[#1A5D2C]/40" />
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <span className="text-xs font-black text-[#1A5D2C]/50 uppercase tracking-widest">
                Sort By
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border-2 border-[#1A5D2C]/10 px-4 py-3 rounded-full text-sm font-bold text-[#1A5D2C] focus:border-[#F7931E] outline-none cursor-pointer transition-colors"
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
                className="text-center py-20 bg-white border border-brand-charcoal/5 rounded-card space-y-4"
              >
                <Search className="w-16 h-16 text-[#2A1147]/20 mx-auto" />
                <div>
                  <p className="text-lg font-bold text-[#2A1147]">No products match your criteria</p>
                  <button
                    onClick={resetFilters}
                    className="mt-4 px-6 py-2.5 bg-[#2A1147] hover:bg-brand-charcoal-light text-white text-xs font-bold rounded-btn transition-colors"
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
                {sortedProducts.map((product, idx) => {
                  const borderColors = ["hover:border-[#F7931E]", "hover:border-[#E71D85]", "hover:border-[#B2D235]", "hover:border-[#29ABE2]"];
                  const randomHoverBorder = borderColors[idx % borderColors.length];
                  
                  return (
                  <motion.div
                    variants={cardReveal}
                    whileHover={{ 
                      scale: 1.03, 
                      rotate: idx % 2 === 0 ? 1 : -1,
                      boxShadow: "0px 20px 40px rgba(26, 93, 44, 0.1)" 
                    }}
                    className={`bg-white border-2 border-[#1A5D2C]/5 text-[#1A5D2C] p-6 rounded-[32px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] flex flex-col justify-between group relative overflow-hidden transition-all duration-300 ${randomHoverBorder}`}
                  >
                    {/* Top Header of Card */}
                    <div className="space-y-4 text-center">
                      <h3 className="text-base font-black tracking-wide uppercase line-clamp-1">
                        {product.name}
                      </h3>

                      {/* Image Area with container */}
                      <div className="relative aspect-square w-full rounded-img bg-white overflow-hidden p-4 flex items-center justify-center">
                        <motion.img
                          whileHover={{ scale: 1.06 }}
                          transition={{ duration: 0.4 }}
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain mix-blend-multiply drop-shadow-lg"
                        />
                        
                        {/* Quick Add Overlay on hover */}
                        <div className="absolute inset-0 bg-white/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 gap-4 z-10 backdrop-blur-sm">
                          <p className="text-xs font-bold text-[#1A5D2C]/80 text-center leading-relaxed">
                            {product.description}
                          </p>
                          <span className="text-xl font-black text-[#F7931E]">${product.price}</span>
                          <div className="flex flex-col w-full gap-2 mt-2">
                            <button
                              onClick={() => addToCart(product, 1)}
                              className="w-full py-3 bg-[#F7931E] hover:bg-[#E71D85] text-white text-sm font-black rounded-full transition-colors flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(247,147,30,0.4)]"
                            >
                              <ShoppingBag className="w-4 h-4" />
                              ADD TO CART
                            </button>
                            <Link
                              href={`/shop/${product.id}`}
                              className="w-full py-3 bg-white border-2 border-[#1A5D2C]/10 hover:border-[#1A5D2C] text-[#1A5D2C] text-sm font-black rounded-full transition-colors text-center"
                            >
                              DETAILS
                            </Link>
                          </div>
                        </div>

                        {/* Wishlist Heart Button */}
                        <button
                          onClick={() => toggleWishlist(product.id)}
                          className="absolute top-4 right-4 p-2.5 rounded-full bg-white/80 hover:bg-white text-[#1A5D2C] hover:text-[#E71D85] transition-colors shadow-md z-20"
                          aria-label="Toggle wishlist"
                        >
                          <Heart
                            className={`w-4 h-4 ${
                              isInWishlist(product.id) ? "fill-[#E71D85] text-[#E71D85]" : ""
                            }`}
                          />
                        </button>
                      </div>
                    </div>

                    {/* Rating / Meta display at bottom */}
                    <div className="flex items-center justify-between mt-6 text-[10px] text-[#1A5D2C]/60 font-black px-1">
                      <span className="uppercase tracking-widest">{product.category}</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-[#F7931E] text-[#F7931E]" />
                        <span className="text-[#1A5D2C]">{product.rating}</span>
                      </div>
                    </div>
                  </motion.div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
        <WavyDivider src="/dividers/wave2.png" alt="Catalog bottom divider" className="absolute bottom-0 left-0 right-0 w-full h-[35px]" />

      {/* Subscription banner */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-[#E71D85] text-white py-16"
      >
        <div className="max-w-container mx-auto px-6 md:px-12 text-center space-y-8">
          <span className="text-xs font-black text-[#B2D235] uppercase tracking-widest">Smart Refill, Better Savings</span>
          <h2 className="text-4xl md:text-6xl font-black font-display leading-tight uppercase">Subscribe & Save</h2>
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
      <section className="py-24 relative bg-[#FDFBF7]">
        <div className="absolute inset-0 bg-[url('/australian_morning_surf.png')] bg-cover bg-center opacity-10 mix-blend-luminosity" />
        <div className="max-w-container mx-auto px-6 md:px-12 text-center space-y-12 relative z-10">
          <div className="space-y-4 max-w-xl mx-auto">
            <span className="text-xs font-black text-[#F7931E] uppercase tracking-widest">Squeeze the day</span>
            <h3 className="text-4xl md:text-6xl font-black font-display text-[#1A5D2C] uppercase drop-shadow-sm leading-none">A Morning Ritual</h3>
            <div className="flex items-center justify-center gap-1 mt-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#F7931E] text-[#F7931E]" />
              ))}
              <span className="text-xs font-bold text-[#1A5D2C]/70 ml-2 uppercase tracking-widest">Over 10,000+ positive reviews</span>
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
                  whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
                  className="aspect-square rounded-[32px] overflow-hidden shadow-xl cursor-pointer bg-white p-3 border-2 border-black/5"
                >
                  <img src={ugc.url} alt="UGC social" className="w-full h-full object-cover rounded-[20px]" />
                </motion.div>
                <p className="text-sm font-bold text-[#1A5D2C]/80 italic">“{ugc.text}”</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
        <WavyDivider src="/dividers/wave2.png" alt="UGC bottom divider" className="absolute bottom-0 left-0 right-0 w-full h-[30px]" />

      <Footer />
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-brand-ivory flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-brand-orange border-t-transparent rounded-full animate-spin"></div>
      </div>
    }>
      <ShopContent />
    </Suspense>
  );
}
