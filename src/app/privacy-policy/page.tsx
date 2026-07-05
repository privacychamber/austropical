"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-brand-ivory text-brand-charcoal min-h-screen relative overflow-x-hidden font-sans">
      <Navbar />

      <section className="pt-36 pb-24 max-w-3xl mx-auto px-6 text-left space-y-8">
        <h1 className="text-3xl md:text-4xl font-black font-display text-brand-charcoal">
          Privacy Policy
        </h1>
        <p className="text-xs text-brand-charcoal/50 font-bold uppercase">Last Updated: July 02, 2026</p>

        <div className="prose prose-purple text-xs md:text-sm text-brand-charcoal/80 font-semibold space-y-6 leading-relaxed">
          <p>
            At Austropical Superfoods, accessible from austropical.com.au, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Austropical and how we use it.
          </p>
          <div className="space-y-2">
            <h3 className="font-extrabold text-base text-brand-charcoal">1. Information We Collect</h3>
            <p>
              When you purchase products from our shop or register an account, we collect the personal information you provide such as your name, delivery address, phone number, email address, and transaction credentials. We also automatically log basic analytics data when you browse our pages.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-extrabold text-base text-brand-charcoal">2. How We Use Your Information</h3>
            <p>
              We use the collected information to process checkouts, manage subscriptions, deliver frozen packaging, send tracking notifications, optimize page performance, and prevent fraudulent card charges.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-extrabold text-base text-brand-charcoal">3. Data Security</h3>
            <p>
              We implement industry-standard security protocols to encrypt transaction logs. Credit card transactions are processed securely through Stripe, and we do not store raw credit card details on our local database servers.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
