"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Leaf, Award, Heart, ShieldCheck, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-brand-cream text-brand-purple min-h-screen relative overflow-x-hidden font-sans">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-36 pb-16 bg-[#2A1147] text-white text-center relative">
        <div className="absolute inset-0 bg-brand-pink/5 blur-[80px]" />
        <div className="max-w-container mx-auto px-6 md:px-12 relative z-10 space-y-4">
          <span className="text-xs font-black text-brand-orange bg-brand-orange/15 px-3 py-1.5 rounded-btn uppercase tracking-wider">
            Our Story
          </span>
          <h1 className="text-4xl md:text-6xl font-black font-display tracking-tight text-white leading-tight">
            Amazon Harvest. <br />
            Australian Wellness.
          </h1>
          <p className="text-white/60 text-sm md:text-base font-semibold max-w-md mx-auto">
            How Austropical is redefining functional fast food through organic, wild-harvested fruits.
          </p>
        </div>
      </section>

      {/* Mission Split section */}
      <section className="py-24 max-w-container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center text-left">
        <div className="space-y-6">
          <h2 className="text-xs font-black text-brand-orange uppercase tracking-widest">Our Mission</h2>
          <h3 className="text-3xl md:text-4xl font-black font-display text-brand-purple leading-tight">
            Pure Functional Superfoods, Zero Shortcuts.
          </h3>
          <p className="text-brand-purple/80 text-sm md:text-base font-semibold leading-relaxed">
            Founded in Sydney, Austropical was created to bridge the gap between delicious, convenient snacking and pure functional nutrition. We believe that what you put in your body should be clean, wild-harvested, and free from industrial additives.
          </p>
          <p className="text-brand-purple/75 text-sm font-semibold leading-relaxed">
            By sourcing Euterpe oleracea berries straight from Brazilian native cooperatives, we ensure that you get the highest antioxidant counts while protecting critical Amazon rainforest ecosystems.
          </p>
        </div>
        <div className="rounded-card overflow-hidden border border-brand-purple/5 aspect-[4/3] shadow-md">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=700&q=80"
            alt="Healthy Acai Bowl"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Core Values grid */}
      <section className="py-20 bg-white/40 border-y border-brand-purple/5">
        <div className="max-w-container mx-auto px-6 md:px-12 text-center space-y-16">
          <div className="space-y-4">
            <h2 className="text-xs font-black text-brand-orange uppercase tracking-widest">Core Integrity</h2>
            <h3 className="text-3xl font-black font-display text-brand-purple">Built On Core Values</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Sustainable Harvesting", text: "We harvest berries only from wild Euterpe palms, preserving existing canopy ecosystems and avoiding monoculture deforestation.", icon: Leaf, color: "text-brand-green bg-brand-green/10" },
              { title: "Antioxidant Density", text: "We flash-freeze fruits within hours of harvest to lock in maximum cellular-nourishing antioxidants and lipids.", icon: Award, color: "text-brand-orange bg-brand-orange/10" },
              { title: "Pure Formulation", text: "Zero added cane sugar, zero industrial emulsifiers, and zero artificial thickeners. Only pure natural superfood.", icon: ShieldCheck, color: "text-brand-pink bg-brand-pink/10" }
            ].map((val) => {
              const Icon = val.icon;
              return (
                <div key={val.title} className="bg-white border border-brand-purple/5 p-8 rounded-card text-left space-y-4 shadow-sm hover:shadow-md transition-all">
                  <div className={`w-12 h-12 rounded-btn ${val.color} flex items-center justify-center`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold font-display text-brand-purple">{val.title}</h4>
                  <p className="text-brand-purple/70 text-xs font-semibold leading-relaxed">{val.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to action CTA page block */}
      <section className="py-24 text-center max-w-2xl mx-auto px-6 space-y-8">
        <h3 className="text-3xl md:text-4xl font-black font-display text-brand-purple">
          Ready to Fuel Your Body?
        </h3>
        <p className="text-brand-purple/75 text-sm font-semibold max-w-md mx-auto">
          Explore our collections of organic wild tubs, functional smoothie cubes, and unsweetened block packs.
        </p>
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 px-8 py-4 bg-brand-purple hover:bg-brand-purple-light text-white font-bold text-base rounded-btn transition-colors shadow-lg hover:shadow-xl"
        >
          <span>Shop Collections</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      <Footer />
    </div>
  );
}
