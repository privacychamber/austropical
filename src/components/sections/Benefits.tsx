"use client";

import React from "react";
import { BENEFITS } from "@/lib/constants";

export function Benefits() {
  return (
    <div className="bg-white py-10 border-y border-brand-purple/10 hidden lg:block bg-noise">
      <div className="mx-auto max-w-container px-6 md:px-16 lg:px-[120px]">
        <div className="flex items-center justify-between">
          {BENEFITS.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div key={idx} className="flex items-center gap-4 text-brand-purple">
                <div className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center">
                  <Icon size={20} className="text-brand-purple" />
                </div>
                <div>
                  <h4 className="font-display font-black text-xs uppercase tracking-widest leading-none mb-1">
                    {benefit.title}
                  </h4>
                  <p className="text-[11px] font-bold text-brand-purple/60 leading-none">
                    {benefit.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
