import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export default function Homepage() {
  return (
    <main className="relative bg-brand-ivory text-brand-charcoal min-h-screen font-sans selection:bg-brand-orange selection:text-white">
      <Navbar />
      
      {/* 
        ========================================
        SCENE 01: THE HERO (Rainforest Origin)
        ========================================
      */}
      <section className="relative min-h-[95vh] w-full flex items-center overflow-hidden pt-20">
        
        {/* Background Atmosphere */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/rainforest_morning_placeholder.jpg')", backgroundColor: "#1A1F16" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/40 via-transparent to-brand-charcoal/90" />

        {/* Foreground Depth (Leaves) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/leaves_foreground_placeholder.png" alt="" className="absolute -bottom-10 -left-20 w-[600px] opacity-80 blur-[8px] z-30 pointer-events-none" />

        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
          
          {/* Confident Apple-style Typography */}
          <div className="text-left flex flex-col justify-center h-full text-white pt-20">
            <h1 className="font-display text-7xl md:text-[110px] leading-[0.9] tracking-tight mb-8 drop-shadow-2xl">
              Wildly<br />Natural.
            </h1>
            <p className="text-lg md:text-xl font-light text-white/80 max-w-sm mb-12">
              Born in the Amazon basin. Perfected for the Australian sun.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button variant="primary" size="lg">Explore Range</Button>
            </div>
          </div>

          {/* Offset Product Composition on Wet Rock */}
          <div className="flex justify-end relative h-full items-end pb-20">
            <div className="relative">
              {/* The Rock */}
              <div className="absolute -bottom-12 -right-12 w-[500px] h-40 bg-[url('/wet_rock_texture_placeholder.jpg')] bg-cover rounded-[100%] blur-[2px] opacity-90 shadow-2xl" style={{ transform: "rotateX(70deg)" }} />
              {/* Product */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/acai-passionfruit-legs.png" 
                alt="Acai product" 
                className="relative z-20 w-full max-w-[400px] h-auto object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.6)] right-10"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 
        ========================================
        SCENE 02: WORLDS, NOT CARDS
        ========================================
      */}
      <section className="relative w-full bg-brand-charcoal">
        
        {/* World 1: Acai in the Mossy Cave */}
        <div className="relative min-h-[70vh] w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('/mossy_cave_placeholder.jpg')] bg-cover bg-fixed opacity-40 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/90 via-transparent to-brand-charcoal/90" />
          
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center md:justify-end">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/acai-passionfruit-legs.png" alt="Açaí Superberry" className="w-full max-w-sm h-auto drop-shadow-2xl" />
            </div>
            <div className="text-left text-white">
              <span className="font-sans text-[10px] tracking-[0.3em] text-brand-green uppercase mb-6 block">The Original</span>
              <h2 className="font-display text-5xl md:text-7xl mb-6">Açaí Bowls</h2>
              <p className="font-sans text-lg font-light text-white/70 max-w-md mb-10">
                Deep purple antioxidant power. Wild-harvested directly from the Amazon canopy.
              </p>
              <Button variant="outline" size="md" className="border-white/20 text-white hover:bg-white hover:text-brand-charcoal">Shop Tubs</Button>
            </div>
          </div>
        </div>

        {/* World 2: Cubes on Crushed Ice */}
        <div className="relative min-h-[70vh] w-full flex items-center justify-center overflow-hidden bg-brand-blue/5">
          <div className="absolute inset-0 bg-[url('/crushed_ice_placeholder.jpg')] bg-cover bg-fixed opacity-60 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-l from-brand-charcoal/90 via-brand-charcoal/40 to-brand-charcoal/90" />
          
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="text-left text-white order-2 md:order-1 md:pl-20">
              <span className="font-sans text-[10px] tracking-[0.3em] text-brand-blue uppercase mb-6 block">Flash Frozen</span>
              <h2 className="font-display text-5xl md:text-7xl mb-6">Smoothie Cubes</h2>
              <p className="font-sans text-lg font-light text-white/70 max-w-md mb-10">
                A perfectly portioned blend of raw, tropical energy. Just drop, blend, and glow.
              </p>
              <Button variant="outline" size="md" className="border-white/20 text-white hover:bg-white hover:text-brand-charcoal">Shop Cubes</Button>
            </div>
            <div className="flex justify-center md:justify-start order-1 md:order-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/dragonfruit_pack.png" alt="Smoothie Cubes" className="w-full max-w-sm h-auto drop-shadow-2xl" />
            </div>
          </div>
        </div>

        {/* World 3: Ice Pops on Australian Beach Table */}
        <div className="relative min-h-[70vh] w-full flex items-center justify-center overflow-hidden bg-[#E6D4B8]/10">
          <div className="absolute inset-0 bg-[url('/beach_timber_table_placeholder.jpg')] bg-cover bg-fixed opacity-40 mix-blend-soft-light" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/90 via-transparent to-brand-charcoal/90" />
          
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center md:justify-end">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/acai-zero-sugar-original.png" alt="Ice Pops" className="w-full max-w-sm h-auto drop-shadow-2xl" />
            </div>
            <div className="text-left text-white">
              <span className="font-sans text-[10px] tracking-[0.3em] text-brand-orange uppercase mb-6 block">Summer Classic</span>
              <h2 className="font-display text-5xl md:text-7xl mb-6">Ice Pops</h2>
              <p className="font-sans text-lg font-light text-white/70 max-w-md mb-10">
                The healthy Australian summer classic. Zero added sugar, 100% real fruit joy.
              </p>
              <Button variant="outline" size="md" className="border-white/20 text-white hover:bg-white hover:text-brand-charcoal">Shop Pops</Button>
            </div>
          </div>
        </div>

      </section>

      {/* 
        ========================================
        SCENE 03: AUSTRALIAN LIFESTYLE
        ========================================
      */}
      <section className="relative min-h-[90vh] w-full flex items-center">
        <div className="absolute inset-0 bg-[url('/australian_kitchen_placeholder.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-brand-charcoal/30" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <h2 className="font-display text-6xl md:text-[90px] text-white leading-none max-w-3xl drop-shadow-lg">
            Morning rituals.<br />Perfected.
          </h2>
        </div>
      </section>

      {/* 
        ========================================
        SCENE 04: COMMUNITY & PLANET
        ========================================
      */}
      <section className="relative w-full bg-brand-ivory py-40">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-5xl md:text-[80px] text-brand-charcoal leading-tight mb-12">
            Protecting what gives us everything.
          </h2>
          <p className="font-sans text-xl text-brand-charcoal/70 font-light mb-16 max-w-2xl mx-auto">
            From the Amazon canopy to the Australian coast, our commitment to sustainable harvesting ensures this world remains wildly natural.
          </p>
          <Button variant="secondary" size="lg">Our Sustainability</Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
