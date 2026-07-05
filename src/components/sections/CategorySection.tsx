import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const CATEGORIES = [
  { name: "ALL PRODUCTS", image: "/acai-zero-sugar-original.png", link: "/shop" },
  { name: "AÇAÍ RANGE", image: "/acai-passionfruit-legs.png", link: "/shop?category=Tubs" },
  { name: "SMOOTHIE CUBES", image: "/mango_pack.png", link: "/shop?category=Cubes" },
  { name: "ICE POPS", image: "/dragonfruit_pack.png", link: "/shop?category=Packs" },
  { name: "SUPERFRUIT SORBETS", image: "/acai-zero-sugar-original.png", link: "/shop?category=Sorbets" },
  { name: "BULK TUBS", image: "/acai-passionfruit-legs.png", link: "/shop?category=Bulk" }
];

export function CategorySection() {
  return (
    <section className="w-full bg-[#FBB03B] py-16 overflow-hidden relative z-20">
      <div className="max-w-7xl mx-auto px-6 overflow-x-auto no-scrollbar">
        <div className="flex justify-center min-w-max gap-8 md:gap-12 px-4">
          {CATEGORIES.map((cat, idx) => (
            <Link key={idx} href={cat.link} className="flex flex-col items-center group">
              <motion.div 
                whileHover={{ y: -10 }}
                className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center mb-6"
              >
                {/* White splash background */}
                <div className="absolute inset-0 bg-white rounded-full drop-shadow-md transform transition-transform group-hover:scale-105" style={{ borderRadius: '40% 60% 50% 40% / 50% 40% 60% 40%' }} />
                
                {/* Product Image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-24 md:w-32 h-auto relative z-10 transition-transform group-hover:scale-110 object-contain mix-blend-multiply"
                />
              </motion.div>
              
              <span className="text-white font-bold text-xs md:text-sm tracking-widest text-center max-w-[120px]">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
