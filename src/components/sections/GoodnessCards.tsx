"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { useMouseParallax } from "@/hooks/useMouseParallax";

const CARDS = [
  {
    title: "Açaí Superberry",
    category: "ORGANIC PACKS",
    bgImage: "/wet_rock_texture_placeholder.jpg",
    productImage: "/acai-passionfruit-legs.png", // Ensure this uses a realistic shadow in the final asset
    environmentDesc: "Wet volcanic rock, morning mist",
    specs: ["Rich in Antioxidants", "100% Wild Harvested", "Zero Added Sugars"],
    cta: "SHOP PACKS"
  },
  {
    title: "Pure & Natural",
    category: "SUPERFOOD BLENDS",
    bgImage: "/wooden_board_frost_placeholder.jpg",
    productImage: "/dragonfruit_pack.png",
    environmentDesc: "Wooden cutting board, frost",
    specs: ["High Fiber & Vitamin C", "No Artificial Syrups", "Gluten-Free & Vegan"],
    cta: "SHOP BLENDS"
  },
  {
    title: "Original Sensation",
    category: "FROZEN TUBS",
    bgImage: "/tropical_picnic_placeholder.jpg",
    productImage: "/acai-zero-sugar-original.png",
    environmentDesc: "Tropical picnic, summer sunlight",
    specs: ["Traditional Amazon Recipe", "Scoopable & Creamy", "Guarana Boosted"],
    cta: "SHOP TUBS"
  }
];

export function GoodnessCards() {
  const coords = useMouseParallax(10);

  return (
    <section className="bg-[#101211] py-36 lg:py-52 relative overflow-hidden">
      {/* Cinematic Fog Overlay */}
      <div className="absolute inset-0 bg-noise-pattern opacity-10 mix-blend-overlay pointer-events-none" />
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-white/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-container px-6 md:px-16 lg:px-[120px] relative z-10">
        <SectionHeading
          subtitle="OUR ECOSYSTEMS"
          title="Born in the wild."
          description="Every product we craft comes from a deeply respected natural ecosystem. We freeze-lock the nutrients at the source so you get 100% pure organic Amazonian superfoods in every bite."
          className="mb-24 text-white"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {CARDS.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2, ease: [0.25, 1, 0.5, 1] }}
              whileHover="hover"
              className="group relative rounded-card overflow-hidden min-h-[620px] cursor-pointer shadow-ambient"
            >
              {/* Photorealistic Environment Background */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url('${card.bgImage}')` }}
              />
              
              {/* Atmospheric Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

              {/* Card Content */}
              <div className="relative z-10 p-10 h-full flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-sans font-medium tracking-widest text-brand-accent/90 uppercase mb-3 block">
                    {card.category}
                  </span>
                  <h3 className="font-display font-medium text-4xl leading-none tracking-wide text-white mb-4">
                    {card.title}
                  </h3>
                  <p className="font-sans text-xs text-white/50 tracking-widest uppercase mb-8">
                    {card.environmentDesc}
                  </p>
                  
                  {/* Subtle Specs */}
                  <ul className="space-y-3">
                    {card.specs.map(spec => (
                      <li key={spec} className="flex items-center gap-3 text-sm font-light text-white/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent/50" />
                        <span className="tracking-wide">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Physics-based Product Parallax */}
                <div className="relative w-full h-64 flex items-center justify-center mt-12 mb-8 perspective-1000">
                  {/* Product Shadow (Ambient Occlusion) */}
                  <div className="absolute -bottom-6 w-32 h-6 bg-black/80 blur-xl rounded-full" />
                  
                  {/* Product Image */}
                  <motion.div
                    variants={{
                      hover: { rotateX: 5, rotateY: 5, scale: 1.05, y: -5 }
                    }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="relative z-20"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={card.productImage}
                      alt={card.title}
                      className="w-56 h-auto object-contain filter drop-shadow-2xl"
                    />
                  </motion.div>
                </div>

                {/* Card Bottom CTA */}
                <div className="pt-6 border-t border-white/10 flex items-center justify-between transition-colors duration-500 group-hover:border-white/30">
                  <span className="font-sans font-medium text-xs uppercase tracking-widest text-white/70 group-hover:text-brand-accent transition-colors">
                    {card.cta}
                  </span>
                  <ArrowRight size={16} className="text-white/50 group-hover:text-brand-accent transform group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Shop Button */}
        <div className="mt-32 flex justify-center">
          <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white hover:text-black">
            Explore Ecosystems
          </Button>
        </div>
      </div>
    </section>
  );
}
