"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useStore, Product } from "@/context/StoreContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  User,
  ShoppingBag,
  Heart,
  MapPin,
  Calendar,
  Gift,
  LogOut,
  Star,
  CheckCircle2,
  Trash2,
  AlertCircle
} from "lucide-react";
import Link from "next/link";

function DashboardContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { products, wishlist, toggleWishlist, addToCart } = useStore();
  const [user, setUser] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("orders");

  // Read URL search param for tab selection
  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab) setActiveTab(tab);
  }, [searchParams]);

  useEffect(() => {
    const savedUser = localStorage.getItem("austropical_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      router.push("/login");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("austropical_user");
    router.push("/login");
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-brand-ivory flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-brand-charcoal border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // Mock Orders Data
  const mockOrders = [
    { id: "AUS-938210", date: "24 Jun 2026", total: 47.96, status: "Delivered", items: "Smoothie Cubes x2, Acai Superberry x1" },
    { id: "AUS-721590", date: "15 May 2026", total: 22.99, status: "Delivered", items: "Organic Acai Packs x1" }
  ];

  // Mock Subscriptions
  const mockSubs = [
    { id: "SUB-8291", product: "Açaí Superberry Tub", frequency: "Every Month", price: 12.74, status: "Active" }
  ];

  const wishlistProducts = products.filter(p => wishlist.includes(p.id));

  return (
    <div className="bg-brand-ivory text-brand-charcoal min-h-screen relative overflow-x-hidden font-sans">
      <Navbar />

      <section className="pt-32 pb-24 max-w-container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Sidebar navigation */}
          <div className="lg:col-span-3 bg-white border border-brand-charcoal/5 p-6 rounded-card shadow-sm space-y-6 text-left">
            <div className="space-y-1">
              <p className="text-xs font-bold text-brand-orange uppercase tracking-wider">Superfood Profile</p>
              <h3 className="text-xl font-bold font-display text-brand-charcoal truncate">
                {user.name}
              </h3>
              <p className="text-xs text-brand-charcoal/50 truncate font-semibold">{user.email}</p>
            </div>

            <div className="h-px bg-brand-charcoal/10" />

            <div className="flex flex-col gap-2">
              {[
                { id: "orders", label: "Order History", icon: ShoppingBag },
                { id: "subs", label: "My Subscriptions", icon: Calendar },
                { id: "wishlist", label: "Wishlist", icon: Heart },
                { id: "addresses", label: "Saved Addresses", icon: MapPin },
                { id: "loyalty", label: "Loyalty & Referrals", icon: Gift }
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors text-left ${
                      activeTab === tab.id
                        ? "bg-brand-charcoal text-white"
                        : "text-brand-charcoal/80 hover:bg-brand-charcoal/5"
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${activeTab === tab.id ? "text-brand-orange" : "text-brand-charcoal/40"}`} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}

              <button
                onClick={handleLogout}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold text-brand-orange hover:bg-brand-orange/5 transition-colors text-left mt-4"
              >
                <LogOut className="w-4 h-4 text-brand-orange/60" />
                <span>Log Out</span>
              </button>
            </div>
          </div>

          {/* Right Main Details Content */}
          <div className="lg:col-span-9 bg-white border border-brand-charcoal/5 p-8 rounded-card shadow-sm text-left min-h-96">
            
            {/* 1. Orders Tab */}
            {activeTab === "orders" && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold font-display text-brand-charcoal border-b border-brand-charcoal/10 pb-4">
                  Order History
                </h3>
                <div className="space-y-4">
                  {mockOrders.map((order) => (
                    <div key={order.id} className="border border-brand-charcoal/10 p-5 rounded-card space-y-3">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                        <div>
                          <p className="font-extrabold text-sm text-brand-charcoal">{order.id}</p>
                          <p className="text-xs text-brand-charcoal/50 font-semibold">Placed on {order.date}</p>
                        </div>
                        <span className="text-xs font-black uppercase bg-brand-green/10 text-brand-green px-3 py-1 rounded-btn self-start sm:self-center">
                          {order.status}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-brand-charcoal/70">Items: {order.items}</p>
                      <div className="flex justify-between items-center border-t border-brand-charcoal/5 pt-3">
                        <span className="text-xs text-brand-charcoal/50 font-semibold">Total Paid</span>
                        <span className="font-black text-sm text-brand-charcoal">${order.total.toFixed(2)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 2. Subscriptions Tab */}
            {activeTab === "subs" && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold font-display text-brand-charcoal border-b border-brand-charcoal/10 pb-4">
                  Active Subscriptions
                </h3>
                <div className="space-y-4">
                  {mockSubs.map((sub) => (
                    <div key={sub.id} className="border border-brand-charcoal/10 p-5 rounded-card flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold text-brand-orange uppercase tracking-wider">{sub.id}</span>
                        <h4 className="font-bold text-base text-brand-charcoal">{sub.product}</h4>
                        <p className="text-xs text-brand-charcoal/60 font-semibold">{sub.frequency} — ${sub.price.toFixed(2)} / shipment</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black uppercase bg-brand-green/10 text-brand-green px-3 py-1 rounded-btn">
                          {sub.status}
                        </span>
                        <button className="text-xs font-black text-brand-orange hover:underline border border-brand-orange/20 px-3 py-1.5 rounded-btn hover:bg-brand-orange/5">
                          Pause
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3. Wishlist Tab */}
            {activeTab === "wishlist" && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold font-display text-brand-charcoal border-b border-brand-charcoal/10 pb-4">
                  Your Wishlist
                </h3>
                {wishlistProducts.length === 0 ? (
                  <div className="text-center py-12 space-y-4">
                    <Heart className="w-12 h-12 text-brand-charcoal/20 mx-auto" />
                    <div>
                      <p className="text-base font-bold text-brand-charcoal">Your wishlist is empty</p>
                      <p className="text-xs text-brand-charcoal/50">Save products to view them here.</p>
                    </div>
                    <Link href="/shop" className="inline-block px-5 py-2.5 bg-brand-charcoal text-white text-xs font-bold rounded-btn">
                      Browse Shop
                    </Link>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {wishlistProducts.map((p) => (
                      <div key={p.id} className="border border-brand-charcoal/10 p-4 rounded-card flex gap-4 relative group">
                        <div className="w-20 h-20 bg-brand-ivory rounded-img overflow-hidden flex-shrink-0 relative border border-brand-charcoal/5">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 flex flex-col justify-between min-w-0 text-left">
                          <div>
                            <h4 className="font-bold text-sm text-brand-charcoal truncate">{p.name}</h4>
                            <p className="text-xs text-brand-charcoal/50 mt-0.5">${p.price.toFixed(2)}</p>
                          </div>
                          <button
                            onClick={() => addToCart(p, 1)}
                            className="px-3 py-1 bg-brand-charcoal hover:bg-brand-charcoal-light text-white text-[10px] font-bold rounded-btn transition-colors w-max"
                          >
                            Add to Cart
                          </button>
                        </div>
                        <button
                          onClick={() => toggleWishlist(p.id)}
                          className="absolute top-4 right-4 text-brand-charcoal/40 hover:text-brand-orange transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* 4. Addresses Tab */}
            {activeTab === "addresses" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-brand-charcoal/10 pb-4">
                  <h3 className="text-xl font-bold font-display text-brand-charcoal">
                    Saved Addresses
                  </h3>
                  <button className="text-xs font-bold text-brand-orange border border-brand-orange/30 px-3 py-1.5 rounded-btn hover:bg-brand-orange hover:text-brand-charcoal transition-all">
                    Add New
                  </button>
                </div>
                <div className="border border-brand-charcoal/10 p-5 rounded-card space-y-2 relative">
                  <p className="font-extrabold text-sm text-brand-charcoal">Default Shipping Address</p>
                  <p className="text-xs text-brand-charcoal/70 leading-relaxed font-semibold">
                    {user.name} <br />
                    12 George St <br />
                    Sydney, NSW 2000 <br />
                    Australia
                  </p>
                  <div className="pt-2 flex gap-4 text-xs font-bold text-brand-orange">
                    <button className="hover:underline">Edit</button>
                    <button className="hover:underline text-brand-charcoal/50">Delete</button>
                  </div>
                </div>
              </div>
            )}

            {/* 5. Loyalty & Referrals Tab */}
            {activeTab === "loyalty" && (
              <div className="space-y-8">
                <h3 className="text-xl font-bold font-display text-brand-charcoal border-b border-brand-charcoal/10 pb-4">
                  Loyalty Points &amp; Referral System
                </h3>

                {/* Score card */}
                <div className="bg-brand-ivory border border-brand-charcoal/10 rounded-card p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-brand-charcoal/50 uppercase tracking-widest">Active Points</p>
                    <p className="text-4xl font-black font-display text-brand-charcoal">{user.points} Points</p>
                    <p className="text-xs font-semibold text-brand-charcoal/60">Unlock $10 credit at 200 points</p>
                  </div>
                  <div className="w-full md:w-48 bg-white/60 p-4 rounded-lg border border-brand-charcoal/5 text-xs font-semibold">
                    <p className="font-bold text-brand-orange">Points Progress</p>
                    <div className="w-full bg-brand-charcoal/10 h-2 rounded-full overflow-hidden mt-2">
                      <div className="bg-brand-orange h-full rounded-full" style={{ width: `${(user.points / 200) * 100}%` }} />
                    </div>
                    <p className="text-[10px] text-brand-charcoal/50 mt-1.5">50 points remaining</p>
                  </div>
                </div>

                {/* Referral link */}
                <div className="space-y-4">
                  <h4 className="text-base font-bold font-display text-brand-charcoal">Refer a Friend, Earn Together</h4>
                  <p className="text-xs text-brand-charcoal/70 leading-relaxed font-semibold max-w-lg">
                    Give friends 10% off their first order. You&apos;ll earn 100 loyalty wellness points (worth $5) as soon as they complete their checkout.
                  </p>
                  
                  <div className="flex gap-2 max-w-md">
                    <input
                      type="text"
                      readOnly
                      value={`https://austropical.com.au/ref?code=${user.referralCode}`}
                      className="w-full px-3 py-2 bg-brand-ivory border border-brand-charcoal/10 rounded-input text-xs font-semibold text-brand-charcoal outline-none"
                    />
                    <button
                      onClick={() => alert("Referral link copied to clipboard!")}
                      className="px-4 py-2 bg-brand-charcoal hover:bg-brand-charcoal-light text-white font-bold text-xs rounded-btn whitespace-nowrap"
                    >
                      Copy Link
                    </button>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function AccountPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-brand-ivory flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-brand-charcoal border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <DashboardContent />
    </Suspense>
  );
}
