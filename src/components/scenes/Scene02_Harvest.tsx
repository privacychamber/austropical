"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HABITATS = [
  {
    id: 1,
    title: "Açaí Superberry",
    env: "Deep Purple Rainforest",
    desc: "Grown in the shade of the Amazon canopy.",
    bg: "/wet_rock_texture_placeholder.jpg",
    product: "/acai-passionfruit-legs.png"
  },
  {
    id: 2,
    title: "Smoothie Cubes",
    env: "Frozen Waterfall",
    desc: "Flash-frozen at peak freshness.",
    bg: "/wooden_board_frost_placeholder.jpg",
    product: "/dragonfruit_pack.png"
  },
  {
    id: 3,
    title: "Ice Pops",
    env: "Bright Tropical Beach",
    desc: "Australian summer in a bite.",
    bg: "/tropical_picnic_placeholder.jpg",
    product: "/acai-zero-sugar-original.png"
  }
];

export function Scene02_Harvest() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (!containerRef.current || !scrollWrapperRef.current) return;

    const sections = gsap.utils.toArray(".habitat-panel");
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + scrollWrapperRef.current!.offsetWidth
      }
    });

    tl.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none"
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-brand-stone">
      <div ref={scrollWrapperRef} className="flex h-full w-[300vw]">
        {HABITATS.map((habitat) => (
          <div key={habitat.id} className="habitat-panel relative w-screen h-full flex items-center justify-center shrink-0">
            {/* Environment Background */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-80"
              style={{ backgroundImage: `url('${habitat.bg}')` }}
            />
            {/* Atmospheric Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80" />
            
            <div className="relative z-10 w-full max-w-content mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-12">
              
              {/* Product */}
              <div className="w-full md:w-1/2 flex justify-center items-center relative">
                <div className="absolute -bottom-10 w-[60%] h-8 bg-black/90 blur-2xl rounded-full" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={habitat.product} 
                  alt={habitat.title}
                  className="w-full max-w-sm h-auto object-contain drop-shadow-2xl"
                />
              </div>

              {/* Typography */}
              <div className="w-full md:w-1/2 flex flex-col items-start text-brand-cream">
                <span className="font-sans text-sm tracking-[0.2em] text-brand-accent uppercase mb-6">
                  {habitat.env}
                </span>
                <h2 className="font-display text-5xl md:text-7xl mb-6 leading-tight">
                  {habitat.title}
                </h2>
                <p className="font-sans text-lg font-light tracking-wide text-brand-cream/80 border-l-2 border-brand-accent pl-6">
                  {habitat.desc}
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
