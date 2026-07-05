"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { FloatingElement } from "@/components/ui/FloatingElement";
import { Magnetic } from "@/components/ui/Magnetic";

export function EcosystemBanner() {
  return (
    <section className="relative h-[700px] flex items-center overflow-hidden bg-noise text-white">
      {/* Background Story Ecosystem Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-brand-purple/35 z-10 mix-blend-multiply" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="/images/story-ecosystem.jpg" 
          alt="Chimpanzee monkey in wild Amazon rainforest" 
          className="w-full h-full object-cover"
        />
        
        {/* Volumetric sunbeams filtering through trees */}
        <div className="absolute top-0 left-[20%] w-48 h-full sun-ray z-10" />
        <div className="absolute top-0 right-[15%] w-40 h-full sun-ray z-10" style={{ animationDelay: "2s" }} />

        {/* Immersive rainforest mist/fog */}
        <div className="absolute bottom-[10%] left-[-5%] w-[450px] h-[300px] fog-layer z-10" />
      </div>

      {/* Floating brand products and bowls (no background) */}
      <FloatingElement 
        src="/recipe_bowl.png" 
        alt="Açaí Bowl" 
        className="top-12 left-12 w-48 h-48 rotate-[-12deg] hidden lg:block opacity-95 filter drop-shadow-2xl" 
        speed="slow" 
      />
      <FloatingElement 
        src="/dragonfruit_pack.png" 
        alt="Dragon Fruit Pack" 
        className="bottom-12 right-20 w-36 h-48 rotate-[15deg] hidden lg:block opacity-90 filter drop-shadow-2xl" 
        speed="normal" 
      />

      <div className="relative z-20 mx-auto max-w-container px-6 md:px-16 lg:px-[120px] w-full">
        <div className="max-w-2xl space-y-6">
          <span className="font-display font-bold uppercase tracking-widest text-brand-yellow text-xs">
            AMAZONIAN CONSERVATION
          </span>
          <h2 className="font-display font-black text-5xl md:text-7xl uppercase leading-none tracking-tight campaign-title drop-shadow-sticker text-white">
            Tropical Ecosystems
          </h2>
          <p className="text-lg md:text-xl font-light text-white/95 leading-relaxed drop-shadow-md">
            Celebrating the richness of nature through every Austropical experience. We protect Amazonian biodiversity and support native species conservation.
          </p>
          <Magnetic>
            <Button variant="primary" size="lg" withArrow className="px-8 py-5 text-base shadow-2xl">
              EXPLORE OUR MISSION
            </Button>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
