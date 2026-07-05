"use client";

import React from "react";
import { useMouseParallax } from "@/hooks/useMouseParallax";

export function HeroProductScene() {
  const coords = useMouseParallax(15);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      
      {/* Main Product Composite (Photorealistic Placeholder) */}
      <div 
        style={{ transform: `translate3d(${coords.x * -0.5}px, ${coords.y * -0.5}px, 0)` }}
        className="relative z-20 w-full max-w-[550px] transition-transform duration-500 ease-out flex items-center justify-center"
      >
        {/* Soft backlight for premium lighting */}
        <div className="absolute w-[120%] h-[120%] bg-white/5 rounded-full blur-[60px] opacity-50 z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        
        {/* Product image (requires commission-grade photography of product on wet rock) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/story-hero.jpg"
          alt="Acai product in rainforest ecosystem"
          className="relative z-10 w-full h-auto object-contain rounded-2xl shadow-ambient"
        />

        {/* Ambient occlusion / contact shadow layer */}
        <div className="absolute -bottom-12 w-[80%] h-[30px] bg-black/60 blur-xl rounded-full z-0" />
      </div>

      {/* Foreground Leaf Parallax Layer (Depth plane 3) */}
      <div 
        style={{ 
          transform: `translate3d(${coords.x * 1.2}px, ${coords.y * 1.2}px, 0)`,
          backgroundImage: "url('/leaves_foreground_placeholder.png')" 
        }}
        className="absolute -bottom-10 -right-16 w-64 h-64 z-40 bg-contain bg-no-repeat bg-center opacity-80 blur-[2px] transition-transform duration-500 ease-out pointer-events-none"
      />
      
      {/* Foreground Leaf Parallax Layer (Depth plane 3) */}
      <div 
        style={{ 
          transform: `translate3d(${coords.x * 0.8}px, ${coords.y * 0.8}px, 0)`,
          backgroundImage: "url('/leaves_foreground_placeholder.png')" 
        }}
        className="absolute -top-10 -left-10 w-48 h-48 z-40 bg-contain bg-no-repeat bg-center opacity-70 blur-[4px] transition-transform duration-500 ease-out pointer-events-none"
      />
    </div>
  );
}
