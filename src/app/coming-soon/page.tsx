"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Clock, Send, CheckCircle2 } from "lucide-react";

export default function ComingSoonPage() {
  // Target date set to 30 days from now dynamically
  const [timeLeft, setTimeLeft] = useState({ days: 30, hours: 0, minutes: 0, seconds: 0 });
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const target = new Date();
    target.setDate(target.getDate() + 30);

    const interval = setInterval(() => {
      const difference = target.getTime() - new Date().getTime();
      
      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const m = Math.floor((difference / 1000 / 60) % 60);
      const s = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });

      if (difference < 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSuccess(true);
    setEmail("");
  };

  return (
    <div className="bg-brand-ivory text-brand-charcoal min-h-screen flex flex-col justify-between font-sans">
      <Navbar />

      <main className="max-w-xl mx-auto text-center py-40 px-6 space-y-12">
        <div className="space-y-4">
          <span className="text-xs font-black text-brand-orange bg-brand-orange/15 px-3 py-1.5 rounded-btn uppercase tracking-wider">
            Launching Soon
          </span>
          <h1 className="text-4xl md:text-6xl font-black font-display tracking-tight text-brand-charcoal">
            Something Bright <br />
            Is Blending.
          </h1>
          <p className="text-brand-charcoal/70 text-sm font-semibold max-w-sm mx-auto leading-relaxed">
            Our upcoming organic, certified active prebiotic functional cubes collection is launching. Subscribe to get early access.
          </p>
        </div>

        {/* Countdown timer grid */}
        <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
          {[
            { val: timeLeft.days, unit: "Days" },
            { val: timeLeft.hours, unit: "Hours" },
            { val: timeLeft.minutes, unit: "Mins" },
            { val: timeLeft.seconds, unit: "Secs" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-brand-charcoal/10 p-4 rounded-card shadow-sm space-y-1.5">
              <p className="text-2xl md:text-3xl font-black font-display text-brand-charcoal">{item.val}</p>
              <p className="text-[10px] font-black text-brand-charcoal/40 uppercase tracking-wider">{item.unit}</p>
            </div>
          ))}
        </div>

        {/* Newsletter subscribe form */}
        <div className="max-w-md mx-auto w-full">
          {success ? (
            <div className="flex items-center gap-2 justify-center text-brand-green font-bold text-xs bg-brand-green/10 border border-brand-green/20 p-3 rounded-input">
              <CheckCircle2 className="w-4.5 h-4.5 flex-shrink-0" />
              <span>Registered! We will notify you first.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 text-xs bg-white border border-brand-charcoal/10 rounded-input focus:border-brand-charcoal outline-none"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-brand-charcoal hover:bg-brand-charcoal-light text-white font-bold text-xs rounded-btn flex items-center gap-1.5"
              >
                <span>Notify</span>
                <Send className="w-4 h-4 text-brand-orange" />
              </button>
            </form>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
