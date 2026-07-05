"use client";

import React from "react";
import { Star } from "lucide-react";

export function Testimonials() {
  return (
    <div className="bg-white rounded-[28px] p-8 shadow-sm border border-brand-purple/5 flex-1 flex flex-col justify-center">
      <div className="flex gap-1 mb-6 text-brand-yellow">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} size={20} fill="currentColor" stroke="none" />
        ))}
      </div>

      <p className="text-brand-purple text-lg font-medium italic leading-relaxed mb-8">
        &quot;Austropical has completely changed my mornings. Fresh, convenient and absolutely delicious!&quot;
      </p>

      <div className="flex items-center gap-4 mt-auto">
        <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 21C20 19.6044 20 18.9067 19.8278 18.3389C19.44 17.0605 18.4395 16.06 17.1611 15.6722C16.5933 15.5 15.8956 15.5 14.5 15.5H9.5C8.10444 15.5 7.40665 15.5 6.83886 15.6722C5.56045 16.06 4.56004 17.0605 4.17224 18.3389C4 18.9067 4 19.6044 4 21M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z" stroke="#2A1147" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <span className="font-display font-bold text-brand-purple">
          - Jessica M.
        </span>
      </div>
    </div>
  );
}
