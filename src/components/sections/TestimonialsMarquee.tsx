"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const TESTIMONIALS_ROW_1 = [
  { name: "Sarah M.", role: "Mum of 3", text: "My kids absolutely devour the smoothie cubes. Finally a healthy snack they beg for!", color: "bg-[#F7931E]" },
  { name: "Jake T.", role: "Surfer", text: "The dragonfruit ice pops are my post-surf go-to. So refreshing and clean.", color: "bg-[#E71D85]" },
  { name: "Elena P.", role: "Nutritionist", text: "Best açaí outside of Brazil! The pure zero-sugar tubs are a staple in my freezer.", color: "bg-[#B2D235]" },
  { name: "Tom H.", role: "Fitness Coach", text: "I blend the bulk tubs every morning. Unbeatable quality and taste.", color: "bg-[#29ABE2]" },
  { name: "Chloe S.", role: "Student", text: "The passionfruit açaí tub is life-changing. Always in my basket.", color: "bg-[#8B217D]" },
];

const TESTIMONIALS_ROW_2 = [
  { name: "Lucy K.", role: "Yoga Instructor", text: "Obsessed with the passionfruit blend. It makes my morning bowl so vibrant!", color: "bg-[#29ABE2]" },
  { name: "Mark D.", role: "Personal Trainer", text: "Real fruit, no nasty additives. Austropical has nailed it.", color: "bg-[#1A5D2C]" },
  { name: "Emma R.", role: "Food Blogger", text: "The most authentic tropical flavors I've tasted in Australia.", color: "bg-[#FBB03B]" },
  { name: "Liam W.", role: "Marathon Runner", text: "Clean energy before my long runs. The smoothie cubes are a game changer.", color: "bg-[#E71D85]" },
  { name: "Sophie J.", role: "Busy Professional", text: "Saves me so much time in the mornings without compromising on health.", color: "bg-[#F7931E]" },
];

const MarqueeRow = ({ items, direction = "left", speed = 40 }: { items: typeof TESTIMONIALS_ROW_1, direction?: "left" | "right", speed?: number }) => {
  // Duplicate the array to create a seamless loop
  const duplicatedItems = [...items, ...items, ...items];
  
  return (
    <div className="flex w-full overflow-hidden relative">
      <motion.div
        className="flex gap-6 min-w-max py-4"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        {duplicatedItems.map((testimonial, idx) => (
          <div 
            key={idx} 
            className="w-[350px] md:w-[450px] flex-shrink-0 bg-white rounded-[32px] p-8 border-2 border-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${testimonial.color} flex items-center justify-center text-white font-display text-xl uppercase`}>
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-[#1A5D2C]">{testimonial.name}</h4>
                  <p className="text-xs text-[#1A5D2C]/60 uppercase tracking-widest font-bold">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FBB03B] text-[#FBB03B]" />
                ))}
              </div>
            </div>
            <p className="text-[#1A5D2C]/80 font-medium text-lg leading-relaxed">
              "{testimonial.text}"
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export function TestimonialsMarquee() {
  return (
    <section className="bg-[#FDFBF7] py-24 md:py-32 overflow-hidden border-t border-[#1A5D2C]/5">
      <div className="text-center mb-16 space-y-4 px-6">
        <span className="inline-block px-4 py-2 bg-[#E71D85]/10 text-[#E71D85] rounded-full font-bold text-xs uppercase tracking-widest">
          Loved by Australia
        </span>
        <h2 className="font-display text-5xl md:text-7xl text-[#1A5D2C] uppercase leading-[0.9]">
          Don't just take <br/> our word for it
        </h2>
      </div>

      <div className="flex flex-col gap-6 md:gap-8 -mx-4 md:mx-0">
        <MarqueeRow items={TESTIMONIALS_ROW_1} direction="left" speed={60} />
        <MarqueeRow items={TESTIMONIALS_ROW_2} direction="right" speed={50} />
      </div>
    </section>
  );
}
