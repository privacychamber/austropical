"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const InstagramIcon = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const PHOTOS = [
  "/community_collage.png",
  "/mornings-made-smoothie.jpg",
  "/recipe_parfait.png",
  "/acai-passionfruit-legs.png",
  "/recipe_smoothie.png",
  "/unmatched-excellence-buckets.jpg",
];

export function CommunityGrid() {
  return (
    <section className="bg-brand-cream py-36 lg:py-48 relative overflow-hidden bg-noise">
      <div className="mx-auto max-w-container px-6 md:px-16 lg:px-[120px]">
        <SectionHeading
          subtitle="JOIN THE COMMUNITY"
          title="#AUSTROPICAL"
          description="Share your bowls, tag us, and become part of Australia's fastest growing superfood movement."
          className="mb-24"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {PHOTOS.map((img, idx) => (
            <div
              key={idx}
              className="relative aspect-square rounded-[24px] overflow-hidden group cursor-pointer shadow-md"
            >
              <div className="absolute inset-0 bg-brand-purple/40 opacity-0 group-hover:opacity-100 z-10 transition-opacity duration-300 flex items-center justify-center text-white">
                <InstagramIcon size={28} />
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img}
                alt="Community member post"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
