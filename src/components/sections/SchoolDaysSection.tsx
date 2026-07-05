"use client";

import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function SchoolDaysSection() {
  return (
    <section className="bg-white py-36 lg:py-48 relative overflow-hidden bg-noise border-b border-brand-purple/10">
      <div className="mx-auto max-w-container px-6 md:px-16 lg:px-[120px] grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        
        {/* Left: Big Lifestyle Photo */}
        <div className="lg:col-span-6 relative">
          <div className="absolute inset-0 bg-brand-yellow rounded-[40px] rotate-[3deg] scale-95 opacity-50 z-0" />
          <div className="relative z-10 w-full h-[500px] rounded-[40px] overflow-hidden shadow-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/lifestyle_kid.png" 
              alt="Happy kid enjoying superfood smoothie" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right: Copy & Checklist */}
        <div className="lg:col-span-6 flex flex-col items-start gap-8">
          <div>
            <span className="font-display font-bold uppercase tracking-widest text-brand-pink text-xs mb-2 block">
              HEALTHY & NUTRITIOUS
            </span>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-brand-purple uppercase tracking-tight leading-none mb-4">
              VEGAN EVERY DAY
            </h2>
            <p className="text-lg text-brand-purple/80 font-medium leading-relaxed">
              Crafted for busy school days, active afternoons, and growing minds. Simple nutrition, zero junk.
            </p>
          </div>

          <ul className="space-y-4 w-full border-t border-brand-purple/10 pt-6">
            <li className="flex items-center gap-3 font-semibold text-brand-purple">
              <span className="w-5 h-5 rounded-full bg-brand-pink text-white flex items-center justify-center shrink-0">
                <Check size={12} strokeWidth={3} />
              </span>
              <span>100% Kid-Approved Delicious Flavors</span>
            </li>
            <li className="flex items-center gap-3 font-semibold text-brand-purple">
              <span className="w-5 h-5 rounded-full bg-brand-pink text-white flex items-center justify-center shrink-0">
                <Check size={12} strokeWidth={3} />
              </span>
              <span>Zero Artificial Sweeteners or Chemicals</span>
            </li>
            <li className="flex items-center gap-3 font-semibold text-brand-purple">
              <span className="w-5 h-5 rounded-full bg-brand-pink text-white flex items-center justify-center shrink-0">
                <Check size={12} strokeWidth={3} />
              </span>
              <span>Rich in Vit C, Iron & Dietary Fiber</span>
            </li>
          </ul>

          <Button variant="primary" size="lg" withArrow className="mt-4 px-8 py-4 text-base">
            LEARN MORE ABOUT NUTRITION
          </Button>
        </div>

      </div>
    </section>
  );
}
