"use client";

import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Immersive Narrative Scenes
import { Scene01_Rainforest } from "@/components/scenes/Scene01_Rainforest";
import { Scene02_Harvest } from "@/components/scenes/Scene02_Harvest";
import { Scene03_Science } from "@/components/scenes/Scene03_Science";
import { Scene04_Journey } from "@/components/scenes/Scene04_Journey";
import { Scene05_Kitchen } from "@/components/scenes/Scene05_Kitchen";
import { Scene06_Planet } from "@/components/scenes/Scene06_Planet";

export default function Homepage() {
  
  // Smooth scrolling is handled globally by Lenis in ClientLayout, which pairs perfectly with GSAP ScrollTrigger.
  
  return (
    <main className="relative bg-brand-cream text-brand-forest-dark min-h-screen">
      <Navbar />
      
      {/* 
        The Austropical Brand World Experience 
        A continuous, scroll-driven documentary flow.
      */}
      
      <Scene01_Rainforest />
      <Scene02_Harvest />
      <Scene03_Science />
      <Scene04_Journey />
      <Scene05_Kitchen />
      <Scene06_Planet />
      
      <Footer />
    </main>
  );
}
