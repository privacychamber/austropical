"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ReturnsRefundsPage() {
  return (
    <div className="bg-brand-cream text-brand-purple min-h-screen relative overflow-x-hidden font-sans">
      <Navbar />

      <section className="pt-36 pb-24 max-w-3xl mx-auto px-6 text-left space-y-8">
        <h1 className="text-3xl md:text-4xl font-black font-display text-brand-purple">
          Returns &amp; Refund Policy
        </h1>
        <p className="text-xs text-brand-purple/50 font-bold uppercase">Last Updated: July 02, 2026</p>

        <div className="prose prose-purple text-xs md:text-sm text-brand-purple/80 font-semibold space-y-6 leading-relaxed">
          <p>
            Due to the perishable and frozen nature of our superfood tubs and cubes, we have specific return policies to ensure health safety.
          </p>
          <div className="space-y-2">
            <h3 className="font-extrabold text-base text-brand-purple">1. Perishable Returns</h3>
            <p>
              We cannot accept returns on frozen food items (such as açaí tubs, packs, and cubes) once they have been delivered, as we cannot guarantee they have been stored at correct sub-zero temperatures.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-extrabold text-base text-brand-purple">2. Melted or Damaged Items</h3>
            <p>
              If your items arrive melted or damaged during transit, please contact us immediately at hello@austropical.com.au within 24 hours of delivery. Include photos of the packaging and items, and we will issue a full refund or send a free replacement order.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-extrabold text-base text-brand-purple">3. Non-Food Items</h3>
            <p>
              Merchandise, bowls, spoons, and other non-food accessories can be returned within 14 days of delivery if they are in their original, unused packaging.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
