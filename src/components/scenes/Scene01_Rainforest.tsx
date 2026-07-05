"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Scene01_Rainforest() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: 1,
      }
    });

    // 1. Arrival - Mist clears slightly, Typography fades in
    tl.fromTo(textRef.current, 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1 }
    )
    // 2. Product emerges from the forest floor
    .fromTo(productRef.current,
      { opacity: 0, y: 100, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "power2.out" }
    )
    // 3. Fade out for next scene
    .to([textRef.current, productRef.current], { opacity: 0, duration: 0.5 });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-[#0a0f0d] flex items-center justify-center">
      {/* Background Atmosphere */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-screen"
        style={{ backgroundImage: "url('/rainforest_placeholder.jpg')" }}
      />
      <div className="absolute inset-0 bg-noise-pattern opacity-10 mix-blend-overlay" />
      
      {/* Sun rays & Mist */}
      <div className="absolute top-0 right-1/4 w-[200px] h-full bg-gradient-to-b from-white/20 to-transparent skew-x-[-20deg] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-black to-transparent z-10" />

      {/* Typography */}
      <div ref={textRef} className="relative z-20 flex flex-col items-center justify-center text-center">
        <h1 className="font-display text-5xl md:text-7xl lg:text-[100px] text-brand-cream leading-tight tracking-wide drop-shadow-2xl">
          Wildly Natural.
        </h1>
        <h2 className="font-display text-3xl md:text-5xl text-brand-accent italic mt-4 drop-shadow-lg">
          Crafted by Rainforests.
        </h2>
      </div>

      {/* Product Emerging */}
      <div ref={productRef} className="absolute bottom-[10%] z-30 flex items-end justify-center">
        {/* Contact Shadow / Ambient Occlusion */}
        <div className="absolute -bottom-8 w-48 h-10 bg-black blur-2xl rounded-full" />
        
        {/* Product Image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="/acai-passionfruit-legs.png" 
          alt="Acai product emerging" 
          className="w-64 h-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)]"
        />
        
        {/* Foreground Leaves Overlay */}
        <div 
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-contain bg-no-repeat bg-center opacity-90 blur-[2px] z-40"
          style={{ backgroundImage: "url('/leaves_foreground_placeholder.png')" }}
        />
      </div>
    </section>
  );
}
