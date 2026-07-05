"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Heart, Leaf, Star, Globe } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-brand-ivory text-brand-charcoal min-h-screen relative overflow-x-hidden font-sans">
      <Navbar />

      {/* Hero Header with Amazon forest overlay */}
      <section className="relative pt-48 pb-32 flex items-center justify-center text-center text-white bg-brand-charcoal">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-ivory to-transparent pointer-events-none" />
        
        <div className="max-w-container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 text-left">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-black text-brand-orange bg-brand-orange/20 px-4 py-2 rounded-btn uppercase tracking-widest inline-block">
              🌱 WILDLY NATURAL - PURE AND UNTAMED
            </span>
            <h1 className="text-5xl md:text-7xl font-black font-display tracking-tight text-white leading-[1.05]">
              FROM THE RAINFOREST <br />TO THE WORLD
            </h1>
            <p className="text-white/80 text-sm md:text-base font-semibold leading-relaxed max-w-xl">
              At Austropical, our journey began with a simple passion: to make the extraordinary benefits of Amazonian superfoods accessible to everyone, while preserving the delicate ecosystems that produce them.
            </p>
            <p className="text-white/70 text-xs md:text-sm font-semibold leading-relaxed max-w-xl">
              We source our products directly from organic cooperatives in the heart of the Amazon, ensuring fair trade and supporting local communities. Every tub, cube, and pack of Austropical is a testament to our commitment to quality, purity, and environmental stewardship.
            </p>
          </div>
          
          <div className="lg:col-span-5 flex justify-center">
            <div className="rounded-card overflow-hidden border border-white/15 aspect-[4/3] w-full max-w-md shadow-2xl relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=600&q=80" 
                alt="Amazon Harvest" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 max-w-container mx-auto px-6 md:px-12 space-y-16 text-left">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-black text-brand-orange uppercase tracking-widest">Our Roots</span>
          <h2 className="text-3xl md:text-5xl font-black font-display text-brand-charcoal">OUR STORY</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-brand-charcoal/80 text-sm md:text-base font-semibold leading-relaxed">
              Austropical was founded by a team of wellness enthusiasts who fell in love with the vibrant energy and rich nutrition of Amazonian açaí.
            </p>
            <p className="text-brand-charcoal/80 text-sm md:text-base font-semibold leading-relaxed">
              They saw an opportunity to bring this pure, nutrient-dense superfood to Australia, but they wanted to do it differently. They wanted to create a brand that prioritized sustainability, ethical sourcing, and transparency.
            </p>
            <p className="text-brand-charcoal/80 text-sm md:text-base font-semibold leading-relaxed">
              So they traveled to the Amazon, built relationships with local cooperatives, and established a direct supply chain that guarantees the highest quality pulp and fair compensation for the harvesters.
            </p>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute inset-0 bg-brand-orange/15 rounded-card blur-md scale-95 pointer-events-none" />
            <div className="rounded-card overflow-hidden border border-brand-charcoal/5 aspect-[4/3] shadow-md relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=600&q=80" 
                alt="Superfoods Placement" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
              />
            </div>
          </div>
        </div>

        {/* Global Impact Banner */}
        <div className="bg-brand-orange/10 border-2 border-brand-orange/20 p-6 rounded-card text-center max-w-4xl mx-auto">
          <p className="text-brand-charcoal font-extrabold text-sm md:text-base">
            🌱 Every product we sell helps fund global reforestation and ocean conservation initiatives.
          </p>
        </div>

        {/* Story Continuation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center pt-8">
          {/* Left Delivery Image */}
          <div className="lg:col-span-5 relative order-last lg:order-first group">
            <div className="absolute inset-0 bg-brand-charcoal/10 rounded-card blur-md scale-95 pointer-events-none" />
            <div className="rounded-card overflow-hidden border border-brand-charcoal/5 aspect-[4/3] shadow-md relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80" 
                alt="Austropical Transportation Delivery" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
              />
            </div>
          </div>

          {/* Right Text */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-brand-charcoal/80 text-sm md:text-base font-semibold leading-relaxed">
              Today, Austropical is a trusted provider of premium superfoods across Australia. We serve health-conscious individuals, smoothie bars, and cafes who value quality and sustainability.
            </p>
            <p className="text-brand-charcoal/80 text-sm md:text-base font-semibold leading-relaxed">
              Our products are flash-frozen at peak ripeness to lock in maximum nutrition and flavor. We never use artificial additives, preservatives, or excess sugars.
            </p>
            <p className="text-brand-charcoal/80 text-sm md:text-base font-semibold leading-relaxed">
              From the rainforest to your bowl, we are committed to providing the purest, most delicious superfoods on earth.
            </p>
            
            <div className="bg-brand-charcoal/5 border border-brand-charcoal/10 p-4 rounded-btn max-w-md">
              <p className="text-brand-charcoal text-xs font-black uppercase tracking-wider">
                🌱 100% Traceable. Direct from Amazonian co-ops to your bowl.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-white/40 border-y border-brand-charcoal/5 text-left">
        <div className="max-w-container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-black text-brand-orange uppercase tracking-widest">Purpose</span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-brand-charcoal">OUR MISSION</h2>
            <p className="text-brand-charcoal/85 text-base md:text-lg font-semibold leading-relaxed">
              Our mission is simple: to make healthy living delicious and sustainable. We believe that what you put into your body matters, and we are committed to providing the highest quality, most nutrient-dense superfoods on earth. We strive to inspire a healthier, happier world, one superfood bowl at a time.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-card overflow-hidden border border-brand-charcoal/5 aspect-square max-w-sm mx-auto shadow-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=500&q=80" 
                alt="Mission superfoods" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 max-w-container mx-auto px-6 md:px-12 space-y-12 text-left">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-black text-brand-orange uppercase tracking-widest">Core Principles</span>
          <h2 className="text-3xl md:text-5xl font-black font-display text-brand-charcoal">OUR VALUES</h2>
          <p className="text-brand-charcoal/75 text-sm font-semibold">We guide our decisions with these core values:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            {
              title: "Purity First",
              desc: "We never compromise on quality. Our products are 100% natural, organic, and free from fillers."
            },
            {
              title: "Ethical Sourcing",
              desc: "We build direct relationships with local co-ops, ensuring fair trade and fair wages for harvesters."
            },
            {
              title: "Sustainability",
              desc: "We are committed to reducing our carbon footprint, using eco-friendly packaging, and supporting conservation."
            },
            {
              title: "Transparency",
              desc: "We believe in complete transparency. We share our journey, sourcing, and ingredients openly."
            },
            {
              title: "Quality",
              desc: "We freeze-dry and freeze-lock our products at peak ripeness to deliver maximum nutrition."
            }
          ].map((val, idx) => (
            <div key={idx} className="glass-card p-6 rounded-card border border-brand-charcoal/5 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-8 h-8 rounded-full bg-brand-orange/15 flex items-center justify-center text-brand-orange font-bold text-xs">
                  {idx + 1}
                </div>
                <h4 className="text-base font-bold font-display text-brand-charcoal">{val.title}</h4>
                <p className="text-brand-charcoal/70 text-xs leading-relaxed font-semibold">{val.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* A Word From Our Founder Section */}
      <section className="py-24 bg-brand-charcoal text-white text-left relative overflow-hidden">
        <div className="absolute top-1/2 right-10 w-48 h-48 bg-brand-orange/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <div className="bg-white rounded-card border border-white/10 p-8 md:p-12 text-brand-charcoal space-y-6 shadow-2xl relative">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center text-white text-3xl font-black font-display select-none">
              “
            </div>
            
            <h3 className="text-2xl font-black font-display text-brand-charcoal">A WORD FROM OUR FOUNDER</h3>
            
            <p className="text-brand-charcoal/90 text-sm md:text-base font-semibold leading-relaxed italic">
              At Austropical, we believe that health and sustainability go hand in hand. Our mission is to provide the highest quality, most nutrient-dense superfoods while protecting the ecosystems that produce them. We are proud of our partnerships and the positive impact we make together. Thank you for being a part of our journey.
            </p>

            <div className="pt-4 border-t border-brand-charcoal/10 flex items-center justify-between">
              <div>
                <p className="text-base font-bold font-display text-brand-charcoal">Varun</p>
                <p className="text-[10px] font-black text-brand-orange uppercase tracking-wider">Founder, Austropical Superfoods</p>
              </div>
              <Heart className="w-6 h-6 text-brand-orange fill-brand-orange" />
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Standards Certifications */}
      <section className="py-20 bg-white/40 border-t border-brand-charcoal/5 text-left">
        <div className="max-w-container mx-auto px-6 md:px-12 space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-xs font-black text-brand-orange uppercase tracking-widest">Quality Assurance</span>
            <h3 className="text-3xl md:text-5xl font-black font-display text-brand-charcoal">OUR CERTIFICATIONS</h3>
            <p className="text-brand-charcoal/75 text-sm font-semibold">We hold ourselves to the highest standards of quality and purity:</p>
          </div>

          {/* Grid items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "USDA Organic",
                desc: "100% certified organic ingredients sourced from local co-ops."
              },
              {
                title: "Fair Trade",
                desc: "Direct sourcing guarantees fair compensation for Amazonian harvesters."
              },
              {
                title: "Non-GMO Verified",
                desc: "None of our products contain genetically modified organisms."
              },
              {
                title: "Vegan Certified",
                desc: "100% plant-based and cruelty-free ingredients."
              },
              {
                title: "Gluten-Free",
                desc: "Safe for individuals with gluten sensitivities."
              },
              {
                title: "Zero Added Sugar",
                desc: "Naturally sweetened by the wild-grown fruit itself."
              },
              {
                title: "Flash Frozen",
                desc: "Locked in nutrients at peak maturity within 4 hours of harvest."
              },
              {
                title: "Eco-Friendly Packaging",
                desc: "Biodegradable, compostable, and recyclable materials."
              },
              {
                title: "Community Support",
                desc: "Direct funding of schools and healthcare in indigenous farming regions."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-card border border-brand-charcoal/5 shadow-sm space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" />
                    <h4 className="text-base font-bold font-display text-brand-charcoal">{item.title}</h4>
                  </div>
                  <p className="text-brand-charcoal/75 text-xs font-semibold leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
