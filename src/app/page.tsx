import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export default function Homepage() {
  return (
    <main className="relative bg-brand-ivory text-brand-forest min-h-screen selection:bg-brand-forest selection:text-brand-ivory">
      <Navbar />
      
      {/* 
        ========================================
        SCENE 01: THE RAINFOREST (ARRIVAL)
        ========================================
      */}
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Fallback */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{ backgroundImage: "url('/rainforest_morning_placeholder.jpg')", backgroundColor: "#F9F7F1" }}
        />
        
        {/* Warm Sunlight Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-ivory/50 via-transparent to-brand-ivory" />

        {/* Typography */}
        <div className="relative z-20 text-center px-4 mb-32">
          <h1 className="font-display text-6xl md:text-8xl lg:text-[120px] text-brand-forest leading-[0.9] tracking-tight drop-shadow-sm">
            Wildly<br />Natural.
          </h1>
          <p className="font-display text-2xl md:text-4xl text-brand-forest/70 italic mt-6">
            Crafted by Rainforests.
          </p>
        </div>

        {/* Product emerging from wet rock */}
        <div className="relative z-30 flex flex-col items-center justify-end h-[40vh] w-full max-w-lg mx-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/acai-passionfruit-legs.png" 
            alt="Acai product" 
            className="relative z-20 w-64 md:w-80 h-auto object-contain drop-shadow-[0_20px_30px_rgba(31,61,44,0.3)]"
          />
          {/* Base shadow (Ambient Occlusion) */}
          <div className="absolute bottom-4 w-48 h-8 bg-brand-forest blur-xl rounded-full z-10 opacity-70" />
        </div>
      </section>

      {/* 
        ========================================
        SCENE 02: THE HARVEST (HABITATS)
        ========================================
      */}
      <section className="relative w-full bg-brand-ivory">
        {/* Habitat 1: Acai */}
        <div className="relative min-h-[80vh] w-full flex items-center py-20">
          <div className="absolute inset-0 bg-cover bg-fixed bg-center opacity-40" style={{ backgroundImage: "url('/wet_rock_texture_placeholder.jpg')" }} />
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/acai-passionfruit-legs.png" alt="Açaí Superberry" className="w-full max-w-md h-auto drop-shadow-xl" />
            </div>
            <div className="text-left">
              <span className="font-sans text-xs tracking-[0.25em] text-brand-forest-light uppercase mb-4 block">Deep Purple Rainforest</span>
              <h2 className="font-display text-5xl md:text-7xl text-brand-forest mb-6">Açaí Superberry</h2>
              <p className="font-sans text-lg font-light text-brand-forest/80 leading-relaxed border-l-2 border-brand-forest pl-6">
                Grown in the shade of the Amazon canopy. Rich in antioxidants and essential omegas.
              </p>
            </div>
          </div>
        </div>

        {/* Habitat 2: Smoothie Cubes */}
        <div className="relative min-h-[80vh] w-full flex items-center py-20 bg-brand-ivory-dark">
          <div className="absolute inset-0 bg-cover bg-fixed bg-center opacity-40" style={{ backgroundImage: "url('/wooden_board_frost_placeholder.jpg')" }} />
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-left order-2 md:order-1">
              <span className="font-sans text-xs tracking-[0.25em] text-brand-forest-light uppercase mb-4 block">Frozen Waterfall</span>
              <h2 className="font-display text-5xl md:text-7xl text-brand-forest mb-6">Smoothie Cubes</h2>
              <p className="font-sans text-lg font-light text-brand-forest/80 leading-relaxed border-l-2 border-brand-forest pl-6">
                Flash-frozen at peak freshness. A perfectly portioned blend of raw, tropical energy.
              </p>
            </div>
            <div className="flex justify-center order-1 md:order-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/dragonfruit_pack.png" alt="Smoothie Cubes" className="w-full max-w-md h-auto drop-shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================
        SCENE 03: THE SCIENCE (BOTANICAL)
        ========================================
      */}
      <section className="relative min-h-screen w-full bg-[#FAF9F5] py-32 flex items-center">
        <div className="absolute inset-0 bg-[url('/paper_texture_placeholder.jpg')] bg-cover opacity-50 mix-blend-multiply" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <span className="font-sans text-xs tracking-[0.3em] text-brand-forest/60 uppercase mb-8 block">Botanical Archive</span>
            <h2 className="font-display text-5xl md:text-[80px] text-brand-forest leading-[0.9] mb-8">Euterpe<br />Oleracea.</h2>
            <p className="font-sans text-lg font-light text-brand-forest/80 leading-relaxed max-w-md">
              Known simply as Açaí. A small, dark purple berry found deep within the Amazon basin. Historically prized for its profound density of antioxidants.
            </p>
          </div>
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg bg-white/50 p-8 rounded shadow-sm border border-brand-stone/20 backdrop-blur-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/botanical_branch_placeholder.png" alt="Botanical Drawing" className="w-full h-auto opacity-80 mix-blend-multiply" />
              <p className="font-serif italic text-xs text-brand-forest/60 text-center mt-4 border-t border-brand-stone/30 pt-2">Fig. 1: Fruiting cluster</p>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================
        SCENE 04: THE JOURNEY (JOURNAL)
        ========================================
      */}
      <section className="relative min-h-screen w-full bg-brand-ivory flex items-center py-32">
        <div className="absolute inset-0 bg-[url('/timber_desk_placeholder.jpg')] bg-cover bg-fixed opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-sunlight/20 to-transparent" />
        
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6">
          <div className="bg-[#Fdfcf9] shadow-[0_20px_50px_rgba(31,61,44,0.1)] rounded-sm overflow-hidden flex flex-col md:flex-row min-h-[500px]">
            <div className="flex-1 p-12 md:p-16 border-r border-brand-stone/20 relative">
              <h3 className="font-serif italic text-4xl text-brand-forest mb-12">Expedition Log</h3>
              <div className="space-y-8 font-sans text-sm text-brand-forest/80 tracking-widest uppercase">
                <div><span className="block text-[10px] text-brand-forest/50 mb-1">Source</span>Pará, Brazil (Amazon Basin)</div>
                <div><span className="block text-[10px] text-brand-forest/50 mb-1">Coordinates</span>1.4558° S, 48.5044° W</div>
                <div><span className="block text-[10px] text-brand-forest/50 mb-1">Harvest</span>Wild-foraged at dawn</div>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/passport_stamp_placeholder.png" alt="Stamp" className="absolute bottom-12 right-12 w-32 h-32 opacity-20 mix-blend-multiply rotate-[15deg]" />
            </div>
            <div className="flex-1 p-12 md:p-16 bg-[#F8F6F0] flex flex-col items-center justify-center">
              <div className="bg-white p-4 shadow-md rotate-[-2deg] max-w-xs w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/farmer_portrait_placeholder.jpg" alt="Local farmer" className="w-full h-auto grayscale opacity-90 contrast-125" />
                <p className="font-serif italic text-sm text-center mt-4 text-brand-forest/80">Community Harvest, 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================
        SCENE 05 & 06: LIFESTYLE & PLANET
        ========================================
      */}
      <section className="relative w-full bg-brand-ivory pt-32 pb-40">
        <div className="max-w-7xl mx-auto px-6 text-center mb-32">
          <h2 className="font-display text-5xl md:text-7xl text-brand-forest leading-[1.1] mb-8 max-w-4xl mx-auto">
            How Australian families enjoy <span className="italic">Austropical.</span>
          </h2>
          <div className="w-full h-[60vh] rounded-lg overflow-hidden shadow-2xl relative">
            <div className="absolute inset-0 bg-[url('/australian_kitchen_placeholder.jpg')] bg-cover bg-center hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-brand-forest/10" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="font-sans text-xs tracking-[0.2em] text-brand-forest-light uppercase mb-6 block">Community & Planet</span>
          <h2 className="font-display text-4xl md:text-6xl text-brand-forest mb-8">Protecting what gives us everything.</h2>
          <p className="font-sans text-lg text-brand-forest/80 font-light mb-12">
            From the Amazon to Australia, we are committed to sustainable harvesting and empowering the communities that make this possible.
          </p>
          <Button variant="primary" size="lg">Shop the Collection</Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
