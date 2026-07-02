"use client";

import React, { useState } from "react";
import { useStore } from "@/context/StoreContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Settings,
  Database,
  BarChart3,
  TrendingUp,
  ShoppingBag,
  Users,
  Save,
  CheckCircle2,
  DollarSign,
  Package,
  Layers
} from "lucide-react";

export default function AdminDashboardPage() {
  const { cms, updateCMS, products, updateProductPrice } = useStore();

  // CMS Edit States
  const [heroTitle, setHeroTitle] = useState(cms.heroTitle);
  const [heroSubtitle, setHeroSubtitle] = useState(cms.heroSubtitle);
  const [storyTitle, setStoryTitle] = useState(cms.storyTitle);
  const [storyText, setStoryText] = useState(cms.storyText);
  const [sustainabilityTitle, setSustainabilityTitle] = useState(cms.sustainabilityTitle);
  const [sustainabilityNumber, setSustainabilityNumber] = useState(cms.sustainabilityNumber);

  // Pricing edits states
  const [productPrices, setProductPrices] = useState<Record<string, number>>(
    products.reduce((acc, p) => ({ ...acc, [p.id]: p.price }), {})
  );

  const [activeSubTab, setActiveSubTab] = useState("cms"); // "cms" or "analytics" or "inventory"
  const [showNotification, setShowNotification] = useState(false);

  const handleSaveCMS = (e: React.FormEvent) => {
    e.preventDefault();
    updateCMS({
      heroTitle,
      heroSubtitle,
      storyTitle,
      storyText,
      sustainabilityTitle,
      sustainabilityNumber,
    });
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const handlePriceChange = (id: string, newPrice: number) => {
    setProductPrices((prev) => ({ ...prev, [id]: newPrice }));
    updateProductPrice(id, newPrice);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  return (
    <div className="bg-brand-cream text-brand-purple min-h-screen relative overflow-x-hidden font-sans">
      <Navbar />

      <section className="pt-32 pb-24 max-w-container mx-auto px-6 md:px-12 text-left">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-brand-purple/10">
          <div>
            <h1 className="text-3xl font-black font-display text-brand-purple">
              CMS Admin Dashboard
            </h1>
            <p className="text-xs font-semibold text-brand-purple/50">
              Manage live landing pages, modify pricing models, and monitor analytics.
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setActiveSubTab("cms")}
              className={`px-4 py-2 rounded-btn font-bold text-xs transition-colors flex items-center gap-1.5 ${
                activeSubTab === "cms"
                  ? "bg-brand-purple text-white shadow-md"
                  : "bg-white border border-brand-purple/10 text-brand-purple hover:bg-brand-purple/5"
              }`}
            >
              <Settings className="w-3.5 h-3.5" />
              <span>CMS Page Editor</span>
            </button>
            
            <button
              onClick={() => setActiveSubTab("analytics")}
              className={`px-4 py-2 rounded-btn font-bold text-xs transition-colors flex items-center gap-1.5 ${
                activeSubTab === "analytics"
                  ? "bg-brand-purple text-white shadow-md"
                  : "bg-white border border-brand-purple/10 text-brand-purple hover:bg-brand-purple/5"
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Sales &amp; Analytics</span>
            </button>
          </div>
        </div>

        {/* Floating Notification */}
        {showNotification && (
          <div className="fixed bottom-8 right-8 z-50 bg-brand-purple border border-white/10 text-brand-cream py-4 px-6 rounded-card shadow-2xl flex items-center gap-3 animate-slide-up">
            <CheckCircle2 className="w-5 h-5 text-brand-orange" />
            <span className="text-sm font-bold">CMS Changes Saved &amp; Updated Live!</span>
          </div>
        )}

        {/* Active Content */}
        {activeSubTab === "cms" ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
            
            {/* Left CMS Form Fields */}
            <form onSubmit={handleSaveCMS} className="lg:col-span-8 space-y-6 bg-white border border-brand-purple/5 p-8 rounded-card shadow-sm">
              <h3 className="text-lg font-bold font-display text-brand-purple pb-3 border-b border-brand-purple/5">
                Front-End Copy Setup
              </h3>

              {/* Hero Section */}
              <div className="space-y-4">
                <p className="text-xs font-black text-brand-orange uppercase tracking-wider">Hero Section Settings</p>
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-brand-purple/50 uppercase tracking-widest block">Hero Title</label>
                    <input
                      type="text"
                      required
                      value={heroTitle}
                      onChange={(e) => setHeroTitle(e.target.value)}
                      className="w-full px-4 py-2.5 bg-brand-cream border border-brand-purple/10 rounded-input text-xs font-semibold focus:border-brand-purple outline-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-brand-purple/50 uppercase tracking-widest block">Hero Subtitle</label>
                    <textarea
                      required
                      rows={2}
                      value={heroSubtitle}
                      onChange={(e) => setHeroSubtitle(e.target.value)}
                      className="w-full px-4 py-2.5 bg-brand-cream border border-brand-purple/10 rounded-input text-xs font-semibold focus:border-brand-purple outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Story section */}
              <div className="space-y-4 pt-4 border-t border-brand-purple/5">
                <p className="text-xs font-black text-brand-green uppercase tracking-wider font-sans">Story Section Settings</p>
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-brand-purple/50 uppercase tracking-widest block">Story Header</label>
                    <input
                      type="text"
                      required
                      value={storyTitle}
                      onChange={(e) => setStoryTitle(e.target.value)}
                      className="w-full px-4 py-2.5 bg-brand-cream border border-brand-purple/10 rounded-input text-xs font-semibold focus:border-brand-purple outline-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-brand-purple/50 uppercase tracking-widest block">Story Copy</label>
                    <textarea
                      required
                      rows={3}
                      value={storyText}
                      onChange={(e) => setStoryText(e.target.value)}
                      className="w-full px-4 py-2.5 bg-brand-cream border border-brand-purple/10 rounded-input text-xs font-semibold focus:border-brand-purple outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Sustainability numbers */}
              <div className="space-y-4 pt-4 border-t border-brand-purple/5">
                <p className="text-xs font-black text-brand-pink uppercase tracking-wider">Sustainability &amp; counters</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-brand-purple/50 uppercase tracking-widest block">Sustainability Header</label>
                    <input
                      type="text"
                      required
                      value={sustainabilityTitle}
                      onChange={(e) => setSustainabilityTitle(e.target.value)}
                      className="w-full px-4 py-2.5 bg-brand-cream border border-brand-purple/10 rounded-input text-xs font-semibold focus:border-brand-purple outline-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-brand-purple/50 uppercase tracking-widest block">Trees Planted Counter</label>
                    <input
                      type="number"
                      required
                      value={sustainabilityNumber}
                      onChange={(e) => setSustainabilityNumber(Number(e.target.value))}
                      className="w-full px-4 py-2.5 bg-brand-cream border border-brand-purple/10 rounded-input text-xs font-semibold focus:border-brand-purple outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-brand-purple/5 flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-3.5 bg-brand-purple hover:bg-brand-purple-light text-white font-bold text-xs rounded-btn transition-colors flex items-center gap-2"
                >
                  <Save className="w-4 h-4 text-brand-orange" />
                  <span>Update Live Landing Page</span>
                </button>
              </div>
            </form>

            {/* Right side live pricing editor */}
            <div className="lg:col-span-4 bg-white border border-brand-purple/5 p-6 rounded-card shadow-sm space-y-6">
              <h3 className="text-base font-bold font-display text-brand-purple pb-3 border-b border-brand-purple/5 flex items-center gap-2">
                <Database className="w-4.5 h-4.5 text-brand-orange" />
                Live Pricing Panel
              </h3>

              <p className="text-xs text-brand-purple/60 leading-relaxed font-semibold">
                Changing a price below will write to local state and persist immediately on search, catalogs, and cart recalculations.
              </p>

              <div className="space-y-4">
                {products.map((p) => (
                  <div key={p.id} className="flex items-center justify-between gap-4 p-3.5 bg-brand-cream rounded-card border border-brand-purple/5">
                    <div className="min-w-0">
                      <p className="font-bold text-xs text-brand-purple truncate">{p.name}</p>
                      <p className="text-[9px] text-brand-purple/50 font-bold uppercase mt-0.5">{p.category}</p>
                    </div>
                    <div className="flex items-center gap-1.5 w-24">
                      <span className="text-xs font-bold text-brand-purple">$</span>
                      <input
                        type="number"
                        step="0.01"
                        value={productPrices[p.id] !== undefined ? productPrices[p.id] : p.price}
                        onChange={(e) => handlePriceChange(p.id, Number(e.target.value))}
                        className="w-full text-right bg-white px-2 py-1 border border-brand-purple/10 rounded-md text-xs font-bold text-brand-purple focus:border-brand-purple outline-none"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          // Analytics Dashboard Tab
          <div className="space-y-8 pt-8">
            
            {/* Top row metric cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { title: "Today's Revenue", val: "$1,842.50", desc: "+12.4% vs yesterday", icon: DollarSign, color: "text-brand-green bg-brand-green/10" },
                { title: "Completed Orders", val: "42 orders", desc: "Average order: $43.80", icon: ShoppingBag, color: "text-brand-orange bg-brand-orange/10" },
                { title: "Registered Users", val: "1,520 accounts", desc: "+8 signup rates this week", icon: Users, color: "text-brand-pink bg-brand-pink/10" },
                { title: "Antioxidant Tubs Stock", val: "248 units", desc: "Healthy warehouse counts", icon: Package, color: "text-brand-yellow bg-brand-yellow/10" }
              ].map((m) => {
                const Icon = m.icon;
                return (
                  <div key={m.title} className="bg-white border border-brand-purple/5 p-6 rounded-card shadow-sm space-y-4 text-left">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-bold text-brand-purple/50 uppercase tracking-wider">{m.title}</span>
                      <div className={`w-9 h-9 rounded-btn ${m.color} flex items-center justify-center`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <div>
                      <p className="text-2xl font-black font-display text-brand-purple">{m.val}</p>
                      <p className="text-[10px] text-brand-purple/60 font-semibold mt-1 flex items-center gap-1">
                        <TrendingUp className="w-3 h-3 text-brand-green" />
                        {m.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Main analytics panels */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              
              {/* Sales breakdown */}
              <div className="lg:col-span-2 bg-white border border-brand-purple/5 p-6 rounded-card shadow-sm space-y-6">
                <h4 className="text-base font-bold font-display text-brand-purple pb-3 border-b border-brand-purple/5 flex items-center gap-2">
                  <BarChart3 className="w-4.5 h-4.5 text-brand-orange" />
                  Monthly Performance Trends
                </h4>
                
                {/* Visual Chart representations */}
                <div className="h-56 flex items-end gap-3.5 border-b border-brand-purple/10 pb-2">
                  {[
                    { month: "Jan", val: 35 },
                    { month: "Feb", val: 55 },
                    { month: "Mar", val: 40 },
                    { month: "Apr", val: 75 },
                    { month: "May", val: 65 },
                    { month: "Jun", val: 90 },
                    { month: "Jul", val: 80 }
                  ].map((data, idx) => (
                    <div key={data.month} className="flex-1 flex flex-col items-center gap-2">
                      <div
                        className="w-full bg-gradient-to-t from-brand-purple to-brand-pink rounded-t-md hover:opacity-85 transition-opacity"
                        style={{ height: `${data.val}%` }}
                      />
                      <span className="text-[10px] font-bold text-brand-purple/50">{data.month}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Best selling chart list */}
              <div className="lg:col-span-1 bg-white border border-brand-purple/5 p-6 rounded-card shadow-sm space-y-6">
                <h4 className="text-base font-bold font-display text-brand-purple pb-3 border-b border-brand-purple/5 flex items-center gap-2">
                  <Layers className="w-4.5 h-4.5 text-brand-orange" />
                  Best Sellers Share
                </h4>

                <div className="space-y-4 text-xs font-semibold text-brand-purple/80">
                  {[
                    { name: "Açaí Superberry Tub", share: 45, color: "bg-brand-purple" },
                    { name: "Smoothie Cubes Blend", share: 30, color: "bg-brand-orange" },
                    { name: "Organic Pure Packs", share: 25, color: "bg-brand-green" }
                  ].map((item) => (
                    <div key={item.name} className="space-y-1.5">
                      <div className="flex justify-between font-bold">
                        <span>{item.name}</span>
                        <span>{item.share}%</span>
                      </div>
                      <div className="w-full bg-brand-purple/10 h-1.5 rounded-full overflow-hidden">
                        <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.share}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
