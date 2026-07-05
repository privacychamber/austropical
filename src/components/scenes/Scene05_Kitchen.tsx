"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Scene05_Kitchen() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (!containerRef.current || !textRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "center center",
        scrub: 1,
      }
    });

    // Subtle fade in and float up for text
    tl.fromTo(textRef.current, 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1 }
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section ref={containerRef} className="relative h-[120vh] w-full overflow-hidden flex items-center justify-center">
      {/* Background Photography (Australian Breakfast Table) */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/australian_kitchen_placeholder.jpg')" }}
      />
      
      {/* Light Rays / Morning Sunlight simulation */}
      <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-white/20 to-transparent skew-x-[-15deg] blur-3xl pointer-events-none" />

      {/* Subtle vignette to focus text */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/40" />

      {/* Typography */}
      <div ref={textRef} className="relative z-10 text-center max-w-3xl px-6">
        <h2 className="font-display text-4xl md:text-6xl lg:text-[70px] text-white leading-[1.1] drop-shadow-xl mb-8">
          How Australian families enjoy <span className="italic text-brand-accent">Austropical.</span>
        </h2>
        <p className="font-sans text-lg font-light tracking-widest text-white/90 uppercase border-b border-white/30 pb-4 inline-block">
          Morning Rituals
        </p>
      </div>
    </section>
  );
}
