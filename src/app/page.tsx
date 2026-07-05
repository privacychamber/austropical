"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import { Hero } from "@/components/hero/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { GoodnessCards } from "@/components/sections/GoodnessCards";
import { ProductHighlight } from "@/components/sections/ProductHighlight";
import { Timeline } from "@/components/sections/Timeline";
import { StoryShowcase } from "@/components/sections/StoryShowcase";
import { RecipeSection } from "@/components/sections/RecipeSection";
import { SchoolDaysSection } from "@/components/sections/SchoolDaysSection";
import { EcosystemBanner } from "@/components/sections/EcosystemBanner";
import { CertificationsGrid } from "@/components/sections/CertificationsGrid";
import { CommunityGrid } from "@/components/sections/CommunityGrid";
import { Benefits } from "@/components/sections/Benefits";
import Footer from "@/components/layout/Footer";

export default function Homepage() {
  return (
    <main className="relative bg-brand-cream text-brand-purple min-h-screen">
      <Navbar />
      
      {/* 1. Cinematic Arrival */}
      <Hero />
      <TrustBar />

      {/* 2. Amazon Origin & Authenticity */}
      <StoryShowcase />
      <Timeline />

      {/* 3. The Ecosystems & Products (Peak Freshness) */}
      <GoodnessCards />
      <ProductHighlight />

      {/* 4. Daily Usage & The Australian Breakfast */}
      <RecipeSection />
      <SchoolDaysSection />

      {/* 5. Trust, Certifications & Community */}
      <Benefits />
      <EcosystemBanner />
      <CertificationsGrid />
      <CommunityGrid />
      
      <Footer />
    </main>
  );
}
