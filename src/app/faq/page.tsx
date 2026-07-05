"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ChevronDown, Search } from "lucide-react";

export default function FAQPage() {
  const [activeFAQ, setActiveFAQ] = useState<string | null>("storage");
  const [searchQuery, setSearchQuery] = useState("");

  const faqs = [
    { id: "shipping", cat: "Delivery", q: "How are the superfoods shipped to remain frozen?", a: "We ship all our items in high-density insulated cooler boxes packed with dry ice. This guarantees the products remain completely frozen at -18°C during transit and right up to your doorstep, even in hot weather." },
    { id: "storage", cat: "Storage", q: "How long can I keep the tubs and cubes in my freezer?", a: "Unopened frozen tubs and smoothie cubes remain nutritionally fresh and flavorful in your standard household freezer for up to 12 months. Once opened, we recommend consuming them within 3 months for optimal freshness." },
    { id: "sourcing", cat: "Sourcing", q: "Where does the organic açaí pulp come from?", a: "Our pure unsweetened pulp is sourced directly from sustainable, wild-harvested Euterpe palms in the Pará state of the Brazilian Amazon. We process the berries within 4 hours to preserve their high antioxidant and lipid integrity before shipping." },
    { id: "ingredients", cat: "Ingredients", q: "Are there any artificial thickeners, gums, or added sugars?", a: "Absolutely not. Our brand philosophy is focused on clean labels. We never use guar gum, xanthan gum, soy lecithin, or refined sugars. What you see is 100% organic fruit blends, seeds, and prebiotics." }
  ];

  const filteredFaqs = faqs.filter(f =>
    f.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
    f.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-brand-ivory text-brand-charcoal min-h-screen relative overflow-x-hidden font-sans">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-36 pb-12 bg-brand-charcoal text-white text-center relative">
        <div className="absolute inset-0 bg-brand-orange/5 blur-[80px]" />
        <div className="max-w-container mx-auto px-6 md:px-12 relative z-10 space-y-4">
          <span className="text-xs font-black text-brand-orange bg-brand-orange/15 px-3 py-1.5 rounded-btn uppercase tracking-wider">
            Help Center
          </span>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-white">
            Frequently Asked Questions
          </h1>
          <p className="text-white/60 text-sm md:text-base font-semibold max-w-md mx-auto">
            Find answers to commonly asked questions regarding frozen shipping, rainforest sourcing, storage, and nutritional facts.
          </p>
        </div>
      </section>

      {/* Content accordions lists */}
      <section className="py-16 max-w-2xl mx-auto px-6 text-left space-y-8">
        
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white border border-brand-charcoal/10 rounded-input text-xs font-semibold focus:border-brand-charcoal outline-none"
          />
          <Search className="absolute left-3.5 top-3.5 w-4.5 h-4.5 text-brand-charcoal/40" />
        </div>

        {/* Accordions */}
        <div className="border border-brand-charcoal/10 rounded-card bg-white p-6 divide-y divide-brand-charcoal/5 shadow-sm">
          {filteredFaqs.map((faq) => (
            <div key={faq.id} className="py-4 first:pt-0 last:pb-0">
              <button
                onClick={() => setActiveFAQ(activeFAQ === faq.id ? null : faq.id)}
                className="w-full flex justify-between items-center text-left font-bold text-sm text-brand-charcoal"
              >
                <div className="space-y-1 pr-4">
                  <span className="text-[10px] font-bold text-brand-orange uppercase tracking-wider block">
                    {faq.cat}
                  </span>
                  <span>{faq.q}</span>
                </div>
                <ChevronDown className={`w-4 h-4 text-brand-charcoal/50 transition-transform duration-300 ${activeFAQ === faq.id ? "rotate-180" : ""}`} />
              </button>
              {activeFAQ === faq.id && (
                <p className="mt-3 text-xs text-brand-charcoal/70 font-semibold leading-relaxed">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
          {filteredFaqs.length === 0 && (
            <p className="text-center py-6 text-xs text-brand-charcoal/50 font-semibold">
              No matching FAQs found. Please contact our support team.
            </p>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
