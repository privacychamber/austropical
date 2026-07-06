"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ShoppingBag, ShoppingCart, User, Menu, X } from "lucide-react";
import { useStoreContext } from "@/context/StoreContext";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileNav() {
  const pathname = usePathname();
  const { totalCartItems, setCartOpen, setMobileMenuOpen, mobileMenuOpen } = useStoreContext();

  const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: ShoppingBag, label: "Shop", href: "/shop" },
    { 
      icon: ShoppingCart, 
      label: "Cart", 
      action: () => setCartOpen(true),
      badge: totalCartItems > 0 ? totalCartItems : null
    },
    { icon: User, label: "Account", href: "/account" },
    { 
      icon: mobileMenuOpen ? X : Menu, 
      label: "Menu", 
      action: () => setMobileMenuOpen(!mobileMenuOpen) 
    },
  ];

  return (
    <>
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[#1A5D2C]/10 pb-safe pt-2 px-2 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
        <nav className="flex justify-between items-center h-14">
          {navItems.map((item, idx) => {
            const isActive = item.href && pathname === item.href;
            const Icon = item.icon;

            const content = (
              <div className="relative flex flex-col items-center justify-center w-full h-full gap-1">
                <div className={`relative p-1.5 rounded-full transition-colors ${isActive ? "bg-[#F7931E]/10" : ""}`}>
                  <Icon 
                    className={`w-6 h-6 transition-colors ${isActive ? "text-[#F7931E]" : "text-[#1A5D2C]/60"}`} 
                    strokeWidth={isActive ? 2.5 : 2}
                  />
                  {item.badge && (
                    <span className="absolute -top-1 -right-1 bg-[#E71D85] text-white text-[9px] font-black w-[18px] h-[18px] flex items-center justify-center rounded-full border-2 border-white shadow-sm">
                      {item.badge}
                    </span>
                  )}
                </div>
                <span className={`text-[10px] font-bold tracking-wide ${isActive ? "text-[#F7931E]" : "text-[#1A5D2C]/60"}`}>
                  {item.label}
                </span>
              </div>
            );

            if (item.href) {
              return (
                <Link 
                  key={idx} 
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 h-full active:scale-90 transition-transform flex items-center justify-center"
                >
                  {content}
                </Link>
              );
            }

            return (
              <button 
                key={idx} 
                onClick={item.action}
                className="flex-1 h-full active:scale-90 transition-transform flex items-center justify-center outline-none"
              >
                {content}
              </button>
            );
          })}
        </nav>
      </div>
    </>
  );
}
