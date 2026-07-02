"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useStore, Product } from "@/context/StoreContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Star, ShoppingBag, Heart, SlidersHorizontal, Search, RotateCcw } from "lucide-react";

function ShopContent() {
  const searchParams = useSearchParams();
  const { products, addToCart, toggleWishlist, isInWishlist } = useStore();

  // Search & Filter States
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState<number>(30);

  // Read URL query params on mount
  useEffect(() => {
    const cat = searchParams.get("category");
    const q = searchParams.get("search");
    if (cat) setSelectedCategory(cat);
    if (q) setSearchQuery(q);
  }, [searchParams]);

  const categories = ["All", "Tubs", "Cubes", "Packs"];

  // Filter products
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = product.price <= priceRange;

    return matchesCategory && matchesSearch && matchesPrice;
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
    setPriceRange(30);
  };

  return (
    <div className="bg-brand-cream text-brand-purple min-h-screen relative overflow-x-hidden font-sans">
      <Navbar />

      {/* Hero header */}
      <section className="pt-36 pb-12 bg-brand-purple text-white text-center relative">
        <div className="absolute inset-0 bg-brand-pink/5 blur-[80px]" />
        <div className="max-w-container mx-auto px-6 md:px-12 relative z-10 space-y-4">
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-white">
            The Superfood Marketplace
          </h1>
          <p className="text-white/60 text-sm md:text-base font-semibold max-w-md mx-auto">
            Explore organic, wild-harvested frozen berries and clean label smoothie blends designed to elevate your daily routine.
          </p>
        </div>
      </section>

      {/* Main Catalog Area */}
      <section className="py-12 max-w-container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column Filters (Desktop) */}
          <div className="lg:col-span-3 space-y-8 bg-white border border-brand-purple/5 p-6 rounded-card shadow-sm sticky top-28">
            <div className="flex items-center justify-between pb-4 border-b border-brand-purple/10">
              <span className="text-base font-black uppercase tracking-wider flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-brand-orange" />
                Filters
              </span>
              <button
                onClick={resetFilters}
                className="text-xs font-bold text-brand-pink flex items-center gap-1 hover:underline"
              >
                <RotateCcw className="w-3 h-3" />
                Reset
              </button>
            </div>

            {/* Search filter input */}
            <div className="space-y-2.5">
              <label className="text-xs font-black text-brand-purple/50 uppercase tracking-widest block">
                Search
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Açaí, Cubes, Packs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-brand-cream border border-brand-purple/10 rounded-input text-xs font-semibold focus:border-brand-purple outline-none"
                />
                <Search className="absolute left-3 top-3 w-4 h-4 text-brand-purple/40" />
              </div>
            </div>

            {/* Categories filter list */}
            <div className="space-y-3">
              <label className="text-xs font-black text-brand-purple/50 uppercase tracking-widest block">
                Category
              </label>
              <div className="flex flex-col gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-left text-sm font-semibold px-3 py-2 rounded-lg transition-colors flex items-center justify-between ${
                      selectedCategory === cat
                        ? "bg-brand-purple text-white"
                        : "hover:bg-brand-purple/5 text-brand-purple/80"
                    }`}
                  >
                    <span>{cat === "All" ? "All Collections" : cat}</span>
                    <span className={`text-[10px] ${selectedCategory === cat ? "text-brand-orange" : "text-brand-purple/40"}`}>
                      ({cat === "All" ? products.length : products.filter(p => p.category === cat).length})
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Price slider */}
            <div className="space-y-3.5">
              <div className="flex justify-between text-xs font-black text-brand-purple/50 uppercase tracking-widest">
                <span>Max Price</span>
                <span className="text-brand-purple font-extrabold">${priceRange}</span>
              </div>
              <input
                type="range"
                min="10"
                max="30"
                step="1"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full accent-brand-purple bg-brand-cream border border-brand-purple/10 rounded-lg cursor-pointer h-1.5"
              />
              <div className="flex justify-between text-[10px] font-bold text-brand-purple/40">
                <span>$10</span>
                <span>$30</span>
              </div>
            </div>
          </div>

          {/* Right Column Products Grid */}
          <div className="lg:col-span-9 space-y-8">
            {/* Sorting Header toolbar */}
            <div className="bg-white border border-brand-purple/5 px-6 py-4 rounded-card flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-sm">
              <p className="text-sm font-bold text-brand-purple/70 text-left">
                Showing <span className="text-brand-purple font-extrabold">{sortedProducts.length}</span> products
              </p>
              
              <div className="flex items-center gap-2">
                <span className="text-xs font-black text-brand-purple/50 uppercase tracking-widest">
                  Sort By
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-brand-cream border border-brand-purple/10 px-3 py-1.5 rounded-lg text-xs font-bold text-brand-purple focus:border-brand-purple outline-none"
                >
                  <option value="featured">Featured Product</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                  <option value="name">Product Name A-Z</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            {sortedProducts.length === 0 ? (
              <div className="text-center py-20 bg-white border border-brand-purple/5 rounded-card space-y-4">
                <Search className="w-16 h-16 text-brand-purple/20 mx-auto" />
                <div>
                  <p className="text-lg font-bold text-brand-purple">No products match your criteria</p>
                  <p className="text-sm text-brand-purple/50 mt-1">Try resetting the filters or modifying your search query.</p>
                </div>
                <button
                  onClick={resetFilters}
                  className="px-6 py-2.5 bg-brand-purple hover:bg-brand-purple-light text-white text-xs font-bold rounded-btn transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {sortedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white border border-brand-purple/5 p-6 rounded-card shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div className="space-y-5">
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
                          className="absolute top-4 right-4 p-2.5 rounded-full bg-white/80 hover:bg-white text-brand-purple/60 hover:text-brand-pink transition-colors shadow-md z-10"
                          aria-label="Toggle wishlist"
                        >
                          <Heart
                            className={`w-4 h-4 ${
                              isInWishlist(product.id) ? "fill-brand-pink text-brand-pink" : ""
                            }`}
                          />
                        </button>
                      </div>

                      <div className="space-y-2.5 text-left">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-black text-brand-orange uppercase tracking-wider bg-brand-orange/10 px-2 py-0.5 rounded-md">
                            {product.category}
                          </span>
                          <div className="flex items-center gap-1">
                            <Star className="w-3.5 h-3.5 fill-brand-yellow text-brand-yellow" />
                            <span className="text-xs font-bold text-brand-purple">
                              {product.rating}
                            </span>
                          </div>
                        </div>
                        
                        <Link href={`/shop/${product.id}`} className="block">
                          <h3 className="text-xl font-bold font-display text-brand-purple hover:text-brand-orange transition-colors">
                            {product.name}
                          </h3>
                        </Link>
                        
                        <p className="text-brand-purple/70 text-xs font-medium leading-relaxed line-clamp-2">
                          {product.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-brand-purple/5 mt-6">
                      <span className="text-xl font-black text-brand-purple">
                        ${product.price.toFixed(2)}
                      </span>
                      <button
                        onClick={() => addToCart(product, 1)}
                        className="px-4 py-2 bg-brand-purple hover:bg-brand-purple-light text-brand-cream font-bold text-xs rounded-btn transition-all duration-300 flex items-center gap-1.5"
                      >
                        <span>Quick Add</span>
                        <ShoppingBag className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
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
        <div className="w-8 h-8 border-4 border-brand-purple border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <ShopContent />
    </Suspense>
  );
}
