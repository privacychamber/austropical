"use client";

import React, { useState } from "react";
import { useStore } from "@/context/StoreContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Calendar, User, Clock, Search } from "lucide-react";

export default function BlogDirectoryPage() {
  const { blogs } = useStore();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Nutrition", "Lifestyle", "Sustainability"];

  const filteredBlogs = blogs.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featured = blogs[0];
  const regularPosts = filteredBlogs.filter(p => p.id !== (selectedCategory === "All" && !searchQuery ? featured.id : ""));

  return (
    <div className="bg-brand-cream text-brand-purple min-h-screen relative overflow-x-hidden font-sans">
      <Navbar />

      {/* Hero Title Header */}
      <section className="pt-36 pb-12 bg-brand-purple text-white text-center relative">
        <div className="absolute inset-0 bg-brand-pink/5 blur-[80px]" />
        <div className="max-w-container mx-auto px-6 md:px-12 relative z-10 space-y-4">
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-white">
            The Wellness Hub &amp; Blog
          </h1>
          <p className="text-white/60 text-sm md:text-base font-semibold max-w-md mx-auto">
            Deep dive into functional nutrition, rainforest conservation, and recipes designed to unlock daily vitality.
          </p>
        </div>
      </section>

      {/* Directory & Filters Layout */}
      <section className="py-12 max-w-container mx-auto px-6 md:px-12 space-y-12 text-left">
        
        {/* Category filters & Search line */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-brand-purple/10 pb-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-btn font-bold text-xs transition-colors ${
                  selectedCategory === cat
                    ? "bg-brand-purple text-white"
                    : "bg-white border border-brand-purple/10 text-brand-purple hover:bg-brand-purple/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-white border border-brand-purple/10 rounded-input text-xs font-semibold focus:border-brand-purple outline-none"
            />
            <Search className="absolute left-3 top-3 w-4 h-4 text-brand-purple/40" />
          </div>
        </div>

        {/* Featured Post Card (only displayed when no filters or search active) */}
        {selectedCategory === "All" && !searchQuery && featured && (
          <div className="bg-white rounded-card overflow-hidden border border-brand-purple/5 shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch group">
            <div className="lg:col-span-7 bg-brand-cream overflow-hidden min-h-64 relative aspect-[16/10] lg:aspect-auto">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
              />
            </div>
            <div className="lg:col-span-5 p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-[10px] font-black text-brand-orange bg-brand-orange/10 px-2.5 py-1 rounded-btn uppercase tracking-wider">
                  Featured: {featured.category}
                </span>
                <Link href={`/blog/${featured.id}`} className="block">
                  <h2 className="text-2xl md:text-3xl font-bold font-display text-brand-purple leading-tight hover:text-brand-orange transition-colors">
                    {featured.title}
                  </h2>
                </Link>
                <p className="text-brand-purple/75 text-sm font-medium leading-relaxed">
                  {featured.excerpt}
                </p>
              </div>

              <div className="flex items-center gap-6 text-xs text-brand-purple/50 font-semibold pt-4 border-t border-brand-purple/5">
                <span className="flex items-center gap-1">
                  <User className="w-4.5 h-4.5 text-brand-orange" />
                  {featured.author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4.5 h-4.5 text-brand-green" />
                  {featured.date}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Regular Posts Grid */}
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-20 bg-white border border-brand-purple/5 rounded-card space-y-4">
            <p className="text-lg font-bold text-brand-purple">No articles found</p>
            <p className="text-sm text-brand-purple/50">Try modifying your filters or search keywords.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white border border-brand-purple/5 rounded-card overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="aspect-[16/10] w-full bg-brand-cream overflow-hidden relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <span className="text-[10px] font-black text-brand-orange bg-brand-orange/10 px-2.5 py-1 rounded-btn uppercase tracking-wider">
                      {post.category}
                    </span>
                    <Link href={`/blog/${post.id}`} className="block">
                      <h4 className="text-xl font-bold font-display text-brand-purple hover:text-brand-orange transition-colors leading-snug">
                        {post.title}
                      </h4>
                    </Link>
                    <p className="text-brand-purple/75 text-xs font-medium leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-4 border-t border-brand-purple/5 flex items-center justify-between text-[11px] font-bold text-brand-purple/50">
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-brand-orange" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-brand-green" />
                    {post.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
