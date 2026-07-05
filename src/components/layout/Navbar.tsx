"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useStore } from "@/context/StoreContext";
import CartDrawer from "../cart/CartDrawer";
import {
  ShoppingBag,
  Heart,
  User,
  Search,
  Menu,
  X,
  ChevronDown,
  Globe,
  DollarSign,
  Sun,
  Moon
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const { cart, wishlist } = useStore();
  const [scrolled, setScrolled] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currency, setCurrency] = useState("AUD");
  const [language, setLanguage] = useState("EN");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("austropical_theme") || "light";
    setTheme(savedTheme);
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("austropical_theme", nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalWishlistItems = wishlist.length;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on path change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "SHOP", href: "/shop", hasDropdown: true },
    { name: "OUR GOODNESS", href: "/shop" },
    { name: "RECIPES", href: "/recipes" },
    { name: "SUSTAINABILITY", href: "/sustainability" },
    { name: "ABOUT US", href: "/about" },
  ];

  return (
    <>
      <header
        className={`fixed top-4 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-6xl z-50 transition-all duration-500 font-sans rounded-full ${
          scrolled
            ? "py-3 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-gray-100"
            : "py-3 md:py-4 bg-white shadow-lg border border-gray-100"
        }`}
      >
        <div className="mx-auto px-4 md:px-8 grid grid-cols-2 lg:grid-cols-3 items-center w-full">
          {/* Graphic Logo */}
          <Link href="/" className="flex items-center justify-start">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Austropical Logo" className="h-10 md:h-12 w-auto object-contain transition-transform hover:scale-105" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center justify-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group/link py-2">
                {link.name === "RECIPES" && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#E71D85] text-white text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-[#E71D85]">
                    New
                  </span>
                )}
                <Link
                  href={link.href}
                  className={`text-sm font-bold tracking-wide flex items-center gap-1 transition-all duration-300 text-[#1A5D2C] hover:text-[#F7931E]`}
                >
                  <span>{link.name}</span>
                  {link.hasDropdown && (
                    <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover/link:rotate-180 transition-transform duration-300" />
                  )}
                </Link>

                {/* Animated Hover Underline matching screenshot */}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#F7931E] transition-all duration-300 ${
                    pathname === link.href ? "w-full" : "w-0 group-hover/link:w-full"
                  }`}
                />

                {/* Sub Menu Dropdown for Shop */}
                {link.hasDropdown && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-80 bg-white border border-[#1A5D2C]/10 rounded-[20px] p-5 shadow-2xl opacity-0 invisible group-hover/link:opacity-100 group-hover/link:visible transition-all duration-350 transform translate-y-2 group-hover/link:translate-y-0 z-50">
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <p className="text-xs font-black text-[#F7931E] uppercase tracking-wider mb-2">
                          Collections
                        </p>
                        <div className="space-y-2.5">
                          <Link
                            href="/shop?category=Tubs"
                            className="block text-sm font-bold text-[#1A5D2C] hover:text-[#E71D85] transition-colors"
                          >
                            Açaí Bowls & Tubs
                            <span className="block text-[11px] font-normal text-[#1A5D2C]/60">
                              Direct Amazon wild pulp frozen fresh
                            </span>
                          </Link>
                          <Link
                            href="/shop?category=Cubes"
                            className="block text-sm font-bold text-[#1A5D2C] hover:text-[#E71D85] transition-colors"
                          >
                            Smoothie Cubes Blend
                            <span className="block text-[11px] font-normal text-[#1A5D2C]/60">
                              Pre-portioned freeze-dried glow boosters
                            </span>
                          </Link>
                          <Link
                            href="/shop?category=Packs"
                            className="block text-sm font-bold text-[#1A5D2C] hover:text-[#E71D85] transition-colors"
                          >
                            Organic Açaí Packs
                            <span className="block text-[11px] font-normal text-[#1A5D2C]/60">
                              Unsweetened pure fruit pulp block packs
                            </span>
                          </Link>
                        </div>
                      </div>
                      <div className="border-t border-[#1A5D2C]/10 pt-3">
                        <Link
                          href="/shop"
                          className="text-xs font-black text-[#1A5D2C]/80 hover:text-[#E71D85] transition-colors uppercase tracking-wider flex items-center justify-between"
                        >
                          <span>Explore All Products</span>
                          <span>→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            <div className="relative group/link py-2">
              <Link
                href="/admin"
                className="text-xs font-bold tracking-wide text-[#E71D85] hover:text-[#F7931E] transition-all duration-300"
              >
                CMS
              </Link>
            </div>
          </nav>

          {/* Right Header Utilities */}
          <div className="hidden lg:flex items-center justify-end gap-5">
            
            <div className="flex items-center gap-3 text-xs font-bold text-[#1A5D2C]/70 border-r border-[#1A5D2C]/20 pr-4">
              <div className="flex items-center gap-1 cursor-pointer hover:text-[#E71D85] transition-colors">
                <Globe className="w-3.5 h-3.5 text-[#F7931E]" />
                <span>{language}</span>
              </div>
              <div className="flex items-center gap-0.5 cursor-pointer hover:text-[#E71D85] transition-colors">
                <DollarSign className="w-3.5 h-3.5 text-[#F7931E]" />
                <span>{currency}</span>
              </div>
            </div>

            <button
              onClick={() => setSearchOpen(true)}
              className="text-[#1A5D2C] hover:scale-110 hover:text-[#E71D85] transition-all"
            >
              <Search className="w-5 h-5" />
            </button>

            <Link
              href="/account?tab=wishlist"
              className="text-[#1A5D2C] hover:scale-110 hover:text-[#E71D85] transition-all relative"
            >
              <Heart className="w-5 h-5" />
              {totalWishlistItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#E71D85] text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center scale-95 animate-pulse">
                  {totalWishlistItems}
                </span>
              )}
            </Link>

            <Link
              href="/account"
              className="text-[#1A5D2C] hover:scale-110 hover:text-[#E71D85] transition-all"
            >
              <User className="w-5 h-5" />
            </Link>

            <button
              onClick={() => setCartOpen(true)}
              className="bg-[#1A5D2C] text-white hover:bg-[#B2D235] hover:text-[#1A5D2C] hover:scale-105 transition-all p-2.5 rounded-full flex items-center justify-center relative shadow-md ml-2"
            >
              <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
              {totalCartItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#E71D85] text-white text-[10px] font-black w-4.5 h-4.5 rounded-full flex items-center justify-center border border-white">
                  {totalCartItems}
                </span>
              )}
            </button>
            <Link
              href="/shop"
              className="bg-[#F7931E] hover:bg-[#1A5D2C] text-white font-bold text-sm tracking-wide px-6 py-2.5 rounded-full transition-all hover:scale-105 ml-2 flex items-center gap-2"
            >
              Shop Now <span className="text-lg leading-none">→</span>
            </Link>
          </div>

          {/* Mobile Navigation controls */}
          <div className="flex lg:hidden items-center justify-end gap-3">
            <button
              onClick={() => setCartOpen(true)}
              className="text-[#1A5D2C] relative p-1"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalCartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#E71D85] text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                  {totalCartItems}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="text-[#1A5D2C] p-1"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Cart Sliding Drawer */}
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />

      {/* Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-brand-charcoal/95 backdrop-blur-md flex flex-col justify-start pt-32 px-6">
          <button
            onClick={() => setSearchOpen(false)}
            className="absolute top-8 right-8 p-3 text-white/80 hover:text-white rounded-full bg-white/5 transition-all"
            aria-label="Close search"
          >
            <X className="w-7 h-7" />
          </button>
          <div className="max-w-2xl mx-auto w-full text-center space-y-6">
            <h3 className="text-xl font-bold font-display text-brand-orange tracking-widest uppercase">
              Looking for Superfood?
            </h3>
            <div className="relative">
              <input
                type="text"
                autoFocus
                placeholder="Search products: açaí, tubes, mango..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-2xl md:text-3xl bg-transparent border-b-2 border-white/20 focus:border-brand-orange text-white pb-3 outline-none text-center font-semibold"
              />
              <Search className="absolute right-0 bottom-4 w-7 h-7 text-white/40" />
            </div>
            {searchQuery && (
              <div className="bg-white/5 rounded-card p-4 text-left border border-white/5 max-h-60 overflow-y-auto space-y-2">
                <Link
                  href={`/shop?search=${searchQuery}`}
                  className="block p-3 rounded-lg hover:bg-white/5 text-white font-medium flex items-center justify-between"
                  onClick={() => setSearchOpen(false)}
                >
                  <span>Search for &quot;{searchQuery}&quot; in catalog</span>
                  <span className="text-brand-orange">→</span>
                </Link>
                <div className="border-t border-white/5 pt-2">
                  <p className="text-xs font-semibold text-white/40 px-3 uppercase tracking-wider">
                    Quick suggestions
                  </p>
                  <Link
                    href="/shop?category=Tubs"
                    onClick={() => setSearchOpen(false)}
                    className="block p-2 text-sm text-white/85 hover:text-brand-orange"
                  >
                    Açaí Bowls & Tubs
                  </Link>
                  <Link
                    href="/shop?category=Cubes"
                    onClick={() => setSearchOpen(false)}
                    className="block p-2 text-sm text-white/85 hover:text-brand-orange"
                  >
                    Smoothie Cubes (Blend)
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-brand-charcoal flex flex-col font-sans">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
            <Link href="/" className="flex flex-col" onClick={() => setMobileMenuOpen(false)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="Austropical Logo" className="h-8 w-auto object-contain brightness-0 invert opacity-90" />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-white/80 hover:text-white rounded-full bg-white/5"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Links */}
          <div className="flex-1 flex flex-col justify-center px-8 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-2xl font-bold font-display text-white hover:text-brand-orange transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/admin"
              className="text-lg font-bold text-brand-orange flex items-center gap-1.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>CMS Admin Portal</span>
              <span>→</span>
            </Link>
          </div>

          {/* Footer Utilities */}
          <div className="p-6 border-t border-white/10 grid grid-cols-2 gap-4 text-center">
            <Link
              href="/account"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 rounded-btn border border-white/15 text-white text-sm font-semibold flex items-center justify-center gap-2"
            >
              <User className="w-4 h-4 text-brand-orange" />
              <span>My Account</span>
            </Link>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setSearchOpen(true);
              }}
              className="py-3 rounded-btn border border-white/15 text-white text-sm font-semibold flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4 text-brand-orange" />
              <span>Search</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
