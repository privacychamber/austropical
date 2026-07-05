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
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 font-sans ${
          scrolled
            ? "py-3 bg-white/95 backdrop-blur-xl border-b border-brand-charcoal/10 shadow-lg"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-container mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Typographic Logo */}
          <Link href="/" className="flex flex-col group">
            <span className={`text-2xl font-black font-display tracking-tight leading-none transition-colors text-brand-charcoal`}>
              austropical
            </span>
            <span className="text-[9px] font-bold text-[#1A5D2C] uppercase tracking-widest leading-none mt-0.5 group-hover:text-brand-green transition-colors">
              Superfoods
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group/link">
                <Link
                  href={link.href}
                  className={`text-sm font-semibold tracking-wide flex items-center gap-1 transition-all duration-300 text-brand-charcoal/80 hover:text-brand-charcoal`}
                >
                  <span>{link.name}</span>
                  {link.hasDropdown && (
                    <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover/link:rotate-180 transition-transform duration-300" />
                  )}
                </Link>

                {/* Sub Menu Dropdown for Shop */}
                {link.hasDropdown && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 bg-brand-charcoal border border-white/15 rounded-card p-5 shadow-2xl opacity-0 invisible group-hover/link:opacity-100 group-hover/link:visible transition-all duration-350 transform translate-y-2 group-hover/link:translate-y-0 z-50">
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <p className="text-xs font-black text-brand-orange uppercase tracking-wider mb-2">
                          Collections
                        </p>
                        <div className="space-y-2.5">
                          <Link
                            href="/shop?category=Tubs"
                            className="block text-sm font-bold text-white/90 hover:text-brand-orange transition-colors"
                          >
                            Açaí Bowls & Tubs
                            <span className="block text-[11px] font-normal text-white/50">
                              Direct Amazon wild pulp frozen fresh
                            </span>
                          </Link>
                          <Link
                            href="/shop?category=Cubes"
                            className="block text-sm font-bold text-white/90 hover:text-brand-orange transition-colors"
                          >
                            Smoothie Cubes Blend
                            <span className="block text-[11px] font-normal text-white/50">
                              Pre-portioned freeze-dried glow boosters
                            </span>
                          </Link>
                          <Link
                            href="/shop?category=Packs"
                            className="block text-sm font-bold text-white/90 hover:text-brand-orange transition-colors"
                          >
                            Organic Açaí Packs
                            <span className="block text-[11px] font-normal text-white/50">
                              Unsweetened pure fruit pulp block packs
                            </span>
                          </Link>
                        </div>
                      </div>
                      <div className="border-t border-white/10 pt-3">
                        <Link
                          href="/shop"
                          className="text-xs font-black text-white/80 hover:text-brand-orange transition-colors uppercase tracking-wider flex items-center justify-between"
                        >
                          <span>Explore All Products</span>
                          <span>→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {/* Animated Hover Underline */}
                <span
                  className={`absolute -bottom-1.5 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover/link:w-full ${
                    pathname === link.href ? "w-full" : ""
                  }`}
                />
              </div>
            ))}

            {/* Admin Portal Shortcut */}
            <div className="relative group/link">
              <Link
                href="/admin"
                className="text-xs font-black text-brand-orange border border-brand-orange/30 px-3 py-1 rounded-btn hover:bg-brand-orange hover:text-brand-charcoal transition-all duration-300"
              >
                CMS Admin
              </Link>
            </div>
          </nav>

          {/* Right Header Utilities (Search, Wishlist, Account, Cart) */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Language & Currency selection */}
            <div className={`flex items-center gap-3 text-xs font-semibold border-r pr-6 ${scrolled ? 'text-brand-charcoal/70 border-brand-charcoal/10' : 'text-white/70 border-white/10'}`}>
              <div className={`flex items-center gap-1 cursor-pointer transition-colors ${scrolled ? 'hover:text-brand-charcoal' : 'hover:text-white'}`}>
                <Globe className="w-3.5 h-3.5 text-brand-orange" />
                <span>{language}</span>
              </div>
              <div className={`flex items-center gap-0.5 cursor-pointer transition-colors ${scrolled ? 'hover:text-brand-charcoal' : 'hover:text-white'}`}>
                <DollarSign className="w-3.5 h-3.5 text-brand-orange" />
                <span>{currency}</span>
              </div>
            </div>

            {/* Search Trigger */}
            <button
              onClick={() => setSearchOpen(true)}
              className={`transition-all hover:scale-110 hover:text-brand-orange ${scrolled ? 'text-brand-charcoal/85' : 'text-white/85'}`}
              aria-label="Search site"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist Link */}
            <Link
              href="/account?tab=wishlist"
              className={`transition-all hover:scale-110 hover:text-brand-orange relative ${scrolled ? 'text-brand-charcoal/85' : 'text-white/85'}`}
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {totalWishlistItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-brand-orange text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center scale-95 animate-pulse">
                  {totalWishlistItems}
                </span>
              )}
            </Link>

            {/* User Account Link */}
            <Link
              href="/account"
              className={`transition-all hover:scale-110 hover:text-brand-orange ${scrolled ? 'text-brand-charcoal/85' : 'text-white/85'}`}
              aria-label="User Account"
            >
              <User className="w-5 h-5" />
            </Link>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`transition-all hover:scale-110 hover:text-brand-orange flex items-center justify-center mr-1 ${scrolled ? 'text-brand-charcoal/85' : 'text-white/85'}`}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              onClick={() => setCartOpen(true)}
              className="bg-brand-orange hover:bg-brand-yellow hover:scale-105 transition-all text-brand-charcoal p-2.5 rounded-full flex items-center justify-center relative shadow-md"
              aria-label="Open cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalCartItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-white text-brand-charcoal text-[10px] font-black w-4.5 h-4.5 rounded-full flex items-center justify-center border border-brand-charcoal/20">
                  {totalCartItems}
                </span>
              )}
            </button>
            <Link
              href="/shop"
              className="bg-[#FFC531] hover:bg-[#FF9F1C] text-[#2A1147] font-black text-xs uppercase tracking-widest px-5 py-2.5 rounded-full shadow-md transition-all hover:scale-105"
            >
              SHOP NOW
            </Link>
          </div>

          {/* Mobile Navigation controls */}
          <div className="flex lg:hidden items-center gap-4">
            {/* Theme Toggle for Mobile */}
            <button
              onClick={toggleTheme}
              className={`p-1 flex items-center justify-center mr-1 ${scrolled ? 'text-brand-charcoal' : 'text-white/95'}`}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-5.5 h-5.5" /> : <Moon className="w-5.5 h-5.5" />}
            </button>

            {/* Cart Icon for Mobile */}
            <button
              onClick={() => setCartOpen(true)}
              className={`p-1 relative ${scrolled ? 'text-brand-charcoal' : 'text-white/95'}`}
              aria-label="Open cart"
            >
              <ShoppingBag className="w-6 h-6" />
              {totalCartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-orange text-brand-charcoal text-[9px] font-black w-4.5 h-4.5 rounded-full flex items-center justify-center">
                  {totalCartItems}
                </span>
              )}
            </button>

            {/* Hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className={`p-1 ${scrolled ? 'text-brand-charcoal' : 'text-white/95'}`}
              aria-label="Open menu"
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
              <span className="text-xl font-black font-display tracking-tight text-white leading-none">
                austropical
              </span>
              <span className="text-[8px] font-bold text-brand-orange uppercase tracking-widest leading-none mt-0.5">
                Superfoods
              </span>
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
