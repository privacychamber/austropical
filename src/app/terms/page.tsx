"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function TermsConditionsPage() {
  return (
    <div className="bg-brand-cream text-brand-purple min-h-screen relative overflow-x-hidden font-sans">
      <Navbar />

      <section className="pt-36 pb-24 max-w-3xl mx-auto px-6 text-left space-y-8">
        <h1 className="text-3xl md:text-4xl font-black font-display text-brand-purple">
          Terms &amp; Conditions
        </h1>
        <p className="text-xs text-brand-purple/50 font-bold uppercase">Last Updated: July 02, 2026</p>

        <div className="prose prose-purple text-xs md:text-sm text-brand-purple/80 font-semibold space-y-6 leading-relaxed">
          <p>
            Welcome to Austropical Superfoods. These terms and conditions outline the rules and regulations for the use of Austropical Superfoods Website, located at austropical.com.au.
          </p>
          <div className="space-y-2">
            <h3 className="font-extrabold text-base text-brand-purple">1. License &amp; Sourcing IP</h3>
            <p>
              Unless otherwise stated, Austropical Superfoods and/or its licensors own the intellectual property rights for all material on Austropical Superfoods. All intellectual property rights are reserved. You must not republish, sell, rent, or sub-license our content.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-extrabold text-base text-brand-purple">2. Frozen Shipments</h3>
            <p>
              By ordering our frozen superfood tubs or cubes, you agree that you are responsible for receiving and storing the items immediately inside a freezer (-18°C) upon delivery. Austropical is not liable for items melted due to delayed handling by the recipient.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-extrabold text-base text-brand-purple">3. Subscriptions</h3>
            <p>
              Subscription orders will be processed and billed automatically according to your selected frequency. You can pause, modify, or cancel your active subscriptions at any time through your User Account Dashboard.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
