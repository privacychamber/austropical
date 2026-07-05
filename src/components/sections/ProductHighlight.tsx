"use client";

import React, { useRef } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { FloatingElement } from "@/components/ui/FloatingElement";
import { useGSAP } from "@/hooks/useGSAP";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Magnetic } from "@/components/ui/Magnetic";

export function ProductHighlight() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!containerRef.current) return;

    gsap.fromTo(".ph-cubes-col > *",
      { opacity: 0, x: -50 },
      {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
        },
        opacity: 1, x: 0, duration: 1.0, stagger: 0.15, ease: "power2.out"
      }
    );

    gsap.fromTo(".ph-center-col",
      { opacity: 0, scale: 0.9, y: 50 },
      {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 50%",
        },
        opacity: 1, scale: 1, y: 0, duration: 1.2, ease: "back.out(1.1)"
      }
    );

    gsap.fromTo(".ph-right-col > *",
      { opacity: 0, x: 50 },
      {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
        },
        opacity: 1, x: 0, duration: 1.0, stagger: 0.15, ease: "power2.out"
      }
    );

    // Scrollbound Parallax elements
    gsap.to(".ph-parallax-1", {
      y: -80,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });

    gsap.to(".ph-parallax-2", {
      y: 60,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });
  }, []);

  const specs = [
    "100% Organic Wild-Harvested Açaí",
    "Freeze-dried to lock in maximum antioxidants",
    "Perfectly portion-controlled smoothie boosters",
    "Zero added sugar or chemical preservatives"
  ];

  return (
    <section ref={containerRef} className="relative py-36 lg:py-52 bg-gradient-to-b from-brand-orange to-[#FFB703] overflow-hidden text-brand-purple bg-noise">
      {/* Top Wave Divider */}
      <WaveDivider position="top" fill="#FFF9F2" />
      
      {/* Ambient spotlights */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#E9418A]/20 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-container px-6 md:px-16 lg:px-[120px] grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Col (30%): Floating Smoothie Cubes & Berries */}
        <div className="lg:col-span-4 flex flex-col justify-center items-center gap-12 ph-cubes-col relative min-h-[400px]">
          
          {/* Floating Cube 1 */}
          <div className="absolute top-0 left-12 w-28 h-28 rounded-3xl bg-gradient-to-tr from-[#7A2155] to-[#E9418A] rotate-[22deg] shadow-2xl animate-float flex items-center justify-center border border-white/10 group cursor-pointer hover:scale-105 transition-transform ph-parallax-1">
            <div className="absolute inset-0 bg-white/10 rounded-3xl blur-[4px] mix-blend-overlay" />
            <span className="font-display font-black text-white/15 text-7xl select-none">a</span>
          </div>

          {/* Floating Cube 2 */}
          <div className="absolute top-[40%] right-8 w-24 h-24 rounded-[24px] bg-gradient-to-tr from-[#4F8F46] to-[#FFC531] -rotate-[15deg] shadow-2xl animate-float-reverse flex items-center justify-center border border-white/10 ph-parallax-2" style={{ animationDelay: "1s" }}>
            <div className="absolute inset-0 bg-white/10 rounded-[24px] blur-[4px] mix-blend-overlay" />
            <span className="font-display font-black text-white/15 text-5xl select-none">m</span>
          </div>

          {/* Floating Cube 3 */}
          <div className="absolute bottom-4 left-16 w-20 h-20 rounded-[20px] bg-gradient-to-tr from-[#2A1147] to-[#4D2677] rotate-[45deg] shadow-2xl animate-float flex items-center justify-center border border-white/10 ph-parallax-1" style={{ animationDelay: "2s" }}>
            <div className="absolute inset-0 bg-white/10 rounded-[20px] blur-[4px] mix-blend-overlay" />
            <span className="font-display font-black text-white/10 text-4xl select-none">d</span>
          </div>

          {/* Floating strawberry and banana */}
          <div className="ph-parallax-2 absolute top-[10%] right-10 w-24 h-32 pointer-events-none">
            <FloatingElement src="/recipe_smoothie.png" alt="Açaí smoothie" className="w-full h-full" speed="slow" />
          </div>
          <div className="ph-parallax-1 absolute bottom-[10%] right-12 w-28 h-36 pointer-events-none">
            <FloatingElement src="/recipe_parfait.png" alt="Açaí parfait" className="w-full h-full" speed="normal" />
          </div>
        </div>

        {/* Center Col (35%): Product Pack and Smoothie Glass */}
        <div className="lg:col-span-4 flex items-center justify-center ph-center-col relative h-[500px]">
          {/* Back Glowing Mesh */}
          <div className="absolute w-80 h-80 bg-white/30 rounded-full blur-[80px]" />

          {/* Smoothie Bowl in background slightly offset */}
          <div className="absolute bottom-6 -right-10 w-64 h-64 filter drop-shadow-[0_15px_35px_rgba(42,17,71,0.2)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/recipe_bowl.png" alt="Smoothie bowl" className="w-full h-full object-contain" />
          </div>

          {/* Pouch pack in the foreground */}
          <div className="relative z-10 w-[300px] filter drop-shadow-[0_25px_50px_rgba(42,17,71,0.3)] hover:scale-105 transition-transform duration-700 light-sweep-container rounded-[40px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/dragonfruit_pack.png" alt="Smoothie Cubes Pouch" className="w-full h-auto object-contain" />
            <div className="light-sweep-overlay h-[120%] -top-[10%]" />
          </div>

          {/* Shadow reflection */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-6 bg-brand-purple/20 rounded-[100%] blur-[10px]" />
        </div>

        {/* Right Col (35%): Title, Specs, CTA */}
        <div className="lg:col-span-4 flex flex-col items-start gap-8 ph-right-col">
          <div>
            <span className="font-display font-bold uppercase tracking-widest text-brand-purple/70 text-xs mb-2 block">
              BLEND. SIP. GLOW. EVERY DAY.
            </span>
            <h2 className="font-display font-extrabold text-5xl md:text-6xl text-brand-purple uppercase tracking-tight leading-none mb-4">
              Smoothie Cubes
            </h2>
            <p className="text-lg font-bold text-brand-purple/80 italic">
              No blender? No problem. Simply shake, pour, and enjoy.
            </p>
          </div>

          {/* Custom Checkbox Specs list */}
          <ul className="space-y-4">
            {specs.map(spec => (
              <li key={spec} className="flex items-start gap-3 text-sm font-semibold text-brand-purple/90">
                <span className="w-5 h-5 rounded-full bg-brand-purple text-white flex items-center justify-center mt-0.5 shrink-0">
                  <Check size={12} strokeWidth={3} />
                </span>
                <span>{spec}</span>
              </li>
            ))}
          </ul>

          <Magnetic>
            <Button variant="secondary" size="lg" withArrow className="shadow-2xl px-8 py-5 text-base bg-white hover:bg-white/90 text-brand-purple border border-brand-purple/10 mt-4 w-full sm:w-auto">
              DISCOVER SMOOTHIE CUBES
            </Button>
          </Magnetic>
        </div>

      </div>
    </section>
  );
}
