"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Scene04_Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  const deskRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (!containerRef.current || !deskRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom top",
        scrub: 0.5,
      }
    });

    // Subtly rotate and shift the entire desk composition
    tl.fromTo(deskRef.current, 
      { rotationZ: -2, scale: 0.95, y: 50 }, 
      { rotationZ: 1, scale: 1, y: -50, duration: 1, ease: "power1.inOut" }
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen w-full bg-brand-ivory py-32 overflow-hidden flex items-center justify-center">
      {/* Soft Overhead Bounce Light (Sunlight) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-sunlight/20 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Desk Composition */}
      <div ref={deskRef} className="relative w-full max-w-[1000px] aspect-[4/3] mx-auto px-6">
        {/* Timber Desk Texture */}
        <div 
          className="absolute inset-0 bg-cover bg-center rounded-sm shadow-ambient"
          style={{ backgroundImage: "url('/timber_desk_placeholder.jpg')" }}
        />
        
        {/* Open Journal Layer */}
        <div className="absolute inset-4 md:inset-12 bg-[#F5F3F0] rounded-sm shadow-[0_10px_30px_rgba(0,0,0,0.5),inset_0_0_20px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col md:flex-row">
          
          {/* Left Page: Coordinates & Stamps */}
          <div className="flex-1 p-8 md:p-16 border-r border-black/5 relative bg-[url('/paper_texture_placeholder.jpg')] bg-cover mix-blend-multiply">
            <h3 className="font-serif italic text-3xl text-brand-forest-dark mb-12">Expedition Log</h3>
            
            <div className="space-y-8 font-sans text-sm text-brand-forest-dark/80 tracking-widest uppercase">
              <div>
                <span className="block text-[10px] text-brand-forest-dark/50 mb-1">Source</span>
                Pará, Brazil (Amazon Basin)
              </div>
              <div>
                <span className="block text-[10px] text-brand-forest-dark/50 mb-1">Coordinates</span>
                1.4558° S, 48.5044° W
              </div>
              <div>
                <span className="block text-[10px] text-brand-forest-dark/50 mb-1">Harvest</span>
                Wild-foraged at dawn
              </div>
            </div>

            {/* Passport Stamp Graphic */}
            <div className="absolute bottom-16 right-16 w-32 h-32 opacity-40 rotate-[15deg]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/passport_stamp_placeholder.png" alt="Brazil Export Stamp" className="w-full h-full object-contain mix-blend-multiply" />
            </div>
          </div>

          {/* Right Page: Portraits & Supply Chain */}
          <div className="flex-1 p-8 md:p-16 relative bg-[url('/paper_texture_placeholder.jpg')] bg-cover mix-blend-multiply">
            {/* Polaroid Photo Placeholder */}
            <div className="bg-white p-3 pb-10 shadow-premium rotate-[-3deg] max-w-[250px] mx-auto mt-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/farmer_portrait_placeholder.jpg" alt="Local Amazonian farmer" className="w-full h-auto grayscale opacity-90 contrast-125 filter" />
              <p className="font-serif italic text-xs text-center mt-4 text-black/60">Community Harvest, 2026</p>
            </div>
          </div>

          {/* Center Book Fold Shadow */}
          <div className="absolute top-0 bottom-0 left-1/2 w-12 -translate-x-1/2 bg-gradient-to-r from-transparent via-black/10 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
