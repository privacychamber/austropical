"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Scene03_Science() {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (!containerRef.current || !elementsRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom top",
        scrub: 1,
      }
    });

    const items = elementsRef.current.children;
    
    // Parallax effect on botanical drawings
    tl.fromTo(items[0], { y: 100, opacity: 0 }, { y: -50, opacity: 1, duration: 1 }, 0)
      .fromTo(items[1], { y: 200, opacity: 0 }, { y: -100, opacity: 1, duration: 1 }, 0.2)
      .fromTo(items[2], { y: 150, opacity: 0 }, { y: -20, opacity: 1, duration: 1 }, 0.4);

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen w-full bg-[#E8E5E1] py-32 overflow-hidden flex items-center">
      {/* Recycled Paper Texture */}
      <div 
        className="absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none"
        style={{ backgroundImage: "url('/paper_texture_placeholder.jpg')", backgroundSize: 'cover' }}
      />
      
      <div className="relative z-10 w-full max-w-container mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Typography (Kew Gardens vibe) */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <span className="font-sans text-xs tracking-[0.3em] text-brand-forest/60 uppercase mb-8">
            Botanical Archive — Specimen 01
          </span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-[90px] text-brand-forest-dark leading-[0.9] mb-12">
            Euterpe<br />Oleracea.
          </h2>
          <p className="font-sans text-lg font-light tracking-wide text-brand-forest/80 leading-relaxed max-w-md">
            Known simply as Açaí. A small, dark purple berry found deep within the Amazon basin. Historically prized for its profound density of antioxidants and vital omegas.
          </p>
        </div>

        {/* Botanical Illustrations (Parallax) */}
        <div ref={elementsRef} className="lg:col-span-7 relative h-[600px] w-full">
          {/* Main Branch Drawing */}
          <div className="absolute top-10 right-10 w-full max-w-[400px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/botanical_branch_placeholder.png" alt="Acai branch botanical drawing" className="w-full h-auto opacity-80 mix-blend-multiply" />
            <div className="absolute -left-10 top-20 font-serif italic text-xs text-brand-forest/60 border-t border-brand-forest/30 pt-1 w-32">
              Fig. 1: Fruiting cluster
            </div>
          </div>
          
          {/* Cross Section */}
          <div className="absolute bottom-10 left-10 w-[250px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/botanical_cross_placeholder.png" alt="Acai cross section drawing" className="w-full h-auto opacity-80 mix-blend-multiply" />
            <div className="absolute -right-16 top-10 font-serif italic text-xs text-brand-forest/60 border-t border-brand-forest/30 pt-1 w-32">
              Fig. 2: Seed anatomy
            </div>
          </div>

          {/* Water Droplet / Microscope View */}
          <div className="absolute top-1/2 left-1/2 w-[150px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/botanical_cellular_placeholder.png" alt="Cellular structure" className="w-full h-auto opacity-40 mix-blend-multiply" />
          </div>
        </div>

      </div>
    </section>
  );
}
