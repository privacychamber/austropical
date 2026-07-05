"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const TIMELINE_STEPS = [
  {
    title: "SOURCED WITH CARE",
    description: "Handpicked from the Amazon rainforest.",
    image: "/recipe_bowl.png",
  },
  {
    title: "FROZEN FRESH",
    description: "Frozen at the peak of ripeness to lock in nutrients.",
    image: "/acai-zero-sugar-original.png",
  },
  {
    title: "READY TO ENJOY",
    description: "Delivered to you fresh & delicious.",
    image: "/mornings-made-smoothie.jpg",
  },
  {
    title: "FEEL THE DIFFERENCE",
    description: "More energy, better mood, healthier you.",
    image: "/acai-passionfruit-legs.png",
  },
];

export function Timeline() {
  return (
    <section className="bg-brand-purple py-36 lg:py-48 relative text-white overflow-hidden bg-noise">
      <div className="absolute top-10 left-10 w-4 h-4 bg-brand-yellow rounded-full animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-6 h-6 bg-brand-pink rounded-full animate-pulse-slow" />
      <div className="absolute top-20 right-20 w-3 h-3 bg-white rounded-full animate-ping opacity-50" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full spotlight-glow-purple pointer-events-none z-0" />

      <div className="relative z-10 mx-auto max-w-container px-6 md:px-16 lg:px-[120px]">
        <SectionHeading
          title="Açaí as it should be"
          description="From the Amazon to your bowl. Pure. Powerful. Packed with purpose."
          light
        />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          {TIMELINE_STEPS.map((step, index) => (
            <React.Fragment key={step.title}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex flex-col items-center text-center max-w-[240px] group"
              >
                <div className="w-36 h-36 rounded-full border border-white/10 mb-8 flex items-center justify-center overflow-hidden relative shadow-2xl bg-white/5 transition-transform duration-500 group-hover:scale-105">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                </div>

                <h3 className="font-display font-bold text-sm tracking-widest uppercase mb-4 text-brand-yellow">
                  {step.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>

              {index < TIMELINE_STEPS.length - 1 && (
                <div className="hidden lg:block text-brand-yellow/30 px-6">
                  <ArrowRight size={32} strokeWidth={1.5} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
