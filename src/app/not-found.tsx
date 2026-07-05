"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ShieldAlert, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-brand-ivory text-brand-charcoal min-h-screen flex flex-col justify-between font-sans">
      <Navbar />

      <main className="max-w-md mx-auto text-center py-40 px-6 space-y-6">
        <div className="w-16 h-16 bg-brand-orange/10 text-brand-orange rounded-full flex items-center justify-center mx-auto">
          <ShieldAlert className="w-9 h-9" />
        </div>
        
        <div className="space-y-2">
          <span className="text-[10px] font-black text-brand-orange uppercase tracking-wider bg-brand-orange/15 px-3 py-1 rounded-btn">
            Error 404
          </span>
          <h1 className="text-4xl font-black font-display tracking-tight text-brand-charcoal pt-2">
            Page Not Found
          </h1>
          <p className="text-brand-charcoal/70 text-sm font-semibold max-w-sm mx-auto leading-relaxed">
            The page you are looking for does not exist, has been archived, or moved to a different domain.
          </p>
        </div>

        <div className="pt-4 flex justify-center gap-3">
          <Link
            href="/"
            className="px-6 py-3 bg-brand-charcoal hover:bg-brand-charcoal-light text-white font-bold text-xs rounded-btn transition-colors"
          >
            Go Back Home
          </Link>
          <Link
            href="/shop"
            className="px-6 py-3 bg-white hover:bg-brand-charcoal/5 text-brand-charcoal border border-brand-charcoal/15 font-bold text-xs rounded-btn transition-colors flex items-center gap-1.5"
          >
            <span>Explore Shop</span>
            <ArrowRight className="w-3.5 h-3.5 text-brand-orange" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
