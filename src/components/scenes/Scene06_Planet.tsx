"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/Button";

export function Scene06_Planet() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (!containerRef.current || !imagesRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom top",
        scrub: 1,
      }
    });

    const items = imagesRef.current.children;
    
    // Parallax on lifestyle images
    tl.fromTo(items[0], { y: 50 }, { y: -50, duration: 1 }, 0)
      .fromTo(items[1], { y: 100 }, { y: -100, duration: 1 }, 0);

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section ref={containerRef} className="relative bg-[#FAF8F5] py-40 overflow-hidden">
      <div className="mx-auto max-w-container px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Lifestyle Photography Parallax */}
        <div ref={imagesRef} className="relative h-[800px] w-full hidden md:block">
          <div className="absolute top-0 left-0 w-[60%] h-auto shadow-ambient rotate-[-2deg]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/lifestyle_kid.png" alt="Australian lifestyle" className="w-full h-full object-cover grayscale opacity-90 contrast-125" />
          </div>
          <div className="absolute bottom-20 right-0 w-[55%] h-auto shadow-premium rotate-[3deg] z-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/community_collage.png" alt="Community" className="w-full h-full object-cover grayscale opacity-90 contrast-125" />
          </div>
        </div>

        {/* Narrative & Shop */}
        <div className="flex flex-col items-start justify-center">
          <span className="font-sans text-sm tracking-[0.2em] text-brand-forest/60 uppercase mb-8">
            The Community & The Planet
          </span>
          <h2 className="font-display text-5xl md:text-7xl text-brand-forest-dark leading-[1.1] mb-8">
            Protecting what gives us everything.
          </h2>
          <p className="font-sans text-lg font-light tracking-wide text-brand-forest-dark/80 leading-relaxed mb-16 max-w-lg">
            From the Amazon to Australia, we are committed to sustainable harvesting and empowering the communities that make this possible.
          </p>

          <Button variant="primary" size="lg" className="px-12 py-6 text-sm">
            Shop the Collection
          </Button>
        </div>

      </div>
    </section>
  );
}
