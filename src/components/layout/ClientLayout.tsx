"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import { StoreProvider } from "@/context/StoreContext";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { CustomCursor } from "@/components/ui/CustomCursor";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("austropical_theme") || "light";
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <StoreProvider>
      <AnimatePresence mode="wait">
        <motion.div key={pathname} className="relative min-h-screen">
          
          {/* Custom spring inertia follow cursor */}
          <CustomCursor />

          {children}
        </motion.div>
      </AnimatePresence>
    </StoreProvider>
  );
}
