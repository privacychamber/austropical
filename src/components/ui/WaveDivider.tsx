import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface WaveDividerProps {
  className?: string;
  fill?: string;
  position?: "top" | "bottom";
}

export function WaveDivider({ className, fill = "#ffffff", position = "bottom" }: WaveDividerProps) {
  return (
    <div className={twMerge(clsx("absolute left-0 w-full overflow-hidden leading-none z-10", 
      position === "bottom" ? "bottom-0 rotate-0" : "top-0 rotate-180",
      className
    ))}>
      <svg
        className="relative block w-[calc(100%+1.3px)] h-[80px] md:h-[120px] opacity-90 drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 L0,120 L1200,120 L1200,0 C1150,20 1100,5 1050,40 C980,80 900,10 820,30 C750,50 680,15 600,45 C520,75 450,20 380,50 C300,85 220,15 150,45 C80,75 40,20 0,0 Z"
          style={{ fill }}
        ></path>
      </svg>
    </div>
  );
}
