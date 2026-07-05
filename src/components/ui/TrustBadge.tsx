import React from 'react';
import { motion } from 'framer-motion';

type BadgeType = 'starburst' | 'circle' | 'arch' | 'pill';

interface TrustBadgeProps {
  type: BadgeType;
  text: string;
  color: string;
  textColor?: string;
  className?: string;
  rotate?: number;
}

export function TrustBadge({ type, text, color, textColor = 'white', className = '', rotate = 0 }: TrustBadgeProps) {
  const baseStyle = {
    backgroundColor: color,
    color: textColor,
  };

  const renderShape = () => {
    switch (type) {
      case 'circle':
        return (
          <div 
            className="rounded-full flex items-center justify-center p-2 font-bold text-center text-[10px] leading-tight font-sans tracking-widest uppercase shadow-md border-2 border-white"
            style={{ ...baseStyle, width: '90px', height: '90px' }}
          >
            {text}
          </div>
        );
      case 'pill':
        return (
          <div 
            className="rounded-full flex items-center justify-center px-6 py-2 font-bold text-[10px] font-sans tracking-widest uppercase shadow-md border-2 border-white"
            style={baseStyle}
          >
            {text}
          </div>
        );
      case 'starburst':
        return (
          <div className="relative flex items-center justify-center w-[100px] h-[100px]">
            {/* CSS Starburst approximation */}
            <div 
              className="absolute inset-0 shadow-md"
              style={{ 
                ...baseStyle, 
                clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' 
              }} 
            />
            <span className="relative z-10 text-[9px] font-black text-center leading-[1.1] uppercase px-4" style={{ color: textColor }}>
              {text}
            </span>
          </div>
        );
      case 'arch':
        return (
          <div 
            className="rounded-t-full flex items-end justify-center px-4 pb-3 pt-10 font-bold text-[9px] font-sans tracking-widest uppercase shadow-md border-2 border-white border-b-0"
            style={baseStyle}
          >
            {text}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1, rotate: [rotate - 5, rotate + 5, rotate - 5] }}
      transition={{ 
        opacity: { duration: 0.5 },
        scale: { type: "spring", bounce: 0.5 },
        rotate: { repeat: Infinity, duration: Math.random() * 2 + 4, ease: "easeInOut" } 
      }}
      className={`z-30 pointer-events-none drop-shadow-xl ${className}`}
    >
      {renderShape()}
    </motion.div>
  );
}
