"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Testimonials } from "./Testimonials";

const RECIPES = [
  {
    title: "Açaí Energy Bowl",
    image: "/recipe_bowl.png",
  },
  {
    title: "Tropical Açaí Smoothie",
    image: "/recipe_smoothie.png",
  },
  {
    title: "Açaí & Banana Nice Cream",
    image: "/mornings-made-smoothie.jpg",
  },
  {
    title: "Açaí Granola Parfait",
    image: "/recipe_parfait.png",
  },
  {
    title: "Açaí Green Smoothie",
    image: "/unmatched-excellence-buckets.jpg",
  },
];

export function RecipeSection() {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    dragFree: true,
  });

  return (
    <section className="bg-brand-cream py-36 lg:py-48 relative overflow-hidden bg-noise">
      <div className="mx-auto max-w-container px-6 md:px-16 lg:px-[120px]">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left: Recipe Carousel (70%) */}
          <div className="w-full lg:w-[70%]">
            <div className="flex items-end justify-between mb-12">
              <h2 className="font-display font-extrabold text-4xl md:text-5xl text-brand-purple uppercase tracking-tight">
                RECIPES & INSPIRATION
              </h2>
              <Link href="/recipes" className="hidden sm:flex items-center gap-2 text-sm font-bold text-brand-purple hover:text-brand-orange uppercase tracking-wider transition-colors">
                VIEW ALL RECIPES <ArrowRight size={16} />
              </Link>
            </div>

            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-6 pb-8">
                {RECIPES.map((recipe, idx) => (
                  <motion.div 
                    key={idx} 
                    className="flex-[0_0_240px] md:flex-[0_0_300px] min-w-0 group cursor-pointer"
                    whileHover={{ y: -4 }}
                  >
                    <div className="w-full h-[240px] rounded-[24px] mb-4 overflow-hidden relative shadow-md">
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 z-10 transition-colors duration-300" />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={recipe.image} 
                        alt={recipe.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="font-display font-bold text-lg text-brand-purple text-center group-hover:text-brand-orange transition-colors">
                      {recipe.title}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <Link href="/recipes" className="flex sm:hidden items-center justify-center gap-2 text-sm font-bold text-brand-purple mt-4 uppercase tracking-wider">
              VIEW ALL RECIPES <ArrowRight size={16} />
            </Link>
          </div>

          {/* Right: Testimonial (30%) */}
          <div className="w-full lg:w-[30%] flex flex-col">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-brand-purple uppercase mb-8">
              LOVED BY THOUSANDS
            </h2>
            <Testimonials />
          </div>

        </div>

      </div>
    </section>
  );
}
