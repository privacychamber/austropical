"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Leaf, Trees, Globe2, ShieldAlert, ArrowRight } from "lucide-react";

export default function SustainabilityPage() {
  return (
    <div className="bg-brand-cream text-brand-purple min-h-screen relative overflow-x-hidden font-sans">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-36 pb-16 bg-[#1f3e1b] text-white text-center relative">
        <div className="absolute inset-0 bg-brand-orange/5 blur-[80px]" />
        <div className="max-w-container mx-auto px-6 md:px-12 relative z-10 space-y-4">
          <span className="text-xs font-black text-brand-yellow bg-white/10 px-3 py-1.5 rounded-btn uppercase tracking-wider">
            Conservation &amp; Planet
          </span>
          <h1 className="text-4xl md:text-6xl font-black font-display tracking-tight text-white leading-tight">
            100% Eco-Harvested. <br />
            Carbon Neutral Sourcing.
          </h1>
          <p className="text-white/70 text-sm md:text-base font-medium max-w-md mx-auto">
            How we partner directly with Amazonian cooperatives to protect rainforest biodiversity and support small farming families.
          </p>
        </div>
      </section>

      {/* Narrative grid details */}
      <section className="py-24 max-w-container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center text-left">
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-xs font-black text-brand-green uppercase tracking-widest">Our Impact Model</h2>
          <h3 className="text-3xl md:text-4xl font-black font-display text-brand-purple leading-tight">
            Protecting the Canopy, Tree by Tree.
          </h3>
          <p className="text-brand-purple/80 text-sm font-semibold leading-relaxed">
            Standard modern agriculture is based on slash-and-burn practices that clear out old canopies. Wild-harvested Euterpe palm fruits, however, require high forest density to grow properly.
          </p>
          <p className="text-brand-purple/75 text-sm font-semibold leading-relaxed">
            By paying fair trade premiums for wild açaí berries, we provide a lucrative alternative to logging for local Amazonian communities. The forest remains fully standing because its living trees produce steady value month after month.
          </p>

          <div className="grid grid-cols-2 gap-6 pt-4 border-t border-brand-purple/10">
            <div className="space-y-1">
              <p className="text-brand-green text-3xl font-extrabold font-display">15k+</p>
              <p className="text-[10px] font-bold text-brand-purple/50 uppercase">Canopy Trees Protected</p>
            </div>
            <div className="space-y-1">
              <p className="text-brand-orange text-3xl font-extrabold font-display">100%</p>
              <p className="text-[10px] font-bold text-brand-purple/50 uppercase">Biodegradable / Recyclable Tubs</p>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-5 rounded-card overflow-hidden border border-brand-purple/5 aspect-square shadow-md">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=700&q=80"
            alt="Amazon Canopy"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Sustainable Values list */}
      <section className="py-20 bg-white/40 border-y border-brand-purple/5">
        <div className="max-w-container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Fair Wages", text: "We guarantee wages above industry standards for native Amazon harvesting families, ensuring local financial resilience.", icon: Trees, color: "text-brand-green bg-brand-green/10" },
            { title: "Zero Deforestation", text: "Harvesting only from living wild trees encourages reforestation and preserves local fauna corridors.", icon: Globe2, color: "text-brand-orange bg-brand-orange/10" },
            { title: "Eco-Shipping", text: "We offset carbon emissions from shipping across ocean routes by seeding local nurseries and planting native eucalyptus in Victoria.", icon: Leaf, color: "text-brand-pink bg-brand-pink/10" }
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
      </section>

      {/* Call to action CTA page block */}
      <section className="py-24 text-center max-w-2xl mx-auto px-6 space-y-8">
        <h3 className="text-3xl md:text-4xl font-black font-display text-brand-purple">
          Taste the Sourcing Difference
        </h3>
        <p className="text-brand-purple/75 text-sm font-semibold max-w-md mx-auto">
          Every scoop of Austropical directly fuels reforestation efforts. Secure your superfoods and join the impact.
        </p>
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 px-8 py-4 bg-brand-purple hover:bg-brand-purple-light text-white font-bold text-base rounded-btn transition-colors shadow-lg hover:shadow-xl"
        >
          <span>Explore Sourced Marketplace</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      <Footer />
    </div>
  );
}
