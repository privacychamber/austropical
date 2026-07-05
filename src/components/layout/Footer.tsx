"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Send, CheckCircle2 } from "lucide-react";

const InstagramIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);


export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // Simulate API newsletter signup
    setSubscribed(true);
    setEmail("");
  };

  const footerLinks = {
    shop: [
      { name: "All Products", href: "/shop" },
      { name: "Smoothie Cubes", href: "/shop?category=Cubes" },
      { name: "Açaí Bowls & Tubs", href: "/shop?category=Tubs" },
      { name: "Pure pulp Packs", href: "/shop?category=Packs" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Goodness", href: "/sustainability" },
      { name: "Recipes & Inspiration", href: "/recipes" },
      { name: "Blog & Wellness Hub", href: "/blog" },
    ],
    support: [
      { name: "FAQs", href: "/faq" },
      { name: "Shipping & Delivery", href: "/shipping-policy" },
      { name: "Returns & Refund Policy", href: "/returns-refunds" },
      { name: "Contact Our Team", href: "/contact" },
    ],
  };

  return (
    <footer className="bg-brand-charcoal text-white pt-24 pb-12 font-sans overflow-hidden border-t border-brand-charcoal/10 relative z-10">
      {/* Background radial soft light glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Logo & Description */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <div className="w-9 h-9 bg-gradient-to-tr from-brand-orange to-brand-yellow rounded-btn flex items-center justify-center shadow-md">
                <span className="text-brand-charcoal font-black text-lg">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black font-display tracking-tight text-white leading-none">
                  austropical
                </span>
                <span className="text-[9px] font-bold text-brand-orange uppercase tracking-widest leading-none mt-0.5">
                  Superfoods
                </span>
              </div>
            </Link>
            <p className="text-white/60 text-sm max-w-sm leading-relaxed">
              We bring the wild nutrient power of certified organic, sustainable Brazilian açaí and tropical functional foods straight to Australian homes. Real ingredients. Zero artificial fillers.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-orange hover:text-brand-charcoal transition-all duration-300 flex items-center justify-center text-white/80"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-orange hover:text-brand-charcoal transition-all duration-300 flex items-center justify-center text-white/80"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Nav Lists */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-xs font-black text-brand-orange uppercase tracking-widest">Shop</h4>
            <ul className="space-y-3 text-sm font-semibold">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/70 hover:text-brand-orange transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-xs font-black text-brand-orange uppercase tracking-widest">Company</h4>
            <ul className="space-y-3 text-sm font-semibold">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/70 hover:text-brand-orange transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-xs font-black text-brand-orange uppercase tracking-widest">Support</h4>
            <ul className="space-y-3 text-sm font-semibold">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/70 hover:text-brand-orange transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-xs font-black text-brand-orange uppercase tracking-widest">Stay In The Loop</h4>
            <p className="text-xs text-white/60 leading-relaxed font-semibold">
              Join the Austropical club for healthy recipes, wellness tips, and 10% off your first checkout order.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 text-brand-green font-bold text-xs bg-brand-green/10 border border-brand-green/20 p-3 rounded-input">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>Subscribed! Check your inbox.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full pl-3 pr-10 py-2.5 text-xs bg-white/5 border border-white/10 rounded-input focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none text-white transition-colors"
                  />
                  <button
                    type="submit"
                    className="absolute right-2.5 top-2 p-1 text-brand-orange hover:text-brand-yellow transition-colors"
                    aria-label="Subscribe"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Bottom footer bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-white/50 font-semibold">
          <div>
            © {new Date().getFullYear()} Austropical Superfoods. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
            <Link href="/shipping-policy" className="hover:text-white transition-colors">Shipping Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
