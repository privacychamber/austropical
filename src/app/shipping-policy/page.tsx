"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ShippingPolicyPage() {
  return (
    <div className="bg-brand-cream text-brand-purple min-h-screen relative overflow-x-hidden font-sans">
      <Navbar />

      <section className="pt-36 pb-24 max-w-3xl mx-auto px-6 text-left space-y-8">
        <h1 className="text-3xl md:text-4xl font-black font-display text-brand-purple">
          Shipping Policy
        </h1>
        <p className="text-xs text-brand-purple/50 font-bold uppercase">Last Updated: July 02, 2026</p>

        <div className="prose prose-purple text-xs md:text-sm text-brand-purple/80 font-semibold space-y-6 leading-relaxed">
          <p>
            We take extreme care in shipping our frozen superfoods across Australia so they arrive solid and frozen. Here is a breakdown of our shipping procedures.
          </p>
          <div className="space-y-2">
            <h3 className="font-extrabold text-base text-brand-purple">1. Delivery Coverage</h3>
            <p>
              We deliver frozen packages across major metropolitan areas in Sydney, Melbourne, Brisbane, Adelaide, and Perth. Please check postcode availability at checkout.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-extrabold text-base text-brand-purple">2. Cold-Chain Packaging</h3>
            <p>
              All products are packed in custom high-density insulated thermal boxes packed with dry ice blocks. This creates a sub-zero microclimate keeping the items frozen up to 36 hours in transit.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-extrabold text-base text-brand-purple">3. Authority to Leave (ATL)</h3>
            <p>
              All deliveries are sent with Authority to Leave. Since our items are frozen food, the courier will leave the box in a shaded area at your doorstep if you are not home. You should transfer the items to a freezer as soon as you receive them.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
