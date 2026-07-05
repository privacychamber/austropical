"use client";

import React from "react";
import { ShieldCheck, Recycle, Heart, Award, CheckCircle, HelpCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const CERTIFICATIONS = [
  { icon: ShieldCheck, title: "ACO CERTIFIED ORGANIC", desc: "Certified organic agricultural standard." },
  { icon: Recycle, title: "100% RECYCLABLE", desc: "BPA-free zero waste compostable packs." },
  { icon: Heart, title: "100% VEGAN & PLANT-BASED", desc: "Approved by Vegan Society Australia." },
  { icon: Award, title: "AMAZON WILD HARVESTED", desc: "Sourced sustainably with fair pay." },
  { icon: CheckCircle, title: "GLUTEN FREE APPROVED", desc: "Naturally processed allergen-safe fruit." },
  { icon: HelpCircle, title: "ZERO ADDITIVES", desc: "No artificial syrups or coloring." },
];

export function CertificationsGrid() {
  return (
    <section className="bg-white py-36 lg:py-48 relative overflow-hidden bg-noise border-b border-brand-purple/10">
      <div className="mx-auto max-w-container px-6 md:px-16 lg:px-[120px]">
        <SectionHeading
          subtitle="TRUSTED NATIONWIDE"
          title="Australia's Most Certified"
          description="We take quality seriously. Every single package is backed by global verification standards."
          className="mb-24"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {CERTIFICATIONS.map((cert) => {
            const Icon = cert.icon;
            return (
              <div key={cert.title} className="border border-brand-purple/10 rounded-2xl p-6 flex flex-col items-center text-center hover:border-brand-purple/30 transition-colors">
                <div className="w-12 h-12 bg-brand-cream rounded-full flex items-center justify-center text-brand-purple mb-4">
                  <Icon size={24} />
                </div>
                <h4 className="font-display font-bold text-[11px] uppercase tracking-widest text-brand-purple mb-2">
                  {cert.title}
                </h4>
                <p className="text-[10px] font-bold text-brand-purple/60 leading-tight">
                  {cert.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
