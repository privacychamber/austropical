"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, HelpCircle, ArrowRight } from "lucide-react";

export default function SustainabilityPage() {
  return (
    <div className="bg-[#FDFBF7] text-[#1A5D2C] min-h-screen relative overflow-x-hidden font-sans">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-48 pb-32 flex items-center justify-center text-center text-[#1A5D2C] bg-[#FDFBF7] overflow-hidden">
        <div className="absolute inset-0 bg-[#B2D235]/10" />
        
        <div className="max-w-3xl mx-auto px-6 relative z-10 space-y-6">
          <span className="text-xs font-bold text-[#F7931E] uppercase tracking-[0.2em] block">
            Austropical Sourcing
          </span>
          <h1 className="text-5xl md:text-[5rem] font-black font-display tracking-tight text-[#1A5D2C] leading-[0.9] uppercase">
            SUSTAINABILITY
          </h1>
          <p className="text-[#1A5D2C]/80 text-base md:text-xl font-light max-w-xl mx-auto leading-relaxed">
            At Austropical, sustainability is not just a standard or a mandate; it is a guiding principle.
          </p>
        </div>
      </section>

      {/* Narrative Split Section */}
      <section className="py-20 max-w-container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center text-left">
        
        {/* Left Copy */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-4xl md:text-5xl font-black font-display text-[#1A5D2C] leading-[0.9] uppercase">
            We embed responsibility into every step
          </h2>
          <p className="text-[#1A5D2C]/80 text-sm md:text-base font-semibold leading-relaxed pt-4">
            At Austropical, sustainability is not just a commitment—it&apos;s standard operating procedure. Our brand is built on the belief that how we source, package, and distribute our superfoods matters just as much as the nutritional value they deliver. We work directly with small cooperatives to ensure fair trade, support local farming communities, and preserve the biodiversity of the Amazon.
          </p>

          {/* Allied Box */}
          <div className="border-2 border-[#B2D235]/30 bg-white p-8 rounded-[30px] space-y-4 shadow-sm mt-8">
            <h4 className="font-black text-[#1A5D2C] uppercase tracking-widest flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 flex-shrink-0 text-[#B2D235]" />
              Forging Global Alliances
            </h4>
            <p className="text-[#1A5D2C]/70 text-sm font-semibold leading-relaxed">
              Through partnerships with the <strong>Great Barrier Reef Foundation</strong> and the <strong>Black Jaguar Foundation</strong>, we amplify our efforts to restore the planet&apos;s ecosystems and biodiversity.
            </p>
          </div>
        </div>

        {/* Right Sea Turtle Image */}
        <div className="lg:col-span-5 relative group">
          <div className="absolute inset-0 bg-[#B2D235]/20 rounded-[40px] blur-xl scale-95 pointer-events-none" />
          <div className="rounded-card overflow-hidden border border-brand-charcoal/5 aspect-[4/3] shadow-md relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&w=800&q=80"
              alt="Sea Turtle Swimming"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
            />
          </div>
        </div>
      </section>

      {/* Alliance Detail Cards Section */}
      <section className="py-20 bg-white border-t border-[#1A5D2C]/5">
        <div className="max-w-container mx-auto px-6 md:px-12 space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-sm font-bold text-[#F7931E] uppercase tracking-[0.2em] block">Active Partnerships</span>
            <h3 className="text-4xl md:text-[4rem] font-black font-display text-[#1A5D2C] leading-[0.9] uppercase">Supporting Local <br/> Ecosystems</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Great Barrier Reef Card */}
            <div className="bg-[#FDFBF7] rounded-[40px] border border-[#1A5D2C]/10 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl transition-all text-left group">
              <div className="p-10 space-y-6">
                
                {/* Logo representation */}
                <div className="flex items-center gap-4 pb-6 border-b border-[#1A5D2C]/10">
                  <div className="w-24 h-16 bg-white rounded-2xl flex items-center justify-center p-2 border border-[#1A5D2C]/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src="https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=200&q=80" 
                      alt="Reef Illustration" 
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black font-display text-[#1A5D2C] leading-tight group-hover:text-[#F7931E] transition-colors">
                      Great Barrier Reef Foundation
                    </h4>
                  </div>
                </div>

                <p className="text-[#1A5D2C]/80 text-sm font-semibold leading-relaxed">
                  The Great Barrier Reef is a national treasure and global wonder. We are proud to partner with the Great Barrier Reef Foundation in their mission to protect and restore the reef for future generations.
                </p>

                {/* Contribution list */}
                <div className="space-y-4">
                  <p className="text-[10px] font-black text-[#1A5D2C]/40 uppercase tracking-widest">Our Contribution</p>
                  <ul className="space-y-3 text-sm font-semibold text-[#1A5D2C]/80">
                    {[
                      "Supporting coral restoration and resilience projects.",
                      "Funding research to protect vulnerable reef species.",
                      "Partnering with local communities for conservation."
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#B2D235] mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Black Jaguar Card */}
            <div className="bg-[#FDFBF7] rounded-[40px] border border-[#1A5D2C]/10 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl transition-all text-left group">
              <div className="p-10 space-y-6">
                
                {/* Logo representation */}
                <div className="flex items-center gap-4 pb-6 border-b border-[#1A5D2C]/10">
                  <div className="w-24 h-16 bg-white rounded-2xl flex items-center justify-center p-2 border border-[#1A5D2C]/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src="https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=200&q=80" 
                      alt="Jaguar Illustration" 
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black font-display text-[#1A5D2C] leading-tight group-hover:text-[#F7931E] transition-colors">
                      Black Jaguar Foundation
                    </h4>
                  </div>
                </div>

                <p className="text-[#1A5D2C]/80 text-sm font-semibold leading-relaxed">
                  The Black Jaguar Foundation is on a mission to restore the Araguaia Biodiversity Corridor in central Brazil. This massive ecological corridor will connect the Amazon rainforest and the Cerrado savanna.
                </p>

                {/* Contribution list */}
                <div className="space-y-4">
                  <p className="text-[10px] font-black text-[#1A5D2C]/40 uppercase tracking-widest">Our Contribution</p>
                  <ul className="space-y-3 text-sm font-semibold text-[#1A5D2C]/80">
                    {[
                      "Supporting reforestation and habitat restoration.",
                      "Planting native trees in the Araguaia corridor.",
                      "Monitoring wildlife populations in the region."
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#B2D235] mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action to shop */}
      <section className="py-24 text-center max-w-3xl mx-auto px-6 space-y-8">
        <h3 className="text-4xl md:text-[4rem] font-black font-display text-[#1A5D2C] uppercase leading-[0.9]">
          Support Conservation With Every Pack
        </h3>
        <p className="text-[#1A5D2C]/75 text-lg font-light max-w-lg mx-auto">
          A percentage of every single checkout transaction goes directly toward funding these global restoration alliances.
        </p>
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 px-10 py-5 bg-[#1A5D2C] hover:bg-[#F7931E] hover:text-[#1A5D2C] text-white font-bold text-base rounded-full transition-colors shadow-xl"
        >
          <span>Explore Superfoods</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      <Footer />
    </div>
  );
}
