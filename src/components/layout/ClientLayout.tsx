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

  const waveTransitionVariants = {
    initial: {
      y: "100%",
    },
    animate: {
      y: "-100%",
      transition: {
        duration: 1.2,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <StoreProvider>
      <AnimatePresence mode="wait">
        <motion.div key={pathname} className="relative min-h-screen">
          
          {/* Custom spring inertia follow cursor */}
          <CustomCursor />

          {/* Animated Route Sweep Overlay */}
          <motion.div
            variants={waveTransitionVariants}
            initial="initial"
            animate="animate"
            className="fixed inset-0 w-full h-screen bg-brand-purple z-[9999] pointer-events-none flex flex-col justify-end"
          >
            {/* Wave Divider attached to sweep */}
            <svg
              className="absolute left-0 bottom-full w-full h-[120px] text-brand-purple fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C50.21,21.84,95.34,44.75,148.66,54.8,206.51,65.73,264.44,67.12,321.39,56.44Z"></path>
            </svg>
          </motion.div>

          {children}
        </motion.div>
      </AnimatePresence>
    </StoreProvider>
  );
}
