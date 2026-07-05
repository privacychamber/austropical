"use client";

import React from "react";

export function HeroBackground() {
  return (
    <>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: "url('/rainforest_placeholder.jpg')" }} // Placeholder to be replaced by high-end photography
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-brand-cream" />
      <div className="absolute inset-0 bg-noise-pattern opacity-20 mix-blend-overlay" />
    </>
  );
}
