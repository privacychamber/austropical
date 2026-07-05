import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface BadgeProps {
  children: React.ReactNode;
  variant?: "vegan" | "glutenFree" | "organic" | "generic";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Badge({ children, variant = "generic", className, size = "md" }: BadgeProps) {
  if (variant === "vegan") {
    return (
      <div className={cn("relative z-10 animate-float-slow drop-shadow-md", className)}>
         <div className="bg-brand-yellow rounded-full flex items-center justify-center p-3 border-4 border-dashed border-brand-purple">
            <span className="text-brand-purple font-display font-bold text-center leading-tight uppercase text-[10px]">
              100%<br/>Vegan
            </span>
         </div>
      </div>
    );
  }

  if (variant === "glutenFree") {
    return (
      <div className={cn("relative z-10 animate-float-reverse drop-shadow-md", className)}>
        <div className="bg-brand-pink text-white mask-star flex items-center justify-center p-4">
           <span className="font-display font-bold text-center leading-tight uppercase text-[10px]">
             Gluten<br/>Free
           </span>
        </div>
      </div>
    );
  }

  const sizes = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-base",
  };

  return (
    <div className={cn("inline-flex items-center justify-center rounded-full bg-brand-cream text-brand-purple border border-brand-purple/10 font-medium", sizes[size], className)}>
      {children}
    </div>
  );
}
