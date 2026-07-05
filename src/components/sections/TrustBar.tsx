"use client";

import React from "react";
import { motion } from "framer-motion";
import { TRUST_ITEMS } from "@/lib/constants";

export function TrustBar() {
  return (
    <section className="bg-white py-12 border-b border-brand-purple/10 bg-noise">
      <div className="mx-auto max-w-container px-6 md:px-16 lg:px-[120px]">
        <div className="flex flex-wrap justify-between items-center gap-8">
          {TRUST_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-center gap-3 text-brand-purple"
              >
                <Icon className="w-5 h-5" />
                <span className="font-display font-bold text-sm tracking-widest uppercase">
                  {item.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
