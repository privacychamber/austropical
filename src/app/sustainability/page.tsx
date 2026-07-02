"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, HelpCircle, ArrowRight } from "lucide-react";

export default function SustainabilityPage() {
  return (
    <div className="bg-brand-cream text-brand-purple min-h-screen relative overflow-x-hidden font-sans">
      <Navbar />

      {/* Hero Header with Amazon River background */}
      <section className="relative pt-48 pb-32 flex items-center justify-center text-center text-white bg-brand-purple">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay"
        />
        {/* Soft gradient bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-cream to-transparent pointer-events-none" />
        
        <div className="max-w-3xl mx-auto px-6 relative z-10 space-y-6">
          <span className="text-xs font-black text-brand-orange bg-brand-orange/20 px-4 py-2 rounded-btn uppercase tracking-widest">
            Austropical Sourcing
          </span>
          <h1 className="text-5xl md:text-7xl font-black font-display tracking-tight text-white leading-none">
            SUSTAINABILITY
          </h1>
          <p className="text-white/80 text-base md:text-lg font-semibold max-w-xl mx-auto leading-relaxed">
            At Austropical, sustainability is not just a standard or a mandate; it is a guiding principle.
          </p>
        </div>
      </section>

      {/* Narrative Split Section */}
      <section className="py-20 max-w-container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center text-left">
        
        {/* Left Copy */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-3xl md:text-4xl font-black font-display text-brand-purple leading-tight">
            We embed responsibility into every step, from the origins of our ingredients to the impact we leave behind.
          </h2>
          <p className="text-brand-purple/80 text-sm md:text-base font-semibold leading-relaxed">
            At Austropical, sustainability is not just a commitment—it&apos;s standard operating procedure. Our brand is built on the belief that how we source, package, and distribute our superfoods matters just as much as the nutritional value they deliver. We work directly with small cooperatives to ensure fair trade, support local farming communities, and preserve the biodiversity of the Amazon.
          </p>

          {/* Allied Box */}
          <div className="border-2 border-brand-orange/20 bg-brand-orange/5 p-6 rounded-card space-y-3">
            <h4 className="font-extrabold text-sm text-brand-orange uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 flex-shrink-0" />
              Forging Global Alliances for Impactful Change
            </h4>
            <p className="text-brand-purple/85 text-xs font-semibold leading-relaxed">
              Through partnerships with the <strong>Great Barrier Reef Foundation</strong> and the <strong>Black Jaguar Foundation</strong>, we amplify our efforts to restore the planet&apos;s ecosystems and biodiversity. These collaborations represent our dedication to preserving the natural wonders of global ecosystems, ensuring that conservation and sustainability practices remain at the forefront of our mission.
            </p>
          </div>
        </div>

        {/* Right Sea Turtle Image */}
        <div className="lg:col-span-5 relative group">
          <div className="absolute inset-0 bg-brand-green/10 rounded-card blur-md scale-95 pointer-events-none" />
          <div className="rounded-card overflow-hidden border border-brand-purple/5 aspect-[4/3] shadow-md relative">
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
      <section className="py-20 bg-white/40 border-t border-brand-purple/5">
        <div className="max-w-container mx-auto px-6 md:px-12 space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-xs font-black text-brand-orange uppercase tracking-widest">Active Partnerships</span>
            <h3 className="text-3xl md:text-5xl font-black font-display text-brand-purple">Supporting Local Ecosystems</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Great Barrier Reef Card */}
            <div className="bg-[#e9f3eb] rounded-card border border-brand-green/15 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-all text-left">
              <div className="p-8 space-y-6">
                
                {/* Logo representation */}
                <div className="flex items-center gap-4 pb-4 border-b border-brand-green/10">
                  <div className="w-24 h-16 bg-white rounded-lg flex items-center justify-center p-2 border border-brand-green/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src="https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=200&q=80" 
                      alt="Reef Illustration" 
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-display text-brand-purple leading-tight">
                      Great Barrier Reef Foundation
                    </h4>
                    <p className="text-[10px] font-bold text-brand-green uppercase tracking-wider mt-0.5">Ocean Ecosystem Partner</p>
                  </div>
                </div>

                <p className="text-brand-purple/80 text-xs font-semibold leading-relaxed">
                  The Great Barrier Reef is a national treasure and global wonder. We are proud to partner with the Great Barrier Reef Foundation in their mission to protect and restore the reef for future generations. Our support helps fund critical research, coral restoration projects, and community-led conservation efforts.
                </p>

                {/* Contribution list */}
                <div className="space-y-3">
                  <p className="text-[10px] font-black text-brand-purple/50 uppercase tracking-widest">Our Contribution</p>
                  <ul className="space-y-2 text-xs font-semibold text-brand-purple/85">
                    {[
                      "Supporting coral restoration and resilience projects.",
                      "Funding research to protect vulnerable reef species.",
                      "Partnering with local communities for conservation.",
                      "Helping to reduce the impact of climate change on the reef."
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Highlight footer block */}
              <div className="bg-brand-green/10 p-6 border-t border-brand-green/10 text-xs font-semibold text-brand-purple">
                <span className="font-extrabold text-brand-green block mb-1">Why It Matters</span>
                The Great Barrier Reef is home to thousands of marine species and plays a crucial role in global ocean health. By supporting the Great Barrier Reef Foundation, we are helping protect this vital ecosystem for generations to come.
              </div>
            </div>

            {/* Black Jaguar Card */}
            <div className="bg-[#f0eaf5] rounded-card border border-brand-purple/10 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-all text-left">
              <div className="p-8 space-y-6">
                
                {/* Logo representation */}
                <div className="flex items-center gap-4 pb-4 border-b border-brand-purple/10">
                  <div className="w-24 h-16 bg-white rounded-lg flex items-center justify-center p-2 border border-brand-purple/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src="https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=200&q=80" 
                      alt="Jaguar Illustration" 
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-display text-brand-purple leading-tight">
                      Black Jaguar Foundation
                    </h4>
                    <p className="text-[10px] font-bold text-brand-purple/60 uppercase tracking-wider mt-0.5">Biodiversity Corridor Partner</p>
                  </div>
                </div>

                <p className="text-brand-purple/80 text-xs font-semibold leading-relaxed">
                  The Black Jaguar Foundation is on a mission to restore the Araguaia Biodiversity Corridor in central Brazil. This massive ecological corridor will connect the Amazon rainforest and the Cerrado savanna, helping to preserve the rich biodiversity of these regions and protect endangered species like the jaguar.
                </p>

                {/* Contribution list */}
                <div className="space-y-3">
                  <p className="text-[10px] font-black text-brand-purple/50 uppercase tracking-widest">Our Contribution</p>
                  <ul className="space-y-2 text-xs font-semibold text-brand-purple/85">
                    {[
                      "Supporting reforestation and habitat restoration.",
                      "Planting native trees in the Araguaia corridor.",
                      "Monitoring wildlife populations in the region.",
                      "Partnering with local landowners to protect natural habitats."
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-purple/60 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Highlight footer block */}
              <div className="bg-brand-purple/10 p-6 border-t border-brand-purple/10 text-xs font-semibold text-brand-purple">
                <span className="font-extrabold text-brand-purple/60 block mb-1">Why It Matters</span>
                The Araguaia Biodiversity Corridor is one of the most critical conservation projects in the world. By connecting fragmented habitats, it helps secure the future of the Amazon and Cerrado ecosystems, ensuring that native species can roam and thrive.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action to shop */}
      <section className="py-24 text-center max-w-2xl mx-auto px-6 space-y-8">
        <h3 className="text-3xl md:text-4xl font-black font-display text-brand-purple">
          Support Conservation With Every Pack
        </h3>
        <p className="text-brand-purple/75 text-sm font-semibold max-w-md mx-auto">
          A percentage of every single checkout transaction goes directly toward funding these global restoration alliances.
        </p>
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 px-8 py-4 bg-brand-purple hover:bg-brand-purple-light text-white font-bold text-base rounded-btn transition-colors shadow-lg hover:shadow-xl"
        >
          <span>Explore Sourced Superfoods</span>
          <ArrowRight className="w-5 h-5 text-brand-orange" />
        </Link>
      </section>

      <Footer />
    </div>
  );
}
