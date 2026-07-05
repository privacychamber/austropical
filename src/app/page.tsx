import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";

export default function Homepage() {
  return (
    <main className="relative bg-brand-cream text-brand-acai-dark min-h-screen font-sans selection:bg-brand-mango selection:text-brand-acai-dark">
      <Navbar />
      
      {/* 
        ========================================
        SCENE 01: THE JUICY HERO
        ========================================
      */}
      <section className="relative min-h-[90vh] w-full flex flex-col items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-brand-acai to-brand-acai-light text-white">
        
        {/* Organic Background Blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-dragonfruit rounded-full blur-[120px] opacity-40 pointer-events-none" />

        {/* Floating Ingredients (Simulated Parallax) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/dragonfruit_pack.png" alt="Floating fruit" className="absolute top-20 left-10 w-24 h-auto opacity-80 blur-[2px] -rotate-12 animate-pulse" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/mango_pack.png" alt="Floating fruit" className="absolute bottom-32 right-20 w-32 h-auto opacity-80 blur-[1px] rotate-45" />

        <div className="relative z-20 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Hero Typography */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <span className="inline-block bg-brand-mango text-brand-acai-dark font-bold px-4 py-1 rounded-full text-sm mb-6 uppercase tracking-wider">
              100% Real Amazonian Fruit
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-[90px] leading-[1] font-bold mb-6 drop-shadow-lg">
              Australia's<br />Brightest<br />Snack Choice.
            </h1>
            <p className="text-lg md:text-xl font-medium mb-10 max-w-lg text-white/90">
              Antioxidant-rich organic wild-harvested açaí tubs, instant smoothie cubes, and pure superfood packs. Zero added sugar. 
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg">Shop Now</Button>
              <Button variant="secondary" size="lg">Our Story</Button>
            </div>
          </div>

          {/* Hero Product Image */}
          <div className="flex justify-center relative">
            <div className="absolute inset-0 bg-brand-teal/20 blur-3xl rounded-full scale-150" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/acai-passionfruit-legs.png" 
              alt="Acai product" 
              className="relative z-20 w-full max-w-[500px] h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>

        </div>

        {/* Wave Divider Bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-[calc(100%+1.3px)] h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C52.16,93.4,103.95,80.7,155.8,70.9,211.59,60.29,267.75,66.5,321.39,56.44Z" className="fill-brand-cream"></path>
          </svg>
        </div>
      </section>

      {/* 
        ========================================
        SCENE 02: VALUE PROPS TICKER
        ========================================
      */}
      <section className="bg-brand-cream py-10 border-b-2 border-brand-acai/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-8 md:gap-16">
          {[
            "100% Organic", 
            "Zero Added Sugar", 
            "Vegan & Gluten Free", 
            "Wild Harvested", 
            "Australian Owned"
          ].map((prop, i) => (
            <div key={i} className="flex items-center gap-2 text-brand-acai font-bold text-sm md:text-base uppercase tracking-wide">
              <CheckCircle2 className="text-brand-mango w-6 h-6" />
              {prop}
            </div>
          ))}
        </div>
      </section>

      {/* 
        ========================================
        SCENE 03: PRODUCT ECOSYSTEM (THE SHOP)
        ========================================
      */}
      <section className="relative w-full bg-brand-cream py-32">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-6xl font-bold text-brand-acai mb-4">Taste the Tropics.</h2>
            <p className="text-lg text-brand-acai/70 font-medium">Find your perfect superfood match.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Acai */}
            <div className="bg-brand-acai-light rounded-[3rem] p-8 flex flex-col items-center text-center text-white shadow-xl hover:-translate-y-2 transition-transform duration-300">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/acai-passionfruit-legs.png" alt="Açaí Superberry" className="w-48 h-48 object-contain mb-8 drop-shadow-lg" />
              <h3 className="font-display text-3xl font-bold mb-4">Açaí Tubs</h3>
              <p className="font-sans text-white/90 mb-8 font-medium">Deep purple antioxidant power. Perfect for bowls.</p>
              <Button variant="primary" size="md" className="mt-auto w-full">Shop Acai</Button>
            </div>

            {/* Card 2: Smoothie Cubes */}
            <div className="bg-brand-teal rounded-[3rem] p-8 flex flex-col items-center text-center text-brand-acai-dark shadow-xl hover:-translate-y-2 transition-transform duration-300">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/dragonfruit_pack.png" alt="Smoothie Cubes" className="w-48 h-48 object-contain mb-8 drop-shadow-lg" />
              <h3 className="font-display text-3xl font-bold mb-4">Smoothie Cubes</h3>
              <p className="font-sans text-brand-acai-dark/90 mb-8 font-medium">Flash-frozen tropical fruit. Just blend and go.</p>
              <Button variant="secondary" size="md" className="mt-auto w-full">Shop Cubes</Button>
            </div>

            {/* Card 3: Ice Pops */}
            <div className="bg-brand-dragonfruit rounded-[3rem] p-8 flex flex-col items-center text-center text-white shadow-xl hover:-translate-y-2 transition-transform duration-300">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/acai-zero-sugar-original.png" alt="Ice Pops" className="w-48 h-48 object-contain mb-8 drop-shadow-lg" />
              <h3 className="font-display text-3xl font-bold mb-4">Ice Pops</h3>
              <p className="font-sans text-white/90 mb-8 font-medium">The healthy Australian summer classic.</p>
              <Button variant="primary" size="md" className="mt-auto w-full bg-brand-mango text-brand-acai-dark">Shop Pops</Button>
            </div>

          </div>
        </div>
      </section>

      {/* 
        ========================================
        SCENE 04: COMMUNITY BANNER
        ========================================
      */}
      <section className="relative w-full bg-brand-mango py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-brand-acai-dark">
            <h2 className="font-display text-5xl md:text-7xl font-bold mb-6">Fuel your<br />adventure.</h2>
            <p className="text-xl font-medium mb-8 max-w-md">
              Whether it's a post-surf bowl or a quick morning smoothie, Austropical gives you real energy from the earth.
            </p>
            <Button variant="secondary" size="lg">Join the Club</Button>
          </div>
          <div className="relative h-[400px] w-full bg-white/20 rounded-[3rem] shadow-xl overflow-hidden">
             {/* eslint-disable-next-line @next/next/no-img-element */}
             <img src="/community_collage.png" alt="Community" className="w-full h-full object-cover mix-blend-multiply opacity-80" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
