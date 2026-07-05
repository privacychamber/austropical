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
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-brand-ivory flex items-center justify-center">
      {/* Background Atmosphere - Lush Morning Rainforest */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{ backgroundImage: "url('/rainforest_morning_placeholder.jpg')" }}
      />
      
      {/* Sun rays & Mist (Warm) */}
      <div className="absolute top-0 right-1/4 w-[300px] h-full bg-gradient-to-b from-brand-sunlight/40 to-transparent skew-x-[-25deg] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[40vh] bg-gradient-to-t from-brand-ivory to-transparent z-10" />

      {/* Typography */}
      <div ref={textRef} className="relative z-20 flex flex-col items-center justify-center text-center">
        <h1 className="font-display text-5xl md:text-7xl lg:text-[100px] text-brand-forest leading-tight tracking-wide drop-shadow-md">
          Wildly Natural.
        </h1>
        <h2 className="font-display text-3xl md:text-5xl text-brand-forest/70 italic mt-4">
          Crafted by Rainforests.
        </h2>
      </div>

      {/* Product Emerging on Wet Volcanic Rock */}
      <div ref={productRef} className="absolute bottom-[10%] z-30 flex flex-col items-center justify-center">
        {/* Product Image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="/acai-passionfruit-legs.png" 
          alt="Acai product emerging" 
          className="w-64 h-auto object-contain relative z-20 drop-shadow-[0_20px_30px_rgba(31,61,44,0.3)]"
        />
        
        {/* Wet Volcanic Rock Base */}
        <div className="absolute -bottom-8 w-80 h-32 bg-brand-stone-dark rounded-[100%] blur-[2px] z-10 opacity-90 shadow-ambient" style={{ transform: "rotateX(75deg)" }} />
        
        {/* Contact Shadow / Ambient Occlusion */}
        <div className="absolute -bottom-4 w-40 h-8 bg-brand-forest blur-xl rounded-full z-10 opacity-80" />
        
        {/* Foreground Leaves Overlay */}
        <div 
          className="absolute -bottom-10 -left-32 w-[500px] h-64 bg-contain bg-no-repeat bg-center opacity-90 blur-[4px] z-40"
          style={{ backgroundImage: "url('/leaves_foreground_placeholder.png')" }}
        />
      </div>
    </section>
  );
}
